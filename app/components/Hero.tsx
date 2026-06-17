'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '../lib/LanguageContext';
import { img } from '../lib/paths';

export default function Hero() {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster={img("/products/Scale That Matters.png")}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={img("/网站首页视频end.mp4")} type="video/mp4" />
        </video>
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white pointer-events-none" />
      </div>


      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 mb-12">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A951] animate-pulse" />
            <span className="text-xs text-white/80 tracking-[0.2em] uppercase font-medium">
              {t('Member of ORG Technology Group', '奥瑞金科技集团成员企业')}
            </span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-[100px] font-bold leading-[1.05] tracking-tight mb-6 text-white"
          style={{ textShadow: '0 4px 24px rgba(0,0,0,0.7), 0 2px 8px rgba(0,0,0,0.5)' }}
        >
          <span>
            {t('Every moment', '每一个瞬间')}
          </span>
          <br />
          <span>
            {t('of yours is', '都有我们')}
          </span>
          <br />
          <span className="text-[#C8A951]">
            {t('safeguarded by us.', '守护在侧。')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed"
        >
          {t(
            'Consensus and Common Progress Will Shape the Future',
            '共识共进，成就未来'
          )}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm sm:text-base text-white/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed"
        >
          {t(
            'China\'s leading comprehensive metal packaging manufacturer — serving the world\'s most trusted brands.',
            '中国领先的综合金属包装制造商 — 服务全球最受信赖的品牌。'
          )}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/products"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#C8A951] transition-all duration-500 hover:scale-105">
            {t('Explore Our Products', '探索产品')}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <Link href="/contact"
            className="group inline-flex items-center gap-2 px-8 py-3.5 border border-white/40 rounded-full text-sm font-medium text-white/80 hover:text-white hover:border-white transition-all duration-300">
            {t('Get in Touch', '联系我们')}
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] text-white/50 tracking-[0.3em] uppercase font-medium">
          {t('Scroll', '向下滚动')}
        </span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}>
          <ArrowDown className="w-4 h-4 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}

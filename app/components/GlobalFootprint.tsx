'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import dynamic from 'next/dynamic';

const Globe3D = dynamic(() => import('./Globe3D'), { ssr: false });

const regions = [
  { name: 'China', nameCN: '中国', type: 'Headquarters & Primary Manufacturing', typeCN: '总部及主要制造基地',
    bases: '40+', cities: 'Hangzhou, Guangzhou, Tianjin, Chengdu, Harbin, Shenyang...', color: '#C8A951' },
  { name: 'SE Asia', nameCN: '东南亚', type: 'Regional Manufacturing', typeCN: '区域制造',
    bases: '1', cities: 'Thailand', color: '#D4887A' },
  { name: 'Middle East', nameCN: '中东', type: 'Regional Partnership', typeCN: '区域合作',
    bases: '1', cities: 'Saudi Arabia (via ORG)', color: '#B8860B' },
];

export default function GlobalFootprint() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: '#020810' }}>
      {/* Dark grid overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* 3D Earth Globe — full background */}
      <div className="absolute inset-0 z-0">
        <Globe3D />
      </div>

      {/* Left-to-right gradient fade for text readability */}
      <div className="absolute inset-y-0 left-0 w-[55%] z-[5] pointer-events-none"
        style={{ background: 'linear-gradient(to right, rgba(2,8,16,0.85) 0%, rgba(2,8,16,0.45) 70%, transparent 100%)' }}
      />

      <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">
            {t('Global Footprint', '全球布局')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mt-4">
            {t('Manufacturing Excellence Worldwide', '全球制造卓越')}
          </h2>
          <p className="text-white/60 mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            {t(
              '47+ manufacturing bases across China, with expanding international operations across Southeast Asia, the Middle East, and beyond — delivering quality without borders.',
              '47+生产基地遍布中国，国际业务扩展至东南亚、中东及更多地区 — 品质无国界。'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {regions.map((region, i) => (
            <motion.div key={region.name}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group rounded-2xl p-8 hover:shadow-lg transition-all duration-500 relative overflow-hidden border border-white/[0.08]"
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
              }}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: region.color }} />
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-lg font-bold text-white">{t(region.name, region.nameCN)}</h3>
                <span className="text-xs font-mono px-2.5 py-1 rounded-full border"
                  style={{
                    background: `${region.color}18`,
                    color: region.color,
                    borderColor: `${region.color}40`,
                  }}>
                  {region.bases} {t('bases', '基地')}
                </span>
              </div>
              <p className="text-xs text-white/40 mb-3 tracking-wide uppercase">
                {t(region.type, region.typeCN)}
              </p>
              <div className="flex items-start gap-2 mt-4">
                <MapPin className="w-3.5 h-3.5 text-white/30 mt-0.5 shrink-0" />
                <p className="text-xs text-white/50 leading-relaxed">{region.cities}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

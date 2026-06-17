'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

export default function CTABanner() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl bg-[#F5F5F7] border border-black/[0.04]"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#C8A951]/8 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-radial from-[#1A3A5C]/3 to-transparent rounded-full blur-3xl" />

          <div className="relative z-10 p-12 lg:p-20 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-3xl lg:text-5xl font-display font-bold text-[#1A1A1A] mb-6 leading-tight"
            >
              {t('Ready to Shape the Future', '准备好共创未来')}{' '}
              <span className="text-gradient-gold">{t('Together?', '了吗？')}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[#666] max-w-lg mx-auto mb-10 text-sm leading-relaxed"
            >
              {t(
                'Whether you need standard packaging or a fully customized solution, our team of engineers and designers is ready to bring your vision to life.',
                '无论您需要标准包装还是完全定制的解决方案，我们的工程师和设计师团队随时准备将您的愿景变为现实。'
              )}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link href="/contact"
                className="group inline-flex items-center gap-2 px-10 py-4 bg-[#1A1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#C8A951] transition-all duration-500 hover:scale-105">
                {t('Start a Conversation', '开启对话')}
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link href="/products"
                className="group inline-flex items-center gap-2 px-10 py-4 border border-[#D1D1D6] rounded-full text-sm font-medium text-[#555] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-300">
                {t('View All Products', '查看全部产品')}
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { CLIENT_LOGOS } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';
import { img } from '../lib/paths';

export default function Clients() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
  const reversed = [...CLIENT_LOGOS].reverse();
  const doubledReversed = [...reversed, ...reversed];

  return (
    <section ref={ref} className="relative py-24 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/30 to-transparent" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">
            {t("Trusted By The World's Best", '全球顶级品牌信赖')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#1A1A1A] mt-4">
            {t('Our Clients', '我们的客户')}
          </h2>
        </motion.div>

        <div className="marquee-container overflow-hidden mb-8">
          <div className="marquee-content flex gap-6 animate-marquee">
            {doubled.map((logo, i) => (
              <div key={i}
                className="shrink-0 h-16 flex items-center justify-center">
                <img
                  src={img(logo)}
                  alt={`Client logo ${i + 1}`}
                  className="h-full w-auto max-w-[150px] object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="marquee-container overflow-hidden">
          <div className="marquee-content flex gap-6 animate-marquee"
            style={{ animationDirection: 'reverse', animationDuration: '35s' }}>
            {doubledReversed.map((logo, i) => (
              <div key={i}
                className="shrink-0 h-16 flex items-center justify-center">
                <img
                  src={img(logo)}
                  alt={`Client logo ${i + 1}`}
                  className="h-full w-auto max-w-[150px] object-contain opacity-70 hover:opacity-100 transition-all duration-300 grayscale hover:grayscale-0"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

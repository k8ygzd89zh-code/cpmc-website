'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { CORPORATE_STATS } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';
import { img } from '../lib/paths';

function AnimatedNumber({ value, suffix = '' }: { value: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [display, setDisplay] = useState('0');

  useEffect(() => {
    if (!isInView) return;
    const numericPart = parseFloat(value.replace(/,/g, ''));
    const target = numericPart;
    const duration = 2000;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(Math.floor(current).toLocaleString());
      if (progress < 1) requestAnimationFrame(animate);
      else setDisplay(value);
    };
    requestAnimationFrame(animate);
  }, [isInView, value]);

  return <span ref={ref}>{display}{suffix}</span>;
}

export default function Numbers() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-200px' });

  return (
    <section ref={sectionRef} className="relative py-32 overflow-hidden">
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <img
          src={img("/products/Scale That Matters.png")}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/50 z-[1]" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">
            {t('By The Numbers', '数据一览')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mt-4">
            {t('Scale That Matters', '看得见的规模')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 rounded-2xl overflow-hidden shadow-sm backdrop-blur-sm">
          {CORPORATE_STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white/10 backdrop-blur-sm p-8 lg:p-10 text-center group hover:bg-white/20 transition-colors duration-500"
            >
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 tracking-tight font-display">
                <AnimatedNumber value={stat.value} />
              </div>
              <div className="text-xs text-white/60 group-hover:text-white/80 transition-colors duration-500">
                {t(stat.label, stat.labelCN)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

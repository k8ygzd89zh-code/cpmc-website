'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Beer, Box, Droplets, FlaskConical, Layers, PaintBucket, SprayCan, Utensils, Warehouse } from 'lucide-react';
import { PRODUCT_LINES } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';
import VisualImage from './VisualImage';

const iconMap: Record<string, React.ElementType> = {
  spray: SprayCan, food: Utensils, aluminum: Layers, beer: Beer,
  box: Box, cap: FlaskConical, drum: Warehouse, plastic: Droplets, printer: PaintBucket,
};

export default function Solutions() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C8A951]/20 to-transparent" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">
            {t('Precision Packaging Solutions', '精密包装解决方案')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#1A1A1A] mt-4">
            {t('One Partner.', '一个伙伴。')}{' '}
            <span className="text-gradient-gold">{t('Every Possibility.', '无限可能。')}</span>
          </h2>
          <p className="text-[#666] mt-4 max-w-xl mx-auto text-sm leading-relaxed">
            {t(
              'From concept to consumer, we deliver comprehensive metal and plastic packaging solutions across every industry you can imagine.',
              '从概念到消费者，我们为每一个你能想象的行业提供全面的金属和塑料包装解决方案。'
            )}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCT_LINES.map((product, i) => {
            const Icon = iconMap[product.icon] || Box;
            return (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={product.href}
                  className="group block relative glass-light rounded-2xl hover:border-black/10 transition-all duration-500 hover:bg-black/[0.02] overflow-hidden shadow-sm"
                >
                  <VisualImage type="product" className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
                  <div className="relative z-10 p-8">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[#C8A951]/10 flex items-center justify-center group-hover:bg-[#C8A951]/20 transition-colors duration-500">
                        <Icon className="w-5 h-5 text-[#C8A951]" />
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[#AAA] group-hover:text-[#C8A951] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                    </div>
                    <h3 className="text-base font-semibold text-[#333] mb-2 group-hover:text-[#1A1A1A] transition-colors">
                      {t(product.name, product.nameCN)}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

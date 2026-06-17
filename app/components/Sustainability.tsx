'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Sun, Recycle, Wind, Factory, Droplets } from 'lucide-react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';

const initiatives = [
  { icon: Sun, title: 'Solar Energy', titleCN: '光伏太阳能',
    desc: '17 photovoltaic power generation projects planned across manufacturing sites.',
    descCN: '17个光伏发电项目计划覆盖生产基地。' },
  { icon: Wind, title: 'RTO Technology', titleCN: 'RTO蓄热技术',
    desc: '13 sets of RTO thermal storage combustion units, reducing VOC emissions by 1,200 tons/year.',
    descCN: '13套RTO蓄热燃烧装置，年减排VOC约1,200吨。' },
  { icon: Recycle, title: 'Circular Economy', titleCN: '循环经济',
    desc: '15,740 tons of waste materials recycled annually. AGV logistics, plastic pallets, electric forklifts.',
    descCN: '年回收废弃物15,740吨。AGV物流、塑料托盘、电动叉车。' },
  { icon: Droplets, title: 'Sludge Drying', titleCN: '污泥干化',
    desc: '95% drying rate sludge equipment, significantly reducing hazardous wastewater generation.',
    descCN: '95%干化率污泥设备，大幅减少有害废水产生。' },
  { icon: Factory, title: 'Lightweight Design', titleCN: '轻量化设计',
    desc: 'Continuous reduction of material usage per can while maintaining structural integrity.',
    descCN: '持续降低单罐材料用量，同时保持结构完整性。' },
  { icon: Leaf, title: 'Carbon Neutral', titleCN: '碳中和',
    desc: '10,000 tons CO₂ reduction per year. On track for ambitious 2030 targets.',
    descCN: '年减碳10,000吨。朝着2030宏伟目标稳步前进。' },
];

export default function Sustainability() {
  const { t } = useLanguage();
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      {/* ── Background image — full cover, no overlay ── */}
      <div className="absolute inset-0 z-0">
        <img
          src="/products/sustainability-bg.png.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Title & description — centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">
            {t('Sustainability', '可持续发展')}
          </span>
          <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mt-4 leading-tight max-w-3xl mx-auto text-center">
            {t("We Don't Just Make Cans.", '我们不只是在造罐子。')}{' '}
            <span className="text-gradient-gold">
              {t('We Define The Circular Future.', '我们在定义循环未来。')}
            </span>
          </h2>
          <p className="text-white/70 mt-6 max-w-xl mx-auto text-sm leading-relaxed text-center">
            {t(
              'Environmental protection is central to our sustainable strategy. Focusing on food safety, lightweighting, and recyclability, we pioneer a circular economy for metal packaging.',
              '环境保护是我们可持续发展战略的核心。聚焦食品安全、轻量化和可回收性，我们引领金属包装循环经济。'
            )}
          </p>
          <Link href="/sustainability"
            className="inline-flex items-center gap-2 mt-8 text-sm text-[#C8A951] hover:text-[#e0c870] transition-colors group">
            {t('Learn more about our commitment', '了解更多我们的承诺')}
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>

        {/* ── Initiative Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {initiatives.map((item, i) => (
            <motion.div key={item.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.06 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-md transition-all duration-500 border border-black/[0.04]">
              <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors">
                <item.icon className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="text-sm font-semibold text-[#333] mb-2">{t(item.title, item.titleCN)}</h4>
              <p className="text-xs text-[#777] leading-relaxed">{t(item.desc, item.descCN)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

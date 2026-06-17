'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Factory, Sun, Wind, Recycle, Droplets, Truck, Shield, TrendingUp, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { SUSTAINABILITY_STATS } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';
import { img } from '../lib/paths';
import VisualImage from '../components/VisualImage';

const scopeItems = [
  { icon: Factory, title: 'Scope 1 — Direct Emissions', titleCN: '范围一 — 直接排放',
    desc: '13 sets of RTO thermal storage combustion technology. Annual VOC emission reduction of approximately 1,200 tons.',
    descCN: '13套RTO蓄热燃烧技术，年VOC减排约1,200吨。' },
  { icon: Sun, title: 'Scope 2 — Indirect Emissions', titleCN: '范围二 — 间接排放',
    desc: '17 photovoltaic power generation projects planned. Transitioning to renewable energy sources for manufacturing.',
    descCN: '17个光伏发电项目规划中。向可再生能源制造业转型。' },
  { icon: Truck, title: 'Scope 3 — Value Chain Emissions', titleCN: '范围三 — 价值链排放',
    desc: 'Waste material recycling program. Green logistics: AGV systems, plastic pallets, electric forklifts.',
    descCN: '废弃物回收计划。绿色物流：AGV系统、塑料托盘、电动叉车。' },
  { icon: Shield, title: 'Scope 4 — Environmental Protection', titleCN: '范围四 — 环境保护',
    desc: 'Sludge drying equipment with 95% drying rate. Significantly reducing hazardous wastewater generation.',
    descCN: '95%干化率污泥设备，大幅减少有害废水产生。' },
];

const pillars = [
  { icon: Recycle, title: '100% Recyclable', titleCN: '100%可回收',
    desc: 'Metal packaging is infinitely recyclable without loss of quality. We design every product with end-of-life circularity in mind.',
    descCN: '金属包装可无限回收而不损失质量。我们为每个产品设计了全生命周期循环。' },
  { icon: TrendingUp, title: 'Lightweighting', titleCN: '轻量化',
    desc: 'Continuous R&D into material reduction while maintaining structural integrity. Less material = less carbon footprint.',
    descCN: '持续研发材料减量，同时保持结构完整性。更少材料 = 更低碳足迹。' },
  { icon: Leaf, title: 'Food Safety First', titleCN: '食品安全优先',
    desc: "As the only Class I metal pharmaceutical packaging manufacturer approved by China's NMPA, food safety is embedded in our DNA.",
    descCN: '作为唯一获中国NMPA批准的I类金属药包材制造商，食品安全已融入我们的DNA。' },
  { icon: Droplets, title: 'Water Stewardship', titleCN: '水资源管理',
    desc: 'Advanced water treatment and recycling systems across all manufacturing bases. Reducing freshwater consumption year over year.',
    descCN: '所有生产基地配备先进水处理和循环系统，逐年减少淡水消耗。' },
];

export default function SustainabilityPage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <section ref={heroRef} className="relative min-h-[55vh] flex items-center bg-[#F5F5F7] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid pointer-events-none z-10" />
        <div className="absolute inset-0">
          <img
            src={img("/products/Sustainability.png")}
            alt="Sustainability"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 text-center py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-green-600 uppercase font-medium">{t('Sustainability', '可持续发展')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-[#1A1A1A] mt-6 leading-tight">
            {t("We Don't Just Make Cans.", '我们不只是在造罐子。')}{' '}
            <span className="text-gradient-gold">{t('We Define The Circular Future.', '我们在定义循环未来。')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 max-w-2xl mx-auto mt-8 text-sm leading-relaxed">
            {t(
              'Environmental protection is central to our sustainable strategy. We focus on food safety, lightweighting, and recyclability to pioneer a true circular economy for metal packaging.',
              '环境保护是我们可持续发展战略的核心。聚焦食品安全、轻量化和可回收性，我们引领金属包装的真正循环经济。'
            )}
          </motion.p>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-black/[0.04] rounded-2xl overflow-hidden shadow-sm">
            {SUSTAINABILITY_STATS.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }} viewport={{ once: true }}
                className="bg-white p-8 text-center group hover:bg-[#FAFAFA] transition-colors duration-500">
                <div className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] font-display">{stat.value}</div>
                <div className="text-xs text-[#888] mt-2">{t(stat.label, stat.labelCN)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-[#F5F5F7]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">{t('Our Approach', '我们的方法')}</span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#1A1A1A] mt-4">
              {t('The Four Pillars of Our Sustainability', '可持续发展的四大支柱')}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pillars.map((pillar, i) => (
              <motion.div key={pillar.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 hover:shadow-md transition-all duration-500 group border border-black/[0.03]">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors">
                  <pillar.icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-[#1A1A1A] mb-3">{t(pillar.title, pillar.titleCN)}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{t(pillar.desc, pillar.descCN)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">{t('Emissions Accountability', '排放责任')}</span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#1A1A1A] mt-4">
              {t('Full Scope Responsibility', '全面范围责任')}
            </h2>
            <p className="text-[#666] max-w-xl mx-auto mt-4 text-sm leading-relaxed">
              {t('We measure, report, and actively reduce emissions across all four scopes.', '我们衡量、报告并积极减少所有四个范围的排放。')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scopeItems.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-2xl p-8 hover:shadow-sm transition-all duration-500 group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center shrink-0 mt-1 group-hover:bg-green-100 transition-colors">
                    <item.icon className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#1A1A1A] mb-2">{t(item.title, item.titleCN)}</h3>
                    <p className="text-sm text-[#555] leading-relaxed">{t(item.desc, item.descCN)}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-[#F5F5F7] rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-green-500/5 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-display font-bold text-[#1A1A1A] mb-4">
                {t('Join Us in the Circular Economy', '加入我们的循环经济')}
              </h2>
              <p className="text-[#555] max-w-lg mx-auto mb-8 text-sm">
                {t(
                  'Partner with a packaging manufacturer that takes sustainability seriously. Get in touch to discuss your ESG goals.',
                  '与一个认真对待可持续发展的包装制造商合作。联系我们讨论您的ESG目标。'
                )}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#C8A951] transition-all duration-500 hover:scale-105">
                  {t('Contact Our Team', '联系我们的团队')}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <button className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#D1D1D6] rounded-full text-sm font-medium text-[#555] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-300">
                  {t('Download ESG Report', '下载ESG报告')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

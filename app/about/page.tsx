'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Shield, Microscope, Globe, Users, CheckCircle, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { MILESTONES } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';


const certImages: Record<string, string> = {
  'ISO 9001': '/products/ISO9001.png',
  'ISO 14001': '/products/ISO14001.png',
  'ISO 45001': '/products/ISO45001.png',
  'DOT': '/products/DOT.png',
  'FSSC 22000': '/products/FSSC22000.png',
  'Carbon Footprint': '/products/CARBON FOOTPRINT.png',
  'CNAS': '/products/CNAS.png',
};

const certifications = [
  { name: 'ISO 9001', desc: 'Quality Management Systems', descCN: '质量管理体系' },
  { name: 'ISO 14001', desc: 'Environmental Management', descCN: '环境管理体系' },
  { name: 'ISO 45001', desc: 'Occupational Health & Safety', descCN: '职业健康安全管理' },
  { name: 'DOT', desc: 'US Department of Transportation Certified', descCN: '美国交通部认证' },
  { name: 'FSSC 22000', desc: 'Food Safety System Certification', descCN: '食品安全体系认证' },
  { name: 'Carbon Footprint', desc: 'Product Carbon Footprint Verified', descCN: '产品碳足迹认证' },
  { name: 'CNAS', desc: 'China National Accreditation (79 items)', descCN: '中国国家级实验中心(79项)' },
];

const values = [
  { icon: Shield, title: 'Quality Without Compromise', titleCN: '品质无妥协',
    desc: 'Every can, every cap, every drum is manufactured to standards we ourselves set for the industry.',
    descCN: '每一个罐、每一个盖、每一个桶都按照我们自己制定的行业标准制造。' },
  { icon: Microscope, title: 'Innovation Engine', titleCN: '创新引擎',
    desc: '500+ patents. 79 CNAS-accredited testing items. A national-level laboratory pushing boundaries.',
    descCN: '500+专利。79项CNAS认可检测。国家级实验室持续突破边界。' },
  { icon: Globe, title: 'Global Vision, Local Precision', titleCN: '全球视野，本地精工',
    desc: '47+ bases across China, operations in Belgium, Hungary, Thailand — and growing.',
    descCN: '47+基地遍布中国，比利时、匈牙利、泰国 — 持续扩展中。' },
  { icon: Users, title: '10,000+ Strong', titleCN: '万人团队',
    desc: 'Engineers, scientists, craftspeople — united by a shared commitment to packaging excellence.',
    descCN: '工程师、科学家、工匠 — 因对包装卓越的共同承诺而凝聚。' },
];

export default function AboutPage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center bg-[#1A1A1A] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/products/About CPMC Holdings Guardians of Every Product You Hold in Your Hands..png"
            alt="About CPMC Holdings"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">
              {t('About CPMC Holdings', '关于华瑞新控股')}
            </span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-white mt-6 leading-tight"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}>
            {t("Guardians of Every Product", '每一个产品的守护者')}{' '}
            <span className="text-gradient-gold">{t('You Hold in Your Hands.', '在你手中。')}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 max-w-2xl mx-auto mt-8 text-base leading-relaxed">
            {t(
              "Founded in 1991, CPMC Holdings is a cornerstone member of ORG Technology Group — China's largest metal packaging enterprise. We are the industry standard-setter, the innovation engine, and the trusted partner behind the world's most iconic brands.",
              '华瑞新控股成立于1991年，是奥瑞金科技集团核心成员企业——中国最大的金属包装集团。我们是行业标准的制定者、创新的引擎、世界顶级品牌信赖的合作伙伴。'
            )}
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="relative py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="bg-[#F5F5F7] rounded-3xl p-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-radial from-[#C8A951]/6 to-transparent rounded-full blur-2xl" />
                <h2 className="text-2xl font-display font-bold text-[#1A1A1A] mb-6">
                  {t("We Are Industry Standard-Setters", '我们是行业标准制定者')}
                </h2>
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  {t(
                    "CPMC Holdings formulates the national standards for China's tinplate printing, general cans, bottle caps, and steel drums industries. We don't just follow standards — we write them.",
                    '华瑞新控股是中国印铁、通用罐、瓶盖、钢桶行业国家标准的制定者。我们不仅遵循标准——我们书写标准。'
                  )}
                </p>
                <p className="text-[#555] text-sm leading-relaxed mb-4">
                  {t(
                    'With over 500 packaging technology patents, international multilateral mutual recognition, and CNAS-certified national-level testing capabilities (79 authorized items), we possess leading capabilities in food safety risk assessment and testing.',
                    '拥有500余项包装技术专利，获得国际多边互认，拥有CNAS国家级实验中心资格（79项授权检测），具备领先的食品安全风险评估与检测能力。'
                  )}
                </p>
                <p className="text-[#555] text-sm leading-relaxed">
                  {t(
                    "We are the only Class I metal pharmaceutical packaging manufacturer approved by China's National Food and Drug Administration — a testament to our uncompromising quality standards.",
                    '我们是全国唯一获国家食药监局审定的I类金属药品包装生产企业——这是对我们不妥协品质标准的最好证明。'
                  )}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {values.map((val, i) => (
                <motion.div key={val.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 hover:shadow-md transition-all duration-500 border border-black/[0.04]">
                  <div className="w-10 h-10 rounded-lg bg-[#C8A951]/10 flex items-center justify-center mb-4">
                    <val.icon className="w-5 h-5 text-[#C8A951]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[#1A1A1A] mb-2">{t(val.title, val.titleCN)}</h3>
                  <p className="text-xs text-[#666] leading-relaxed">{t(val.desc, val.descCN)}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-24 bg-[#F5F5F7]">
        <div className="absolute inset-0 bg-grid pointer-events-none" />
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">{t('Our Journey', '我们的历程')}</span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#1A1A1A] mt-4">
              {t('Three Decades of Excellence', '三十载卓越')}
            </h2>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#C8A951]/40 via-[#C8A951]/10 to-transparent hidden lg:block" />
            <div className="space-y-12 lg:space-y-0">
              {MILESTONES.map((milestone, i) => (
                <motion.div key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 mb-16 ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 flex ${i % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'}`}>
                    <div className={`text-right ${i % 2 !== 0 ? 'lg:text-left' : ''}`}>
                      <span className="text-4xl lg:text-6xl font-display font-bold text-gradient-gold">{milestone.year}</span>
                      <h3 className="text-xl font-bold text-[#1A1A1A] mt-2">{t(milestone.title, milestone.titleCN)}</h3>
                      <p className="text-sm text-[#666] mt-3 max-w-sm leading-relaxed">{t(milestone.description, milestone.descriptionCN)}</p>
                    </div>
                  </div>
                  <div className="relative z-10 hidden lg:flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full bg-[#C8A951]/30 border-2 border-[#C8A951]/50" />
                  </div>
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">
              {t('Certifications & Accreditations', '认证与资质')}
            </span>
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-[#1A1A1A] mt-4">
              {t('Certified Excellence', '认证卓越')}
            </h2>
          </div>
          <div className="flex flex-nowrap gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:justify-center lg:overflow-visible">
            {certifications.map((cert, i) => (
              <motion.div key={cert.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-2xl p-6 text-center hover:shadow-md transition-all duration-500 group flex-shrink-0 w-[180px] snap-start">
                {certImages[cert.name] ? (
                  <img
                    src={certImages[cert.name]}
                    alt={cert.name}
                    className="w-32 h-32 object-contain mx-auto mb-3 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                ) : (
                  <CheckCircle className="w-10 h-10 text-[#C8A951]/60 mx-auto mb-3 group-hover:text-[#C8A951] transition-colors" />
                )}
                <div className="text-xs font-medium text-[#888] mb-0.5">{cert.name}</div>
                <div className="text-[11px] text-[#AAA] leading-tight">{t(cert.desc, cert.descCN)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-[#F5F5F7] rounded-3xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-radial from-[#C8A951]/6 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="text-2xl lg:text-4xl font-display font-bold text-[#1A1A1A] mb-4">
                {t("Let's Build Something Remarkable", '让我们一起创造非凡')}
              </h2>
              <p className="text-[#555] max-w-lg mx-auto mb-8 text-sm">
                {t(
                  'Partner with the industry standard-setter. From initial concept to final delivery, we bring your packaging vision to life.',
                  '与行业标准制定者合作。从最初概念到最终交付，我们将您的包装愿景变为现实。'
                )}
              </p>
              <Link href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#C8A951] transition-all duration-500 hover:scale-105">
                {t('Contact Us', '联系我们')}
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

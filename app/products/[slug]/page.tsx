'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { notFound, useParams } from 'next/navigation';
import { ArrowLeft, Check, Factory, Ruler, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { PRODUCT_CATEGORIES } from '../../lib/data';
import { useLanguage } from '../../lib/LanguageContext';

const heroImages: Record<string, string> = {
  'aerosol-cans': '/products/Aerosol Cans.png',
  'food-cans': '/products/Food and milk powder Cans.png',
  'aluminum-cans': '/products/2-Piece Aluminum Cans.png',
  'beer-cans': '/products/beer can.png',
  'tin-boxes': '/products/Custom Tin Boxes.png',
  'metal-caps': '/products/metal caps.png',
  'steel-drums': '/products/steel drums.png',
  'plastic-packaging': '/products/plastic pakaging.png',
  'printing-coating': '/products/printing&coating.png',
};

export default function ProductDetailPage() {
  const { t } = useLanguage();
  const params = useParams();
  const slug = params.slug as string;
  const product = PRODUCT_CATEGORIES.find((p) => p.slug === slug);
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  if (!product) { notFound(); }

  return (
    <>
      <section ref={heroRef} className="relative min-h-[45vh] flex items-center bg-[#1A1A1A] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImages[slug] || '/products/Aerosol Cans.png'}
            alt={product.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 py-20 w-full">
          <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/products" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              {t('All Products', '全部产品')}
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">{t('Product Line', '产品线')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-white mt-4"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}>
            {t(product.title, product.titleCN)}
          </motion.h1>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="bg-[#F5F5F7] rounded-2xl p-8 lg:p-10">
                <h2 className="text-lg font-semibold text-[#1A1A1A] mb-4">{t('Overview', '概述')}</h2>
                <p className="text-sm text-[#555] leading-relaxed mb-4">{t(product.description, product.descriptionCN)}</p>
              </div>
            </div>
            <div className="bg-[#F5F5F7] rounded-2xl p-8">
              <h2 className="text-lg font-semibold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#C8A951]" />
                {t('Trusted By', '信赖品牌')}
              </h2>
              <div className="flex flex-wrap gap-2">
                {product.clients.map((client) => (
                  <span key={client} className="px-3 py-1.5 text-xs text-[#555] bg-white rounded-full border border-black/[0.06] hover:border-[#C8A951]/30 hover:text-[#1A1A1A] transition-all duration-300">
                    {client}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-display font-bold text-[#1A1A1A] mb-10 flex items-center gap-3">
            <Ruler className="w-6 h-6 text-[#C8A951]" />
            {t('Technical Specifications', '技术规格')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {product.specs.map((spec, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }}
                className="flex items-start gap-3 bg-[#F5F5F7] rounded-xl p-5">
                <Check className="w-4 h-4 text-[#C8A951] mt-0.5 shrink-0" />
                <span className="text-sm text-[#555]">{spec}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <h2 className="text-2xl font-display font-bold text-[#1A1A1A] mb-10 flex items-center gap-3">
            <Factory className="w-6 h-6 text-[#C8A951]" />
            {t('Manufacturing Bases', '生产基地')}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {product.bases.map((base, i) => (
              <motion.div key={base.name}
                initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }} viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-xl p-5 hover:shadow-sm transition-all duration-300">
                <div className="text-sm font-semibold text-[#333]">{base.name}</div>
                <div className="text-xs text-[#888] mt-1">{base.capacity}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-[#F5F5F7] rounded-3xl p-12 text-center">
            <h2 className="text-2xl lg:text-3xl font-display font-bold text-[#1A1A1A] mb-4">
              {t('Interested in', '对')} {t(product.title, product.titleCN)} {t('?', '感兴趣？')}
            </h2>
            <p className="text-[#555] max-w-md mx-auto mb-8 text-sm">
              {t('Contact our team for detailed specifications, samples, or a customized quote.', '联系我们的团队获取详细规格、样品或定制报价。')}
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#C8A951] transition-all duration-500 hover:scale-105">
              {t('Request a Quote', '索取报价')}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

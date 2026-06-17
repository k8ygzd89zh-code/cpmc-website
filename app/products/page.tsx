'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight, Search } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';
import VisualImage from '../components/VisualImage';

export default function ProductsPage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [search, setSearch] = useState('');

  const filtered = PRODUCT_CATEGORIES.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.titleCN.includes(search) ||
      p.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section ref={heroRef} className="relative min-h-[50vh] flex items-center justify-center bg-[#1A1A1A] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/products/Products Precision Packaging Solutions.png"
            alt="Precision Packaging Solutions"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 text-center py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">{t('Products', '产品中心')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-white mt-6 leading-tight"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}>
            {t('Precision Packaging Solutions', '精密包装解决方案')}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 max-w-xl mx-auto mt-6 text-sm leading-relaxed">
            {t(
              'From aluminum aerosol cans to custom tin boxes, from steel drums to advanced plastic packaging — one partner, every possibility.',
              '从铝质气雾罐到定制杂罐，从钢桶到先进的塑料包装——一个伙伴，无限可能。'
            )}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }} className="max-w-md mx-auto mt-10 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <input type="text" placeholder={t('Search products...', '搜索产品...')} value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-[#C8A951]/40 transition-colors duration-300" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[#888]">{t('No products match your search.', '没有匹配的产品。')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map((product, i) => (
                <motion.div key={product.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  viewport={{ once: true, margin: '-50px' }}>
                  <Link href={`/products/${product.slug}`}
                    className="group block bg-[#F5F5F7] rounded-2xl p-8 lg:p-10 hover:shadow-md transition-all duration-500 overflow-hidden relative border border-black/[0.03]">
                    <VisualImage type="product" className="absolute inset-0 z-0 opacity-15 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-xl font-bold text-[#333] group-hover:text-[#1A1A1A] transition-colors">
                            {t(product.title, product.titleCN)}
                          </h2>
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-[#AAA] group-hover:text-[#C8A951] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                      </div>
                      <p className="text-sm text-[#666] leading-relaxed mb-6 line-clamp-2">{t(product.description, product.descriptionCN)}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {product.specs.slice(0, 3).map((spec, j) => (
                          <span key={j} className="px-3 py-1.5 text-[10px] text-[#666] bg-white rounded-full border border-black/[0.06]">{spec}</span>
                        ))}
                        {product.specs.length > 3 && (
                          <span className="px-3 py-1.5 text-[10px] text-[#C8A951] bg-[#C8A951]/5 rounded-full">+{product.specs.length - 3} {t('more', '更多')}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-[#999] uppercase tracking-wider shrink-0">{t('Clients:', '客户：')}</span>
                        <div className="flex flex-wrap gap-1.5">
                          {product.clients.slice(0, 6).map((client) => (
                            <span key={client} className="text-[10px] text-[#888]">{client}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

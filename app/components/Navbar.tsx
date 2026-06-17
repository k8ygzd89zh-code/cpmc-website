'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { useLanguage } from '../lib/LanguageContext';
import { img } from '../lib/paths';

type NavLink = {
  label: string;
  labelCN: string;
} & (
  | { href: string; children?: never }
  | { href?: never; children: { href: string; label: string; labelCN: string }[] }
);

const navLinks: NavLink[] = [
  { href: '/', label: 'Home', labelCN: '首页' },
  { href: '/about', label: 'About Us', labelCN: '关于我们' },
  {
    label: 'Products', labelCN: '产品中心',
    children: [
      { href: '/products/aerosol-cans', label: 'Aerosol Cans', labelCN: '气雾罐' },
      { href: '/products/food-cans', label: 'Food Cans', labelCN: '食品奶粉罐' },
      { href: '/products/aluminum-cans', label: '2-Piece Aluminum Cans', labelCN: '铝质两片罐' },
      { href: '/products/beer-cans', label: 'Beer Cans', labelCN: '啤酒罐' },
      { href: '/products/tin-boxes', label: 'Custom Tin Boxes', labelCN: '定制杂罐' },
      { href: '/products/metal-caps', label: 'Metal Caps', labelCN: '金属盖' },
      { href: '/products/steel-drums', label: 'Steel Drums', labelCN: '钢桶' },
      { href: '/products/plastic-packaging', label: 'Plastic Packaging', labelCN: '塑胶包装' },
      { href: '/products/printing-coating', label: 'Printing & Coating', labelCN: '印铁涂布' },
    ],
  },
  { href: '/sustainability', label: 'Sustainability', labelCN: '可持续发展' },
  { href: '/contact', label: 'Contact', labelCN: '联系我们' },
];

export default function Navbar() {
  const { lang, toggleLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
      >
        <div className="max-w-[1440px] mx-auto pl-8 pr-6 lg:pl-12 lg:pr-12">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="group flex items-center gap-4">
              <img src={img("/products/OGR LOGO.png")} alt="ORG" className="h-16 w-auto" />
              <img src={img("/products/CPMC LOGO.png")} alt="CPMC" className="h-16 w-auto" />
              <div className="hidden sm:block">
                <div className="text-xl font-bold tracking-[0.15em] leading-none text-[#1A1A1A]">CPMC HOLDINGS</div>
                <div className="text-sm tracking-[0.2em] mt-1 leading-none text-[#888]">华瑞新控股</div>
              </div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) =>
                'href' in link && link.href ? (
                  <Link key={link.href} href={link.href}
                    className="px-4 py-2 text-sm text-[#555] hover:text-[#1A1A1A] transition-colors duration-300 relative group">
                    {t(link.label, link.labelCN)}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent group-hover:w-3/4 transition-all duration-300" />
                  </Link>
                ) : (
                  <div key={link.label} className="relative"
                    onMouseEnter={() => setProductOpen(true)}
                    onMouseLeave={() => setProductOpen(false)}>
                    <button className="px-4 py-2 text-sm text-[#555] hover:text-[#1A1A1A] transition-colors duration-300 flex items-center gap-1 group">
                      {t(link.label, link.labelCN)}
                      <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" />
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-[#C8A951] to-transparent group-hover:w-3/4 transition-all duration-300" />
                    </button>
                    <AnimatePresence>
                      {productOpen && link.children && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 glass rounded-xl overflow-hidden border border-black/[0.06] shadow-xl">
                          <div className="p-2">
                            {link.children.map((child) => (
                              <Link key={child.href} href={child.href}
                                className="block px-4 py-2.5 rounded-lg text-sm text-[#555] hover:text-[#1A1A1A] hover:bg-black/[0.03] transition-all duration-200">
                                <span className="text-[#333]">{t(child.label, child.labelCN)}</span>
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
              <button onClick={toggleLang}
                className="ml-4 p-2 rounded-full border border-[#D1D1D6] text-[#555] hover:text-[#1A1A1A] hover:border-[#1A1A1A] transition-all duration-300 flex items-center gap-1.5 text-xs">
                <Globe className="w-3.5 h-3.5" />
                {lang === 'zh' ? 'EN' : '中'}
              </button>
            </div>

            <button onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 text-[#555] hover:text-[#1A1A1A] transition-colors">
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden">
            <div className="absolute inset-0 bg-white/95 backdrop-blur-xl" onClick={() => setMobileOpen(false)} />
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen gap-4 p-8">
              {navLinks.map((link, i) =>
                'href' in link && link.href ? (
                  <motion.div key={link.href}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }}>
                    <Link href={link.href} onClick={() => setMobileOpen(false)}
                      className="text-2xl font-light text-[#555] hover:text-[#1A1A1A] transition-colors duration-300">
                      {t(link.label, link.labelCN)}
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div key={link.label}
                    initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.06 }} className="text-center">
                    <div className="text-2xl font-light text-[#777] mb-3">{t(link.label, link.labelCN)}</div>
                    <div className="flex flex-col gap-2">
                      {link.children?.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                          className="text-base text-[#888] hover:text-[#333] transition-colors duration-200">
                          {t(child.label, child.labelCN)}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )
              )}
              <motion.button initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }} onClick={toggleLang}
                className="mt-8 px-6 py-2 border border-[#D1D1D6] rounded-full text-[#555] hover:text-[#1A1A1A] transition-all text-sm">
                {t('Switch to 中文', 'Switch to English')}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

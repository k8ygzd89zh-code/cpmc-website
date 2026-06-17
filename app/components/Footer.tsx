'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const footerLinks = {
  company: {
    title: 'Company',
    titleCN: '公司',
    links: [
      { href: '/about', label: 'About Us', labelCN: '关于我们' },
      { href: '/sustainability', label: 'Sustainability', labelCN: '可持续发展' },
      { href: '/contact', label: 'Contact', labelCN: '联系我们' },
    ],
  },
  products: {
    title: 'Products',
    titleCN: '产品',
    links: [
      { href: '/products/aerosol-cans', label: 'Aerosol Cans', labelCN: '气雾罐' },
      { href: '/products/food-cans', label: 'Food Cans', labelCN: '食品罐' },
      { href: '/products/aluminum-cans', label: 'Aluminum Cans', labelCN: '铝质罐' },
      { href: '/products/beer-cans', label: 'Beer Cans', labelCN: '啤酒罐' },
      { href: '/products/tin-boxes', label: 'Tin Boxes', labelCN: '杂罐' },
      { href: '/products/metal-caps', label: 'Metal Caps', labelCN: '金属盖' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="relative bg-[#F5F5F7] border-t border-black/[0.06]">
      {/* Top gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C8A951]/40 to-transparent" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block group">
              <div className="flex items-center gap-3 mb-6">
                <img src="/products/CPMC LOGO.png" alt="CPMC" className="w-10 h-10 object-contain" />
                <div>
                  <div className="text-sm font-bold tracking-[0.2em] text-[#1A1A1A]">CPMC HOLDINGS</div>
                  <div className="text-[10px] text-[#888] tracking-[0.25em] mt-0.5">华瑞新控股</div>
                </div>
              </div>
            </Link>
            <p className="text-sm text-[#555] leading-relaxed max-w-sm mb-8">
              A member of ORG Technology Group — China&apos;s largest metal packaging enterprise.
              Crafting precision packaging solutions for the world&apos;s most trusted brands since 1991.
            </p>
            <div className="space-y-3 text-sm text-[#555]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-[#C8A951] shrink-0" />
                <span>Guangzhou, China</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#C8A951] shrink-0" />
                <span>celine.zhang@orgpackaging.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#C8A951] shrink-0" />
                <span>+86 18164117221</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8">
            {Object.values(footerLinks).map((section) => (
              <div key={section.title}>
                <h4 className="text-xs font-semibold tracking-[0.2em] text-[#888] uppercase mb-5">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-[#555] hover:text-[#1A1A1A] transition-colors duration-300 flex items-center gap-1 group"
                      >
                        {link.label}
                        <ChevronRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-3">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-[#888] uppercase mb-5">
              Newsletter
            </h4>
            <p className="text-sm text-[#555] mb-4">
              Receive the latest packaging innovations and industry insights.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white border border-black/[0.08] rounded-lg px-4 py-2.5 text-sm text-[#1A1A1A] placeholder:text-[#AAA] focus:outline-none focus:border-[#C8A951]/40 transition-colors duration-300"
              />
              <button
                type="submit"
                className="px-4 py-2.5 bg-[#C8A951]/10 border border-[#C8A951]/30 rounded-lg text-[#C8A951] hover:bg-[#C8A951]/20 transition-all duration-300"
              >
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-black/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#999]">
            &copy; {new Date().getFullYear()} CPMC Holdings. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-[#999]">
            <a href="#" className="hover:text-[#555] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#555] transition-colors">Terms of Service</a>
            <span className="text-[#CCC]">共识共进 · 成就未来</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

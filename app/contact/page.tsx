'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Mail, Phone, Clock, Send, ArrowUpRight, Globe, Building2, Truck, Newspaper, Handshake } from 'lucide-react';
import { PRODUCT_CATEGORIES } from '../lib/data';
import { useLanguage } from '../lib/LanguageContext';


const offices = [
  { region: 'Headquarters', regionCN: '总部', city: 'Hangzhou, China', cityCN: '中国杭州',
    phone: '+86 571 0000 0000', email: 'info@cpmcholdings.com' },
  { region: 'North China', regionCN: '华北', city: 'Tianjin, China', cityCN: '中国天津',
    phone: '+86 22 0000 0000', email: 'north@cpmcholdings.com' },
  { region: 'South China', regionCN: '华南', city: 'Guangzhou, China', cityCN: '中国广州',
    phone: '+86 20 0000 0000', email: 'south@cpmcholdings.com' },
];

const contactOptions = [
  { icon: Building2, label: 'Business Inquiry', labelCN: '业务咨询',
    desc: 'Request quotes, samples, or technical specs', descCN: '索取报价、样品或技术规格' },
  { icon: Truck, label: 'Supply Chain & Logistics', labelCN: '供应链与物流',
    desc: 'Vendor partnerships and logistics support', descCN: '供应商合作与物流支持' },
  { icon: Newspaper, label: 'Media & Press', labelCN: '媒体与新闻',
    desc: 'Press releases, media kits, and interviews', descCN: '新闻稿、媒体资料与采访' },
  { icon: Handshake, label: 'Investor Relations', labelCN: '投资者关系',
    desc: 'Financial reports and investor information', descCN: '财务报告与投资者信息' },
];

export default function ContactPage() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const [formState, setFormState] = useState({ name: '', email: '', company: '', phone: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <section ref={heroRef} className="relative min-h-[45vh] flex items-center bg-[#1A1A1A] overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="/products/Contact Us.png"
            alt="Contact Us"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
        </div>

        <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 text-center py-20 w-full">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}>
            <span className="text-xs tracking-[0.3em] text-[#C8A951] uppercase font-medium">{t('Contact Us', '联系我们')}</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-display font-bold text-white mt-6 leading-tight"
            style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}>
            {t("Let's Start a Conversation", '让我们开启对话')}
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-white/80 max-w-xl mx-auto mt-6 text-sm leading-relaxed">
            {t(
              "Whether you're exploring a new packaging solution or seeking a strategic partnership, our team is ready to help you succeed.",
              '无论您是在探索新的包装方案还是寻求战略合作，我们的团队随时准备帮助您成功。'
            )}
          </motion.p>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {contactOptions.map((opt, i) => (
              <motion.div key={opt.label}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                className="bg-[#F5F5F7] rounded-2xl p-6 text-center hover:shadow-sm transition-all duration-500 group">
                <opt.icon className="w-6 h-6 text-[#C8A951]/60 mx-auto mb-3 group-hover:text-[#C8A951] transition-colors" />
                <h3 className="text-sm font-semibold text-[#333] mb-1">{t(opt.label, opt.labelCN)}</h3>
                <p className="text-xs text-[#888]">{t(opt.desc, opt.descCN)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-16 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-3">
              <div className="bg-[#F5F5F7] rounded-3xl p-8 lg:p-12">
                <h2 className="text-2xl font-display font-bold text-[#1A1A1A] mb-2">{t('Send Us a Message', '给我们留言')}</h2>
                <p className="text-sm text-[#888] mb-8">
                  {t('Fill out the form below and our team will get back to you within 24 hours.', '填写以下表单，我们的团队将在24小时内回复。')}
                </p>
                {submitted ? (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-6">
                      <Send className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">{t('Thank You!', '谢谢！')}</h3>
                    <p className="text-[#666] text-sm max-w-sm mx-auto">
                      {t('Your message has been received. Our team will review and respond within 24 hours.', '您的留言已收到。我们的团队将在24小时内审核并回复。')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-[#888] mb-2">{t('Name *', '姓名 *')}</label>
                        <input required type="text" value={formState.name}
                          onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                          className="w-full bg-white border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#AAA] focus:outline-none focus:border-[#C8A951]/40 transition-colors"
                          placeholder={t('Your name', '您的姓名')} />
                      </div>
                      <div>
                        <label className="block text-xs text-[#888] mb-2">{t('Company *', '公司 *')}</label>
                        <input required type="text" value={formState.company}
                          onChange={(e) => setFormState((s) => ({ ...s, company: e.target.value }))}
                          className="w-full bg-white border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#AAA] focus:outline-none focus:border-[#C8A951]/40 transition-colors"
                          placeholder={t('Your company', '您的公司')} />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs text-[#888] mb-2">{t('Email *', '邮箱 *')}</label>
                        <input required type="email" value={formState.email}
                          onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                          className="w-full bg-white border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#AAA] focus:outline-none focus:border-[#C8A951]/40 transition-colors"
                          placeholder="you@company.com" />
                      </div>
                      <div>
                        <label className="block text-xs text-[#888] mb-2">{t('Phone', '电话')}</label>
                        <input type="tel" value={formState.phone}
                          onChange={(e) => setFormState((s) => ({ ...s, phone: e.target.value }))}
                          className="w-full bg-white border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#AAA] focus:outline-none focus:border-[#C8A951]/40 transition-colors"
                          placeholder="+86 138 0000 0000" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-[#888] mb-2">{t('Product Interest', '感兴趣的产品')}</label>
                      <select value={formState.product}
                        onChange={(e) => setFormState((s) => ({ ...s, product: e.target.value }))}
                        className="w-full bg-white border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A951]/40 transition-colors appearance-none">
                        <option value="" className="bg-white">{t('Select a product line', '选择产品线')}</option>
                        {PRODUCT_CATEGORIES.map((p) => (
                          <option key={p.slug} value={p.slug} className="bg-white">
                            {t(p.title, p.titleCN)}
                          </option>
                        ))}
                        <option value="multiple" className="bg-white">{t('Multiple / Custom', '多项产品/定制方案')}</option>
                        <option value="other" className="bg-white">{t('Other', '其他')}</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs text-[#888] mb-2">{t('Message *', '留言 *')}</label>
                      <textarea required rows={5} value={formState.message}
                        onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                        className="w-full bg-white border border-[#D1D1D6] rounded-xl px-4 py-3 text-sm text-[#1A1A1A] placeholder:text-[#AAA] focus:outline-none focus:border-[#C8A951]/40 transition-colors resize-none"
                        placeholder={t('Tell us about your packaging needs, estimated volume, timeline...', '请描述您的包装需求、预估需求量和时间线...')} />
                    </div>
                    <button type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-3.5 bg-[#1A1A1A] text-white rounded-full text-sm font-semibold hover:bg-[#C8A951] transition-all duration-500 hover:scale-[1.02]">
                      {t('Send Message', '发送留言')}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2">
              <h2 className="text-xl font-display font-bold text-[#1A1A1A] mb-6 flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#C8A951]" />
                {t('Our Offices', '我们的办公室')}
              </h2>
              <div className="space-y-4">
                {offices.map((office, i) => (
                  <motion.div key={office.region}
                    initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }}
                    className="bg-[#F5F5F7] rounded-2xl p-6 hover:shadow-sm transition-all duration-500 group">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-sm font-semibold text-[#1A1A1A]">{t(office.region, office.regionCN)}</h3>
                        <p className="text-xs text-[#888] mt-0.5">{t(office.city, office.cityCN)}</p>
                      </div>
                      <MapPin className="w-4 h-4 text-[#CCC] group-hover:text-[#C8A951]/50 transition-colors shrink-0" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-xs text-[#666]">
                        <Phone className="w-3 h-3 text-[#CCC]" />{office.phone}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#666]">
                        <Mail className="w-3 h-3 text-[#CCC]" />{office.email}
                      </div>
                    </div>
                  </motion.div>
                ))}
                <div className="bg-[#F5F5F7] rounded-2xl p-6 border border-[#C8A951]/10">
                  <Clock className="w-5 h-5 text-[#C8A951] mb-3" />
                  <h3 className="text-sm font-semibold text-[#333] mb-2">{t('Business Hours', '工作时间')}</h3>
                  <p className="text-xs text-[#666] leading-relaxed">
                    {t(
                      'Monday – Friday: 9:00 AM – 6:00 PM (CST). 24/7 emergency support available for active clients.',
                      '周一至周五：上午9:00 – 下午6:00（北京时间）。为活跃客户提供7×24紧急支持。'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

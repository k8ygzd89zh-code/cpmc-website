# CPMC Holdings 企业官网项目

## 项目概况
- **目录**: `C:\Users\Administrator\Desktop\cpmc-website`
- **启动**: `npm run dev` → http://localhost:3000
- **技术栈**: Next.js 14 + TypeScript + Tailwind CSS + Framer Motion + Three.js
- **公司**: 华瑞新控股 (CPMC Holdings) — 奥瑞金科技集团成员，中国最大金属包装集团
- **前身**: 中粮包装，1991年成立，2025年被奥瑞金收购并更名

## 文件结构
```
app/
├── layout.tsx              ← 全局布局 + SEO Metadata
├── ClientLayout.tsx         ← 客户端布局 (Navbar + Footer)
├── page.tsx                 ← 首页 (Hero→Clients→Numbers→Solutions→Sustainability→GlobalFootprint→CTA)
├── globals.css              ← 全局样式 (深色太空黑主题 + 金属金#C8A951)
├── about/page.tsx           ← 关于我们 (公司故事/价值观/里程碑/认证)
├── products/
│   ├── page.tsx             ← 产品列表 (9大产品线 + 搜索)
│   └── [slug]/page.tsx      ← 产品详情 (动态路由: specs/基地/客户/CTA)
├── contact/page.tsx         ← 联系我们 (表单+全球办公室)
├── sustainability/page.tsx  ← 可持续发展 (4大支柱/Scope 1-4/ESG统计)
├── components/
│   ├── Navbar.tsx           ← 导航栏 (全局语言切换)
│   ├── Footer.tsx           ← 页脚
│   ├── Hero.tsx             ← 首页3D罐体Hero区
│   ├── Can3D.tsx            ← Three.js 3D罐体旋转动画
│   ├── Numbers.tsx          ← 数据仪表盘 (入场计数动画)
│   ├── Solutions.tsx        ← 产品解决方案卡片墙
│   ├── Clients.tsx          ← 客户Logo双行滚动Marquee
│   ├── Sustainability.tsx   ← 可持续发展亮点区块
│   ├── GlobalFootprint.tsx  ← 全球生产基地分布
│   ├── CTABanner.tsx        ← 行动号召横幅
│   └── VisualImage.tsx      ← SVG视觉占位图组件 (factory/can-line/sustainability/product/hero-bg)
└── lib/
    ├── data.ts              ← 全部公司数据 (产品/客户/里程碑/基地/统计)
    └── LanguageContext.tsx  ← 全局中英文切换 Context (useLanguage hook)
```

## 设计系统
- **配色**: 太空黑(#0A0A0A, #111111), 金属金(#C8A951), 工业银(#C0C0C0), 暗夜绿(Sustainability)
- **字体**: Inter(EN) + Noto Sans SC(中文) + Playfair Display(标题)
- **CSS工具类**: glass, glass-light, text-gradient-gold, text-gradient-silver, bg-grid, bg-noise
- **动画**: Framer Motion (入场滚动触发) + CSS动画 (marquee/shimmer/float/glow)

## 全局语言切换
- `LanguageContext` 包裹整个应用 (layout.tsx → ClientLayout)
- 所有文字使用 `const { t } = useLanguage()` 然后 `t('English', '中文')`
- 添加新文字时务必遵循此模式

## 客户列表 (30+品牌)
Nestlé, Unilever, Coca-Cola, Tsingtao Beer, SC Johnson, Sam's Club, P&G, WD-40, PPG, Johnson & Johnson, Heinz, Henkel, Reckitt, Würth, Budweiser, Yili, Snow Beer, Yanjing Beer, Maxim's, Guangzhou Restaurant, China Tea, Yuanlang, MeadJohnson, Friso, Wyeth, Beingmate, Abbott, Danone, Lipton, Zhongchai

## 9大产品线
气雾罐(Aerosol) / 食品奶粉罐(Food Cans) / 铝质两片罐(Aluminum) / 啤酒罐(Beer) / 定制杂罐(Tin Boxes) / 金属盖(Caps) / 钢桶(Steel Drums) / 塑胶包装(Plastic) / 印铁涂布(Printing)

## 已知注意事项
- 不写"全球前五"排名（仅母公司奥瑞金为全球前五，华瑞新不单独标排名）
- 需强调母公司为"ORG Technology Group — China's largest metal packaging enterprise"
- 产品图片目前使用SVG占位图(VisualImage)，后续可替换为真实产品照片
- 联系方式和地址为占位数据，需替换为真实信息

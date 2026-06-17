// ============================================================
// CPMC HOLDINGS — Company Data
// ============================================================

export interface ProductCategory {
  slug: string;
  title: string;
  titleCN: string;
  description: string;
  descriptionCN: string;
  specs: string[];
  bases: { name: string; capacity: string }[];
  clients: string[];
}

export interface Milestone {
  year: string;
  title: string;
  titleCN: string;
  description: string;
  descriptionCN: string;
}

export interface ManufacturingBase {
  city: string;
  country: string;
  lat: number;
  lng: number;
  type: 'tinplate' | 'aluminum' | 'plastic' | 'printing' | 'beer';
}

// ---- CLIENTS ----
export const CLIENTS = [
  'Nestlé',
  'Unilever',
  'Coca-Cola',
  'Tsingtao Beer',
  'SC Johnson',
  "Sam's Club",
  'P&G',
  'WD-40',
  'PPG',
  'Johnson & Johnson',
  'Heinz',
  'Henkel',
  'Reckitt',
  'Würth',
  'Budweiser',
  'Yili',
  'Snow Beer',
  'Yanjing Beer',
  "Maxim's",
  'Guangzhou Restaurant',
  'China Tea',
  'Yuanlang',
  'MeadJohnson',
  'Friso',
  'Wyeth',
  'Beingmate',
  'Abbott',
  'Danone',
  'Lipton',
  'Zhongchai',
];

// ---- CLIENT LOGOS ----
// Logo images placed in public/logos/
export const CLIENT_LOGOS = [
  '/logos/图片1.png',
  '/logos/图片2.png',
  '/logos/图片3.png',
  '/logos/图片 40.png',
  '/logos/图片 42.png',
  '/logos/图片 43.png',
  '/logos/图片 44.png',
  '/logos/图片 45.png',
  '/logos/图片 50.png',
  '/logos/图片 51.png',
  '/logos/图片 52.png',
  '/logos/图片 53.png',
  '/logos/图片 54.png',
  '/logos/图片 55.png',
  '/logos/图片 57.png',
  '/logos/图片 58.png',
  '/logos/图片 62.png',
  '/logos/图片 63.png',
  '/logos/图片 64.png',
  '/logos/图片 66.png',
  '/logos/图片 67.png',
  '/logos/图片 70.png',
  '/logos/图片 71.png',
  '/logos/图片 73.png',
  '/logos/图片 75.png',
  '/logos/图片 78.png',
  '/logos/图片 79.png',
  '/logos/图片 80.png',
  '/logos/图片 81.png',
  '/logos/图片 83.png',
  '/logos/图片 84.png',
  '/logos/图片 85.png',
  '/logos/图片 86.png',
  '/logos/图片 89.png',
  '/logos/图片 94.png',
  '/logos/图片 95.png',
  '/logos/图片 96.png',
  '/logos/图片 168.png',
  '/logos/图片 172.png',
  '/logos/图片 177.png',
  '/logos/图片 179.png',
  '/logos/图片 214.png',
  '/logos/图片 220.png',
  '/logos/图片 334.png',
  '/logos/图片 338.png',
];

// ---- MILESTONES ----
export const MILESTONES: Milestone[] = [
  {
    year: '1991',
    title: 'The Beginning',
    titleCN: '华瑞肇始',
    description: 'Wuxi Huapeng established, plant operations commenced in Hangzhou.',
    descriptionCN: '无锡华鹏成立，杭州工厂投产。',
  },
  {
    year: '2005',
    title: 'Strategic Launch',
    titleCN: '战略起步',
    description: 'COFCO Group acquired controlling stake. First five-year plan approved.',
    descriptionCN: '中粮集团控股，首个五年规划获批。',
  },
  {
    year: '2009',
    title: 'IPO & Expansion',
    titleCN: '上市拓展',
    description: 'Listed on Hong Kong Stock Exchange (00906.HK). Entered aluminum packaging.',
    descriptionCN: '香港联交所上市(00906.HK)，进军铝质包装行业。',
  },
  {
    year: '2015–16',
    title: 'Mixed Ownership Reform',
    titleCN: '混改激励',
    description: 'ORG Technology acquired stake. Management & employee share ownership implemented.',
    descriptionCN: '奥瑞金入股，管理层及骨干员工持股方案实施。',
  },
  {
    year: '2019–23',
    title: 'International Expansion',
    titleCN: '国际拓展',
    description: 'Built manufacturing plants in Belgium and Hungary — first steps on the global stage.',
    descriptionCN: '比利时、匈牙利工厂相继落成，迈出国际化步伐。',
  },
  {
    year: '2025',
    title: 'A New Era',
    titleCN: '融合发展',
    description: 'Acquired by ORG Technology. Renamed CPMC Holdings. A member of China\'s largest metal packaging group.',
    descriptionCN: '奥瑞金全面收购，更名华瑞新控股。成为中国最大金属包装集团核心成员。',
  },
];

// ---- PRODUCT CATEGORIES ----
export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    slug: 'aerosol-cans',
    title: 'Aerosol Cans',
    titleCN: '气雾罐 / 单片罐',
    description: 'Aluminum and tinplate aerosol cans for car care, personal care, air fresheners, insecticides, oxygen cylinders, and daily chemical products. Available in diameters D52, D57, D60, D65 with pressure ratings from 12bar to 20bar.',
    descriptionCN: '铝质及马口铁气雾罐，广泛应用于汽车护理、空气清新剂、个人护理、杀虫剂、氧气瓶等日化产品。规格覆盖D52/D57/D60/D65直径，压力等级达12bar至20bar。',
    specs: [
      'Diameters: D52, D57, D60, D65, D65SW',
      'Height: 80mm ~ 300mm',
      'Pressure: 12bar (Common) / 15bar (Medium) / 18bar (High) / 20bar (Special)',
      'Materials: Aluminum, Tinplate',
      'Shapes: Round shoulder, Oblique shoulder, Shaped, Smart, Love',
    ],
    bases: [
      { name: 'Hangzhou', capacity: '180 million cans/year' },
      { name: 'Guangzhou', capacity: '240 million cans/year' },
      { name: 'Shaoguan', capacity: '120 million cans/year' },
      { name: 'Tianjin', capacity: '60 million cans/year' },
      { name: 'Linyi', capacity: '60 million cans/year' },
      { name: 'Long County', capacity: '60 million cans/year' },
    ],
    clients: ['SC Johnson', 'P&G', 'WD-40', 'Henkel', 'Reckitt', 'Würth', 'PPG', 'Unilever'],
  },
  {
    slug: 'food-cans',
    title: 'Food Cans (Round)',
    titleCN: '食品圆罐 / 奶粉罐',
    description: 'China\'s premier milk powder packaging manufacturer with the highest hygiene standards, strictest quality requirements, and widest regional coverage. Products serve milk powder, nutritional powder, and seasoning powder segments. Standard capacities from 300# to 502#.',
    descriptionCN: '中国奶粉包装领域卫生条件最好、品质要求最高、区域覆盖最广的制造企业。主要面向奶粉、营养粉、调味粉三大类产品。标准容量覆盖300#至502#全系列。',
    specs: [
      '300# — 120g, D75.4mm, H 109~123mm',
      '307# — 138g, D86mm, H 105~127mm',
      '401# — 300g, D101.7mm, H 106~150mm',
      '502# — 700~900g, D129.3~135mm, H 135~175mm',
      'Food-grade internal coating, nitrogen flushing capable',
      'Easy-open & peel-off lid compatible',
    ],
    bases: [
      { name: 'Harbin (2 bases)', capacity: '360 million cans/year' },
      { name: 'Tianjin', capacity: '120 million cans/year' },
      { name: 'Qiqihar/Daqing/Shuangcheng', capacity: '210 million cans/year' },
      { name: 'Hohhot', capacity: '80 million cans/year' },
      { name: 'Shenyang', capacity: '40 million cans/year' },
      { name: 'Long County (Shanxi)', capacity: '75 million cans/year' },
      { name: 'Hangzhou', capacity: '70 million cans/year' },
      { name: 'Guangzhou (Panyu)', capacity: '70 million cans/year' },
    ],
    clients: ['Nestlé', 'Yili', 'MeadJohnson', 'Friso', 'Wyeth', 'Beingmate', 'Abbott', 'Danone'],
  },
  {
    slug: 'aluminum-cans',
    title: '2-Piece Aluminum Cans',
    titleCN: '铝制两片罐',
    description: 'Two-piece aluminum cans for beer, carbonated beverages, and personal care products. Manufactured to the highest international standards across 14 production bases in China and 3 overseas (Belgium, Hungary, Thailand).',
    descriptionCN: '铝制两片罐，广泛用于啤酒、碳酸饮料、个人护理产品。在中国14个生产基地及海外3个基地（比利时、匈牙利、泰国）生产，符合最高国际标准。',
    specs: [
      'Standard: 250ml, 270ml, 310ml, 330ml, 500ml',
      'Slim & standard profiles available',
      'Lightweight design for reduced carbon footprint',
      'BPA-free internal liner options',
    ],
    bases: [
      { name: 'Hangzhou', capacity: 'Large-scale' },
      { name: 'Wuhan', capacity: 'Large-scale' },
      { name: 'Tianjin', capacity: 'Large-scale' },
      { name: 'Shenyang', capacity: 'Large-scale' },
      { name: 'Chengdu', capacity: 'Large-scale' },
      { name: 'Guangzhou', capacity: 'Large-scale' },
      { name: 'Nanning', capacity: 'Large-scale' },
      { name: 'Belgium (Genk)', capacity: 'European hub' },
      { name: 'Hungary (Makó)', capacity: 'European hub' },
      { name: 'Thailand', capacity: 'SEA hub' },
    ],
    clients: ['Coca-Cola', 'Tsingtao Beer', 'Budweiser', 'Snow Beer', 'Yanjing Beer', 'Unilever', 'P&G'],
  },
  {
    slug: 'beer-cans',
    title: 'Beer Cans',
    titleCN: '精酿啤酒罐',
    description: 'Specialized cans for fresh and craft beer products. Available in 500ml, 650ml, 750ml, 1L, and 5L sizes. Premium quality for the discerning brewer.',
    descriptionCN: '专用于精酿啤酒与鲜啤产品。规格覆盖500ml至5L全系列，为懂啤酒的酿造者提供顶级包装。',
    specs: [
      'D65: 500ml, 650ml (H165~210mm)',
      'D70: 650ml, 750ml (H182~208mm)',
      'D80: 618ml, 750ml, 1L (H137~214mm)',
      'D87: 750ml, 1L (H160~192mm)',
      'D153: 5L party keg (H250mm)',
    ],
    bases: [
      { name: 'Tianjin', capacity: '80 million cans/year' },
      { name: 'Hangzhou', capacity: '80 million cans/year' },
      { name: 'Chengdu', capacity: '40 million cans/year' },
      { name: 'Fuzhou', capacity: '40 million cans/year' },
    ],
    clients: ['Tsingtao Beer', 'Snow Beer', 'Yanjing Beer', 'Budweiser'],
  },
  {
    slug: 'tin-boxes',
    title: 'Custom Tin Boxes',
    titleCN: '杂罐 / 定制礼品罐',
    description: 'Through our unique "2+N" collaboration model integrating upstream and downstream resources, we deliver custom tin boxes and gift packaging. Access to thousands of molds, 10 fully automated production lines, and dust-free workshops.',
    descriptionCN: '通过独特的"2+N"合作模式整合上下游资源，为客户提供定制杂罐及礼品包装。拥有千套模具库、10条全自动生产线、无尘车间。',
    specs: [
      '"2+N" supply chain collaboration model',
      '1,000+ mold library for rapid response',
      'Holographic printing technology for tin packaging',
      'UV printing: 6-color, 4-color, 2-color lines',
      'Digital proofing available',
      'Annual capacity: 104.5 million cases',
    ],
    bases: [
      { name: 'Panyu', capacity: '14.88M cases/year' },
      { name: 'Zhongshan', capacity: '13.44M cases/year' },
      { name: 'Jiangmen', capacity: '18M cases/year' },
      { name: 'Zengcheng', capacity: '18M cases/year' },
      { name: 'Qingyuan', capacity: '18M cases/year' },
      { name: 'Baiyun', capacity: '12.6M cases/year' },
    ],
    clients: ["Sam's Club", "Maxim's", 'Guangzhou Restaurant', 'Nestlé', 'Yili', 'China Tea', 'Yuanlang'],
  },
  {
    slug: 'metal-caps',
    title: 'Metal Caps & Closures',
    titleCN: '金属盖 / 瓶盖',
    description: 'Comprehensive range of metal closures including aerosol top/bottom caps, food can ends, easy-open lids, peel-off film lids, crown corks, and lug caps. Over 12 billion units annual capacity.',
    descriptionCN: '全面金属盖产品线：气雾罐顶底盖、食品罐盖、易撕盖、皇冠盖、旋开盖等。年产能超110亿只。',
    specs: [
      'Aerosol caps: 200, 201, 203.5, 205, 207.5, 209, 211 specifications',
      'Food can ends: D502, D401, D300, D603, D211',
      'Easy-open lids: D502, D300, D401',
      'Beer caps & crown corks',
      'Pressure-relief cap options',
    ],
    bases: [
      { name: 'Hangzhou', capacity: '600M sets/year' },
      { name: 'Guangzhou (Panyu)', capacity: '600M sets/year' },
      { name: 'Tianjin', capacity: '458M lids/year' },
      { name: 'Long County', capacity: '40M lids/year' },
    ],
    clients: ['SC Johnson', 'P&G', 'Henkel', 'Reckitt', 'Nestlé', 'Yili', 'Heinz'],
  },
  {
    slug: 'steel-drums',
    title: 'Steel Drums',
    titleCN: '钢桶',
    description: 'Steel drums for chemicals, coatings, lubricants, and edible oils. Manufactured to international standards with interior and exterior coating options.',
    descriptionCN: '钢桶产品服务于化工、涂料、油脂行业。提供烤漆桶、内涂桶等多种规格，符合国际标准。',
    specs: [
      'Chemical-grade & food-grade linings',
      'Various capacities: 200L, 210L standard',
      'Custom sizes available',
      'UN-certified for hazardous materials',
    ],
    bases: [
      { name: 'Tianjin', capacity: 'Major hub' },
      { name: 'Kunshan', capacity: 'Major hub' },
    ],
    clients: ['PPG', 'Würth', 'Henkel'],
  },
  {
    slug: 'plastic-packaging',
    title: 'Plastic Packaging',
    titleCN: '塑胶包装',
    description: 'Plastic packaging containers and food-grade plastic packaging across 7 manufacturing bases in China. Serving food, personal care, and industrial sectors.',
    descriptionCN: '塑料包装容器及食品用塑料包装，7个生产基地覆盖全国主要经济区域，服务食品、日化、工业领域。',
    specs: [
      'Food-grade plastic containers',
      'Custom molding & design',
      'Multi-layer barrier technology',
      'Recyclable material options',
      'Annual capacity: 74,000 tons',
    ],
    bases: [
      { name: 'Guangzhou', capacity: '' },
      { name: 'Tianjin', capacity: '' },
      { name: 'Suzhou', capacity: '' },
      { name: 'Suqian', capacity: '' },
      { name: 'Chongqing', capacity: '' },
      { name: 'Wuhan', capacity: '' },
      { name: 'Hefei', capacity: '' },
    ],
    clients: ['Unilever', 'P&G', 'Reckitt', 'Nestlé'],
  },
  {
    slug: 'printing-coating',
    title: 'Printing & Coating',
    titleCN: '印铁涂布',
    description: 'Professional tinplate cutting, printing, and coating services. 13 printing lines including 6-color UV from KBA and FUJI. Serving food, chemical, battery, electronics packaging needs.',
    descriptionCN: '专业马口铁裁切、印涂服务。13条印刷线，含KBA及FUJI六色UV线。服务食品、化工、电池、电子产品包装。',
    specs: [
      'Tinplate: Length 712-1068mm, Width 510-930mm, Thickness 0.16-0.40mm',
      '6-color UV line: 10,000 sheets/hr (KBA)',
      '4-color / 2-color lines: 4,000-6,000 sheets/hr (FUJI)',
      'Full-sheet inline inspection system',
      'Annual capacity: 195,000 tons',
    ],
    bases: [
      { name: 'Tianjin', capacity: '70,000 tons/year (4 lines)' },
      { name: 'Hangzhou', capacity: '45,000 tons/year (3 lines)' },
      { name: 'Guangzhou', capacity: '50,000 tons/year (4 lines)' },
      { name: 'Harbin', capacity: '15,000 tons/year (3 lines)' },
      { name: 'Chengdu', capacity: '15,000 tons/year (2 lines)' },
    ],
    clients: ['Multiple can-making enterprises, food & chemical packaging clients'],
  },
];

// ---- MANUFACTURING BASES ----
export const MANUFACTURING_BASES: ManufacturingBase[] = [
  { city: 'Hangzhou', country: 'China', lat: 30.2741, lng: 120.1551, type: 'tinplate' },
  { city: 'Guangzhou', country: 'China', lat: 23.1291, lng: 113.2644, type: 'tinplate' },
  { city: 'Tianjin', country: 'China', lat: 39.3434, lng: 117.3616, type: 'tinplate' },
  { city: 'Chengdu', country: 'China', lat: 30.5728, lng: 104.0668, type: 'tinplate' },
  { city: 'Harbin', country: 'China', lat: 45.8038, lng: 126.5350, type: 'tinplate' },
  { city: 'Shenyang', country: 'China', lat: 41.8057, lng: 123.4315, type: 'aluminum' },
  { city: 'Wuhan', country: 'China', lat: 30.5928, lng: 114.3055, type: 'aluminum' },
  { city: 'Xiamen', country: 'China', lat: 24.4798, lng: 118.0894, type: 'tinplate' },
  { city: 'Fuzhou', country: 'China', lat: 26.0745, lng: 119.2965, type: 'beer' },
  { city: 'Genk', country: 'Belgium', lat: 50.9661, lng: 5.5021, type: 'aluminum' },
  { city: 'Makó', country: 'Hungary', lat: 46.2216, lng: 20.4789, type: 'aluminum' },
  { city: 'Bangkok', country: 'Thailand', lat: 13.7563, lng: 100.5018, type: 'aluminum' },
  { city: 'Chongqing', country: 'China', lat: 29.4316, lng: 106.9123, type: 'plastic' },
  { city: 'Suzhou', country: 'China', lat: 31.2990, lng: 120.5853, type: 'plastic' },
];

// ---- PRODUCT LINE SUMMARY FOR HOMEPAGE ----
export const PRODUCT_LINES = [
  { name: 'Aerosol Cans', nameCN: '气雾罐', icon: 'spray', href: '/products/aerosol-cans' },
  { name: 'Food & Milk Powder Cans', nameCN: '食品奶粉罐', icon: 'food', href: '/products/food-cans' },
  { name: '2-Piece Aluminum Cans', nameCN: '铝质两片罐', icon: 'aluminum', href: '/products/aluminum-cans' },
  { name: 'Beer Cans', nameCN: '啤酒罐', icon: 'beer', href: '/products/beer-cans' },
  { name: 'Custom Tin Boxes', nameCN: '定制杂罐', icon: 'box', href: '/products/tin-boxes' },
  { name: 'Metal Caps & Closures', nameCN: '金属盖', icon: 'cap', href: '/products/metal-caps' },
  { name: 'Steel Drums', nameCN: '钢桶', icon: 'drum', href: '/products/steel-drums' },
  { name: 'Plastic Packaging', nameCN: '塑胶包装', icon: 'plastic', href: '/products/plastic-packaging' },
  { name: 'Printing & Coating', nameCN: '印铁涂布', icon: 'printer', href: '/products/printing-coating' },
];

// ---- SUSTAINABILITY DATA ----
export const SUSTAINABILITY_STATS = [
  { value: '38+', label: 'Annual Energy Projects', labelCN: '年度节能环保项目' },
  { value: '2.08M', label: 'kWh Saved per Year', labelCN: '年节电量 (千瓦时)' },
  { value: '10,000', label: 'Tons CO₂ Reduced / Year', labelCN: '年减碳量 (吨)' },
  { value: '15,740', label: 'Tons Waste Recycled / Year', labelCN: '年废弃物回收 (吨)' },
  { value: '17', label: 'Solar PV Projects', labelCN: '光伏发电项目' },
  { value: '13', label: 'RTO Combustion Units', labelCN: 'RTO蓄热燃烧装置' },
];

// ---- CORPORATE STATS ----
export const CORPORATE_STATS = [
  { value: '47+', label: 'Manufacturing Bases', labelCN: '生产基地' },
  { value: '100+', label: 'Billion Cans / Year', labelCN: '年产能 (亿罐)' },
  { value: '500+', label: 'Packaging Patents', labelCN: '包装技术专利' },
  { value: '30+', label: 'Years of Heritage', labelCN: '年行业深耕' },
  { value: '79', label: 'CNAS Accredited Tests', labelCN: 'CNAS授权检测项' },
  { value: '10,000+', label: 'Employees Worldwide', labelCN: '全球员工' },
];

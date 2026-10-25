import React, { useState } from 'react';
import { dmuRolesData, skuCatalog } from '../data/marketData';
import { DrillDownCard } from './common/DrillDownCard';

interface CompetitorRadarData {
  id: 'rst' | 'german' | 'turkish' | 'chinese';
  name: string;
  shortName: string;
  categoryName: string;
  country: string;
  flag: string;
  badge: string;
  color: string;
  strokeColor: string;
  fillColor: string;
  textBadgeColor: string;
  scores: [number, number, number, number, number, number];
  websites: { name: string; url: string }[];
  priceRange: string;
  deliveryTime: string;
  warrantyStatus: string;
  advantages: string[];
  disadvantages: string[];
  rstAdvantageOver: string;
  verdict: string;
}

export const SalesStrategyAftermarket: React.FC = () => {
  const [selectedSku, setSelectedSku] = useState<string>('RST-BR-1624');
  const [activePartnerTab, setActivePartnerTab] = useState<'fox' | 'filpa' | 'synergy'>('fox');
  const [selectedRadarCompetitor, setSelectedRadarCompetitor] = useState<'all' | 'rst' | 'german' | 'turkish' | 'chinese'>('all');
  const [hoveredDimensionIdx, setHoveredDimensionIdx] = useState<number | null>(null);

  const currentSku = skuCatalog[selectedSku] || skuCatalog['RST-BR-1624'];

  // =========================================================================
  // 6 STRATEGIC DIMENSIONS FOR SPIDER / RADAR CHART
  // =========================================================================
  const radarDimensions = [
    { key: 'safety', label: 'استاندارد کیفی و ایمنی (ECE R13)', icon: '🛡️', short: 'استاندارد ECE R13' },
    { key: 'cost', label: 'صرفه اقتصادی و بهای تمام‌شده (TCO)', icon: '💰', short: 'صرفه اقتصادی TCO' },
    { key: 'delivery', label: 'سرعت تحویل و حذف خواب ناوگان', icon: '⚡', short: 'تحویل ۴۸ ساعته' },
    { key: 'credit', label: 'تسهیلات خرید و پرداخت اعتباری ریالی', icon: '💳', short: 'پرداخت اعتباری' },
    { key: 'cad', label: 'پشتیبانی فنی و انطباق 3D CAD شاسی', icon: '📐', short: 'پشتیبانی مهندسی' },
    { key: 'warranty', label: 'شبکه خدمات و گارانتی شرکتی جاده‌ای', icon: '🔧', short: 'گارانتی ۱۸ ماهه' },
  ];

  // =========================================================================
  // 4 COMPETITOR GROUPS WITH SITES, PROS & CONS
  // =========================================================================
  const competitorRadarList: CompetitorRadarData[] = [
    {
      id: 'rst',
      name: 'محورسازان جهان اسپوتا (RST Axles)',
      shortName: 'RST Axles',
      categoryName: 'تولید ملی استاندارد (ECE R13 / TÜV)',
      country: 'ایران (ارومیه)',
      flag: '🇮🇷',
      badge: 'بهینه‌ترین ارزش و حذف ریسک خواب',
      color: '#ea580c',
      strokeColor: '#ea580c',
      fillColor: 'rgba(234, 88, 12, 0.22)',
      textBadgeColor: 'bg-orange-100 text-orange-900 border-orange-200',
      scores: [92, 90, 98, 95, 95, 94],
      websites: [
        { name: 'وب‌سایت رسمی rstaxles.com', url: 'https://rstaxles.com/' },
      ],
      priceRange: '۳۰ تا ۴۰ درصد کمتر از برندهای وارداتی اروپایی و ترک',
      deliveryTime: 'تحویل ۴۸ ساعته از انبارهای ارومیه و تهران',
      warrantyStatus: '۱۸ ماه گارانتی بی‌قیدوشرط شرکتی با کارت هوشمند',
      advantages: [
        'اخذ گواهی رسمی EMARK (ECE R13) از مؤسسه TÜV AUSTRIA',
        'تأمین پیوسته بدون توقف خط و بدون ریسک نوسان دلار، لیر یا تحریم',
        'پکیج کامل مهندسی 3D CAD و حضور کارشناس در خط مونتاژ شاسی',
        'فروش اعتباری با چک صیادی و تسهیلات بانکی ویژه تریلرسازان',
        'شبکه مویرگی قطعات یدکی در ۷ قطب ترانزیتی اصلی و حذف خواب ناوگان',
      ],
      disadvantages: [
        'نیازمند تداوم آگاه‌سازی بازار در برابر تعصب سنتی برخی رانندگان به مارک‌های خارجی',
      ],
      rstAdvantageOver: 'مزیت بی‌رقیب RST تلفیق استانداردهای سخت‌گیرانه اروپا با لجستیک بومی، قیمت رقابتی و شرایط پرداخت پروژه‌ای است.',
      verdict: 'بالاترین نسبت ارزش به قیمت (Value for Money) برای سازنده و راننده.',
    },
    {
      id: 'german',
      name: 'برندهای آلمانی (SAF-HOLLAND / BPW / JOST)',
      shortName: 'برندهای آلمانی',
      categoryName: 'محصولات لوکس اروپایی (Global Premium)',
      country: 'آلمان',
      flag: '🇩🇪',
      badge: 'کیفیت بالا اما با قیمت گزاف و تحریم',
      color: '#2563eb',
      strokeColor: '#2563eb',
      fillColor: 'rgba(37, 99, 235, 0.16)',
      textBadgeColor: 'bg-blue-100 text-blue-900 border-blue-200',
      scores: [98, 35, 30, 20, 85, 45],
      websites: [
        { name: 'SAF-HOLLAND', url: 'https://safholland.com/de/en/' },
        { name: 'BPW Achsen', url: 'https://www.bpw.de/en/' },
        { name: 'JOST World', url: 'https://www.jost-world.com/' },
      ],
      priceRange: 'بیش از ۲ تا ۲.۵ برابر قیمت محورهای استاندارد داخلی',
      deliveryTime: '۳ تا ۶ ماه سفارش‌گذاری خارجی به دلیل تحریم و معطلی گمرک',
      warrantyStatus: 'فاقد نمایندگی رسمی فعال و بدون ضمانت اجرایی در ایران',
      advantages: [
        'کیفیت متالورژی ممتاز، فرآوری دقیق سرپلوس و مقاومت سایشی فوق‌العاده',
        'اعتبار جهانی برند و پذیرش ذهنی بالا نزد رانندگان ترانزیت بین‌المللی',
        'مستندات استاندارد بین‌المللی کامل در نرم‌افزارهای CAD شاسی',
      ],
      disadvantages: [
        'قیمت بسیار گران یورویی و تحمیل بار مالی سنگین به سرمایه در گردش کارخانه',
        'تحریم مستقیم بانکی، عدم امکان گشایش LC و توقف واردات رسمی توسط نمایندگی مادر',
        'کمبود شدید قطعات یدکی اصلی در شهرستان‌ها و ورود قطعات تقلبی (Fake Parts)',
        'عدم ارائه هرگونه چک یا شرایط پرداخت اعتباری ریالی به تریلرساز',
      ],
      rstAdvantageOver: 'پلتفرم RST انطباق ابعادی ۱۰۰٪ با SAF و BPW دارد و تمام قطعات مصرفی با قطعات آلمانی تعویض‌پذیر متقابل (Cross-Ref) هستند، اما با تحویل ۴۸ ساعته و ۳۵٪ قیمت کمتر.',
      verdict: 'کیفیت فوق‌العاده اما به دلیل تحریم و قیمت گزاف، توجیه اقتصادی ندارد.',
    },
    {
      id: 'turkish',
      name: 'برندهای وارداتی ترکیه‌ای (Trax / Serin / Ceylan)',
      shortName: 'برندهای ترکیه‌ای',
      categoryName: 'رقیب وارداتی منطقه‌ای (Regional Competitors)',
      country: 'ترکیه',
      flag: '🇹🇷',
      badge: 'کیفیت متوسط با ریسک ارزی و مرزی',
      color: '#d97706',
      strokeColor: '#d97706',
      fillColor: 'rgba(217, 119, 6, 0.16)',
      textBadgeColor: 'bg-amber-100 text-amber-900 border-amber-200',
      scores: [72, 65, 55, 40, 60, 50],
      websites: [
        { name: 'Özkoç Trax', url: 'https://trax.com.tr/' },
        { name: 'Serin Treyler', url: 'https://www.serin.com.tr/en/anasayfa' },
      ],
      priceRange: 'متوسط رو به بالا (وابسته به نوسان لیر، دلار و عوارض مرز بازرگان)',
      deliveryTime: '۳۰ تا ۶۰ روز خواب سرمایه در فرآیند واردات و ترخیص گمرکی',
      warrantyStatus: 'گارانتی نامعتبر در ایران و عدم حضور تیم فنی پاسخگو',
      advantages: [
        'نزدیکی نسبی جغرافیایی ترکیه به استان آذربایجان غربی',
        'تنوع مناسب در کاربری‌های کفی، کمپرسی و محورهای ۹ و ۱۲ تن',
      ],
      disadvantages: [
        'نوسان لحظه‌ای قیمت ناشی از جهش‌های ارزی و تغییر عوارض ترخیص گمرک',
        'عدم استقرار دفتر مهندسی در ایران جهت تطابق نقشه شاسی با کارخانجات',
        'ورود کالاهای کارگاهی متفرقه ترک به عنوان برند اصلی توسط واسطه‌ها',
        'توقف خط تولید تریلرساز داخلی در صورت بسته شدن یا صف‌های مرز بازرگان',
      ],
      rstAdvantageOver: 'کارخانه RST در قلب قطب تریلرسازی ارومیه مستقر است و سازنده بدون درگیر شدن در فرآیندهای صرافی و گمرک، محور تست‌شده و تضمینی را تحویل خط تولید خود می‌گیرد.',
      verdict: 'قیمت متوسط اما همراه با ناپایداری زنجیره تأمین و ریسک‌های مرزی.',
    },
    {
      id: 'chinese',
      name: 'محورهای متفرقه چینی (Fuwa / HJ / بدون نام)',
      shortName: 'محورهای چینی',
      categoryName: 'محصولات کم‌کیفیت ارزان (Low Cost - High Risk)',
      country: 'چین',
      flag: '🇨🇳',
      badge: 'قیمت پایین اولیه اما خسارت سنگین خواب',
      color: '#dc2626',
      strokeColor: '#dc2626',
      fillColor: 'rgba(220, 38, 38, 0.16)',
      textBadgeColor: 'bg-red-100 text-red-900 border-red-200',
      scores: [35, 82, 50, 50, 25, 20],
      websites: [
        { name: 'Guangdong Fuwa', url: 'http://www.fuwa.cn/' },
        { name: 'HJ Axle Industry', url: 'http://www.hjaxle.com/' },
      ],
      priceRange: 'پایین‌ترین قیمت ورودی در بازار',
      deliveryTime: 'متغیر (واردات کانتینری دریایی یا موجودی بازرگانان بنادر)',
      warrantyStatus: 'عملاً بدون هیچ‌گونه ضمانت‌نامه یا پشتیبانی فنی',
      advantages: [
        'قیمت اولیه ارزان برای کارگاه‌های کوچک و سازندگان بی‌نام‌ونشان',
      ],
      disadvantages: [
        'ضعف شدید در عملیات حرارتی متالورژی و ریسک شکستن سرپلوس تحت بار سنگین',
        'فقدان استانداردهای ایمنی ترمز ECE R13 و طولانی بودن خط ترمز در سرازیری‌ها',
        'سایش بسیار سریع لنت و کاسه چرخ، قفل کردن بلبرینگ و خطر آتش‌سوزی تایر',
        'تحمیل هزینه سنگین خواب تعمیراتی روزانه به شرکت‌های حمل‌ونقل',
      ],
      rstAdvantageOver: 'خرید محور چینی یک تله مالی است؛ هزینه خواب یک تریلر در جاده در کمتر از یک هفته کل اختلاف قیمت خرید محور باکیفیت RST را از بین می‌برد.',
      verdict: 'خطر جانی و مالی شدید در کاربری‌های تانکر سوخت، LPG و کمپرسی سنگین.',
    },
  ];

  // Radar chart mathematical coordinates calculation
  const radarCenter = { x: 230, y: 185 };
  const radarRadius = 125;

  const getCoordinatesForRadar = (scores: [number, number, number, number, number, number]) => {
    return scores
      .map((val, idx) => {
        const angle = (idx * 2 * Math.PI) / 6 - Math.PI / 2;
        const r = (val / 100) * radarRadius;
        const x = radarCenter.x + r * Math.cos(angle);
        const y = radarCenter.y + r * Math.sin(angle);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const getRingPoints = (ratio: number) => {
    return Array.from({ length: 6 })
      .map((_, idx) => {
        const angle = (idx * 2 * Math.PI) / 6 - Math.PI / 2;
        const r = radarRadius * ratio;
        const x = radarCenter.x + r * Math.cos(angle);
        const y = radarCenter.y + r * Math.sin(angle);
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(' ');
  };

  const getAxisEndpoint = (idx: number) => {
    const angle = (idx * 2 * Math.PI) / 6 - Math.PI / 2;
    const x = radarCenter.x + radarRadius * Math.cos(angle);
    const y = radarCenter.y + radarRadius * Math.sin(angle);
    return { x, y };
  };

  const getLabelCoords = (idx: number) => {
    const angle = (idx * 2 * Math.PI) / 6 - Math.PI / 2;
    const offset = 26;
    const x = radarCenter.x + (radarRadius + offset) * Math.cos(angle);
    const y = radarCenter.y + (radarRadius + offset) * Math.sin(angle);
    return { x, y };
  };

  const dmuLabels = [
    'دروازه‌بان فنی',
    'تأییدیه کیفی',
    'مذاکره مالی',
    'مجری مونتاژ',
    'خدمات و جاده',
    'تصمیم نهایی',
  ];

  const selectedCompetitorObj = competitorRadarList.find((c) => c.id === selectedRadarCompetitor) || competitorRadarList[0];

  return (
    <section className="space-y-6">
      {/* ========================================================================= */}
      {/* 1. INTRO HEADER                                                           */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-4 sm:p-6 bg-white border border-zinc-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
              مهندسی فروش سازمانی B2B
            </span>
            <span className="text-xs text-zinc-500">کمیته ۶ نفره خرید OEM و ماتریس تحلیل رقبا</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900">
            مهندسی فروش به سازندگان تریلر و شبکه خدمات پس از فروش
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-4xl leading-relaxed">
            در کارخانه‌های تریلرساز، خرید محور و زیربندی یک تصمیم استراتژیک است که توسط کمیته ۶ نفره خرید (DMU) ارزیابی می‌شود. RST برای هر ذینفع ارزش‌های مستند کیفی و اقتصادی در برابر رقبای آلمانی، ترک و چینی ارائه می‌دهد.
          </p>
        </div>

        <a
          href="https://rstaxles.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shrink-0 shadow-xs text-center"
        >
          سامانه مشتریان در rstaxles.com ↗
        </a>
      </div>

      {/* ========================================================================= */}
      {/* 2. PROOF OF SCALE & ACTIVE SUPPLY: FOX & FILPA STRATEGIC OEM SHOWCASE     */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-4 sm:p-6 bg-white border border-orange-300 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-orange-100 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-black text-lg shrink-0 shadow-xs">
              ★
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-900 font-black border border-orange-200">
                  اثبات عملیاتی در خطوط تولید (Social Proof)
                </span>
                <span className="text-xs text-zinc-400">|</span>
                <span className="text-xs font-bold text-orange-700">تأمین‌کننده فعال Tier-1</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-zinc-900 mt-0.5">
                تأمین بخش زیادی از قطعات و محور برای فوکس (FOX / مارال) و فیلپا (FILPA)
              </h3>
            </div>
          </div>

          {/* Interactive Toggle Tabs */}
          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200 text-xs font-bold w-full sm:w-auto overflow-x-auto">
            <button
              onClick={() => setActivePartnerTab('fox')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activePartnerTab === 'fox'
                  ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs font-black'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🦊 FOX (مارال)
            </button>
            <button
              onClick={() => setActivePartnerTab('filpa')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activePartnerTab === 'filpa'
                  ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs font-black'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🚛 فیلپا (FILPA)
            </button>
            <button
              onClick={() => setActivePartnerTab('synergy')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activePartnerTab === 'synergy'
                  ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs font-black'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🎯 اهرم ۳ تیم اجرایی
            </button>
          </div>
        </div>

        {/* Tab 1: FOX / Maral Details */}
        {activePartnerTab === 'fox' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-8 p-4 rounded-xl bg-orange-50/60 border border-orange-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                  <span className="font-black text-zinc-900 text-sm">
                    محورسازی فوکس (FOX) — بازوی تخصصی محور در گروه صنعتی مارال تریلر
                  </span>
                </div>
                <span className="text-[11px] font-bold text-orange-800 bg-orange-100 px-2.5 py-0.5 rounded-full border border-orange-200">
                  تأمین فعال قطعات و محور
                </span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                گروه صنعتی اسپوتا (RST) در حال حاضر <strong>بخش عمده‌ای از قطعات، توپی، اجزای ترمز و محور</strong> را برای مجموعه محورسازی فوکس (مارال) تأمین می‌کند. مارال تریلر با تیراژ سالانه بیش از ۵,۰۰۰ دستگاه، بزرگ‌ترین سازنده تریلر در ایران و خاورمیانه است.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
                <div className="p-2.5 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">دامنه قطعات تأمینی:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">توپی چرخ، اجزای ترمز، محور و متعلقات</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">اهمیت صنعتی:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">تأیید کیفی بالاترین استانداردهای تولید</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">ارزش برای RST:</span>
                  <span className="font-bold text-orange-700 block mt-0.5">هم‌افزایی اکوسیستمی و درآمد پایدار</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-2.5">
              <div>
                <span className="text-[11px] font-bold text-zinc-500 block">پیام کلیدی برای مدیران:</span>
                <p className="text-xs font-bold text-zinc-900 mt-1 leading-relaxed">
                  حضور RST به عنوان تأمین‌کننده فعال برند فوکس نشان می‌دهد محصولات ما هم‌اکنون در زیر شاسی هزاران دستگاه تریلر مارال در جاده‌های ترانزیتی فعال بوده و آزمون خود را پس داده است.
                </p>
              </div>
              <div className="pt-2 border-t border-zinc-200 flex items-center justify-between text-xs">
                <span className="text-zinc-600">سایت سازنده:</span>
                <a
                  href="https://www.maralsanat.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                >
                  maralsanat.com ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: FILPA Details */}
        {activePartnerTab === 'filpa' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
            <div className="lg:col-span-8 p-4 rounded-xl bg-orange-50/60 border border-orange-200 space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
                  <span className="font-black text-zinc-900 text-sm">
                    شرکت رایا صنعت فیلران (FILPA) — پیشروترین خط مدرن تریلرسازی ارومیه
                  </span>
                </div>
                <span className="text-[11px] font-bold text-orange-800 bg-orange-100 px-2.5 py-0.5 rounded-full border border-orange-200">
                  تأمین فعال محور و زیربندی
                </span>
              </div>
              <p className="text-xs text-zinc-700 leading-relaxed">
                شرکت RST در حال حاضر <strong>بخش زیادی از محورها و قطعات زیربندی</strong> کارخانه بزرگ فیلپا را تأمین می‌کند. فیلپا با خطوط مدرن و سبد کامل تریلرهای کانتینربر، کمپرسی، تانکرهای ۴۸,۵۰۰ لیتری LPG و چادری، یکی از خوشنام‌ترین سازندگان صنعتی کشور است.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs pt-1">
                <div className="p-2.5 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">دامنه تأمین جاری:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">محورهای ۹ تن، قطعات ترمز و تعلیق بادی</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">کاربری‌های نصب‌شده:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">تانکر گاز LPG، کانتینربر و کمپرسی</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">مزیت همکاری:</span>
                  <span className="font-bold text-orange-700 block mt-0.5">نصب روان و تحویل بدون توقف خط</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-4 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-2.5">
              <div>
                <span className="text-[11px] font-bold text-zinc-500 block">پیام کلیدی برای مدیران:</span>
                <p className="text-xs font-bold text-zinc-900 mt-1 leading-relaxed">
                  نصب گسترده محورهای RST در محصولات مدرن فیلپا (به‌ویژه تانکرهای حساس LPG) نشان‌دهنده ضریب ایمنی ۱۰۰٪ و قابلیت اطمینان فوق‌العاده در شرایط بحرانی جاده است.
                </p>
              </div>
              <div className="pt-2 border-t border-zinc-200 flex items-center justify-between text-xs">
                <span className="text-zinc-600">سایت سازنده:</span>
                <a
                  href="https://www.filran.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                >
                  filran.com ↗
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Synergy */}
        {activePartnerTab === 'synergy' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-900 font-black">
                <span>💼</span>
                <span>اهرم مستقیم تیم فروش:</span>
              </div>
              <p className="text-zinc-600 leading-relaxed text-[11.5px]">
                «وقتی فوکس (مارال) و فیلپا قطعات و محورهای خود را از RST می‌گیرند، ریسک خرید برای سایر سازندگان عملاً صفر است.»
              </p>
              <div className="text-[10px] font-bold text-orange-700 bg-orange-50 p-1.5 rounded-lg border border-orange-200">
                نتیجه: کوتاه‌تر شدن چرخه تصمیم‌گیری از ۹۰ روز به کمتر از ۲۰ روز.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-900 font-black">
                <span>📊</span>
                <span>اهرم مستقیم تیم بازاریابی:</span>
              </div>
              <p className="text-zinc-600 leading-relaxed text-[11.5px]">
                انتشار کیس‌استادی‌های مهندسی عملکرد تریلرهای فیلپا و فوکس در اقلیم ایران جهت اثبات راندمان اقتصادی به خریداران عمده ناوگان.
              </p>
              <div className="text-[10px] font-bold text-orange-700 bg-orange-50 p-1.5 rounded-lg border border-orange-200">
                نتیجه: تثبیت برند RST به عنوان تأمین‌کننده منتخب غول‌های صنعت.
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <div className="flex items-center gap-2 text-zinc-900 font-black">
                <span>📢</span>
                <span>اهرم مستقیم تیم رسانه:</span>
              </div>
              <p className="text-zinc-600 leading-relaxed text-[11.5px]">
                تولید محتوای ویدیویی مستند از خطوط مونتاژ فیلپا و فوکس با تمرکز بر لحظه نصب محور و رضایت رانندگان در پایانه‌های باربری.
              </p>
              <div className="text-[10px] font-bold text-orange-700 bg-orange-50 p-1.5 rounded-lg border border-orange-200">
                نتیجه: کشش تقاضا از سمت راننده (Pull Strategy) برای سفارش محور RST.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 3. 6 DMU BUYING COMMITTEE ROLES (INTERACTIVE DRILL-DOWN CARDS)            */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
            <h3 className="text-base font-black text-zinc-900">
              کمیته تصمیم‌گیری ۶ نفره خرید در کارخانجات تریلرسازی (DMU Buying Committee)
            </h3>
          </div>
          <span className="text-xs text-zinc-500">
            برای مشاهده دغدغه فنی، ارزش پیشنهادی RST و مستندات جلسه روی هر نقش کلیک کنید
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
          {dmuRolesData.map((role, idx) => (
            <DrillDownCard
              key={role.id}
              title={role.title}
              subtitle={role.badge}
              category={`کمیته خرید OEM • نقش ۰${idx + 1}`}
              icon={role.icon}
              metricBadge={{
                value: `عضو ۰${idx + 1}`,
                label: dmuLabels[idx] || 'عضو کمیته',
                variant: idx === 0 ? 'orange' : 'gray',
              }}
            >
              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200">
                  <span className="font-bold text-zinc-900 block mb-1">دغدغه اصلی در جلسه خرید:</span>
                  <p className="text-zinc-600 leading-relaxed">{role.question}</p>
                </div>

                <div className="p-3 rounded-xl bg-orange-50 border border-orange-200">
                  <span className="font-bold text-orange-950 block mb-1">ارزش پیشنهادی اختصاصی RST:</span>
                  <p className="text-zinc-700 leading-relaxed">{role.vp}</p>
                </div>

                <div className="pt-1">
                  <span className="text-[11px] font-bold text-zinc-500 block mb-1.5">مستندات تحویلی در جلسه فنی:</span>
                  <div className="space-y-1.5">
                    {role.deliverables.map((del, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-zinc-700">
                        <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                          ✓
                        </span>
                        <span className="leading-tight">{del}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DrillDownCard>
          ))}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4. ALTERNATIVE COMPETITORS & INTERACTIVE SPIDER / RADAR CHART             */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-4 sm:p-6 bg-white border border-zinc-200 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-zinc-100 pb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                ماتریس استراتژیک رقبای جایگزین
              </span>
              <span className="text-xs text-zinc-500">تحلیل مقایسه‌ای آلمان، ترکیه، چین و جایگاه RST</span>
            </div>
            <h3 className="text-base sm:text-xl font-black text-zinc-900">
              آنالیز رقبای جایگزین و نمودار راداری (تار عنکبوتی) ارزش RST
            </h3>
          </div>

          {/* Quick Filter Switcher */}
          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200 text-xs font-bold overflow-x-auto w-full sm:w-auto">
            <button
              onClick={() => setSelectedRadarCompetitor('all')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                selectedRadarCompetitor === 'all'
                  ? 'bg-white text-zinc-900 border border-zinc-300 shadow-xs font-black'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🕸️ مقایسه ۴گانه
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('rst')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-1 ${
                selectedRadarCompetitor === 'rst'
                  ? 'bg-orange-600 text-white shadow-xs font-black'
                  : 'text-orange-700 hover:text-orange-900'
              }`}
            >
              <span>🇮🇷</span>
              <span>RST</span>
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('german')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-1 ${
                selectedRadarCompetitor === 'german'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-blue-700 hover:text-blue-900'
              }`}
            >
              <span>🇩🇪</span>
              <span>آلمان</span>
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('turkish')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-1 ${
                selectedRadarCompetitor === 'turkish'
                  ? 'bg-amber-600 text-white shadow-xs font-black'
                  : 'text-amber-700 hover:text-amber-900'
              }`}
            >
              <span>🇹🇷</span>
              <span>ترکیه</span>
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('chinese')}
              className={`flex-1 sm:flex-none px-3 py-1.5 rounded-lg transition-all whitespace-nowrap flex items-center justify-center gap-1 ${
                selectedRadarCompetitor === 'chinese'
                  ? 'bg-red-600 text-white shadow-xs font-black'
                  : 'text-red-700 hover:text-red-900'
              }`}
            >
              <span>🇨🇳</span>
              <span>چین</span>
            </button>
          </div>
        </div>

        {/* 2-Column Responsive Layout: Radar on Right, Non-Stacked Grid on Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          
          {/* Radar / Spider Chart Panel (lg:col-span-5) */}
          <div className="lg:col-span-5 p-4 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-between space-y-3 shadow-xs">
            <div className="w-full flex items-center justify-between border-b border-zinc-200 pb-2 text-xs">
              <span className="font-black text-zinc-900 flex items-center gap-1.5">
                <span>🕸️</span>
                <span>نمودار تار عنکبوتی ابعاد ۶گانه</span>
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">مقیاس: ۰ تا ۱۰۰</span>
            </div>

            {/* SVG Spider Chart */}
            <div className="w-full max-w-[380px] sm:max-w-[420px] aspect-[460/370] relative flex items-center justify-center">
              <svg viewBox="0 0 460 370" className="w-full h-full select-none overflow-visible">
                {/* Concentric Web Rings (20%, 40%, 60%, 80%, 100%) */}
                {[0.2, 0.4, 0.6, 0.8, 1.0].map((ratio, rIdx) => (
                  <polygon
                    key={rIdx}
                    points={getRingPoints(ratio)}
                    fill="none"
                    stroke="#e4e4e7"
                    strokeWidth={rIdx === 4 ? '1.5' : '1'}
                    strokeDasharray={rIdx === 4 ? 'none' : '3 3'}
                  />
                ))}

                {/* 6 Radial Axes */}
                {Array.from({ length: 6 }).map((_, aIdx) => {
                  const end = getAxisEndpoint(aIdx);
                  return (
                    <line
                      key={aIdx}
                      x1={radarCenter.x}
                      y1={radarCenter.y}
                      x2={end.x}
                      y2={end.y}
                      stroke="#d4d4d8"
                      strokeWidth="1"
                    />
                  );
                })}

                {/* Polygons */}
                {competitorRadarList.map((comp) => {
                  const isVisible = selectedRadarCompetitor === 'all' || selectedRadarCompetitor === comp.id;
                  if (!isVisible) return null;
                  const isHighlight = selectedRadarCompetitor === comp.id || (selectedRadarCompetitor === 'all' && comp.id === 'rst');

                  return (
                    <g key={comp.id}>
                      <polygon
                        points={getCoordinatesForRadar(comp.scores)}
                        fill={comp.fillColor}
                        stroke={comp.strokeColor}
                        strokeWidth={isHighlight ? '3' : '1.5'}
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                      />
                      {/* Vertex Dots */}
                      {comp.scores.map((score, sIdx) => {
                        const angle = (sIdx * 2 * Math.PI) / 6 - Math.PI / 2;
                        const r = (score / 100) * radarRadius;
                        const px = radarCenter.x + r * Math.cos(angle);
                        const py = radarCenter.y + r * Math.sin(angle);
                        return (
                          <circle
                            key={sIdx}
                            cx={px}
                            cy={py}
                            r={isHighlight ? 4 : 2.5}
                            fill="#ffffff"
                            stroke={comp.strokeColor}
                            strokeWidth="2"
                            className="cursor-pointer"
                            onMouseEnter={() => setHoveredDimensionIdx(sIdx)}
                            onMouseLeave={() => setHoveredDimensionIdx(null)}
                          />
                        );
                      })}
                    </g>
                  );
                })}

                {/* Perimeter Dimension Labels */}
                {radarDimensions.map((dim, dIdx) => {
                  const coords = getLabelCoords(dIdx);
                  const isHovered = hoveredDimensionIdx === dIdx;
                  return (
                    <g
                      key={dIdx}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredDimensionIdx(dIdx)}
                      onMouseLeave={() => setHoveredDimensionIdx(null)}
                    >
                      <text
                        x={coords.x}
                        y={coords.y}
                        textAnchor="middle"
                        dominantBaseline="central"
                        className={`text-[9px] sm:text-[10px] font-black transition-colors ${
                          isHovered ? 'fill-orange-600 font-extrabold' : 'fill-zinc-700'
                        }`}
                      >
                        {dim.icon} {dim.short}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>

            {/* Quick Average Score Pills below radar */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-1.5 pt-2 border-t border-zinc-200 text-xs">
              {competitorRadarList.map((comp) => (
                <button
                  key={comp.id}
                  onClick={() => setSelectedRadarCompetitor(comp.id)}
                  className={`p-1.5 rounded-lg border text-right transition-all flex flex-col justify-between ${
                    selectedRadarCompetitor === comp.id
                      ? 'bg-white shadow-xs font-black ring-1'
                      : 'bg-white/80 hover:bg-white text-zinc-700'
                  }`}
                  style={{
                    borderColor: selectedRadarCompetitor === comp.id ? comp.strokeColor : '#e4e4e7',
                  }}
                >
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: comp.strokeColor }} />
                    <span className="text-[10px] font-bold truncate">{comp.flag} {comp.shortName}</span>
                  </div>
                  <div className="text-[9px] text-zinc-500 font-mono mt-0.5" dir="ltr">
                    میانگین: {Math.round(comp.scores.reduce((a, b) => a + b, 0) / 6)}٪
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Left Column (lg:col-span-7): Clean 2x2 Grid or Focused Card (NO VERTICAL STACKING) */}
          <div className="lg:col-span-7">
            {selectedRadarCompetitor === 'all' ? (
              /* 2x2 Grid View when "All" is active (Compact, Side-by-Side, No endless vertical scrolling) */
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {competitorRadarList.map((comp) => {
                  const avgScore = Math.round(comp.scores.reduce((a, b) => a + b, 0) / 6);
                  return (
                    <div
                      key={comp.id}
                      className={`p-4 rounded-xl border transition-all flex flex-col justify-between space-y-2.5 ${
                        comp.id === 'rst'
                          ? 'bg-orange-50/70 border-orange-300 ring-2 ring-orange-500/10 shadow-xs'
                          : 'bg-white border-zinc-200 hover:border-zinc-300 shadow-xs'
                      }`}
                    >
                      <div>
                        {/* Header */}
                        <div className="flex items-start justify-between gap-2 border-b border-zinc-100 pb-2">
                          <div className="flex items-center gap-1.5">
                            <span className="text-lg">{comp.flag}</span>
                            <div>
                              <h4 className="text-xs sm:text-sm font-black text-zinc-900 leading-tight">
                                {comp.name.split('(')[0].trim()}
                              </h4>
                              <span className="text-[10px] text-zinc-500 block">
                                {comp.country}
                              </span>
                            </div>
                          </div>
                          <span
                            className="font-mono text-[10px] font-black px-2 py-0.5 rounded-md text-white shrink-0"
                            style={{ backgroundColor: comp.strokeColor }}
                          >
                            {avgScore} / ۱۰۰
                          </span>
                        </div>

                        {/* Websites */}
                        <div className="flex flex-wrap items-center gap-1 pt-1.5">
                          {comp.websites.map((site, sIdx) => (
                            <a
                              key={sIdx}
                              href={site.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-2 py-0.5 rounded text-[9px] font-bold transition-colors bg-zinc-100 hover:bg-orange-100 text-zinc-700 hover:text-orange-900 border border-zinc-200 flex items-center gap-0.5"
                            >
                              <span>{site.name}</span>
                              <span className="text-orange-600 font-bold">↗</span>
                            </a>
                          ))}
                        </div>

                        {/* Top Strength & Top Risk */}
                        <div className="space-y-1.5 pt-2 text-[11px]">
                          <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-100">
                            <span className="font-bold text-emerald-950 block text-[10px] mb-0.5">نقطه قوت اصلی:</span>
                            <span className="text-emerald-900 line-clamp-2 leading-tight">{comp.advantages[0]}</span>
                          </div>
                          <div className="p-2 rounded-lg bg-rose-50 border border-rose-100">
                            <span className="font-bold text-rose-950 block text-[10px] mb-0.5">گلوگاه و ریسک:</span>
                            <span className="text-rose-900 line-clamp-2 leading-tight">{comp.disadvantages[0]}</span>
                          </div>
                        </div>
                      </div>

                      {/* Bottom action to isolate */}
                      <button
                        onClick={() => setSelectedRadarCompetitor(comp.id)}
                        className="w-full py-1.5 rounded-lg text-[10px] font-bold text-center border border-zinc-200 hover:bg-zinc-100 transition-colors"
                      >
                        مشاهده تحلیل تفصیلی و ارزش RST ↗
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Single Deep-Dive Card when an individual competitor is selected */
              <div
                className={`p-4 sm:p-5 rounded-2xl border transition-all space-y-4 shadow-sm ${
                  selectedCompetitorObj.id === 'rst'
                    ? 'bg-orange-50/70 border-orange-300 ring-2 ring-orange-500/10'
                    : 'bg-white border-zinc-200'
                }`}
              >
                {/* Header */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200/80 pb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl">{selectedCompetitorObj.flag}</span>
                    <div>
                      <h4 className="text-sm sm:text-base font-black text-zinc-900">
                        {selectedCompetitorObj.name}
                      </h4>
                      <span className="text-[11px] text-zinc-500 block">
                        {selectedCompetitorObj.categoryName} • {selectedCompetitorObj.country}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5">
                    {selectedCompetitorObj.websites.map((site, sIdx) => (
                      <a
                        key={sIdx}
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors bg-zinc-100 hover:bg-orange-100 text-zinc-800 hover:text-orange-900 border border-zinc-200 flex items-center gap-1"
                      >
                        <span>{site.name}</span>
                        <span className="text-orange-600 font-bold">↗</span>
                      </a>
                    ))}
                    <button
                      onClick={() => setSelectedRadarCompetitor('all')}
                      className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-zinc-200 hover:bg-zinc-300 text-zinc-800 transition-colors"
                    >
                      ✕ بستن و نمایش همه
                    </button>
                  </div>
                </div>

                {/* 3 Quick Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                  <div className="p-2 rounded-lg bg-white border border-zinc-200">
                    <span className="text-[10px] text-zinc-500 block">بهای تمام‌شده:</span>
                    <span className="font-bold text-zinc-900 text-[11px] block mt-0.5">{selectedCompetitorObj.priceRange}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-zinc-200">
                    <span className="text-[10px] text-zinc-500 block">زمان تحویل:</span>
                    <span className="font-bold text-zinc-900 text-[11px] block mt-0.5">{selectedCompetitorObj.deliveryTime}</span>
                  </div>
                  <div className="p-2 rounded-lg bg-white border border-zinc-200">
                    <span className="text-[10px] text-zinc-500 block">وضعیت گارانتی:</span>
                    <span className="font-bold text-zinc-900 text-[11px] block mt-0.5">{selectedCompetitorObj.warrantyStatus}</span>
                  </div>
                </div>

                {/* Pros & Cons in 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                    <span className="font-black text-emerald-950 flex items-center gap-1 text-[11px]">
                      <span>✓</span>
                      <span>مزایا و نقاط قوت:</span>
                    </span>
                    <ul className="space-y-1 text-[11px] text-emerald-900 leading-relaxed pr-2 list-disc list-inside">
                      {selectedCompetitorObj.advantages.map((adv, aIdx) => (
                        <li key={aIdx}>{adv}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1.5">
                    <span className="font-black text-rose-950 flex items-center gap-1 text-[11px]">
                      <span>✗</span>
                      <span>معایب و ریسک‌ها برای خریدار:</span>
                    </span>
                    <ul className="space-y-1 text-[11px] text-rose-900 leading-relaxed pr-2 list-disc list-inside">
                      {selectedCompetitorObj.disadvantages.map((dis, dIdx) => (
                        <li key={dIdx}>{dis}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RST Edge Box */}
                {selectedCompetitorObj.id !== 'rst' ? (
                  <div className="p-3 rounded-xl bg-orange-100/70 border border-orange-300 text-xs">
                    <div className="flex items-center gap-1.5 font-black text-orange-950 mb-0.5">
                      <span>⚡</span>
                      <span>ارزش متمایز و برتری قطعی RST در برابر این گزینه:</span>
                    </div>
                    <p className="text-zinc-800 leading-relaxed text-[11.5px]">
                      {selectedCompetitorObj.rstAdvantageOver}
                    </p>
                  </div>
                ) : (
                  <div className="p-3 rounded-xl bg-orange-600 text-white text-xs shadow-xs">
                    <span className="font-black block mb-0.5 text-orange-100">جمع‌بندی جایگاه استراتژیک RST:</span>
                    <p className="leading-relaxed text-white text-[11.5px]">
                      RST تنها گزینه در بازار ایران است که همزمان استاندارد ECE R13 اروپایی، تحویل فوری ۴۸ ساعته از ارومیه، شرایط پرداخت اعتباری ریالی و گارانتی رسمی تعویض قطعه را فراهم می‌سازد.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

        </div>

        {/* Master Comparison Table across all 6 Dimensions with Mobile Horizontal Scroll */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-700">
            <span>ماتریس مقایسه امتیازات شاخص‌های ۶گانه (Scores Matrix):</span>
            <span className="text-[10px] text-zinc-500 hidden sm:inline">نمرات از ۱۰۰ بر پایه آزمون‌های آزمایشگاهی و پیمایش جاده‌ای</span>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-200 bg-zinc-50/50">
            <table className="w-full text-right text-xs min-w-[520px]">
              <thead>
                <tr className="border-b border-zinc-200 text-zinc-500 text-[11px]">
                  <th className="py-2.5 pr-3 font-bold">شاخص ارزیابی</th>
                  <th className="py-2.5 px-3 font-black text-orange-700 bg-orange-50/70">🇮🇷 RST Axles</th>
                  <th className="py-2.5 px-3 font-bold text-blue-700">🇩🇪 برندهای آلمانی</th>
                  <th className="py-2.5 px-3 font-bold text-amber-700">🇹🇷 برندهای ترکیه‌ای</th>
                  <th className="py-2.5 px-3 font-bold text-red-700">🇨🇳 محورهای چینی</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {radarDimensions.map((dim, dIdx) => (
                  <tr key={dim.key} className="hover:bg-white/80 transition-colors">
                    <td className="py-2 pr-3 font-bold text-zinc-800 flex items-center gap-1.5">
                      <span>{dim.icon}</span>
                      <span>{dim.label}</span>
                    </td>
                    <td className="py-2 px-3 font-mono font-black text-orange-700 bg-orange-50/70">
                      {competitorRadarList[0].scores[dIdx]}٪
                    </td>
                    <td className="py-2 px-3 font-mono text-zinc-700 font-bold">
                      {competitorRadarList[1].scores[dIdx]}٪
                    </td>
                    <td className="py-2 px-3 font-mono text-zinc-700 font-bold">
                      {competitorRadarList[2].scores[dIdx]}٪
                    </td>
                    <td className="py-2 px-3 font-mono text-zinc-700 font-bold">
                      {competitorRadarList[3].scores[dIdx]}٪
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-zinc-300 font-black text-zinc-900 bg-white">
                  <td className="py-2.5 pr-3">میانگین کل نمره رقابتی:</td>
                  <td className="py-2.5 px-3 font-mono text-orange-600 font-black bg-orange-100/70 text-sm">
                    ۹۴ / ۱۰۰
                  </td>
                  <td className="py-2.5 px-3 font-mono text-blue-700">
                    ۵۲ / ۱۰۰
                  </td>
                  <td className="py-2.5 px-3 font-mono text-amber-700">
                    ۵۷ / ۱۰۰
                  </td>
                  <td className="py-2.5 px-3 font-mono text-red-700">
                    ۴۳ / ۱۰۰
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 5. SKU CATALOG & CROSS-REFERENCE EXPLORER                                  */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-4 sm:p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
          <div>
            <span className="text-xs font-bold text-orange-600">کاتالوگ هوشمند پارت‌نامبر استاندارد (SKU)</span>
            <h3 className="text-base sm:text-lg font-black text-zinc-900 mt-0.5">
              سیستم کدگذاری بین‌المللی قطعات و جدول انطباق (Cross-Reference)
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 font-bold border border-zinc-200">
            انطباق ۱۰۰٪ با SAF و BPW
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-bold text-zinc-500 block">انتخاب قطعه برای مشاهده مشخصات کدینگ:</span>
            <div className="space-y-1.5">
              {Object.keys(skuCatalog).map((key) => {
                const sku = skuCatalog[key];
                const isSelected = selectedSku === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedSku(key)}
                    className={`w-full p-2.5 rounded-xl border text-right transition-all flex items-center justify-between text-xs ${
                      isSelected
                        ? 'bg-orange-50 text-orange-950 border-orange-500 shadow-xs font-bold ring-2 ring-orange-500/20'
                        : 'bg-zinc-50 text-zinc-800 border-zinc-200 hover:border-zinc-300'
                    }`}
                  >
                    <span className="truncate">{sku.title.split('(')[0].trim()}</span>
                    <span className="font-mono text-[10px] shrink-0 mr-1 text-zinc-500">{key}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8 p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-3.5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-2.5">
              <div>
                <span className="font-mono text-xs font-black text-orange-600">{currentSku.code}</span>
                <h4 className="text-base font-black text-zinc-900 mt-0.5">{currentSku.title}</h4>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-bold text-zinc-800">
                {currentSku.family}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-zinc-200">
                <span className="text-zinc-500 block">سازگاری و کاربرد:</span>
                <span className="font-medium text-zinc-900 block mt-1">{currentSku.compat}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-zinc-200">
                <span className="text-zinc-500 block">سری ساخت و استاندارد:</span>
                <span className="font-mono text-zinc-800 block mt-1">{currentSku.batch}</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs">
              <span className="font-bold text-orange-950 block mb-0.5">مشخصات فنی و تلرانس‌ها:</span>
              <p className="text-zinc-700 leading-relaxed font-mono text-[11px]">{currentSku.specs}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

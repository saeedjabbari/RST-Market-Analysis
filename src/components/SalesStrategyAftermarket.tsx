import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { dmuRolesData, skuCatalog } from '../data/marketData';
import { DrillDownCard } from './common/DrillDownCard';

interface EngineeringDoc {
  id: string;
  title: string;
  format: string;
  desc: string;
  icon: string;
  importance: 'حیاتی' | 'الزامی' | 'پشتیبان';
  specs: string;
}

interface FunnelStage {
  id: string;
  stageNumber: number;
  title: string;
  subtitle: string;
  conversionRate: string;
  duration: string;
  targetRole: string;
  dmuRef: string;
  gateMilestone: string;
  summary: string;
  widthPercent: number;
  colorLevel: string;
  packageDocs: EngineeringDoc[];
}

interface CompetitorRadarData {
  id: 'rst' | 'german' | 'turkish' | 'chinese';
  name: string;
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
  const [activeFunnelStageId, setActiveFunnelStageId] = useState<string>('stage-2');
  const [selectedDocId, setSelectedDocId] = useState<string | null>(null);
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
  // 4 COMPETITOR GROUPS WITH REAL-WORLD SPECS, SITES, PROS & CONS
  // =========================================================================
  const competitorRadarList: CompetitorRadarData[] = [
    {
      id: 'rst',
      name: 'محورسازان جهان اسپوتا (RST Axles)',
      categoryName: 'پلتفرم ملی با استاندارد اروپایی TÜV',
      country: 'ایران (ارومیه)',
      flag: '🇮🇷',
      badge: 'انتخاب بهینه مهندسی و ارزش‌آفرین',
      color: '#ea580c',
      strokeColor: '#ea580c',
      fillColor: 'rgba(234, 88, 12, 0.22)',
      textBadgeColor: 'bg-orange-100 text-orange-900 border-orange-200',
      scores: [92, 90, 98, 95, 95, 94],
      websites: [
        { name: 'وب‌سایت رسمی rstaxles.com', url: 'https://rstaxles.com/' },
      ],
      priceRange: '۳۰ تا ۴۰ درصد کمتر از برندهای وارداتی اروپایی و ترک',
      deliveryTime: 'فوری ۴۸ ساعته از انبارهای ارومیه و هاب تهران',
      warrantyStatus: '۱۸ ماه گارانتی بی‌قیدوشرط شرکتی با کارت هوشمند',
      advantages: [
        'اخذ گواهی رسمی EMARK (ECE R13 Annex 11) از مؤسسه معتبر TÜV AUSTRIA',
        'تأمین پیوسته بدون توقف خط و بدون ریسک نوسان دلار، لیر یا تحریم‌های بانکی',
        'پکیج کامل مهندسی 3D CAD و حضور کارشناس در خط مونتاژ شاسی کارخانجات',
        'فروش اعتباری با چک صیادی و تسهیلات بانکی ویژه سازندگان تریلر',
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
        { name: 'SAF-HOLLAND Official', url: 'https://safholland.com/de/en/' },
        { name: 'BPW Bergische Achsen', url: 'https://www.bpw.de/en/' },
        { name: 'JOST World Group', url: 'https://www.jost-world.com/' },
      ],
      priceRange: 'بیش از ۲ تا ۲.۵ برابر قیمت محورهای استاندارد داخلی',
      deliveryTime: '۳ تا ۶ ماه سفارش‌گذاری خارجی به دلیل تحریم و معطلی گمرک',
      warrantyStatus: 'فاقد نمایندگی رسمی فعال و بدون ضمانت اجرایی در ایران',
      advantages: [
        'کیفیت متالورژی عالی، فرآوری مدرن سرپلوس و مقاومت سایشی فوق‌العاده',
        'اعتبار جهانی برند و پذیرش ذهنی بالا نزد رانندگان خطوط ترانزیت اروپا',
        'مستندات استاندارد بین‌المللی کامل در نرم‌افزارهای CAD شاسی',
      ],
      disadvantages: [
        'قیمت بسیار گران یورویی و تحمیل بار مالی سنگین به سرمایه در گردش کارخانه',
        'تحریم مستقیم بانکی، عدم امکان گشایش LC و توقف واردات رسمی توسط نمایندگی مادر',
        'کمبود شدید قطعات یدکی اصلی در شهرستان‌ها و جولان قطعات فیک (Fake Parts)',
        'عدم ارائه هرگونه چک یا شرایط پرداخت اعتباری ریالی به تریلرساز',
      ],
      rstAdvantageOver: 'پلتفرم RST انطباق ابعادی ۱۰۰٪ با SAF و BPW دارد، به طوری که تمام قطعات مصرفی (دیسک، لنت، بلبرینگ و بوستر) تعویض‌پذیر متقابل (Cross-Ref) هستند، اما با تحویل ۴۸ ساعته و ۳۵٪ قیمت کمتر.',
      verdict: 'کیفیت فوق‌العاده اما به دلیل تحریم و قیمت گزاف، توجیه اقتصادی ندارد.',
    },
    {
      id: 'turkish',
      name: 'برندهای وارداتی ترکیه‌ای (Trax / Serin / Ceylan)',
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
        { name: 'Özkoç Trax Axle', url: 'https://trax.com.tr/' },
        { name: 'Serin Treyler Konya', url: 'https://www.serin.com.tr/en/anasayfa' },
      ],
      priceRange: 'متوسط رو به بالا (وابسته به نوسان لیر، یورو و تعرفه مرز بازرگان)',
      deliveryTime: '۳۰ تا ۶۰ روز خواب سرمایه در فرآیند واردات و ترخیص گمرکی',
      warrantyStatus: 'گارانتی نامعتبر در ایران و عدم حضور تیم فنی پاسخگو',
      advantages: [
        'نزدیکی نسبی جغرافیایی ترکیه به استان آذربایجان غربی',
        'تنوع مناسب در کاربری‌های کفی، کمپرسی و محورهای ۹ و ۱۲ تن',
      ],
      disadvantages: [
        'نوسان لحظه‌ای قیمت ناشی از جهش‌های ارزی و تغییر عوارض ترخیص گمرک',
        'عدم استقرار دفتر مهندسی در ایران جهت تطابق نقشه شاسی با کارخانجات',
        'ورود کالاهای کارگاهی متفرقه ترک به عنوان برند اصلی توسط واردکنندگان سودجو',
        'توقف خط تولید تریلرساز داخلی در صورت بسته شدن یا صف‌های مرز بازرگان',
      ],
      rstAdvantageOver: 'کارخانه RST در قلب قطب تریلرسازی ارومیه مستقر است و سازنده بدون درگیر شدن در فرآیندهای صرافی و گمرک، محور تست‌شده و تضمینی را تحویل خط تولید خود می‌گیرد.',
      verdict: 'قیمت متوسط اما همراه با ناپایداری زنجیره تأمین و ریسک‌های مرزی.',
    },
    {
      id: 'chinese',
      name: 'محورهای متفرقه چینی (Fuwa / HJ / بدون نام)',
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
        { name: 'Guangdong Fuwa Heavy', url: 'http://www.fuwa.cn/' },
        { name: 'HJ Trailer Axle', url: 'http://www.hjaxle.com/' },
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
      rstAdvantageOver: 'خرید محور چینی یک تله مالی است؛ هزینه خواب یک تریلر در جاده بندرعباس در کمتر از یک هفته کل اختلاف قیمت خرید محور باکیفیت RST را از بین می‌برد.',
      verdict: 'خطر جانی و مالی شدید در کاربری‌های تانکر سوخت، LPG و کمپرسی سنگین.',
    },
  ];

  // Radar chart mathematical coordinates calculation
  const radarCenter = { x: 240, y: 195 };
  const radarRadius = 135;

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

  const funnelStages: FunnelStage[] = [
    {
      id: 'stage-1',
      stageNumber: 1,
      title: 'غربالگری ابعادی و تماس فنی اولیه',
      subtitle: 'Fit & Envelope Screening',
      conversionRate: '۱۰۰٪ ورودی (Lead)',
      duration: 'هفته ۱ تا ۲',
      targetRole: 'مدیر مهندسی و سرپرست تحقیق‌وتوسعه (R&D)',
      dmuRef: 'DMU 01 — واحد فنی و مهندسی',
      summary: 'ارزیابی مقدماتی فضای اشغال و ابعاد شاسی تریلرساز با پلتفرم محورهای ۹ و ۱۲ تن RST قبل از هرگونه تغییرات کارخانه‌ای.',
      gateMilestone: 'تأیید اولیه همخوانی ابعاد شاسی و فاصله تیرک‌ها با فضای استاندارد محور RST',
      widthPercent: 100,
      colorLevel: 'bg-zinc-100 border-zinc-300 text-zinc-900',
      packageDocs: [
        {
          id: 'doc-1-1',
          title: 'مدل سه‌بعدی اجمالی فضای اشغال (Envelope 3D CAD)',
          format: 'STEP / IGES',
          importance: 'حیاتی',
          icon: '📐',
          desc: 'مدل سه‌بعدی ابعاد بیرونی محور، توپی چرخ، بازوی تعلیق و کیسه باد جهت بررسی تداخل هندسی اولیه در نرم‌افزار CAD شاسی.',
          specs: 'حجم سبک کمتر از ۵ مگابایت، بدون جزئیات محرمانه داخلی، آماده ایمپورت در SolidWorks و CATIA',
        },
        {
          id: 'doc-1-2',
          title: 'برگه مشخصات نشیمنگاه شاسی (Interface Spec Sheet)',
          format: 'PDF',
          importance: 'الزامی',
          icon: '📏',
          desc: 'ابعاد دقیق نشیمنگاه براکت‌های Hanger، فواصل استاندارد تیرک‌های شاسی تریلر و موقعیت نقاط ثقل.',
          specs: 'تلرانس ابعادی ±۰.۵ میلی‌متر، راهنمای موقعیت پین تعلیق و شیب مجاز شاسی',
        },
        {
          id: 'doc-1-3',
          title: 'راهنمای استاندارد عرض چرخ و توپی (Track & PCD Guide)',
          format: 'PDF / XLS',
          importance: 'الزامی',
          icon: '🛞',
          desc: 'جدول کامل فاصله عرضی محور (Track 2040mm / 2095mm)، الگوی پیچ‌های توپی (۱۰ سوراخ ۳۳۵ میلی‌متر) و افست رینگ.',
          specs: 'مطابق استانداردهای بین‌المللی ISO 4107 و رینگ‌های استاندارد ۲۲.۵ اینچ',
        },
        {
          id: 'doc-1-4',
          title: 'فرم ممیزی نیازهای ابعادی شاسی تریلرساز (OEM Survey)',
          format: 'Interactive Form',
          importance: 'پشتیبان',
          icon: '📋',
          desc: 'پرسشنامه تخصصی دریافت مشخصات کاربری تریلر (کمپرسی، کفی، تانکر یا چادری) جهت پیکربندی دقیق سیستم تعلیق.',
          specs: 'شامل نوع بار مجاز، ارتفاع کوپلینگ (Kingpin Height) و شرایط جاده‌ای ناوگان',
        },
      ],
    },
    {
      id: 'stage-2',
      stageNumber: 2,
      title: 'انطباق سه‌بعدی و ورود به نقشه شاسی (Design-In)',
      subtitle: 'Virtual Assembly & FEA Integration',
      conversionRate: '۷۵٪ پیشروی (Virtual Assembly)',
      duration: 'هفته ۳ تا ۵',
      targetRole: 'طراحان ارشد شاسی و تیم مدلسازی CAD',
      dmuRef: 'DMU 01 — طراحان شاسی',
      summary: 'انطباق پارامتریک و کامل فایل‌های CAD قطعات RST در محیط مونتاژ شاسی کارخانه و شبیه‌سازی رفتار استاتیکی و دینامیکی.',
      gateMilestone: 'نهایی‌سازی نقشه اجرایی شاسی بدون نیاز به تغییر جیگ و فیکسچرهای خط تولید',
      widthPercent: 82,
      colorLevel: 'bg-orange-50 border-orange-300 text-orange-950',
      packageDocs: [
        {
          id: 'doc-2-1',
          title: 'فایل‌های پارامتریک سه‌بعدی دقیق (High-Detail 3D Models)',
          format: 'SolidWorks / STEP / Parasolid',
          importance: 'حیاتی',
          icon: '💻',
          desc: 'مدل سه‌بعدی تمام‌جزئیات از تیر محور، براکت‌های مونتاژ، پوسته کالیپر ترمز، بوسترها، کمک‌فنرها و سنسور رینگ ABS.',
          specs: 'تفکیک قطعات متحرک تعلیق بادی با قابلیت شبیه‌سازی کورس نوسان (Kinematics Motion)',
        },
        {
          id: 'doc-2-2',
          title: 'نقشه‌های دوبعدی ابعادی اجرایی با تلرانس (2D Drawings)',
          format: 'AutoCAD DWG / PDF',
          importance: 'حیاتی',
          icon: '📐',
          desc: 'نقشه‌های فنی جزئیات سوراخ‌کاری شاسی، خطوط جوشکاری مجاز و مشخصات الکترود و سیم جوش طبق استاندارد AWS.',
          specs: 'تلرانس‌گذاری هندسی کامل GD&T مطابق با ISO 1101 برای خطوط برش لیزر و پلاسما',
        },
        {
          id: 'doc-2-3',
          title: 'گزارش ماتریس تنش و تحلیل اجزای محدود (FEA Stress Report)',
          format: 'PDF / FEA Summary',
          importance: 'الزامی',
          icon: '⚖️',
          desc: 'شبیه‌سازی تنش‌های استاتیکی و دینامیکی تیر محور و نشیمنگاه شاسی تحت شتاب‌گیری، ترمز ناگهانی و پیچش پیچ‌های جاده.',
          specs: 'ضریب اطمینان ایمنی بالاتر از ۲.۵ در بارهای ضربه‌ای حداکثری (Shock Loads)',
        },
        {
          id: 'doc-2-4',
          title: 'دیاگرام لوله‌کشی پنوماتیک و شیر بالابر (Pneumatics Schematic)',
          format: 'PDF / DWG',
          importance: 'الزامی',
          icon: '💨',
          desc: 'نقشه اتصالات خطوط هوای فشرده بوسترها، سوپاپ تنظیم ارتفاع تعلیق (Colas Valve) و مکانیزم اتوماتیک بالابر محور اول.',
          specs: 'اتصالات فیتینگ سایز ۸ و ۱۰ میلی‌متر مطابق استاندارد DIN 74324',
        },
      ],
    },
    {
      id: 'stage-3',
      stageNumber: 3,
      title: 'صحه‌گذاری کیفی و آزمون‌های استاندارد (QC Audit)',
      subtitle: 'Rigorous Testing & ECE R13 Certs',
      conversionRate: '۵۵٪ پیشروی (Quality Cleared)',
      duration: 'هفته ۶ تا ۸',
      targetRole: 'مدیر کنترل کیفیت (QC) و بازرسی مواد',
      dmuRef: 'DMU 02 — کنترل کیفیت و بازرسی',
      summary: 'ممیزی پرونده کامل آزمون‌های متالورژی، تست خستگی و گواهی‌نامه‌های رسمی اروپایی برای اطمینان از ایمنی ۱۰۰٪ در جاده.',
      gateMilestone: 'صدور تاییدیه رسمی انطباق کیفی و متالورژی توسط کمیته کنترل کیفیت کارخانه تریلرساز',
      widthPercent: 65,
      colorLevel: 'bg-orange-100 border-orange-400 text-orange-950',
      packageDocs: [
        {
          id: 'doc-3-1',
          title: 'گواهی بین‌المللی آزمون دینامیکی ترمز (ECE R13 Annex 11)',
          format: 'TÜV AUSTRIA Certified PDF',
          importance: 'حیاتی',
          icon: '🛑',
          desc: 'پرونده رسمی تست دینامیکی سیستم ترمز دیسکی و کاسه‌ای و عملکرد بدون افت حرارتی در شیب‌های تند جاده‌ای.',
          specs: 'گواهی رسمی انطباق با مقررات سازمان ملل ECE R13 از معتبرترین آزمایشگاه اروپایی',
        },
        {
          id: 'doc-3-2',
          title: 'دفترچه شناسنامه متالورژی فولاد و ریخته‌گری (Mill Test / MTC)',
          format: 'PDF / Batch MTC',
          importance: 'حیاتی',
          icon: '🔬',
          desc: 'نتایج آنالیز کوانتومتری شیمیایی فولاد، آزمون کشش، استحکام تسلیم، سختی‌سنجی برینل و تست التراسونیک (UT) سرپلوس.',
          specs: 'تضمین متالورژی توسط فیدار فولاد و ریخته‌گری چدن نشکن GGG50 قطعه‌سازان اسپوتا',
        },
        {
          id: 'doc-3-3',
          title: 'پروتکل آزمون دوام و خستگی تعلیق (5M Cycles Fatigue Protocol)',
          format: 'PDF / Test Log',
          importance: 'الزامی',
          icon: '⚡',
          desc: 'مستندات آزمون دوام ۵ میلیون سیکل نوسان روی استند هیدرولیک تست خستگی برای بازوهای تعلیق و کیسه‌های هوا.',
          specs: 'شبیه‌سازی پیمایش بیش از ۱ میلیون کیلومتر در سخت‌ترین شرایط اقلیمی و جاده‌های خاکی',
        },
        {
          id: 'doc-3-4',
          title: 'سیستم کدگذاری و ردیابی لیزری قطعات (Traceability Guide)',
          format: 'PDF / QR Standards',
          importance: 'پشتیبان',
          icon: '🏷️',
          desc: 'شناسنامه حک لیزری شماره سریال یکتا، بچ تولید و کیوآرکد روی تمام اجزای ایمنی جهت ردیابی کامل در زنجیره خدمات.',
          specs: 'امکان استعلام آنلاین در سامانه مشتریان rstaxles.com جهت حذف قطعات تقلبی',
        },
      ],
    },
    {
      id: 'stage-4',
      stageNumber: 4,
      title: 'مونتاژ پایلوت در خط تولید و ابزارسازی (Pilot Assembly)',
      subtitle: 'Line Assembly SOP & Fit Check',
      conversionRate: '۳۵٪ پیشروی (First Line Assembly)',
      duration: 'هفته ۹ تا ۱۱',
      targetRole: 'مدیر تولید، سرپرست خط مونتاژ و استادکاران جوش',
      dmuRef: 'DMU 04 — تولید و مونتاژ خطوط',
      summary: 'تحویل اولین ست محورهای پایلوت به خط تولید کارخانه، آموزش مونتاژکاران و تنظیم بدون خطای زاویه چرخ‌ها.',
      gateMilestone: 'مونتاژ روان ست پایلوت بدون توقف خط و تاییدیه سهولت نصب (Easy Assembly) توسط سرپرست خط',
      widthPercent: 48,
      colorLevel: 'bg-orange-500 border-orange-600 text-white',
      packageDocs: [
        {
          id: 'doc-4-1',
          title: 'دستورالعمل استاندارد مونتاژ خط (Assembly SOP & Torque Table)',
          format: 'PDF / Laminated Workshop Guide',
          importance: 'حیاتی',
          icon: '🔩',
          desc: 'دستورالعمل گام‌به‌گام تصویری نصب محور روی شاسی، ترتیب سفت کردن مهره‌های کرپی (U-Bolt) و گشتاور دقیق ترکمتر.',
          specs: 'جدول گشتاورهای نیوتن‌متر (Nm) برای پیچ‌های چرخ، کالیپر و پایه‌های تعلیق بادی',
        },
        {
          id: 'doc-4-2',
          title: 'شابلون‌ها و فیکسچرهای راهنمای جوشکاری (Welding Jigs)',
          format: 'DWG / Fabrication Sheet',
          importance: 'الزامی',
          icon: '🛠️',
          desc: 'نقشه شابلون‌های موقعیت‌دهی جهت اطمینان از تقارن جوش براکت‌های Hanger به بال پایینی تیر اصلی شاسی.',
          specs: 'حذف خطای انسانی کارگران و کاهش زمان جوشکاری زیربندی به کمتر از ۴۵ دقیقه',
        },
        {
          id: 'doc-4-3',
          title: 'راهنمای تنظیم زاویه و هم‌محوری چرخ‌ها (Wheel Alignment Guide)',
          format: 'PDF',
          importance: 'الزامی',
          icon: '🎯',
          desc: 'روش تنظیم زوایای Toe-in و Camber با بوش‌های تنظیم خارج از مرکز (Eccentric Bushings) جهت جلوگیری از لاستیک‌سایی.',
          specs: 'دستورالعمل کالیبراسیون با دستگاه‌های لیزری اندازه‌گیری هم‌محوری چرخ‌ها',
        },
        {
          id: 'doc-4-4',
          title: 'چک‌لیست بازرسی قبل از تحویل تریلر (PDI Checklist)',
          format: 'PDF / Printable Form',
          importance: 'پشتیبان',
          icon: '✅',
          desc: 'برگه بازرسی کیفیت نهایی در انتهای خط مونتاژ شامل تست آب‌بندی پنوماتیک، عدم نشتی هوا و لقی بلبرینگ توپی.',
          specs: 'شامل ۱۸ بند کنترلی قبل از صدور پلاک و تحویل تریلر به مشتری نهایی',
        },
      ],
    },
    {
      id: 'stage-5',
      stageNumber: 5,
      title: 'ثبت دائم در BOM و تأمین انبوه (Official BOM Inclusion)',
      subtitle: 'Volume Contract & Tier-1 Rollout',
      conversionRate: '۲۵٪ نرخ تبدیل نهایی (BOM Locked)',
      duration: 'هفته ۱۲ به بعد',
      targetRole: 'مدیرعامل، هیئت‌مدیره و مدیریت بازرگانی و خرید',
      dmuRef: 'DMU 03 & 06 — تدارکات و مدیریت ارشد',
      summary: 'کد شدن قطعی و دائم محور و پارت‌نامبرهای RST در سیستم ERP و BOM تریلرساز و عقد قرارداد تأمین سالانه تضمین‌شده.',
      gateMilestone: 'ثبت رسمی برند RST به عنوان محور استاندارد در برگه‌های فروش و بروشورهای رسمی تریلرساز',
      widthPercent: 32,
      colorLevel: 'bg-orange-600 border-orange-700 text-white',
      packageDocs: [
        {
          id: 'doc-5-1',
          title: 'قرارداد تأمین سالانه با تعهد SLA تحویل ۴۸ ساعته (Supply SLA)',
          format: 'Legal Contract PDF',
          importance: 'حیاتی',
          icon: '📜',
          desc: 'قرارداد تأمین منظم قطعات و محورها با تضمین تحویل در بازه ۴۸ ساعته از انبارهای ارومیه و تهران و شرایط پرداخت اعتباری.',
          specs: 'شامل جریمه دیرکرد، سهمیه سالانه تضمینی و خطوط اعتباری خرید با چک صیادی',
        },
        {
          id: 'doc-5-2',
          title: 'پلیس‌نامه گارانتی ۱۸ ماهه بی‌قیدوشرط (Commercial Warranty)',
          format: 'PDF / Smart Card',
          importance: 'حیاتی',
          icon: '🛡️',
          desc: 'تعهدنامه رسمی شرکت اسپوتا برای تعویض رایگان قطعات دارای نقص و پوشش تعمیراتی در شبکه خدمات سراسری جاده‌ای.',
          specs: 'کارت هوشمند گارانتی با بارکد اختصاصی متصل به شماره شاسی تریلر مشتری',
        },
        {
          id: 'doc-5-3',
          title: 'جدول تطابق پارت‌نامبر با برندهای اروپایی (Cross-Ref Master Matrix)',
          format: 'XLSX / PDF',
          importance: 'الزامی',
          icon: '🔄',
          desc: 'ماتریس تطبیق شماره فنی تمام قطعات یدکی RST با کدهای معادل SAF-HOLLAND، BPW، Haldex، Wabco و Trax.',
          specs: 'بیش از ۲۰۰ پارت‌نامبر مصرفی جهت سهولت سفارش‌گذاری انبار قطعات یدکی OEM',
        },
        {
          id: 'doc-5-4',
          title: 'مدل آنلاین محاسبه TCO و مزیت اقتصادی ناوگان (TCO Calculator)',
          format: 'Interactive XLS / Web Tool',
          importance: 'پشتیبان',
          icon: '📊',
          desc: 'ابزار محاسباتی جهت اثبات کاهش هزینه کل مالکیت و افزایش بهره‌وری سالانه ناوگان به خریداران عمده و شرکت‌های حمل‌ونقل.',
          specs: 'فرمول‌های دقیق ارزش اسقاط، حذف خواب تریلر و کاهش مصرف لنت و لاستیک',
        },
      ],
    },
  ];

  const currentStage = funnelStages.find((s) => s.id === activeFunnelStageId) || funnelStages[1];

  const dmuLabels = [
    'دروازه‌بان فنی',
    'تأییدیه کیفی',
    'مذاکره مالی',
    'مجری مونتاژ',
    'خدمات و جاده',
    'تصمیم نهایی',
  ];

  const handleNextStage = () => {
    const currentIndex = funnelStages.findIndex((s) => s.id === activeFunnelStageId);
    if (currentIndex < funnelStages.length - 1) {
      setActiveFunnelStageId(funnelStages[currentIndex + 1].id);
      setSelectedDocId(null);
    }
  };

  const handlePrevStage = () => {
    const currentIndex = funnelStages.findIndex((s) => s.id === activeFunnelStageId);
    if (currentIndex > 0) {
      setActiveFunnelStageId(funnelStages[currentIndex - 1].id);
      setSelectedDocId(null);
    }
  };

  return (
    <section className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
              مهندسی فروش سازمانی B2B
            </span>
            <span className="text-xs text-zinc-500">کمیته ۶ نفره خرید OEM و قیف انطباق مهندسی به BOM</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900">
            مهندسی فروش به سازندگان تریلر و شبکه خدمات پس از فروش
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-4xl leading-relaxed">
            در کارخانه‌های تریلرساز، خرید محور و زیربندی یک تصمیم فردی نیست. این فرآیند از طریق یک قیف مهندسی ۵ مرحله‌ای و توسط کمیته ۶ نفره خرید (DMU) ارزیابی می‌شود که RST در هر مرحله پکیج اسناد و نقشه‌های تخصصی ارائه می‌نماید.
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
      {/* PROOF OF SCALE & ACTIVE SUPPLY: FOX & FILPA STRATEGIC OEM SHOWCASE       */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-6 bg-white border border-orange-300 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-orange-100 pb-4">
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
                <span className="text-xs font-bold text-orange-700">تأمین‌کننده فعال رتبه یک (Tier-1 Supplier)</span>
              </div>
              <h3 className="text-base sm:text-lg font-black text-zinc-900 mt-0.5">
                تأمین بخش زیادی از قطعات و محور برای فوکس (FOX / مارال) و فیلپا (FILPA)
              </h3>
            </div>
          </div>

          {/* Interactive Toggle Tabs for Managers */}
          <div className="flex items-center gap-1 bg-zinc-100 p-1 rounded-xl border border-zinc-200 text-xs font-bold">
            <button
              onClick={() => setActivePartnerTab('fox')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePartnerTab === 'fox'
                  ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs font-black'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🦊 همکاری با FOX (مارال)
            </button>
            <button
              onClick={() => setActivePartnerTab('filpa')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                activePartnerTab === 'filpa'
                  ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs font-black'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🚛 همکاری با فیلپا (FILPA)
            </button>
            <button
              onClick={() => setActivePartnerTab('synergy')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-8 p-5 rounded-xl bg-orange-50/60 border border-orange-200 space-y-3.5">
              <div className="flex items-center justify-between">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">دامنه قطعات تأمینی:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">توپی چرخ، اجزای ترمز، محور و متعلقات زیربندی</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">اهمیت صنعتی:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">تأیید کیفی بالاترین استانداردهای سخت‌گیرانه تولید</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">ارزش برای RST:</span>
                  <span className="font-bold text-orange-700 block mt-0.5">هم‌افزایی اکوسیستمی و درآمد پایدار تیراژ بالا</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-3">
              <div>
                <span className="text-[11px] font-bold text-zinc-500 block">پیام کلیدی برای مدیران:</span>
                <p className="text-xs font-bold text-zinc-900 mt-1 leading-relaxed">
                  حضور RST به عنوان تأمین‌کننده فعال برند فوکس نشان می‌دهد محصولات ما هم‌اکنون در زیر شاسی هزاران دستگاه تریلر مارال در جاده‌های ترانزیتی فعال بوده و امتحان خود را پس داده است.
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            <div className="lg:col-span-8 p-5 rounded-xl bg-orange-50/60 border border-orange-200 space-y-3.5">
              <div className="flex items-center justify-between">
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
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">دامنه تأمین جاری:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">محورهای ۹ تن، قطعات ترمز و پکیج تعلیق بادی</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">کاربری‌های نصب‌شده:</span>
                  <span className="font-bold text-zinc-900 block mt-0.5">تانکر گاز LPG، کانتینربر و کمپرسی سنگین</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-orange-200">
                  <span className="text-zinc-500 block text-[11px]">مزیت همکاری:</span>
                  <span className="font-bold text-orange-700 block mt-0.5">نصب روان (Easy Integration) و تحویل بدون توقف خط</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-xl bg-zinc-50 border border-zinc-200 flex flex-col justify-between space-y-3">
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

        {/* Tab 3: Synergy for 3 Execution Teams */}
        {activePartnerTab === 'synergy' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-black">
                <span>💼</span>
                <span>اهرم مستقیم برای تیم فروش:</span>
              </div>
              <p className="text-zinc-600 leading-relaxed text-[11.5px]">
                استفاده به عنوان ابزار شکستن مقاومت مشتریان جدید: «وقتی فوکس (مارال) و فیلپا قطعات و محورهای خود را از RST می‌گیرند، ریسک خرید برای سایر سازندگان عملاً صفر است.»
              </p>
              <div className="text-[11px] font-bold text-orange-700 bg-orange-50 p-2 rounded-lg border border-orange-200">
                نتیجه: کوتاه‌تر شدن چرخه تصمیم‌گیری کمیته‌های خرید از ۹۰ روز به کمتر از ۲۰ روز.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-black">
                <span>📊</span>
                <span>اهرم مستقیم برای تیم بازاریابی:</span>
              </div>
              <p className="text-zinc-600 leading-relaxed text-[11.5px]">
                انتشار کیس‌استادی‌های مهندسی و گزارش‌های تحلیلی TCO با تمرکز بر عملکرد تریلرهای فیلپا و فوکس در اقلیم ایران جهت اثبات راندمان اقتصادی به خریداران عمده ناوگان.
              </p>
              <div className="text-[11px] font-bold text-orange-700 bg-orange-50 p-2 rounded-lg border border-orange-200">
                نتیجه: خلق جایگاه مقتدر "تأمین‌کننده منتخب برترین برندهای تریلر کشور".
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2">
              <div className="flex items-center gap-2 text-zinc-900 font-black">
                <span>📢</span>
                <span>اهرم مستقیم برای تیم رسانه و تبلیغات:</span>
              </div>
              <p className="text-zinc-600 leading-relaxed text-[11.5px]">
                تولید محتوای ویدیویی مستند از خطوط مونتاژ فیلپا و فوکس با تمرکز بر لحظه نصب محور و رضایت رانندگان در پایانه‌های باربری، جهت اجرای کمپین‌های سراسری در فضای دیجیتال.
              </p>
              <div className="text-[11px] font-bold text-orange-700 bg-orange-50 p-2 rounded-lg border border-orange-200">
                نتیجه: ایجاد کشش تقاضا از سمت راننده (Pull Strategy) برای سفارش محور RST.
              </div>
            </div>
          </div>
        )}
      </div>

      {/* ========================================================================= */}
      {/* 6 DMU ROLES: INTERACTIVE DRILL-DOWN CARDS (FRAMER-MOTION)                 */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
              defaultExpanded={idx === 0}
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
      {/* INTERACTIVE B2B ENGINEERING SALES FUNNEL & PACKAGE REVEAL (FRAMER-MOTION) */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                قیف تعاملی مهندسی فروش B2B
              </span>
              <span className="text-xs text-zinc-500">پکیج اسناد و نقشه‌های فنی در هر مرحله از تصمیم‌گیری کارخانه</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-zinc-900">
              قیف نفوذ مهندسی به نقشه شاسی کارخانجات و ثبت در BOM
            </h3>
            <p className="text-xs text-zinc-600 mt-1 max-w-3xl">
              روی هر پله از قیف زیر کلیک کنید تا <strong>پکیج مستندات مهندسی (Engineering Package)، نقشه‌های ۳بعدی و الزامات فنی الزامی</strong> همان مرحله با انیمیشن نمایش داده شود.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrevStage}
              disabled={funnelStages[0].id === activeFunnelStageId}
              className="px-3 py-1.5 rounded-lg border border-zinc-200 text-xs font-bold text-zinc-700 hover:bg-zinc-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors flex items-center gap-1"
            >
              <span>←</span>
              <span>پله قبلی</span>
            </button>
            <button
              onClick={handleNextStage}
              disabled={funnelStages[funnelStages.length - 1].id === activeFunnelStageId}
              className="px-3 py-1.5 rounded-lg bg-orange-600 text-white text-xs font-bold hover:bg-orange-700 disabled:opacity-40 disabled:hover:bg-orange-600 transition-colors flex items-center gap-1 shadow-xs"
            >
              <span>پله بعدی</span>
              <span>→</span>
            </button>
          </div>
        </div>

        {/* The Visual Segmented Funnel Component */}
        <div className="p-5 rounded-2xl bg-zinc-50/70 border border-zinc-200 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-bold text-zinc-500 pb-1">
            <span>شروع تماس فنی و ارزیابی شاسی (Top of Funnel)</span>
            <span>نفوذ انحصاری به BOM و خط مونتاژ (Locked BOM)</span>
          </div>

          <div className="flex flex-col items-center gap-2 w-full">
            {funnelStages.map((stage) => {
              const isActive = stage.id === activeFunnelStageId;
              return (
                <motion.button
                  key={stage.id}
                  layout
                  onClick={() => {
                    setActiveFunnelStageId(stage.id);
                    setSelectedDocId(null);
                  }}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  style={{ width: `${stage.widthPercent}%` }}
                  className={`p-3.5 rounded-xl border text-right transition-all flex flex-wrap items-center justify-between gap-2 shadow-xs cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-orange-600 text-white border-orange-700 ring-4 ring-orange-500/20 font-bold'
                      : 'bg-white hover:bg-orange-50/50 text-zinc-800 border-zinc-200 hover:border-orange-300'
                  }`}
                >
                  {/* Active Indicator Strip */}
                  {isActive && (
                    <motion.div
                      layoutId="activeFunnelGlow"
                      className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-500 -z-10"
                    />
                  )}

                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-mono font-black ${
                        isActive
                          ? 'bg-white text-orange-700 shadow-xs'
                          : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                      }`}
                    >
                      ۰{stage.stageNumber}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-black ${isActive ? 'text-white' : 'text-zinc-900'}`}>
                          {stage.title}
                        </span>
                        <span
                          className={`text-[10px] hidden sm:inline-block font-mono ${
                            isActive ? 'text-orange-100' : 'text-zinc-500'
                          }`}
                        >
                          ({stage.subtitle})
                        </span>
                      </div>
                      <span className={`text-[11px] block mt-0.5 ${isActive ? 'text-orange-100' : 'text-zinc-500'}`}>
                        مخاطب اصلی: {stage.targetRole}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span
                      className={`text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-md ${
                        isActive
                          ? 'bg-orange-700/80 text-white'
                          : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                      }`}
                    >
                      {stage.conversionRate}
                    </span>
                    <span
                      className={`text-xs ${
                        isActive ? 'text-white font-bold' : 'text-zinc-400'
                      }`}
                    >
                      {isActive ? '▼ انتخاب شده' : 'کلیک کنید ↗'}
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Detail Reveal using Framer Motion */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStage.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="p-6 rounded-2xl bg-white border border-orange-200 shadow-sm space-y-6"
          >
            {/* Stage Summary Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-4 rounded-xl bg-orange-50/70 border border-orange-200">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-black px-2 py-0.5 rounded bg-orange-600 text-white font-mono">
                    STAGE 0{currentStage.stageNumber}
                  </span>
                  <span className="text-xs font-bold text-orange-950">
                    {currentStage.dmuRef}
                  </span>
                  <span className="text-zinc-400">|</span>
                  <span className="text-xs text-zinc-600">طول دوره: {currentStage.duration}</span>
                </div>
                <h4 className="text-base sm:text-lg font-black text-zinc-900">
                  {currentStage.title} ({currentStage.subtitle})
                </h4>
                <p className="text-xs text-zinc-700 leading-relaxed max-w-3xl">
                  {currentStage.summary}
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-orange-200 shrink-0 text-right space-y-1 lg:max-w-xs shadow-xs">
                <span className="text-[10px] font-bold text-orange-800 block">گلوگاه خروج به مرحله بعد (Exit Gate):</span>
                <span className="text-xs font-bold text-zinc-900 block leading-tight">
                  {currentStage.gateMilestone}
                </span>
              </div>
            </div>

            {/* Revealed Engineering Package Deliverables */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-orange-600" />
                  <h5 className="text-sm font-black text-zinc-900">
                    الزامات پکیج مهندسی در پله ۰{currentStage.stageNumber} (Engineering Package Deliverables):
                  </h5>
                </div>
                <span className="text-xs text-zinc-500">
                  روی هر سند کلیک کنید تا مشخصات دقیق فنی و تلرانس‌ها را مشاهده نمایید
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {currentStage.packageDocs.map((doc) => {
                  const isDocSelected = selectedDocId === doc.id;
                  return (
                    <motion.div
                      key={doc.id}
                      layout
                      onClick={() => setSelectedDocId(isDocSelected ? null : doc.id)}
                      className={`p-4 rounded-xl border transition-all cursor-pointer ${
                        isDocSelected
                          ? 'bg-orange-50/90 border-orange-500 ring-2 ring-orange-500/20 shadow-xs'
                          : 'bg-zinc-50/70 hover:bg-orange-50/30 border-zinc-200 hover:border-orange-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-start gap-2.5">
                          <span className="text-2xl shrink-0 p-1 rounded-lg bg-white border border-zinc-200 shadow-xs">
                            {doc.icon}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-xs sm:text-sm text-zinc-900 leading-snug">
                                {doc.title}
                              </span>
                            </div>
                            <span className="text-[11px] text-zinc-600 block mt-1 leading-relaxed">
                              {doc.desc}
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-col items-end gap-1 shrink-0">
                          <span className="font-mono text-[10px] font-bold px-2 py-0.5 rounded bg-white border border-zinc-200 text-zinc-800">
                            {doc.format}
                          </span>
                          <span
                            className={`text-[9px] font-bold px-1.5 py-0.2 rounded ${
                              doc.importance === 'حیاتی'
                                ? 'bg-orange-100 text-orange-800'
                                : doc.importance === 'الزامی'
                                ? 'bg-zinc-200 text-zinc-800'
                                : 'bg-zinc-100 text-zinc-600'
                            }`}
                          >
                            {doc.importance}
                          </span>
                        </div>
                      </div>

                      {/* Expanded Specification Details */}
                      {isDocSelected && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-3 pt-3 border-t border-orange-200 text-xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between text-orange-950 font-bold">
                            <span>مشخصات فنی و استاندارد اجرایی سند:</span>
                            <span className="text-[11px] text-orange-600 font-mono">QC Verified ✓</span>
                          </div>
                          <p className="text-zinc-700 font-mono text-[11px] leading-relaxed bg-white p-2.5 rounded-lg border border-orange-200">
                            {doc.specs}
                          </p>
                          <div className="flex items-center justify-between pt-1">
                            <span className="text-[10px] text-zinc-500">
                              کد رهگیری سند: RST-ENG-0{currentStage.stageNumber}-{doc.id.replace('doc-', '')}
                            </span>
                            <a
                              href="https://rstaxles.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[11px] font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1"
                            >
                              دانلود پکیج کامل در rstaxles.com ↗
                            </a>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ========================================================================= */}
      {/* 4-GROUP ALTERNATIVE COMPETITORS & INTERACTIVE SPIDER / RADAR CHART         */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                ماتریس استراتژیک رقبای جایگزین
              </span>
              <span className="text-xs text-zinc-500">محصولات آلمانی، ترکیه‌ای، چینی و جایگاه محورسازان جهان اسپوتا</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black text-zinc-900">
              آنالیز مقایسه‌ای رقبای جایگزین و نمودار راداری (تار عنکبوتی) ارزش RST
            </h3>
            <p className="text-xs text-zinc-600 mt-1 max-w-4xl leading-relaxed">
              بررسی ابعاد ۶گانه رقابتی در بازار ایران: کیفیت و گواهی ECE R13، بهای تمام‌شده و TCO، سرعت تحویل، شرایط پرداخت اعتباری ریالی، پشتیبانی مهندسی CAD و شبکه خدمات پس از فروش.
            </p>
          </div>

          {/* Radar Category Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-100 p-1 rounded-xl border border-zinc-200 text-xs font-bold">
            <button
              onClick={() => setSelectedRadarCompetitor('all')}
              className={`px-3 py-1.5 rounded-lg transition-all ${
                selectedRadarCompetitor === 'all'
                  ? 'bg-white text-zinc-900 border border-zinc-300 shadow-xs font-black'
                  : 'text-zinc-600 hover:text-zinc-900'
              }`}
            >
              🕸️ مقایسه همزمان (All)
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('rst')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                selectedRadarCompetitor === 'rst'
                  ? 'bg-orange-600 text-white shadow-xs font-black'
                  : 'text-orange-700 hover:text-orange-900'
              }`}
            >
              <span>🇮🇷</span>
              <span>RST Axles</span>
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('german')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                selectedRadarCompetitor === 'german'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-blue-700 hover:text-blue-900'
              }`}
            >
              <span>🇩🇪</span>
              <span>برندهای آلمانی</span>
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('turkish')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                selectedRadarCompetitor === 'turkish'
                  ? 'bg-amber-600 text-white shadow-xs font-black'
                  : 'text-amber-700 hover:text-amber-900'
              }`}
            >
              <span>🇹🇷</span>
              <span>برندهای ترکیه‌ای</span>
            </button>
            <button
              onClick={() => setSelectedRadarCompetitor('chinese')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                selectedRadarCompetitor === 'chinese'
                  ? 'bg-red-600 text-white shadow-xs font-black'
                  : 'text-red-700 hover:text-red-900'
              }`}
            >
              <span>🇨🇳</span>
              <span>محورهای چینی</span>
            </button>
          </div>
        </div>

        {/* 2-Column Section: Spider Chart on the Right + Deep Dive Analysis on the Left */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Right Column (6 cols): The Interactive SVG Radar / Spider Web */}
          <div className="lg:col-span-6 p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-between space-y-4 shadow-xs">
            <div className="w-full flex items-center justify-between border-b border-zinc-200 pb-2.5 text-xs">
              <span className="font-black text-zinc-900 flex items-center gap-1.5">
                <span>🕸️</span>
                <span>نمودار تار عنکبوتی ابعاد ۶گانه رقابتی</span>
              </span>
              <span className="text-[11px] text-zinc-500 font-mono">مقیاس: ۰ تا ۱۰۰ امتیاز</span>
            </div>

            {/* Pure SVG Spider Web Chart */}
            <div className="w-full max-w-[440px] aspect-[480/400] relative flex items-center justify-center">
              <svg viewBox="0 0 480 400" className="w-full h-full select-none overflow-visible">
                <defs>
                  <filter id="radarShadow" x="-10%" y="-10%" width="120%" height="120%">
                    <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.1" />
                  </filter>
                </defs>

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

                {/* 6 Radial Axes from Center */}
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

                {/* Radar Polygons for Competitors */}
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
                        strokeWidth={isHighlight ? '3' : '1.8'}
                        strokeLinejoin="round"
                        className="transition-all duration-300"
                        filter="url(#radarShadow)"
                      />
                      {/* Vertex Markers */}
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
                            r={isHighlight ? 4.5 : 3}
                            fill="#ffffff"
                            stroke={comp.strokeColor}
                            strokeWidth="2"
                            className="cursor-pointer hover:r-6 transition-all"
                            onMouseEnter={() => setHoveredDimensionIdx(sIdx)}
                            onMouseLeave={() => setHoveredDimensionIdx(null)}
                          />
                        );
                      })}
                    </g>
                  );
                })}

                {/* Dimension Text Labels around the Perimeter */}
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
                        className={`text-[10px] sm:text-[11px] font-black transition-colors ${
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

            {/* Interactive Color Legend & Quick Score Badges */}
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2 border-t border-zinc-200 text-xs">
              {competitorRadarList.map((comp) => {
                const isSelected = selectedRadarCompetitor === comp.id || selectedRadarCompetitor === 'all';
                return (
                  <button
                    key={comp.id}
                    onClick={() => setSelectedRadarCompetitor(comp.id)}
                    className={`p-2 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      selectedRadarCompetitor === comp.id
                        ? 'bg-white shadow-xs font-black ring-2'
                        : isSelected
                        ? 'bg-white/80 hover:bg-white text-zinc-700'
                        : 'opacity-40 hover:opacity-100 bg-zinc-100'
                    }`}
                    style={{
                      borderColor: selectedRadarCompetitor === comp.id ? comp.strokeColor : '#e4e4e7',
                    }}
                  >
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: comp.strokeColor }} />
                      <span className="text-[11px] font-bold truncate">{comp.flag} {comp.name.split('(')[0].trim()}</span>
                    </div>
                    <div className="text-[10px] text-zinc-500 font-mono mt-1 text-left" dir="ltr">
                      میانگین: {Math.round(comp.scores.reduce((a, b) => a + b, 0) / 6)} / ۱۰۰
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Left Column (6 cols): In-depth Competitor Cards & RST Edge Details */}
          <div className="lg:col-span-6 space-y-4">
            {competitorRadarList
              .filter((c) => selectedRadarCompetitor === 'all' || selectedRadarCompetitor === c.id)
              .map((comp) => (
                <div
                  key={comp.id}
                  className={`p-5 rounded-2xl border transition-all space-y-3.5 ${
                    comp.id === 'rst'
                      ? 'bg-orange-50/70 border-orange-300 ring-2 ring-orange-500/10 shadow-sm'
                      : 'bg-white border-zinc-200 shadow-xs'
                  }`}
                >
                  {/* Card Header with Flag, Name & Official Website links */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b pb-2.5" style={{ borderColor: comp.id === 'rst' ? '#fed7aa' : '#f4f4f5' }}>
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{comp.flag}</span>
                      <div>
                        <h4 className="text-sm sm:text-base font-black text-zinc-900 leading-tight">
                          {comp.name}
                        </h4>
                        <span className="text-[11px] text-zinc-500 block">
                          {comp.categoryName} • {comp.country}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-1.5">
                      {comp.websites.map((site, sIdx) => (
                        <a
                          key={sIdx}
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 py-1 rounded-lg text-[10px] font-bold transition-colors flex items-center gap-1 bg-zinc-100 hover:bg-orange-100 text-zinc-800 hover:text-orange-900 border border-zinc-200"
                        >
                          <span>{site.name}</span>
                          <span className="text-orange-600 font-bold">↗</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* 3 Quick Specs Pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                    <div className="p-2 rounded-lg bg-white border border-zinc-200">
                      <span className="text-[10px] text-zinc-500 block">بهای تمام‌شده:</span>
                      <span className="font-bold text-zinc-900 text-[11px] block mt-0.5">{comp.priceRange}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-zinc-200">
                      <span className="text-[10px] text-zinc-500 block">زمان تحویل:</span>
                      <span className="font-bold text-zinc-900 text-[11px] block mt-0.5">{comp.deliveryTime}</span>
                    </div>
                    <div className="p-2 rounded-lg bg-white border border-zinc-200">
                      <span className="text-[10px] text-zinc-500 block">وضعیت گارانتی:</span>
                      <span className="font-bold text-zinc-900 text-[11px] block mt-0.5">{comp.warrantyStatus}</span>
                    </div>
                  </div>

                  {/* Pros & Cons Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                    <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 space-y-1.5">
                      <span className="font-black text-emerald-950 flex items-center gap-1.5 text-[11px]">
                        <span>✓</span>
                        <span>مزایا و نقاط قوت:</span>
                      </span>
                      <ul className="space-y-1 text-[11px] text-emerald-900 leading-relaxed pr-2 list-disc list-inside">
                        {comp.advantages.map((adv, aIdx) => (
                          <li key={aIdx}>{adv}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-3 rounded-xl bg-rose-50/70 border border-rose-200 space-y-1.5">
                      <span className="font-black text-rose-950 flex items-center gap-1.5 text-[11px]">
                        <span>✗</span>
                        <span>معایب و ریسک‌ها برای خریدار:</span>
                      </span>
                      <ul className="space-y-1 text-[11px] text-rose-900 leading-relaxed pr-2 list-disc list-inside">
                        {comp.disadvantages.map((dis, dIdx) => (
                          <li key={dIdx}>{dis}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* RST Edge Box (When viewing competitors) */}
                  {comp.id !== 'rst' ? (
                    <div className="p-3 rounded-xl bg-orange-100/60 border border-orange-300 text-xs">
                      <div className="flex items-center gap-1.5 font-black text-orange-950 mb-0.5">
                        <span>⚡</span>
                        <span>برتری و ارزش متمایز RST در مقایسه با این رقیب:</span>
                      </div>
                      <p className="text-zinc-700 leading-relaxed text-[11.5px]">
                        {comp.rstAdvantageOver}
                      </p>
                    </div>
                  ) : (
                    <div className="p-3 rounded-xl bg-orange-600 text-white text-xs shadow-xs">
                      <span className="font-black block mb-0.5 text-orange-100">جمع‌بندی جایگاه استراتژیک RST:</span>
                      <p className="leading-relaxed text-white text-[11.5px]">
                        RST تنها گزینه در بازار ایران است که همزمان استاندارد آزمون ECE R13 اروپایی، تحویل فوری ۴۸ ساعته از ارومیه، شرایط پرداخت اعتباری پروژه‌ای و گارانتی رسمی تعویض قطعه را فراهم می‌سازد.
                      </p>
                    </div>
                  )}
                </div>
              ))}
          </div>

        </div>

        {/* Master Comparison Table across all 6 Dimensions */}
        <div className="p-4 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-2 text-xs overflow-x-auto">
          <div className="flex items-center justify-between pb-1">
            <span className="font-black text-zinc-900">ماتریس مقایسه امتیازات شاخص‌های ۶گانه (Scores Matrix):</span>
            <span className="text-[11px] text-zinc-500">امتیازدهی مهندسی از ۱۰۰</span>
          </div>

          <table className="w-full text-right text-xs">
            <thead>
              <tr className="border-b border-zinc-200 text-zinc-500 text-[11px]">
                <th className="py-2 pr-2 font-bold">شاخص ارزیابی</th>
                <th className="py-2 px-2 font-black text-orange-700 bg-orange-50/60 rounded-t-lg">🇮🇷 RST Axles</th>
                <th className="py-2 px-2 font-bold text-blue-700">🇩🇪 برندهای آلمانی</th>
                <th className="py-2 px-2 font-bold text-amber-700">🇹🇷 برندهای ترکیه‌ای</th>
                <th className="py-2 px-2 font-bold text-red-700">🇨🇳 محورهای چینی</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200">
              {radarDimensions.map((dim, dIdx) => (
                <tr key={dim.key} className="hover:bg-white/80 transition-colors">
                  <td className="py-2.5 pr-2 font-bold text-zinc-800 flex items-center gap-1.5">
                    <span>{dim.icon}</span>
                    <span>{dim.label}</span>
                  </td>
                  <td className="py-2.5 px-2 font-mono font-black text-orange-700 bg-orange-50/60">
                    {competitorRadarList[0].scores[dIdx]}٪
                  </td>
                  <td className="py-2.5 px-2 font-mono text-zinc-700 font-bold">
                    {competitorRadarList[1].scores[dIdx]}٪
                  </td>
                  <td className="py-2.5 px-2 font-mono text-zinc-700 font-bold">
                    {competitorRadarList[2].scores[dIdx]}٪
                  </td>
                  <td className="py-2.5 px-2 font-mono text-zinc-700 font-bold">
                    {competitorRadarList[3].scores[dIdx]}٪
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-zinc-300 font-black text-zinc-900 bg-white">
                <td className="py-2.5 pr-2">میانگین کل نمره رقابتی:</td>
                <td className="py-2.5 px-2 font-mono text-orange-600 font-black bg-orange-100/60 text-sm">
                  ۹۴ / ۱۰۰
                </td>
                <td className="py-2.5 px-2 font-mono text-blue-700">
                  ۵۲ / ۱۰۰
                </td>
                <td className="py-2.5 px-2 font-mono text-amber-700">
                  ۵۷ / ۱۰۰
                </td>
                <td className="py-2.5 px-2 font-mono text-red-700">
                  ۴۳ / ۱۰۰
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* SKU Catalog & Cross-Reference Explorer */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
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

          <div className="lg:col-span-8 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 pb-3">
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

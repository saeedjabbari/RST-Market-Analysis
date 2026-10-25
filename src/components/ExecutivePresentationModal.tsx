import React, { useState, useEffect, useCallback } from 'react';
import { sampleProducts } from '../data/marketData';

interface PresentationSlide {
  id: number;
  badge: string;
  badgeEn: string;
  title: string;
  subtitle: string;
  keyPoints: {
    icon: string;
    label: string;
    desc: string;
    highlight?: string;
  }[];
  stat: {
    value: string;
    label: string;
    sublabel: string;
  };
  visualType: 'core' | 'sizing' | 'runningGear' | 'flywheel' | 'oem' | 'decision';
  deepDiveTab: string;
}

const slides: PresentationSlide[] = [
  {
    id: 1,
    badge: '۱. گزارش راهبردی هیئت مدیره',
    badgeEn: 'EXECUTIVE THESIS',
    title: 'راهبرد حاکمیت بازار: گذار از تأمین قطعه منفرد به زنجیره یکپارچه Running Gear',
    subtitle: 'برنامه استراتژیک شرکت محورسازان جهان اسپوتا (RST) جهت تصاحب سهم مسلط از تقاضای تجهیز و نوسازی ناوگان تجاری کشور و منطقه.',
    keyPoints: [
      {
        icon: '🎯',
        label: 'تحلیل وضع موجود و چالش ناوگان باری',
        desc: 'فرسودگی بیش از ۵۰٪ ناوگان باری کشور و تداوم وابستگی بازار به محورهای متفرقه فاقد استانداردهای ایمنی ECE اروپا.',
        highlight: 'خواب فنی ناوگان = تحمیل خسارت روزانه سنگین به شرکت‌های حمل‌ونقل',
      },
      {
        icon: '🚀',
        label: 'رویکرد متمایز و استراتژیک RST Axles',
        desc: 'تولید و تأمین مهندسی پکیج کامل زیربندی (تیر محور فرآوری‌شده، تعلیق پنوماتیک، کالیپر دیسکی، توپی و بوستر) با استاندارد ECE R13.',
        highlight: 'نصب سریع و بدون خطای Plug & Play در خطوط تریلرسازان',
      },
      {
        icon: '🔄',
        label: 'مدل خلق ارزش پایدار (Installed Base)',
        desc: 'سودآوری بلندمدت نه بر فروش تک‌محور، بلکه بر استقرار پایگاه محور فعال در جاده استوار است که ۱۰ سال تقاضای قطعات یدکی را تضمین می‌نماید.',
        highlight: 'تثبیت جریان نقدینگی با حاشیه سود بالای خدمات پس از فروش',
      },
    ],
    stat: {
      value: '۲۷۰,۰۰۰',
      label: 'محور در سال',
      sublabel: 'کل حجم برآوردشده تقاضای سالانه محور در کشور',
    },
    visualType: 'core',
    deepDiveTab: 'summary',
  },
  {
    id: 2,
    badge: '۲. اسناد رسمی و ابعاد بازار',
    badgeEn: 'MARKET SIZING & METHODOLOGY',
    title: 'مستندات رسمی تقاضا: بازار سالانه ۹۰ هزار تریلر و نوسازی ۲۰۰ هزار ناوگان باری',
    subtitle: 'تحلیل داده‌های رسمی وزارت صنعت، معدن و تجارت (دی ۱۴۰۴) و گزارش‌های ناوگان باری جهت تدوین اهداف عملیاتی تولید.',
    keyPoints: [
      {
        icon: '📊',
        label: 'مستند اول: داده رسمی وزارت صمت (دی ۱۴۰۴)',
        desc: 'تولید سالانه ۱۵,۳۵۵ دستگاه تریلر در قطب ارومیه معادل ۱۷٪ نیاز کشور؛ استخراج رسمی تقاضا: ۱۵,۳۵۵ ÷ ۰.۱۷ ≈ ۹۰,۳۲۴ دستگاه تریلر در سال (معادل ۲۷۰ هزار محور با ضریب ۳).',
        highlight: 'تولید فعلی استان آذربایجان‌غربی: ۱۵,۳۵۵ دستگاه تریلر در سال',
      },
      {
        icon: '🚛',
        label: 'مستند دوم: نرخ فرسودگی ناوگان باری (گزارش تسنیم)',
        desc: 'بیش از ۲۰۰ هزار دستگاه از مجموع حدود ۴۱۱ هزار ناوگان باری جاده‌ای (کامیون و کشنده) در سن فرسودگی شدید قرار دارند که محرک قطعی نوسازی تریلرهاست.',
        highlight: 'فرسودگی بیش از ۵۰٪ کل ناوگان باری جاده‌ای کشور',
      },
      {
        icon: '🌍',
        label: 'موقعیت ژئوپلیتیک کارخانه مرکزی در ارومیه',
        desc: 'استقرار هاب تولید RST در مرکز ثقل ۱۹٪ تریلرسازی کشور با دسترسی مستقیم زمینی به مرزهای رازی و بازرگان، ترکیه و بنادر خلیج فارس.',
        highlight: 'مزیت ترانزیتی و لجستیکی ممتاز در زنجیره تأمین غرب کشور',
      },
    ],
    stat: {
      value: '۹۰,۳۲۴',
      label: 'دستگاه تریلر / سال',
      sublabel: 'برآورد رسمی نیاز سالانه تریلر کشور بر پایه نسبت ۱۷٪ صمت',
    },
    visualType: 'sizing',
    deepDiveTab: 'sizing',
  },
  {
    id: 3,
    badge: '۳. مشخصات فنی پلتفرم محصول',
    badgeEn: 'ENGINEERED RUNNING GEAR',
    title: 'پلتفرم مهندسی Running Gear: انطباق کامل با استاندارد ECE R13',
    subtitle: 'ارائه راه‌حل مهندسی یکپارچه به سازندگان تریلر جهت ارتقای استانداردهای ۸۵‌گانه ملی و حذف خطاهای مونتاژ کارگاهی.',
    keyPoints: [
      {
        icon: '🛡️',
        label: 'تیر محور بدون درز با عملیات حرارتی دقیق',
        desc: 'لوله بدون درز آلیاژی با مقاومت کششی و پیچشی فوق‌العاده، ظرفیت اسمی ۹ تن و تحمل بیشینه تا ۱۲ تن فشار جاده‌ای.',
        highlight: 'تضمین مقاومت در برابر اضافه بار و شرایط اقلیمی خشن',
      },
      {
        icon: '🛑',
        label: 'سیستم ترمز دیسکی پنوماتیک پیشرفته',
        desc: 'کالیپر چدن داکتیل مقاوم با مکانیزم تنظیم خودکار لقی لنت و دیسک ۴۳۰ میلی‌متری تهویه‌دار مطابق استاندارد ECE R13.',
        highlight: 'کاهش ۳۵ درصدی خط ترمز و ایمنی کامل محموله‌های خطرناک',
      },
      {
        icon: '🎈',
        label: 'مجموعه تعلیق پنوماتیک مستقل (Air Suspension)',
        desc: 'کیسه هوای تقویت‌شده مجهز به پیستون فولادی جهت جذب حداکثری ارتعاشات دینامیکی و پایدارسازی حرکتی شاسی تریلر.',
        highlight: 'کاهش استهلاک تایر و محافظت ساختاری از سازه تریلر',
      },
    ],
    stat: {
      value: 'DFZ 9T',
      label: 'پلتفرم استاندارد ECE R13',
      sublabel: 'تأییدیه کیفی معتبر جهت ورود به خطوط تریلرسازان تراز اول',
    },
    visualType: 'runningGear',
    deepDiveTab: 'products',
  },
  {
    id: 4,
    badge: '۴. چرخ طیار درآمدی و اقتصادی',
    badgeEn: 'DUAL-ENGINE REVENUE MODEL',
    title: 'چرخ طیار تجاری دو پیشرانه: هم‌افزایی خطوط مونتاژ و بازار خدمات پس از فروش',
    subtitle: 'بهره‌گیری استراتژیک از نفوذ در خطوط تریلرسازی (OEM) جهت تسخیر بازدهی نقدی و مستمر بازار قطعات یدکی (Aftermarket).',
    keyPoints: [
      {
        icon: '🏭',
        label: 'پیشرانه اول: خطوط تولید تریلرسازان (OEM)',
        desc: 'ورود مستقیم به لیست قطعات مصوب (BOM) کارخانجات جهت استقرار سالانه ۱۰ تا ۳۰ هزار محور در شبکه جاده‌ای.',
        highlight: 'ایجاد و گسترش مستمر دارایی فعال در جاده (Installed Base)',
      },
      {
        icon: '🔧',
        label: 'پیشرانه دوم: بازار قطعات مصرفی یدکی',
        desc: 'تقاضای دوره‌ای قطعات مصرفی شامل لنت، بوستر ترمز، دیافراگم پنوماتیک، بلبرینگ و توپی با حاشیه سود ناخالص بالای ۴۰٪.',
        highlight: 'جریان درآمدی باثبات و مستقل از نوسانات فروش خودروهای نو',
      },
      {
        icon: '🔁',
        label: 'سازوکار کشش معکوس تقاضا (Pull Demand)',
        desc: 'رضایت بهره‌برداران و رانندگان از دوام و خدمات RST، تریلرسازان را به استفاده انحصاری از این پکیج ترغیب و ملزم می‌نماید.',
        highlight: 'تحکیم وفاداری برند و ایجاد مزیت رقابتی غیرقابل کپی',
      },
    ],
    stat: {
      value: '۱۰ سال',
      label: 'افق درآمدی هر محور فعال',
      sublabel: 'جریان نقدینگی مستمر از محل خدمات و قطعات مصرفی',
    },
    visualType: 'flywheel',
    deepDiveTab: 'summary',
  },
  {
    id: 5,
    badge: '۵. فازبندی بازار و پتانسیل واقعی',
    badgeEn: 'MARKET PHASING & POTENTIAL',
    title: 'اولویت‌بندی بازار و پتانسیل واقعی: تمرکز نخست بر بازار داخل و سپس توسعه منطقه',
    subtitle: 'تمرکز قاطعانه بر تسخیر تقاضای ۹۰ هزار تریلر داخل و ۵۴ سازنده ارومیه پیش از ورود به بازارهای صادراتی عراق و قفقاز.',
    keyPoints: [
      {
        icon: '🎯',
        label: 'اولویت اول: تسخیر عمق بازار داخل ایران',
        desc: 'تقاضای سالانه ۹۰,۳۲۴ تریلر و ۲۷۰,۰۰۰ محور در کشور؛ تمرکز فوری بر ۵۴ تریلرساز ارومیه (۱۵,۳۵۵ تریلر = ۴۶,۰۰۰ محور) با هزینه حمل صفر در مجاورت کارخانه.',
        highlight: 'تأمین سالانه ۲۳,۰۰۰ محور تنها در شعاع ۵۰ کیلومتری کارخانه ارومیه',
      },
      {
        icon: '📊',
        label: 'پتانسیل واقعی: تصاحب ۱۰٪ تا ۲۰٪ بازار کل کشور',
        desc: 'ورود به BOM سازندگان بزرگ ملی (ماموت، مارال، مایان، اروم تریلر) و دستیابی به فروش سالانه ۲۷,۰۰۰ تا ۵۴,۰۰۰ محور با گردش مالی بیش از ۲,۵۰۰ میلیارد تومان.',
        highlight: 'جایگزینی کامل محورهای وارداتی ترکیه و چین در ناوگان ملی',
      },
      {
        icon: '🌐',
        label: 'اولویت دوم: توسعه صادرات منطقه‌ای (عراق، قفقاز و CIS)',
        desc: 'بهره‌برداری از مزیت لجستیکی ارومیه در مجاورت مرزهای بازرگان، سرو و تمرچین برای بازارهای بازسازی عراق، سوریه و قفقاز پس از تثبیت خطوط در بازار داخل.',
        highlight: 'مزیت کرایه حمل حداقل ۲۰٪ پایین‌تر از رقبای خارجی',
      },
    ],
    stat: {
      value: '۹۰,۳۲۴',
      label: 'نیاز سالانه تریلر داخل',
      sublabel: 'اولویت اول و اصلی شرکت: اشباع تقاضای بازار داخل ایران',
    },
    visualType: 'oem',
    deepDiveTab: 'summary',
  },
  {
    id: 6,
    badge: '۶. مأموریت تفکیکی ۳ تیم اجرایی',
    badgeEn: 'TEAMS ACTION PLAN & CAMPAIGNS',
    title: 'چارچوب اقدام ۳ تیم: اهداف بازاریابی، فروش و تیم رسانه جهت طراحی کمپین‌ها',
    subtitle: 'ترجمه نتایج مطالعه به مأموریت‌های مشخص برای تیم بازاریابی، تیم فروش و تیم رسانه‌ای جهت آغاز کمپین‌های B2B و B2C.',
    keyPoints: [
      {
        icon: '📈',
        label: '۱. اهداف تیم بازاریابی (Marketing)',
        desc: 'جایگاه‌سازی RST به‌عنوان تنها پلتفرم مهندسی Running Gear استاندارد اروپا، مپینگ فنی ۵۴ سازنده ارومیه و تدوین مدل گارانتی بدون قید و شرط تعویض پوسته.',
        highlight: 'شکستن ادراک سنتی بازار و تضمین ۴۸ ساعته تأمین قطعات',
      },
      {
        icon: '💼',
        label: '۲. اهداف تیم فروش (Sales)',
        desc: 'تارگت‌های سالانه (۱۰K ← ۲۰K ← ۳۵K محور)، قراردادهای بلندمدت با تسهیلات اعتباری (LC و چک صیادی) و تأسیس ۵ عاملیت رسمی قطعات در تهران، تبریز، بندرعباس، اصفهان و مشهد.',
        highlight: 'ارائه مدل‌های فروش اعتباری غیرقابل رقابت برای واردکنندگان نقدی',
      },
      {
        icon: '📢',
        label: '۳. اهداف تیم رسانه و طراحی کمپین‌ها (Media & Ads)',
        desc: 'طراحی کمپین B2B سازندگان («تحویل آنی پای خط»)، کمپین B2C رانندگان («محوری که خواب ندارد»)، و انتشار ویدیوهای مقایسه تست خستگی و متالوژی TÜV.',
        highlight: 'ایجاد تقاضای معکوس (Pull Demand) در سطح رانندگان و ناوگان',
      },
    ],
    stat: {
      value: '۳ تیم',
      label: 'هم‌افزایی فروش، مارکتینگ و رسانه',
      sublabel: 'هدایت یکپارچه کمپین‌ها بر پایه پتانسیل قطعی بازار داخل',
    },
    visualType: 'decision',
    deepDiveTab: 'summary',
  },
];

interface ExecutivePresentationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToTab: (tabId: string) => void;
}

export const ExecutivePresentationModal: React.FC<ExecutivePresentationModalProps> = ({
  isOpen,
  onClose,
  onNavigateToTab,
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [progress, setProgress] = useState(0);

  const currentSlide = slides[currentSlideIndex];
  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : 0));
    setProgress(0);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : totalSlides - 1));
    setProgress(0);
  }, [totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowRight' || e.key === 'PageUp') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Auto-play timer (7 seconds per slide)
  useEffect(() => {
    if (!isOpen || !isAutoPlay) {
      setProgress(0);
      return;
    }

    const intervalMs = 70;
    const step = 100 / (7000 / intervalMs);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isOpen, isAutoPlay, handleNext]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-[#13161c]/85 backdrop-blur-md transition-opacity duration-300"
      dir="rtl"
    >
      <div className="relative w-full max-w-5xl bg-[#1c2128] border border-zinc-700/80 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 border-b border-zinc-700/80 bg-[#242a34]/90 backdrop-blur flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black text-sm shadow-md">
              RST
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-white">پرزنت اختصاصی هیئت مدیره و مدیران ارشد</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30 font-bold">
                  خلاصه راهبردی ۶ اسلاید
                </span>
              </div>
              <span className="text-[10px] text-zinc-400 font-mono">
                اسلاید {currentSlideIndex + 1} از {totalSlides} — {currentSlide.badgeEn}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Auto Play Toggle */}
            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className={`px-2.5 py-1 rounded-lg text-xs font-bold border transition-colors flex items-center gap-1 ${
                isAutoPlay
                  ? 'bg-orange-600/20 border-orange-500 text-orange-400'
                  : 'bg-[#2a313d] border-zinc-600 text-zinc-300 hover:text-white'
              }`}
              title="پخش خودکار اسلایدها (۷ ثانیه هر اسلاید)"
            >
              <span>{isAutoPlay ? '⏸ توقف خودکار' : '▶ پخش خودکار'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[#2a313d] hover:bg-[#343d4c] text-zinc-400 hover:text-white flex items-center justify-center text-sm font-bold transition-colors border border-zinc-600/60"
              title="بستن اسلایدشو (Escape)"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Linear Progress Bar for auto play */}
        {isAutoPlay && (
          <div className="w-full h-1 bg-zinc-800">
            <div
              className="h-full bg-orange-600 transition-all duration-75 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {/* Main Slide Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Slide Badge & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold px-3 py-1 rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30">
                {currentSlide.badge}
              </span>
              <span className="text-[11px] font-mono text-zinc-400 font-bold tracking-wider">
                {currentSlide.badgeEn}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-white leading-tight">
              {currentSlide.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-medium">
              {currentSlide.subtitle}
            </p>
          </div>

          {/* Grid Layout: Points on Left, Visual Highlight Card on Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
            {/* 3 Key Points */}
            <div className="lg:col-span-7 space-y-3 flex flex-col justify-between">
              {currentSlide.keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-[#242a34]/90 border border-zinc-700/70 hover:border-zinc-600 transition-all space-y-1.5 shadow-sm"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-xl">{point.icon}</span>
                    <h3 className="text-sm font-black text-white">{point.label}</h3>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">{point.desc}</p>
                  {point.highlight && (
                    <div className="pt-1 flex items-center gap-1.5 text-[11px] text-orange-400 font-bold">
                      <span>⚡</span>
                      <span>{point.highlight}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Visual Highlight & Big Stat Card */}
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-b from-[#242b37] via-[#1f242e] to-[#181c24] border border-zinc-700/80 relative overflow-hidden shadow-md">
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

              {/* Dynamic Slide Visual */}
              <div className="relative z-10 py-3 flex flex-col items-center justify-center text-center">
                {currentSlide.visualType === 'runningGear' ? (
                  <div className="w-full h-44 rounded-xl bg-gradient-to-b from-white via-zinc-100 to-zinc-200 p-2 flex items-center justify-center relative overflow-hidden shadow-inner">
                    <img
                      src="./assets/aistudio/DFZ.S.R.09.052.M_4db73d13.png"
                      alt="RST Complete Axle System"
                      className="max-h-full max-w-full object-contain drop-shadow-md hover:scale-105 transition-transform"
                    />
                  </div>
                ) : currentSlide.visualType === 'core' ? (
                  <div className="w-full py-4 space-y-3">
                    <div className="flex items-center justify-center gap-3">
                      <div className="p-3 rounded-xl bg-[#2a313d] border border-zinc-600 text-center">
                        <div className="text-xs text-zinc-400">وضعیت پیشین</div>
                        <div className="text-xs font-bold text-red-400 mt-0.5">عرضه قطعه منفرد</div>
                      </div>
                      <span className="text-xl text-orange-500 font-bold">➔</span>
                      <div className="p-3 rounded-xl bg-orange-600 text-center text-white shadow-md">
                        <div className="text-xs text-orange-200">جهش راهبردی RST</div>
                        <div className="text-xs font-black mt-0.5">پلتفرم کامل Running Gear</div>
                      </div>
                    </div>
                  </div>
                ) : currentSlide.visualType === 'sizing' ? (
                  <div className="w-full py-2 space-y-2 text-right">
                    <div className="p-2.5 rounded-xl bg-[#2a313d] border border-orange-500/40 text-right shadow-xs">
                      <div className="text-[10px] text-orange-400 font-black flex items-center justify-between">
                        <span>🏢 داده رسمی وزارت صمت (دی ۱۴۰۴)</span>
                        <span className="font-black px-1.5 py-0.5 rounded bg-orange-500/20 text-orange-300">۱۵,۳۵۵ تریلر</span>
                      </div>
                      <div className="text-[11px] font-bold text-zinc-200 mt-1">
                        تولید سالانه استان آذربایجان‌غربی = <b className="font-black text-orange-400">۱۷٪</b> نیاز کل کشور
                      </div>
                      <div className="text-[10px] text-orange-300 font-black mt-1.5 pt-1 border-t border-zinc-700/70 flex items-center justify-between">
                        <span>برآورد نیاز سالانه تریلر کشور:</span>
                        <span className="px-1.5 py-0.5 rounded bg-orange-600/30 text-white font-black dir-ltr">۹۰,۳۲۴ دستگاه</span>
                      </div>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#2a313d] border border-zinc-600/70 text-right shadow-xs">
                      <div className="text-[10px] text-zinc-400 font-black flex items-center justify-between">
                        <span>🚛 گزارش ناوگان باری (تسنیم ۱۴۰۲)</span>
                        <span className="font-black px-1.5 py-0.5 rounded bg-red-500/20 text-red-300">۲۰۰,۰۰۰+ فرسوده</span>
                      </div>
                      <div className="text-[11px] font-bold text-zinc-200 mt-1">
                        فرسودگی <b className="font-black text-red-400">بیش از ۵۰٪</b> کل ناوگان باری (۴۱۱ هزار دستگاه)
                      </div>
                    </div>
                  </div>
                ) : currentSlide.visualType === 'flywheel' ? (
                  <div className="w-full py-3 space-y-2">
                    <div className="p-3 rounded-xl bg-[#2a313d] border border-zinc-600 text-right">
                      <div className="text-[11px] text-orange-400 font-bold">پیشرانه ۱: خطوط OEM</div>
                      <div className="text-xs font-bold text-white mt-0.5">ورود به خط تولید تریلرسازان کشور</div>
                    </div>
                    <div className="text-center text-orange-500 font-black text-sm">⬇ استقرار Installed Base</div>
                    <div className="p-3 rounded-xl bg-orange-600/20 border border-orange-500 text-right">
                      <div className="text-[11px] text-orange-300 font-bold">پیشرانه ۲: بازار قطعات مصرفی</div>
                      <div className="text-xs font-black text-white mt-0.5">۱۰ سال بازدهی نقدی و قطعات یدکی</div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full grid grid-cols-3 gap-2">
                    {sampleProducts.slice(0, 3).map((p) => (
                      <div
                        key={p.id}
                        className="p-2 rounded-xl bg-white/95 text-zinc-900 text-center shadow-sm flex flex-col items-center justify-between"
                      >
                        <div className="w-full h-12 flex items-center justify-center">
                          <img src={p.image} alt={p.nameFa} className="max-h-full max-w-full object-contain" />
                        </div>
                        <div className="text-[9px] font-bold line-clamp-1 mt-1 text-zinc-800">{p.nameFa.split('(')[0]}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Big Stat Section */}
              <div className="relative z-10 pt-4 border-t border-zinc-700/80 text-center">
                <div className="text-3xl sm:text-4xl font-black text-orange-500 tracking-tight font-mono">
                  {currentSlide.stat.value}
                </div>
                <div className="text-xs font-black text-white mt-0.5">{currentSlide.stat.label}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{currentSlide.stat.sublabel}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-5 py-4 border-t border-zinc-700/80 bg-[#242a34]/90 backdrop-blur flex flex-wrap items-center justify-between gap-4 shrink-0">
          {/* Step Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => {
                  setCurrentSlideIndex(idx);
                  setProgress(0);
                }}
                className={`h-2 rounded-full transition-all ${
                  idx === currentSlideIndex
                    ? 'w-7 bg-orange-600'
                    : 'w-2 bg-zinc-600 hover:bg-zinc-500'
                }`}
                title={`اسلاید ${s.id}: ${s.badge}`}
              />
            ))}
          </div>

          {/* Deep-dive button & Next / Prev controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onNavigateToTab(currentSlide.deepDiveTab);
              }}
              className="px-3 py-2 rounded-xl bg-[#2a313d] hover:bg-[#343d4c] text-zinc-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5 border border-zinc-600/70"
            >
              <span>بررسی مستندات در پورتال</span>
              <span>🔍</span>
            </button>

            <button
              onClick={handlePrev}
              className="px-3 py-2 rounded-xl bg-[#2a313d] hover:bg-[#343d4c] text-white text-xs font-bold transition-colors border border-zinc-600/70"
            >
              اسلاید قبلی →
            </button>

            {currentSlideIndex < totalSlides - 1 ? (
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-black shadow-md shadow-orange-600/30 transition-colors flex items-center gap-1"
              >
                <span>اسلاید بعدی</span>
                <span>←</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  onClose();
                  onNavigateToTab('roadmap');
                }}
                className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-black shadow-md shadow-orange-600/30 transition-colors flex items-center gap-1"
              >
                <span>پایان پرزنت و ورود به جزئیات</span>
                <span>✓</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

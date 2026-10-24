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
    badge: '۱. اصل ماجرا در ۶۰ ثانیه',
    badgeEn: 'EXECUTIVE THESIS',
    title: 'کلاً قضیه چیه و می‌خواهیم چه کار کنیم؟',
    subtitle: 'تبدیل محورسازان جهان اسپوتا از «فروشنده قطعه منفرد» به «حکمران اکوسیستم زیربندی تریلر (Running Gear)» در ایران و منطقه.',
    keyPoints: [
      {
        icon: '🎯',
        label: 'مسئله اصلی امروز',
        desc: 'بازار پر از قطعات متفرقه چینی بی‌کیفیت و خواب مکرر ناوگان سنگین در جاده‌هاست.',
        highlight: 'خواب هر روز تریلر = خسارت سنگین به شرکت حمل‌ونقل',
      },
      {
        icon: '🚀',
        label: 'استراتژی برد RST',
        desc: 'عرضه یکپارچه پکیج کامل زیربندی (تیر محور، تعلیق بادی، کالیپر دیسکی، توپی و بوستر) با استاندارد ECE اروپا.',
        highlight: 'نصب Plug & Play در خطوط تریلرسازی',
      },
      {
        icon: '🔄',
        label: 'بازی بزرگ بلندمدت',
        desc: 'سود ما فقط در فروش محور نیست؛ هر محوری که روی جاده می‌رود، ۱۰ سال تضمین فروش قطعات یدکی مصرفی برای ماست.',
        highlight: 'ایجاد دارایی در جاده (Installed Base)',
      },
    ],
    stat: {
      value: '۲۷۰,۰۰۰',
      label: 'محور در سال',
      sublabel: 'کل ظرفیت تقاضای سالانه ناوگان کشور',
    },
    visualType: 'core',
    deepDiveTab: 'summary',
  },
  {
    id: 2,
    badge: '۲. ابعاد ثروت بازار',
    badgeEn: 'MARKET OPPORTUNITY',
    title: 'فرصت طلایی: ۹۰ هزار تریلر، ۲۷۰ هزار محور سالانه',
    subtitle: 'فاصله میان ظرفیت تقاضای واقعی ناوگان و تولید فعلی، یک اقیانوس آبی بی‌رقیب برای محصول استاندارد داخلی است.',
    keyPoints: [
      {
        icon: '📊',
        label: 'تقاضای واقعی کشور',
        desc: 'نیاز ناوگان تجاری کشور سالانه ۹۰ هزار تریلر است؛ با ضریب ۳ محور در هر تریلر معادل ۲۷۰ هزار محور.',
        highlight: 'ارزش پکیج زیربندی سالانه: بالای ۵۰۰ میلیون دلار',
      },
      {
        icon: '⚡',
        label: 'خلاء شدید تکنولوژی',
        desc: 'بیش از ۸۰ درصد تریلرهای در حال تولید هنوز از ترمزهای قدیمی کاسه‌ای استفاده می‌کنند و تشنه ارتقا به دیسکی و تعلیق بادی هستند.',
        highlight: 'الزام قانونی استانداردهای ۸۵‌گانه ملی',
      },
      {
        icon: '🌍',
        label: 'هاب منطقه‌ای ارومیه',
        desc: 'موقعیت طلایی کارخانه RST در ارومیه، دسترسی مستقیم به قطب تریلرسازی ترکیه و بنادر خلیج فارس را تضمین کرده است.',
        highlight: 'صادرات با مزیت لجستیکی مرز رازی و بازرگان',
      },
    ],
    stat: {
      value: '۹۰,۰۰۰',
      label: 'دستگاه تریلر / سال',
      sublabel: 'نیاز به نوسازی و توسعه ناوگان فرسوده کشور',
    },
    visualType: 'sizing',
    deepDiveTab: 'sizing',
  },
  {
    id: 3,
    badge: '۳. محصول استراتژیک',
    badgeEn: 'THE WEAPON: RUNNING GEAR',
    title: 'سلاح رقابتی ما: پلتفرم یکپارچه محور کامل RST',
    subtitle: 'سازنده تریلر به جای دردسر خرید جداگانه از ۱۰ فروشنده، تمام زیربندی را با گارانتی یکپارچه از اسپوتا تحویل می‌گیرد.',
    keyPoints: [
      {
        icon: '🛡️',
        label: 'تیر محور بدون درز فرآوری حرارتی',
        desc: 'تیر محور فورج‌شده با استحکام بالا و مقاومت در برابر بار سنگین جاده‌های ایران.',
        highlight: 'ظرفیت اسمی ۹ تن با تحمل بار تا ۱۲ تن',
      },
      {
        icon: '🛑',
        label: 'سیستم ترمز دیسکی پنوماتیک',
        desc: 'کالیپر چدن داکتیل با تنظیم خودکار لقی و دیسک ۴۳۰ میلی‌متری تهویه‌دار.',
        highlight: 'کاهش ۳۵ درصدی خط ترمز تریلر',
      },
      {
        icon: '🎈',
        label: 'تعلیق بادی مستقل (Air Spring)',
        desc: 'کیسه بادهای مقاوم با پیستون فولادی جهت حفظ تعادل محموله‌های حساس و مایعات.',
        highlight: 'حذف کامل لرزش و آسیب به شاسی تریلی',
      },
    ],
    stat: {
      value: 'DFZ 9T',
      label: 'پلتفرم استاندارد ECE',
      sublabel: 'طراحی منطبق با استاندارد بین‌المللی R13',
    },
    visualType: 'runningGear',
    deepDiveTab: 'products',
  },
  {
    id: 4,
    badge: '۴. چرخ طیار درآمدی',
    badgeEn: 'DUAL-ENGINE REVENUE MODEL',
    title: 'چرخ طیار دو موتوره: رشد سود نمایی و پایدار',
    subtitle: 'فروش محور به تریلرساز، تله شیرین ما برای تصاحب سودآورترین بازار یعنی بازار قطعات یدکی (Aftermarket) است.',
    keyPoints: [
      {
        icon: '🏭',
        label: 'موتور ۱: خطوط OEM تریلرساز',
        desc: 'با ورود مستقیم به لیست قطعات کارخانه‌ها، هر سال ۱۰ الی ۳۰ هزار محور وارد جاده‌ها می‌کنیم.',
        highlight: 'ایجاد دارایی در جاده (Installed Base)',
      },
      {
        icon: '🔧',
        label: 'موتور ۲: بازار قطعات مصرفی یدکی',
        desc: 'هر محور پس از ورود به جاده، سالانه نیازمند لنت، بوستر، دبه بادی، کاسه، توپی و بلبرینگ است.',
        highlight: 'حاشیه سود بالای ۴۵٪ در قطعات یدکی',
      },
      {
        icon: '🔁',
        label: 'اثر هم‌افزایی بازگشتی',
        desc: 'وفاداری رانندگان به کیفیت قطعات RST، تریلرسازان را مجبور می‌کند تریلر جدید را فقط با محور RST سفارش دهند.',
        highlight: 'تقاضای کششی از پایین به بالا (Pull Demand)',
      },
    ],
    stat: {
      value: '۱۰ سال',
      label: 'جریان نقدینگی تضمین‌شده',
      sublabel: 'به ازای هر یک محور فروخته‌شده به سازنده تریلر',
    },
    visualType: 'flywheel',
    deepDiveTab: 'summary',
  },
  {
    id: 5,
    badge: '۵. نقشه نفوذ به ۵۰ OEM',
    badgeEn: 'TARGET CUSTOMERS',
    title: 'بانک مشتریان هدف: ۵۰ کارخانه تریلرساز در ایران و منطقه',
    subtitle: 'از قطب ارومیه و تبریز تا البرز، اصفهان و کارخانه‌های بزرگ منطقه، مشتریان مشخص و دسته‌بندی شده‌اند.',
    keyPoints: [
      {
        icon: '🥇',
        label: 'تایر ۱ (پیشروان بازار ایران)',
        desc: 'ماموت، مارال تریلر، اروم تریلر، مایان و ایران‌کاوه با تیراژ بالا و اولویت برندسازی مشترک.',
        highlight: 'تأمین پکیج کامل سفارشی با قرارداد بلندمدت',
      },
      {
        icon: '🥈',
        label: 'تایر ۲ (تولیدکنندگان تخصصی)',
        desc: 'کمپرسی‌سازان، تانکرسازان و بونکورسازان ارومیه، همدان، اصفهان و شیراز.',
        highlight: 'ورود سریع با بوستر و توپی-کاسه سنگین',
      },
      {
        icon: '🌐',
        label: 'صادرات منطقه‌ای',
        desc: 'تریلرسازان قونیه ترکیه و عربستان سعودی (Al-Mutawa) که به دنبال تأمین‌کننده باکیفیت و اقتصادی هستند.',
        highlight: 'صادرات محور با سود ارزی خالص',
      },
    ],
    stat: {
      value: '۵۰+',
      label: 'کارخانه هدف شناسایی‌شده',
      sublabel: 'با آدرس دقیق، نقشه GIS و مشخصات فنی',
    },
    visualType: 'oem',
    deepDiveTab: 'oem',
  },
  {
    id: 6,
    badge: '۶. تصمیم هیئت مدیره',
    badgeEn: 'BOARD ACTION & 90-DAY PLAN',
    title: 'تصمیم مورد نیاز امروز و برنامه اجرایی ۹۰ روزه',
    subtitle: 'برای آغاز این جهش و تسخیر سهم بازار، نیازمند تصمیم‌گیری روی ۳ محور مشخص در همین جلسه هستیم.',
    keyPoints: [
      {
        icon: '💰',
        label: '۱. تصویب پکیج سرمایه‌گذاری ۵.۲ میلیون دلاری',
        desc: 'تخصیص بودجه برای قالب‌های فورج سرپلوس، خط اتوماسیون تست ECE و راه‌اندازی انبار لجستیک توزیع قطعات.',
        highlight: 'دوره بازگشت سرمایه تخمینی: ۲.۴ سال',
      },
      {
        icon: '🤝',
        label: '۲. عقد تفاهم‌نامه با ۳ سازنده بزرگ تریلر',
        desc: 'ارائه ۳۰ جفت محور آزمایشی (Pilot Test) با ضمانت ۱۰۰٪ و خدمات پشتیبانی اختصاصی در ۹۰ روز اول.',
        highlight: 'تثبیت حضور در BOM خط مونتاژ',
      },
      {
        icon: '📦',
        label: '۳. عرضه ۶ قطعه ورودی سریع به بازار افترمارکت',
        desc: 'آغاز توزیع مویرگی بوستر، کالیپر، دبه بادی، جک، توپی و کاسه با شبکه نمایندگی‌های سراسر کشور.',
        highlight: 'ایجاد جریان نقدینگی خودکفا در کمتر از ۶ ماه',
      },
    ],
    stat: {
      value: '۹۰ روز',
      label: 'زمان فاز اول اجرایی',
      sublabel: 'ورود به خط تولید تریلرسازان منتخب',
    },
    visualType: 'decision',
    deepDiveTab: 'roadmap',
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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md transition-opacity duration-300"
      dir="rtl"
    >
      <div className="relative w-full max-w-5xl bg-zinc-950 border border-zinc-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col text-white max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="px-5 py-3.5 border-b border-zinc-800/80 bg-zinc-900/60 backdrop-blur flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-lg bg-orange-600 text-white flex items-center justify-center font-black text-sm shadow-md">
              RST
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-white">پرزنت اختصاصی هیئت مدیره و مدیران ارشد</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-600/20 text-orange-400 border border-orange-500/30 font-bold">
                  خلاصه ۶۰ ثانیه‌ای
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
                  : 'bg-zinc-800 border-zinc-700 text-zinc-300 hover:text-white'
              }`}
              title="پخش خودکار اسلایدها (۷ ثانیه هر اسلاید)"
            >
              <span>{isAutoPlay ? '⏸ توقف خودکار' : '▶ پخش خودکار'}</span>
            </button>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center text-sm font-bold transition-colors"
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
            <h2 className="text-xl sm:text-3xl font-black text-white leading-tight">
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
                  className="p-4 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-zinc-700 transition-all space-y-1.5 shadow-sm"
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
            <div className="lg:col-span-5 flex flex-col justify-between p-5 rounded-2xl bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 border border-zinc-800 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-orange-600/10 blur-3xl pointer-events-none" />

              {/* Dynamic Slide Visual */}
              <div className="relative z-10 py-4 flex flex-col items-center justify-center text-center">
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
                      <div className="p-3 rounded-xl bg-zinc-800 border border-zinc-700 text-center">
                        <div className="text-xs text-zinc-400">وضعیت فعلی</div>
                        <div className="text-xs font-bold text-red-400 mt-0.5">فروش قطعه پراکنده</div>
                      </div>
                      <span className="text-xl text-orange-500 font-bold">➔</span>
                      <div className="p-3 rounded-xl bg-orange-600 text-center text-white shadow-md">
                        <div className="text-xs text-orange-200">جهش استراتژیک RST</div>
                        <div className="text-xs font-black mt-0.5">پلتفرم زیربندی یکپارچه</div>
                      </div>
                    </div>
                  </div>
                ) : currentSlide.visualType === 'flywheel' ? (
                  <div className="w-full py-3 space-y-2">
                    <div className="p-3 rounded-xl bg-zinc-800/90 border border-zinc-700 text-right">
                      <div className="text-[11px] text-orange-400 font-bold">موتور اول (OEM)</div>
                      <div className="text-xs font-bold text-white mt-0.5">ورود به خط تولید ۳۰ تریلرساز</div>
                    </div>
                    <div className="text-center text-orange-500 font-black text-sm">⬇ ایجاد دارایی در جاده</div>
                    <div className="p-3 rounded-xl bg-orange-600/20 border border-orange-500 text-right">
                      <div className="text-[11px] text-orange-300 font-bold">موتور دوم (Aftermarket)</div>
                      <div className="text-xs font-black text-white mt-0.5">۱۰ سال تقاضای قطعات یدکی با سود بالا</div>
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
              <div className="relative z-10 pt-4 border-t border-zinc-800 text-center">
                <div className="text-3xl sm:text-4xl font-black text-orange-500 tracking-tight">
                  {currentSlide.stat.value}
                </div>
                <div className="text-xs font-black text-white mt-0.5">{currentSlide.stat.label}</div>
                <div className="text-[11px] text-zinc-400 mt-0.5">{currentSlide.stat.sublabel}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation Bar */}
        <div className="px-5 py-4 border-t border-zinc-800 bg-zinc-900/80 backdrop-blur flex flex-wrap items-center justify-between gap-4 shrink-0">
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
                    : 'w-2 bg-zinc-700 hover:bg-zinc-600'
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
              className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 hover:text-white text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <span>بررسی عمیق‌تر در پورتال</span>
              <span>🔍</span>
            </button>

            <button
              onClick={handlePrev}
              className="px-3 py-2 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold transition-colors"
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

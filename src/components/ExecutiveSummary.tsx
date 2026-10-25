import React, { useState } from 'react';
import { spootaCompanies, valueChainData } from '../data/marketData';

export const ExecutiveSummary: React.FC<{
  onNavigate: (tabId: string) => void;
  onStartPresentation?: () => void;
}> = ({ onNavigate, onStartPresentation }) => {
  const [selectedStep, setSelectedStep] = useState(3);
  const [flywheelPlan, setFlywheelPlan] = useState<1 | 2 | 3>(2);
  const [strategyTab, setStrategyTab] = useState<'phasing' | 'potential' | 'teams' | 'campaigns'>('phasing');

  const plans = {
    1: { label: 'سناریوی محافظه‌کارانه (۵K ← ۱۰K ← ۱۵K)', y1: 5000, y2: 10000, y3: 15000 },
    2: { label: 'برنامه پایه گزارش (۱۰K ← ۲۰K ← ۳۰K)', y1: 10000, y2: 20000, y3: 30000 },
    3: { label: 'سناریوی رشد پرشتاب (۱۵K ← ۲۵K ← ۳۵K)', y1: 15000, y2: 25000, y3: 35000 },
  };

  const currentPlan = plans[flywheelPlan];
  const totalInstalled = currentPlan.y1 + currentPlan.y2 + currentPlan.y3;
  const currentStepData = valueChainData.find((s) => s.step === selectedStep) || valueChainData[2];

  return (
    <section className="space-y-6">
      {/* Executive Fast-Pitch CTA Callout - Calm Slate Theme */}
      {onStartPresentation && (
        <div className="p-4 rounded-2xl bg-[#1e2530] text-zinc-100 border border-zinc-700/80 shadow-md flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-600/90 text-white flex items-center justify-center font-black text-lg shadow-sm">
              ▶
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-white">
                  ارائه راهبردی به هیئت مدیره و مدیران ارشد (۶ اسلاید کلیدی)
                </h3>
              </div>
              <p className="text-xs text-zinc-300 mt-0.5">
                خلاصه مبانی آماری صمت و ناوگان فرسوده، فازبندی بازار داخل و چارچوب اقدام ۳ تیم بازاریابی، فروش و رسانه.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onStartPresentation}
              className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-black transition-all flex items-center gap-2 group whitespace-nowrap shadow-sm"
            >
              <span>اجرای اسلایدشوی راهبردی</span>
              <span className="group-hover:translate-x-[-3px] transition-transform">←</span>
            </button>
          </div>
        </div>
      )}

      {/* Official Data Sources & Market Grounding Banner - Eye-friendly Neutral Styling */}
      <div className="rounded-2xl p-4 sm:p-5 bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-700/60 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-black text-sm border border-zinc-300 dark:border-zinc-700">
              📰
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-zinc-900 dark:text-zinc-100">
                  داده‌های استنادی کلیدی و مبانی آماری تحلیل
                </h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold border border-zinc-300 dark:border-zinc-700">
                  صمت دی ۱۴۰۴ + تسنیم آبان ۱۴۰۲
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold mt-0.5">
                مبنای آماری برآورد نیاز سالانه تریلر و محور در بازار ایران
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-3 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 text-zinc-800 dark:text-zinc-200 font-bold border border-zinc-300 dark:border-zinc-700">
              تقاضای سالانه کشور: <b className="font-black text-orange-600 dark:text-orange-400">۹۰,۳۲۴</b> تریلر | <b className="font-black text-orange-600 dark:text-orange-400">۲۷۰,۰۰۰</b> محور
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Source 1: Ministry of Industry (MIMT) */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-black text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm flex items-center gap-1.5">
                  <span>🏢</span>
                  <span>۱. داده رسمی وزارت صنعت، معدن و تجارت (دی ۱۴۰۴)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-bold border border-zinc-300 dark:border-zinc-700">
                  قطب ارومیه
                </span>
              </div>

              {/* Bold Stat Badges Grid - Eye Friendly Unified Colors */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">تولید سالانه استان</div>
                  <div className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight mt-0.5">
                    ۱۵,۳۵۵
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">دستگاه تریلر</div>
                </div>

                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">سهم از نیاز کشور</div>
                  <div className="text-sm sm:text-base font-black text-orange-600 dark:text-orange-400 tracking-tight mt-0.5">
                    ۱۷٪
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">(۱۹٪ کارگاه‌ها)</div>
                </div>

                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">نیاز کل کشور (سال)</div>
                  <div className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight mt-0.5">
                    ۹۰,۳۲۴
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">دستگاه تریلر</div>
                </div>

                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">تقاضای محور (Axle)</div>
                  <div className="text-sm sm:text-base font-black text-orange-600 dark:text-orange-400 tracking-tight mt-0.5">
                    ۲۷۰,۰۰۰
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">محور (مبنای ۳محور)</div>
                </div>
              </div>

              {/* Explanatory text with bold highlighted numbers */}
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-[11.5px] space-y-1 bg-white dark:bg-[#181e26] p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700/60">
                <p>
                  مدیرکل صمت آذربایجان‌غربی رسماً اعلام کرد تولید فعلی استان <strong className="font-black text-zinc-900 dark:text-white underline decoration-orange-500 decoration-2">۱۵,۳۵۵ دستگاه انواع تریلر در سال</strong> است که معادل <strong className="font-black text-zinc-900 dark:text-white underline decoration-orange-500 decoration-2">۱۷٪ کل نیاز کشور</strong> می‌باشد.
                </p>
                <div className="flex items-center flex-wrap gap-1.5 pt-1">
                  <span className="font-bold text-zinc-600 dark:text-zinc-400">فرمول برآورد نیاز سالانه تریلر ایران:</span>
                  <span className="font-black text-xs text-zinc-900 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded border border-zinc-300 dark:border-zinc-700 dir-ltr inline-block">
                    ۱۵,۳۵۵ ÷ ۰.۱۷ ≈ ۹۰,۳۲۴ دستگاه در سال
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pt-0.5">
                  با تکمیل طرح‌های توسعه‌ای، ظرفیت تولید این استان تا <strong className="font-black text-zinc-800 dark:text-zinc-200">۷۰,۰۰۰ دستگاه</strong> قابل افزایش خواهد بود.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700/60 flex items-center justify-between text-[11px]">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">منبع: اداره کل صمت آذربایجان‌غربی</span>
              <a
                href="https://www.mimt.gov.ir/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1/%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%B3%D8%A7%D9%84%D8%A7%D9%86%D9%87-%DB%B1%DB%B5-%D9%87%D8%B2%D8%A7%D8%B1-%D8%AA%D8%B1%DB%8C%D9%84%D8%B1%D8%9B-%D8%A2%D8%B0%D8%B1%D8%A8%D8%A7%DB%8C%D8%AC%D8%A7%D9%86%E2%80%8C%D8%BA%D8%B1%D8%A8%DB%8C-%D9%BE%DB%8C%D8%B4%D8%AA%D8%A7%D8%B2-%D8%B5%D9%86%D8%B9%D8%AA-%D8%AA%D8%B1%DB%8C%D9%84%D8%B1%D8%B3%D8%A7%D8%B2%DB%8C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline font-bold inline-flex items-center gap-1 group"
              >
                <span>مشاهده خبر در پورتال صمت</span>
                <span className="group-hover:translate-x-[-1px] transition-transform" dir="ltr">↗</span>
              </a>
            </div>
          </div>

          {/* Source 2: Tasnim News Agency */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-black text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm flex items-center gap-1.5">
                  <span>🚛</span>
                  <span>۲. گزارش رسمی خبرگزاری تسنیم (آبان ۱۴۰۲)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 font-bold border border-zinc-300 dark:border-zinc-700">
                  فرسودگی ناوگان
                </span>
              </div>

              {/* Bold Stat Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">کل ناوگان باری جاده‌ای</div>
                  <div className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight mt-0.5">
                    ۴۱۱,۰۰۰
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">کامیون و کشنده</div>
                </div>

                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">تعداد ناوگان فرسوده</div>
                  <div className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight mt-0.5">
                    ۲۰۰,۰۰۰+
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">دستگاه فرسوده</div>
                </div>

                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">نرخ فرسودگی ناوگان</div>
                  <div className="text-sm sm:text-base font-black text-orange-600 dark:text-orange-400 tracking-tight mt-0.5">
                    &gt; ۵۰٪
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">نیازمند نوسازی</div>
                </div>

                <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">وعده الحاق کوتاه‌مدت</div>
                  <div className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight mt-0.5">
                    ۱۰,۰۰۰
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">دستگاه کشنده/کامیون</div>
                </div>
              </div>

              {/* Explanatory text with bold highlighted numbers */}
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-[11.5px] space-y-1 bg-white dark:bg-[#181e26] p-2.5 rounded-lg border border-zinc-200 dark:border-zinc-700/60">
                <p>
                  گزارش رسمی حاکی است از مجموع <strong className="font-black text-zinc-900 dark:text-white underline decoration-orange-500 decoration-2">حدود ۴۱۱ هزار دستگاه</strong> کامیون و کشنده کشور، <strong className="font-black text-zinc-900 dark:text-white underline decoration-orange-500 decoration-2">بیش از ۲۰۰ هزار دستگاه (بیش از ۵۰٪ ناوگان)</strong> در سن فرسودگی قطعی قرار دارند.
                </p>
                <div className="pt-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                  <strong className="font-black text-zinc-800 dark:text-zinc-200">نکته تفسیری تحلیل:</strong> ورود هر کشنده نو یا نوسازی کشنده‌های فرسوده، پیش‌ران و محرک مستقیم تقاضای خرید تریلر نو و باکیفیت است.
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700/60 flex items-center justify-between text-[11px]">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">منبع: گزارش رسمی تسنیم</span>
              <a
                href="https://www.tasnimnews.ir/fa/news/1402/08/20/2986730/50-%D8%AF%D8%B1%D8%B5%D8%AF-%D9%86%D8%A7%D9%88%DA%AF%D8%A7%D9%86-%D8%A8%D8%A7%D8%B1%DB%8C-%DA%A9%D8%B4%D9%88%D8%B1-%D9%81%D8%B1%D8%B3%D9%88%D8%AF%D9%87-%D8%A7%D8%B3%D8%AA-%D9%88%D8%B9%D8%AF%D9%87-%D8%A7%D9%84%D8%AD%D8%A7%D9%82-10-%D9%87%D8%B2%D8%A7%D8%B1-%D8%A7%D8%AA%D9%88%D8%A8%D9%88%D8%B3-%D9%88-%DA%A9%D8%A7%D9%85%DB%8C%D9%88%D9%86-%D8%A8%D9%87-%D9%86%D8%A7%D9%88%DA%AF%D8%A7%D9%86-%D8%AC%D8%A7%D8%AF%D9%87-%D8%A7%DB%8C-%D8%AA%D8%A7-%D8%A8%D9%87%D8%A7%D8%B1-1403?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline font-bold inline-flex items-center gap-1 group"
              >
                <span>مشاهده گزارش در خبرگزاری تسنیم</span>
                <span className="group-hover:translate-x-[-1px] transition-transform" dir="ltr">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MASTER STRATEGIC DIRECTIVE FOR THE EXECUTIVE: DOMESTIC FOCUS & 3 TEAMS */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-5 sm:p-6 bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-700/60 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-black border border-zinc-300 dark:border-zinc-700">
                ماتریس راهبردی تصمیم‌گیری مدیرعامل
              </span>
              <span className="text-xs text-orange-600 dark:text-orange-400 font-bold">
                اولویت ۱: عمق بازار داخل | اولویت ۲: صادرات منطقه
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-black text-zinc-900 dark:text-white mt-1">
              جایگاه فعلی، پتانسیل واقعی و برنامه عملیاتی ۳ تیم (فروش، بازاریابی، رسانه و کمپین‌ها)
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5 leading-relaxed">
              این پلتفرم برای پاسخ به سؤال کلیدی مدیر طراحی شده است: <strong>در چه جایگاهی هستیم؟ چه پتانسیلی داریم؟ چگونه هدف‌گذاری کنیم و این نتایج چگونه به ۳ تیم اجرایی منتقل می‌شود؟</strong>
            </p>
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-100 dark:bg-[#202732] p-1 rounded-xl border border-zinc-200 dark:border-zinc-700">
            <button
              onClick={() => setStrategyTab('phasing')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                strategyTab === 'phasing'
                  ? 'bg-white dark:bg-[#2c3545] text-zinc-900 dark:text-white shadow-xs border border-zinc-300 dark:border-zinc-600'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              ۱. اولویت بازار داخل و صادرات
            </button>
            <button
              onClick={() => setStrategyTab('potential')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                strategyTab === 'potential'
                  ? 'bg-white dark:bg-[#2c3545] text-zinc-900 dark:text-white shadow-xs border border-zinc-300 dark:border-zinc-600'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              ۲. جایگاه ما و پتانسیل واقعی
            </button>
            <button
              onClick={() => setStrategyTab('teams')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                strategyTab === 'teams'
                  ? 'bg-white dark:bg-[#2c3545] text-zinc-900 dark:text-white shadow-xs border border-zinc-300 dark:border-zinc-600'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              ۳. اهداف تفکیکی ۳ تیم اجرایی
            </button>
            <button
              onClick={() => setStrategyTab('campaigns')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                strategyTab === 'campaigns'
                  ? 'bg-white dark:bg-[#2c3545] text-zinc-900 dark:text-white shadow-xs border border-zinc-300 dark:border-zinc-600'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              ۴. طراحی کمپین‌های تبلیغاتی
            </button>
          </div>
        </div>

        {/* Tab 1: Market Phasing (Domestic First, Regional Export Second) */}
        {strategyTab === 'phasing' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7 p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-orange-600"></span>
                  <span>فاز اول (تمرکز فوری و ۱۰۰٪): تسخیر عمق تقاضای بازار داخل ایران</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-black">
                  اولویت ۱ استراتژیک
                </span>
              </div>

              <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
                بازار داخلی ایران به‌تنهایی برای پر کردن چندین برابری ظرفیت تولید اسپوتا کافی است. حجم تقاضای کل کشور <strong>۹۰,۳۲۴ دستگاه تریلر در سال</strong> (معادل <strong>۲۷۰,۰۰۰ محور</strong>) است که با فرسودگی ۵۰ درصدی ۲۰۰,۰۰۰ کامیون/کشنده، تقاضایی مداوم و تضمین‌شده ایجاد کرده است.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">خوشه ارومیه (مجاورت کارخانه)</div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white mt-0.5">۱۵,۳۵۵ تریلر</div>
                  <div className="text-[10px] text-orange-600 dark:text-orange-400 font-bold mt-0.5">۴۶,۰۰۰ محور سالانه</div>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">سازندگان برتر ملی</div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white mt-0.5">۷۴,۹۶۹ تریلر</div>
                  <div className="text-[10px] text-zinc-600 dark:text-zinc-300 font-bold mt-0.5">۲۲۴,۰۰۰ محور سالانه</div>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">مأموریت فاز ۱</div>
                  <div className="text-sm font-black text-zinc-900 dark:text-white mt-0.5">قطع واردات ترک/چین</div>
                  <div className="text-[10px] text-zinc-600 dark:text-zinc-300 font-bold mt-0.5">حذف ریسک ارز و گمرک</div>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 text-xs text-zinc-700 dark:text-zinc-300 space-y-1">
                <strong className="text-zinc-900 dark:text-white block font-black">دستور اقدام مدیرعامل برای فاز داخل:</strong>
                <p className="text-[11px] leading-relaxed">
                  تا زمانی که در ۵۴ تریلرساز ارومیه (که در حیاط خلوت ما و در فاصله کمتر از ۵۰ کیلومتری کارخانه‌اند) به سهم بالای ۵۰٪ نرسیده‌ایم و وارد سبد تریلرسازان بزرگ ملی مانند ماموت، مارال، مایان، اروم‌تریلر نشده‌ایم، نباید منابع سازمانی را پراکنده کنیم. تمرکز اصلی روی داخل است.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5 p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-black text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-zinc-400"></span>
                    <span>فاز دوم (توسعه مرحله‌ای): صادرات منطقه‌ای</span>
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                    گام توسعه‌ای
                  </span>
                </div>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mt-2">
                  پس از تثبیت خطوط تولید با سفارش‌های داخل، موقعیت ژئوپلیتیک کارخانه در ارومیه (کیلومتر ۱۲ جاده مهاباد و نزدیکی به پایانه‌های مرزی بازرگان، سرو و تمرچین) بزرگ‌ترین مزیت ترانزیتی صادرات را فعال می‌کند.
                </p>

                <div className="space-y-2 mt-3 text-xs">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">🇮🇶 عراق و اقلیم کردستان:</span>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">نیاز شدید به بازسازی ناوگان کفی و تانکر سوخت</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">مرز تمرچین</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">🇦🇿 🇦🇲 حوزه قفقاز و CIS:</span>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">کریدور ترانزیت شمال-جنوب و استاندارد ECE R13</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">مرز بازرگان و جلفا</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-zinc-900 dark:text-zinc-100">🇸🇾 🇦🇫 سوریه و افغانستان:</span>
                      <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block">نیاز به پکیج‌های تقویت‌شده محور کاسه‌ای و کمپرسی</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500">صادرات ارزی</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-zinc-500 dark:text-zinc-400 pt-2 border-t border-zinc-200 dark:border-zinc-700">
                <strong>نتیجه برای مدیر:</strong> فازبندی شفاف: ۹۰٪ انرژی اجرایی روی عمق‌بخشی به بازار داخل، ۱۰٪ برای ثبت استانداردها و دیپلماسی تجاری صادرات.
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Position & Potential Matrix */}
        {strategyTab === 'potential' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Where We Stand Today */}
            <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <span>📍</span>
                  <span>در چه جایگاهی هستیم؟ (وضعیت موجود RST Spoota)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
                  تحلیل وضع موجود
                </span>
              </div>

              <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 space-y-1">
                  <div className="font-black text-zinc-900 dark:text-white">۱. قدرت بی‌رقیب در زیرساخت تولید (Vertical Integration)</div>
                  <p className="text-[11.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    گروه اسپوتا تنها مجموعه‌ای است که ۶ شرکت تخصصی در زمینه فولاد و فورج (فیدار فولاد)، ماشین‌کاری CNC دقیق (قطعه‌سازان) و خط مونتاژ اختصاصی محور را زیر یک سقف دارد و تست ECE R13 را پاس کرده است.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 space-y-1">
                  <div className="font-black text-zinc-900 dark:text-white">۲. چالش نفوذ در بازار و سهم فعلی</div>
                  <p className="text-[11.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    با وجود کیفیت عالی، بخش اعظم تریلرسازان هنوز به عادت سنتی از محورهای وارداتی ترکیه (چلان، سرتل، پیرلانتا، اوزکوچ) یا محورهای متفرقه چینی استفاده می‌کنند.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 space-y-1">
                  <div className="font-black text-zinc-900 dark:text-white">۳. چالش شناخت رانندگان نهایی (End-Users)</div>
                  <p className="text-[11.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    راننده و خریدار تریلر موقع سفارش به تریلرساز اصرار بر بستن محور خارجی می‌کند، چون تصویر درستی از دوام و گارانتی و استاندارد اروپایی محور RST ندارد.
                  </p>
                </div>
              </div>
            </div>

            {/* What is Our Realistic Potential */}
            <div className="p-4 sm:p-5 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-black text-sm text-zinc-900 dark:text-white flex items-center gap-1.5">
                  <span>🎯</span>
                  <span>چه پتانسیلی داریم؟ (فرصت تصاحب واقعی بازار)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
                  پتانسیل دست‌یافتنی
                </span>
              </div>

              <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 space-y-1">
                  <div className="font-black text-zinc-900 dark:text-white">۱. پتانسیل قطب ارومیه: ۲۳,۰۰۰ محور سالانه</div>
                  <p className="text-[11.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    تولید سالانه ارومیه ۱۵,۳۵۵ تریلر (۴۶,۰۰۰ محور) است. تنها با تصاحب ۵۰٪ از تریلرسازان همین استان، پتانسیل فروش سالانه ۲۳,۰۰۰ محور در فاصله کمتر از ۵۰ کیلومتری محقق می‌شود.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 space-y-1">
                  <div className="font-black text-zinc-900 dark:text-white">۲. پتانسیل ملی: تصاحب ۱۰٪ تا ۲۰٪ بازار ۲۷۰K محوری ایران</div>
                  <p className="text-[11.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    تسخیر سهم ۲۰ درصدی از کل ۲۷۰,۰۰۰ محور سالانه کشور برابر با <strong>۵۴,۰۰۰ محور در سال</strong> و گردش مالی بیش از ۲,۵۰۰ میلیارد تومان برای خطوط تولید اسپوتاست.
                  </p>
                </div>

                <div className="p-2.5 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700 space-y-1">
                  <div className="font-black text-zinc-900 dark:text-white">۳. پتانسیل طلایی افترمارکت: دارایی پایدار ۱۰ ساله</div>
                  <p className="text-[11.5px] text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    هر محور روی جاده به مدت ۱۰ سال نیاز به توپی، لنت، دیسک، کاسه و کیسه باد دارد. استقرار ۵۰ هزار محور، سالانه صدها میلیارد تومان سود خالص پایدار با مارجین بالای ۴۰٪ تولید می‌کند.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Detailed Goals for 3 Teams */}
        {strategyTab === 'teams' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Team 1: Marketing */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-bold text-xs">
                      📊
                    </span>
                    <h4 className="font-black text-zinc-900 dark:text-white text-xs sm:text-sm">
                      اهداف تیم بازاریابی
                    </h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                    Marketing
                  </span>
                </div>

                <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                  مأموریت: تغییر ادراک بازار از «یک قطعه‌ساز استانی» به «مرجع استاندارد پلتفرم Running Gear کشور».
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۱. مپینگ اطلاعات فنی ۵۴ تریلرساز:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">ثبت دقیق تیراژ، نوع سیستم تعلیق و مدل محور مورد استفاده در BOM هر کارخانه.</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۲. پایش مستمر قیمت رقبای ترک:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">رصد هفتگی نرخ لیر/دلار و قیمت چلان و سرتل برای حفظ شکاف قیمتی رقابتی ۱۰ تا ۱۵ درصدی.</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۳. تدوین گزاره ارزش گارانتی و TCO:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">فرمول‌بندی تضمین عدم خواب ناوگان و تأمین قطعه در ۴۸ ساعت با گارانتی بی‌قیدوشرط پوسته.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700 text-[11px] font-bold text-zinc-500">
                خروجی: تدوین کاتالوگ مهندسی و اسناد استانداردی متقاعدکننده.
              </div>
            </div>

            {/* Team 2: Sales */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-bold text-xs">
                      💼
                    </span>
                    <h4 className="font-black text-zinc-900 dark:text-white text-xs sm:text-sm">
                      اهداف تیم فروش
                    </h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                    Sales
                  </span>
                </div>

                <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                  مأموریت: نفوذ به BOM کارخانجات با مدل‌های منعطف اعتباری و راه‌اندازی شبکه عاملیت‌های فروش قطعه.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۱. تارگت تعدادی سال اول: ۱۰,۰۰۰ محور:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">تمرکز بر ۲۰ کارگاه تریلرساز ارومیه و نفوذ آزمایشی در ۳ برند ملی (ماموت، مارال، مایان).</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۲. مدل فروش اعتباری (LC / چک صیادی):</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">ارائه تسهیلات خرید چکی به تریلرسازان که واردکنندگان نقدی محور ترک هرگز قادر به ارائه آن نیستند.</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۳. تأسیس ۵ عاملیت افترمارکت در شاهراه‌ها:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">ایجاد نمایندگی انحصاری قطعات یدکی در تهران (شورآباد)، تبریز، بندرعباس، اصفهان و مشهد.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700 text-[11px] font-bold text-zinc-500">
                خروجی: عقد تفاهم‌نامه‌های تأمین انحصاری و تضمین نقدینگی.
              </div>
            </div>

            {/* Team 3: Media & Campaigns */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3 flex flex-col justify-between">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-7 h-7 rounded-lg bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 flex items-center justify-center font-bold text-xs">
                      📢
                    </span>
                    <h4 className="font-black text-zinc-900 dark:text-white text-xs sm:text-sm">
                      اهداف تیم رسانه و تبلیغات
                    </h4>
                  </div>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
                    Media & Ads
                  </span>
                </div>

                <p className="text-[11px] text-zinc-600 dark:text-zinc-400">
                  مأموریت: طراحی کمپین‌های اثربخش جهت ایجاد تقاضای معکوس (Pull Demand) در میان رانندگان و اعتماد در تریلرسازان.
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۱. کمپین B2B: «خط تولید بدون توقف»:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">تبلیغ تحویل فوری پای خط کارخانه بدون استرس ترخیص گمرکی و نوسان ارز.</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۲. کمپین B2C: «محوری که خواب ندارد»:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">پیام به راننده: به تریلرسازت بگو RST بندازه؛ ۵ سال گارانتی پوسته و قطعات در دسترس در هر جاده.</span>
                  </div>

                  <div className="p-2 rounded-lg bg-white dark:bg-[#181e26] border border-zinc-200 dark:border-zinc-700">
                    <span className="font-black text-zinc-900 dark:text-white block">۳. کمپین ویدئویی اعتمادسازی و تست:</span>
                    <span className="text-[11px] text-zinc-600 dark:text-zinc-400">انتشار تست‌های خستگی و متالوژی TÜV اتریش در یوتیوب، آپارات و اینستاگرام حمل‌ونقل.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700 text-[11px] font-bold text-zinc-500">
                خروجی: تبدیل برند RST به اولویت اول درخواست رانندگان هنگام خرید.
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Campaign Blueprints */}
        {strategyTab === 'campaigns' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Campaign 1: B2B OEM */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  کمپین شماره ۱: B2B سازندگان
                </span>
                <span className="text-[10px] text-zinc-500 font-bold">مخاطب: مدیران کارخانه</span>
              </div>

              <h4 className="text-sm font-black text-zinc-900 dark:text-white">
                «خط تولید بدون توقف — تحویل آنی پای خط»
              </h4>

              <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                <div>
                  <strong className="text-zinc-900 dark:text-white block">پیام محوری:</strong>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">«چرا خواب سرمایه در گمرک بازرگان؟ محور استاندارد ECE با نقشه‌های آماده CAD در کمتر از ۴۸ ساعت در کارخانه شماست.»</p>
                </div>

                <div>
                  <strong className="text-zinc-900 dark:text-white block">کانال‌های اجرا:</strong>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">تور بازدید اختصاصی مدیران تریلرسازی از خطوط فورج و CNC ارومیه، ارسال محور تستی رایگان (Pilot Axle) و کاتالوگ‌های مهندسی 3D.</p>
                </div>
              </div>
            </div>

            {/* Campaign 2: B2C Drivers */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  کمپین شماره ۲: رانندگان و ناوگان
                </span>
                <span className="text-[10px] text-zinc-500 font-bold">مخاطب: رانندگان پایه‌یک</span>
              </div>

              <h4 className="text-sm font-black text-zinc-900 dark:text-white">
                «محوری که خواب ندارد — با ضمانت تعویض ۵ ساله»
              </h4>

              <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                <div>
                  <strong className="text-zinc-900 dark:text-white block">پیام محوری:</strong>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">«به تریلرسازت بگو محور RST بندازه؛ پوسته شکست، ۵ سال ضمانت تعویض بدون شرط داری. قطعات یدکیش هم در هر شهر با نصف قیمت هست.»</p>
                </div>

                <div>
                  <strong className="text-zinc-900 dark:text-white block">کانال‌های اجرا:</strong>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">صفحات اینستاگرامی و کانال‌های تلگرامی رانندگان ترانزیت، پایانه‌های باربری نسیم‌شهر تهران، تبریز و بندرعباس، مصاحبه‌های جاده‌ای با رانندگان.</p>
                </div>
              </div>
            </div>

            {/* Campaign 3: Proof of Quality */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                  کمپین شماره ۳: شفافیت فنی
                </span>
                <span className="text-[10px] text-zinc-500 font-bold">مخاطب: مکانیک‌ها و مهندسان</span>
              </div>

              <h4 className="text-sm font-black text-zinc-900 dark:text-white">
                «کالبدشکافی کیفیت: مقایسه آزمایشگاهی RST با رقبای ترک»
              </h4>

              <div className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300">
                <div>
                  <strong className="text-zinc-900 dark:text-white block">پیام محوری:</strong>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">«تست متالوژی، آزمون خستگی هیدرولیک و بررسی ضخامت لوله؛ ببینید چرا محور RST تحمل بارهای سنگین جاده‌های ایران را دارد.»</p>
                </div>

                <div>
                  <strong className="text-zinc-900 dark:text-white block">کانال‌های اجرا:</strong>
                  <p className="text-[11px] text-zinc-600 dark:text-zinc-400">مستندهای ویدئویی کوتاه آزمایشگاهی، گزارش گواهی TÜV اتریش، آموزش نصب و نگهداری با QR Code روی کارتن قطعات در rstaxles.com.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Executive Hero Banner - Calm Eye-Friendly Dark Slate */}
      <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-700/80 bg-white dark:bg-[#1a2028] shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-800 text-zinc-200 text-xs font-black border border-zinc-700">
                <span>گروه صنعتی اسپوتا (Spoota Industrial Group)</span>
              </span>
              <a
                href="https://rstaxles.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 text-xs font-bold transition-colors"
              >
                <span>محورسازان جهان اسپوتا (rstaxles.com)</span>
                <span>↗</span>
              </a>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight text-zinc-900 dark:text-white">
              تسخیر بازار <span className="text-orange-600 dark:text-orange-400">۹۰,۰۰۰ تریلر و ۲۷۰,۰۰۰ محور</span> با ساخت اکوسیستم Running Gear
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              در استراتژی نوین <strong>گروه صنعتی اسپوتا (RST)</strong>، دارایی اصلی شرکت صرفاً سود کوتاه‌مدت فروش قطعه منفرد نیست؛ بلکه <strong>تعداد کل محورهای فعال در جاده (Installed Base)</strong> است. هر محوری که از طریق ورود به BOM تریلرسازان (موتور اول: OEM) روی جاده قرار می‌گیرد، تا سال‌ها تقاضای تضمین‌شده قطعات مصرفی یدکی (موتور دوم: Aftermarket) را ایجاد می‌کند.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 text-base shrink-0 font-bold border border-zinc-300 dark:border-zinc-700">
                  📐
                </div>
                <div>
                  <div className="text-xs text-zinc-900 dark:text-white font-black">ENGINEERED</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-300">طراحی 3D CAD و گواهی EMARK</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 text-base shrink-0 font-bold border border-zinc-300 dark:border-zinc-700">
                  ⚙️
                </div>
                <div>
                  <div className="text-xs text-zinc-900 dark:text-white font-black">MANUFACTURED</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-300">ماشین‌کاری CNC و ISO 9001</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 shadow-xs flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-800 dark:text-zinc-200 text-base shrink-0 font-bold border border-zinc-300 dark:border-zinc-700">
                  🛡️
                </div>
                <div>
                  <div className="text-xs text-zinc-900 dark:text-white font-black">SUPPORTED</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-300">شبکه تأمین و حذف خواب ناوگان</div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('products')}
                className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs sm:text-sm transition-colors shadow-xs"
              >
                مشاهده ویترین محصولات و قطعات نمونه ←
              </button>
              <button
                onClick={() => onNavigate('sizing')}
                className="px-4 py-2.5 rounded-xl bg-zinc-100 dark:bg-[#242b37] hover:bg-zinc-200 dark:hover:bg-[#2d3645] text-zinc-800 dark:text-zinc-100 border border-zinc-300 dark:border-zinc-700 font-extrabold text-xs sm:text-sm transition-colors shadow-xs"
              >
                بررسی شبیه‌ساز بازار ۲۷۰,۰۰۰ محور
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[340px] bg-zinc-50 dark:bg-[#151a22] border-t lg:border-t-0 lg:border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-6 overflow-hidden">
            {/* Soft spotlight behind the axle */}
            <div className="absolute w-64 h-64 rounded-full bg-zinc-200 dark:bg-zinc-800/40 blur-3xl opacity-60 pointer-events-none" />

            <img
              src="./assets/aistudio/DFZ.S.R.09.052.M_4db73d13.png"
              alt="پلتفرم کامل محور ۹ تن دیسکی و تعلیق بادی محورسازان جهان اسپوتا (RST DFZ.S.R.09.052.M)"
              className="relative z-10 w-full h-full object-contain max-h-[320px] drop-shadow-md transition-transform duration-300 hover:scale-105"
            />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-white/95 dark:bg-[#1a2028]/95 backdrop-blur-md border border-zinc-200 dark:border-zinc-700 shadow-md flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black text-orange-600 dark:text-orange-400">پلتفرم پرچمدار RST (محور ۹ تن بادی دیسکی)</div>
                <div className="text-xs font-black text-zinc-900 dark:text-white" dir="ltr">"Axles that stay on the road."</div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-lg bg-zinc-800 text-zinc-100 font-extrabold border border-zinc-700">
                ۲۷۰K محور / سال
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Quantitative KPI Gauges - Balanced and Calm */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">نیاز سالانه تریلر کشور</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">۹۰,۰۰۰</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">دستگاه تریلر / سال (صمت: ۱۷٪ = ۱۵,۳۵۵)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-[#242b37] text-zinc-800 dark:text-zinc-200 flex items-center justify-center text-lg font-black shrink-0 border border-zinc-200 dark:border-zinc-700">
            90K
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">کل تقاضای سالانه محور</span>
            <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-400 mt-1">۲۷۰,۰۰۰</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">محور در سال (۹۰,۰۰۰ تریلر × ۳ محور)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center text-lg font-black shrink-0 shadow-xs">
            ×3
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">پکیج توپی / ترمز / تعلیق</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">۵۴۰,۰۰۰</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">توپی، دیسک/کاسه و کیسه باد (۲ در هر محور)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-[#242b37] text-zinc-800 dark:text-zinc-200 flex items-center justify-center text-lg font-black shrink-0 border border-zinc-200 dark:border-zinc-700">
            ×2
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 flex items-center justify-between gap-3 shadow-xs">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">خوشه ارومیه و ۵۴ سازنده</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">۵۴ OEM</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">۱۷٪ تولید کشور (۱۵,۳۵۵ تریلر / سال)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-[#242b37] text-zinc-800 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center text-base font-black shrink-0">
            54
          </div>
        </div>
      </div>

      {/* Flywheel Infographic + Interactive Value Chain */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Visual SVG Flywheel & Simulator */}
        <div className="lg:col-span-5 rounded-2xl p-5 bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 flex flex-col justify-between space-y-4 shadow-xs">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">چرخ طیار استراتژیک (The RST Flywheel)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">چگونه فروش به OEM دارایی پایدار افترمارکت را می‌سازد؟</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
              دو موتوره
            </span>
          </div>

          {/* SVG Circular Flywheel Diagram in Soothing Palette */}
          <div className="relative flex items-center justify-center py-2 bg-zinc-50 dark:bg-[#151a22] rounded-xl border border-zinc-200 dark:border-zinc-800">
            <svg viewBox="0 0 340 250" className="w-full max-w-[340px] h-auto">
              <defs>
                <linearGradient id="fwGradReact" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#71717a" />
                </linearGradient>
              </defs>
              <circle cx="170" cy="125" r="92" fill="none" stroke="url(#fwGradReact)" strokeWidth="2.5" strokeDasharray="8 6" />
              <circle cx="170" cy="125" r="50" fill="#202732" stroke="#ea580c" strokeWidth="2" />
              <text x="170" y="120" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">INSTALLED</text>
              <text x="170" y="136" textAnchor="middle" fill="#f97316" fontSize="10" fontWeight="800">BASE ASSET</text>

              {/* 6 Orbiting Nodes */}
              <g transform="translate(170, 22)">
                <rect x="-50" y="-13" width="100" height="26" rx="6" fill="#ea580c" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">1. ورود به BOM OEM</text>
              </g>
              <g transform="translate(276, 72)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#273142" stroke="#475569" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#f1f5f9" fontSize="9.5" fontWeight="800">2. نصب محور RST</text>
              </g>
              <g transform="translate(276, 178)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#273142" stroke="#475569" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#f1f5f9" fontSize="9.5" fontWeight="800">3. پیمایش و استهلاک</text>
              </g>
              <g transform="translate(170, 228)">
                <rect x="-54" y="-13" width="108" height="26" rx="6" fill="#181e26" stroke="#ea580c" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">4. فروش قطعه یدکی</text>
              </g>
              <g transform="translate(64, 178)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#273142" stroke="#475569" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#f1f5f9" fontSize="9.5" fontWeight="800">5. رضایت ناوگان</text>
              </g>
              <g transform="translate(64, 72)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#273142" stroke="#475569" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#f1f5f9" fontSize="9.5" fontWeight="800">6. سفارش مجدد OEM</text>
              </g>
            </svg>
          </div>

          {/* Interactive 3-Year Installed Base Simulator */}
          <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#151a22] border border-zinc-200 dark:border-zinc-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-zinc-800 dark:text-zinc-200">شبیه‌ساز رشد ۳ ساله Installed Base:</span>
              <span className="text-orange-600 dark:text-orange-400 font-bold text-[11px]">
                {currentPlan.label}
              </span>
            </div>

            <div className="flex gap-1.5">
              {[1, 2, 3].map((num) => (
                <button
                  key={num}
                  onClick={() => setFlywheelPlan(num as 1 | 2 | 3)}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                    flywheelPlan === num
                      ? 'bg-zinc-800 dark:bg-[#2c3545] text-white shadow-xs border border-zinc-700'
                      : 'bg-white dark:bg-[#1e2530] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  سناریوی {num === 1 ? 'محتاط' : num === 2 ? 'پایه' : 'جهشی'}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-white dark:bg-[#1e2530] border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">سال اول</span>
                <span className="font-black text-zinc-900 dark:text-white">{currentPlan.y1.toLocaleString('fa-IR')}</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#1e2530] border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">سال دوم</span>
                <span className="font-black text-orange-600 dark:text-orange-400">{currentPlan.y2.toLocaleString('fa-IR')}</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-[#1e2530] border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">سال سوم</span>
                <span className="font-black text-zinc-900 dark:text-white">{currentPlan.y3.toLocaleString('fa-IR')}</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-[#202732] text-zinc-100 border border-zinc-700 flex items-center justify-between text-xs shadow-xs">
              <span className="font-bold">دارایی محورهای فعال در جاده (تجمعی ۳ سال):</span>
              <span className="text-base font-black text-orange-400">{totalInstalled.toLocaleString('fa-IR')} محور</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive 10-Stage Value Chain */}
        <div className="lg:col-span-7 rounded-2xl p-5 bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 space-y-4 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-black text-zinc-900 dark:text-white">۱۰ حلقه زنجیره ارزش بازار Semi-Trailer</h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">با کلیک روی هر حلقه، جایگاه نفوذ و مزیت رقابتی RST را بررسی کنید</p>
              </div>
              <span className="text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
                حلقه {selectedStep} از ۱۰
              </span>
            </div>

            {/* 10 Step Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mt-3">
              {valueChainData.map((item) => {
                const isActive = item.step === selectedStep;
                return (
                  <button
                    key={item.step}
                    onClick={() => setSelectedStep(item.step)}
                    className={`p-2 rounded-xl border text-right transition-all flex flex-col justify-between ${
                      isActive
                        ? 'bg-zinc-800 dark:bg-[#2c3545] text-white border-zinc-700 shadow-xs ring-1 ring-orange-500/40'
                        : 'bg-zinc-50 dark:bg-[#151a22] text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400'
                    }`}
                  >
                    <span className={`text-[10px] font-bold ${isActive ? 'text-orange-400' : 'text-zinc-500 dark:text-zinc-400'}`}>
                      {item.market}
                    </span>
                    <span className="text-xs font-bold mt-1 line-clamp-1">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Detail Panel */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-[#151a22] border border-zinc-200 dark:border-zinc-800 mt-3 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-zinc-900 dark:text-white">{currentStepData.title}</span>
                <span className="px-2 py-0.5 rounded bg-zinc-800 text-zinc-200 font-bold">{currentStepData.market}</span>
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{currentStepData.desc}</p>
              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap items-center justify-between gap-2">
                <span className="text-zinc-500 dark:text-zinc-400">
                  <strong>بازیگران کلیدی:</strong> {currentStepData.actor}
                </span>
                <span className="font-bold text-orange-600 dark:text-orange-400">
                  <strong>مزیت محوری RST:</strong> {currentStepData.rstAdvantage}
                </span>
              </div>
            </div>
          </div>

          {/* Dual Engine Comparison */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-zinc-900 dark:text-white">🏭 موتور اول: بازار OEM (B2B)</span>
                <span className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 text-[10px] font-bold">
                  ورود به BOM
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-300">
                فروش پکیج کامل Axle + Brake + Suspension به کارخانه‌های تریلرساز و نصب روی تریلرهای نوساز.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#202732] border border-zinc-200 dark:border-zinc-700/80 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-zinc-900 dark:text-white">🔧 موتور دوم: بازار Aftermarket</span>
                <span className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 text-[10px] font-bold">
                  حاشیه سود بالای ۴۰٪
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-300">
                تأمین قطعات مصرفی توپی، دیسک، کاسه، بوستر و کیسه باد برای ناوگان با گردش مالی مستمر چندساله.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spoota Industrial Group 6 Companies & Production Pipeline */}
      <div className="rounded-2xl p-6 bg-white dark:bg-[#1a2028] border border-zinc-200 dark:border-zinc-700/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-700 pb-3">
          <div>
            <span className="text-xs font-black text-orange-600 dark:text-orange-400">پشتوانه زنجیره ارزش یکپارچه عمودی</span>
            <h3 className="text-lg font-black text-zinc-900 dark:text-white mt-0.5">
              ۶ شرکت تخصصی گروه صنعتی اسپوتا (<a href="https://rstaxles.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 underline">rstaxles.com</a>)
            </h3>
          </div>
          <span className="text-xs text-zinc-500 dark:text-zinc-400">کیلومتر ۱۲ جاده ارومیه–مهاباد</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {spootaCompanies.map((c, idx) => (
            <a
              key={idx}
              href={c.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3.5 rounded-xl border transition-colors flex flex-col justify-between ${
                c.highlight
                  ? 'bg-[#202732] text-white border-zinc-600 shadow-xs'
                  : 'bg-zinc-50 dark:bg-[#202732] text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700 hover:border-zinc-400'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-black">{c.name}</span>
                <span className="text-xs text-orange-400">↗</span>
              </div>
              <p className={`text-[11px] mt-2 leading-relaxed ${c.highlight ? 'text-zinc-200' : 'text-zinc-600 dark:text-zinc-300'}`}>{c.role}</p>
            </a>
          ))}
        </div>

        {/* Manufacturing Pipeline Flow */}
        <div className="pt-2 border-t border-zinc-200 dark:border-zinc-700">
          <div className="text-xs font-extrabold text-zinc-800 dark:text-zinc-200 mb-2">فرآیند مهندسی و تضمین کیفیت بومی:</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 items-center text-center text-xs">
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-[#151a22] border border-zinc-200 dark:border-zinc-800">
              <span className="text-base block">🔥</span>
              <span className="font-bold text-zinc-900 dark:text-white text-[11px]">فولاد و فورج</span>
              <span className="text-[10px] text-zinc-500 block">فیدار فولاد</span>
            </div>
            <div className="hidden lg:block text-zinc-500 font-black">←</div>
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-[#151a22] border border-zinc-200 dark:border-zinc-800">
              <span className="text-base block">⚙️</span>
              <span className="font-bold text-zinc-900 dark:text-white text-[11px]">ماشین‌کاری CNC</span>
              <span className="text-[10px] text-zinc-500 block">قطعه‌سازان اسپوتا</span>
            </div>
            <div className="hidden lg:block text-zinc-500 font-black">←</div>
            <div className="p-2 rounded-xl bg-zinc-800 text-white border border-zinc-700 shadow-xs">
              <span className="text-base block">🛞</span>
              <span className="font-black text-[11px] text-orange-400">محورسازان RST</span>
              <span className="text-[10px] text-zinc-300 block">مونتاژ محور کامل</span>
            </div>
            <div className="hidden lg:block text-zinc-500 font-black">←</div>
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-[#151a22] border border-zinc-200 dark:border-zinc-800">
              <span className="text-base block">🔬</span>
              <span className="font-bold text-zinc-900 dark:text-white text-[11px]">تست TÜV Austria</span>
              <span className="text-[10px] text-zinc-500 block">گواهی ECE R13</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

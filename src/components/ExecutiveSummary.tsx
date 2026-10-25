import React, { useState } from 'react';
import { spootaCompanies, valueChainData } from '../data/marketData';

export const ExecutiveSummary: React.FC<{
  onNavigate: (tabId: string) => void;
  onStartPresentation?: () => void;
}> = ({ onNavigate, onStartPresentation }) => {
  const [selectedStep, setSelectedStep] = useState(3);
  const [flywheelPlan, setFlywheelPlan] = useState<1 | 2 | 3>(2);

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
      {/* Executive Fast-Pitch CTA Callout */}
      {onStartPresentation && (
        <div className="p-4 rounded-2xl bg-gradient-to-r from-[#242a34] via-[#1f242e] to-[#1c2128] text-white border border-zinc-700/80 shadow-lg flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-lg shadow-md shadow-orange-600/40">
              ▶
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-white">
                  ارائه راهبردی به هیئت مدیره: تبیین ابعاد بازار و چارچوب تصمیم‌گیری (۶ اسلاید کلیدی)
                </h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-600 text-white font-extrabold">
                  نسخه مصوب هیئت مدیره
                </span>
              </div>
              <p className="text-xs text-zinc-300 mt-0.5">
                مرور جامع مبانی استنادی وزارت صمت و ناوگان باری، معماری پلتفرم مهندسی Running Gear و مصوبات پیشنهادی پیش از بررسی تفصیلی پورتال.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onStartPresentation}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs sm:text-sm font-black shadow-lg shadow-orange-600/40 transition-all flex items-center gap-2 group whitespace-nowrap"
            >
              <span>اجرای اسلایدشوی راهبردی</span>
              <span className="group-hover:translate-x-[-3px] transition-transform">←</span>
            </button>
          </div>
        </div>
      )}

      {/* Official Data Sources & Market Grounding Banner (Distinctive Bold Numbers & High Contrast) */}
      <div className="rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-zinc-900/5 dark:from-[#1e242c] dark:via-[#1a1f26] dark:to-[#161a20] border border-orange-500/30 dark:border-zinc-700/80 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-orange-500/20 dark:border-zinc-700/60 pb-3">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-orange-600 text-white flex items-center justify-center font-black text-sm shadow-sm">
              📰
            </span>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-sm sm:text-base font-black text-zinc-900 dark:text-white">
                  داده‌های استنادی کلیدی و مبانی آماری تحلیل
                </h3>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-100 dark:bg-orange-950/80 text-orange-700 dark:text-orange-300 font-black border border-orange-300 dark:border-orange-800">
                  صمت دی ۱۴۰۴ + تسنیم آبان ۱۴۰۲
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold mt-0.5">
                مبنای آماری برآورد نیاز سالانه تریلر و محور در بازار ایران
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-lg bg-orange-500/10 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 font-black border border-orange-500/20">
              تقاضای سالانه کشور: <b className="font-black text-orange-600 dark:text-orange-400">۹۰,۳۲۴</b> تریلر | <b className="font-black text-orange-600 dark:text-orange-400">۲۷۰,۰۰۰</b> محور
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {/* Source 1: Ministry of Industry (MIMT) */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#242a34] border border-zinc-200 dark:border-zinc-700/80 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-black text-zinc-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5">
                  <span>🏢</span>
                  <span>۱. داده رسمی وزارت صنعت، معدن و تجارت (دی ۱۴۰۴)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-orange-600/15 text-orange-700 dark:text-orange-300 font-black border border-orange-500/30">
                  قطب ارومیه
                </span>
              </div>

              {/* Distinctive Bold Stat Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-lg bg-orange-50 dark:bg-[#1a2029] border border-orange-200 dark:border-orange-900/50">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">تولید سالانه استان</div>
                  <div className="text-sm sm:text-base font-black text-orange-600 dark:text-orange-400 tracking-tight mt-0.5">
                    ۱۵,۳۵۵
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">دستگاه تریلر</div>
                </div>

                <div className="p-2 rounded-lg bg-orange-50 dark:bg-[#1a2029] border border-orange-200 dark:border-orange-900/50">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">سهم از نیاز کشور</div>
                  <div className="text-sm sm:text-base font-black text-orange-600 dark:text-orange-400 tracking-tight mt-0.5">
                    ۱۷٪
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">(۱۹٪ کارگاه‌ها)</div>
                </div>

                <div className="p-2 rounded-lg bg-amber-500/10 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60">
                  <div className="text-[10px] text-amber-700 dark:text-amber-300 font-bold">نیاز کل کشور (سال)</div>
                  <div className="text-sm sm:text-base font-black text-amber-600 dark:text-amber-400 tracking-tight mt-0.5">
                    ۹۰,۳۲۴
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">دستگاه تریلر</div>
                </div>

                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">تقاضای محور (Axle)</div>
                  <div className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight mt-0.5">
                    ۲۷۰,۰۰۰
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">محور (مبنای ۳محور)</div>
                </div>
              </div>

              {/* Explanatory text with bold highlighted numbers */}
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-[11.5px] space-y-1 bg-zinc-50 dark:bg-[#1c222c] p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-700/60">
                <p>
                  مدیرکل صمت آذربایجان‌غربی رسماً اعلام کرد تولید فعلی استان <strong className="font-black text-orange-600 dark:text-orange-300 bg-orange-100 dark:bg-orange-950/80 px-1.5 py-0.5 rounded border border-orange-300 dark:border-orange-800">۱۵,۳۵۵ دستگاه انواع تریلر در سال</strong> است که معادل <strong className="font-black text-orange-600 dark:text-orange-300 bg-orange-100 dark:bg-orange-950/80 px-1.5 py-0.5 rounded border border-orange-300 dark:border-orange-800">۱۷٪ کل نیاز کشور</strong> می‌باشد.
                </p>
                <div className="flex items-center flex-wrap gap-1.5 pt-1">
                  <span className="font-bold text-zinc-600 dark:text-zinc-400">فرمول برآورد نیاز سالانه تریلر ایران:</span>
                  <span className="font-black text-xs text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-950/70 px-2 py-0.5 rounded border border-orange-400 dark:border-orange-700 dir-ltr inline-block">
                    ۱۵,۳۵۵ ÷ ۰.۱۷ ≈ ۹۰,۳۲۴ دستگاه در سال
                  </span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 pt-0.5">
                  با تکمیل طرح‌های توسعه‌ای، ظرفیت تولید این استان تا <strong className="font-black text-zinc-800 dark:text-zinc-200">۷۰,۰۰۰ دستگاه</strong> قابل افزایش خواهد بود.
                </p>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-[11px]">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">منبع: اداره کل صمت آذربایجان‌غربی</span>
              <a
                href="https://www.mimt.gov.ir/%D8%A7%D8%AE%D8%A8%D8%A7%D8%B1/%D8%AA%D9%88%D9%84%DB%8C%D8%AF-%D8%B3%D8%A7%D9%84%D8%A7%D9%86%D9%87-%DB%B1%DB%B5-%D9%87%D8%B2%D8%A7%D8%B1-%D8%AA%D8%B1%DB%8C%D9%84%D8%B1%D8%9B-%D8%A2%D8%B0%D8%B1%D8%A8%D8%A7%DB%8C%D8%AC%D8%A7%D9%86%E2%80%8C%D8%BA%D8%B1%D8%A8%DB%8C-%D9%BE%DB%8C%D8%B4%D8%AA%D8%A7%D8%B2-%D8%B5%D9%86%D8%B9%D8%AA-%D8%AA%D8%B1%DB%8C%D9%84%D8%B1%D8%B3%D8%A7%D8%B2%DB%8C"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline font-black inline-flex items-center gap-1 group"
              >
                <span>مشاهده خبر در پورتال صمت</span>
                <span className="group-hover:translate-x-[-1px] transition-transform" dir="ltr">↗</span>
              </a>
            </div>
          </div>

          {/* Source 2: Tasnim News Agency */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-white dark:bg-[#242a34] border border-zinc-200 dark:border-zinc-700/80 shadow-xs space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-2">
                <span className="font-black text-zinc-900 dark:text-white text-xs sm:text-sm flex items-center gap-1.5">
                  <span>🚛</span>
                  <span>۲. گزارش رسمی خبرگزاری تسنیم (آبان ۱۴۰۲)</span>
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/15 text-amber-700 dark:text-amber-300 font-black border border-amber-500/30">
                  فرسودگی ناوگان
                </span>
              </div>

              {/* Distinctive Bold Stat Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">کل ناوگان باری جاده‌ای</div>
                  <div className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight mt-0.5">
                    ۴۱۱,۰۰۰
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">کامیون و کشنده</div>
                </div>

                <div className="p-2 rounded-lg bg-red-500/10 dark:bg-red-950/40 border border-red-300 dark:border-red-700/60">
                  <div className="text-[10px] text-red-700 dark:text-red-300 font-bold">تعداد ناوگان فرسوده</div>
                  <div className="text-sm sm:text-base font-black text-red-600 dark:text-red-400 tracking-tight mt-0.5">
                    ۲۰۰,۰۰۰+
                  </div>
                  <div className="text-[9px] text-red-500/80 font-bold">دستگاه فرسوده</div>
                </div>

                <div className="p-2 rounded-lg bg-red-500/10 dark:bg-red-950/40 border border-red-300 dark:border-red-700/60">
                  <div className="text-[10px] text-red-700 dark:text-red-300 font-bold">نرخ فرسودگی ناوگان</div>
                  <div className="text-sm sm:text-base font-black text-red-600 dark:text-red-400 tracking-tight mt-0.5">
                    &gt; ۵۰٪
                  </div>
                  <div className="text-[9px] text-red-500/80 font-bold">نیازمند نوسازی</div>
                </div>

                <div className="p-2 rounded-lg bg-amber-50 dark:bg-[#1a2029] border border-amber-200 dark:border-amber-900/50">
                  <div className="text-[10px] text-zinc-500 dark:text-zinc-400 font-bold">وعده الحاق کوتاه‌مدت</div>
                  <div className="text-sm sm:text-base font-black text-amber-600 dark:text-amber-400 tracking-tight mt-0.5">
                    ۱۰,۰۰۰
                  </div>
                  <div className="text-[9px] text-zinc-400 font-bold">دستگاه تا بهار ۱۴۰۳</div>
                </div>
              </div>

              {/* Explanatory text with bold highlighted numbers */}
              <div className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-[11.5px] space-y-1 bg-zinc-50 dark:bg-[#1c222c] p-2.5 rounded-lg border border-zinc-200/80 dark:border-zinc-700/60">
                <p>
                  گزارش رسمی حاکی است از مجموع <strong className="font-black text-zinc-950 dark:text-white bg-zinc-200/80 dark:bg-zinc-700 px-1.5 py-0.5 rounded">حدود ۴۱۱ هزار دستگاه</strong> کامیون و کشنده کشور، <strong className="font-black text-red-700 dark:text-red-300 bg-red-100 dark:bg-red-950/80 px-1.5 py-0.5 rounded border border-red-300 dark:border-red-800">بیش از ۲۰۰ هزار دستگاه (بیش از ۵۰٪ ناوگان)</strong> در سن فرسودگی قطعی قرار دارند.
                </p>
                <div className="pt-1 text-[11px] text-zinc-600 dark:text-zinc-400">
                  <strong className="font-black text-zinc-800 dark:text-zinc-200">نکته تفسیری تحلیل:</strong> این رقم مربوط به کل ناوگان باری (کامیون و کشنده) است و نباید مستقیماً به‌عنوان تعداد Semi-Trailer فرسوده تلقی شود؛ اما ورود هر کشنده جدید یا نوسازی آن، پیش‌ران و محرک مستقیم تقاضای خرید تریلر نو و باکیفیت است.
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-100 dark:border-zinc-700/60 flex items-center justify-between text-[11px]">
              <span className="text-zinc-500 dark:text-zinc-400 font-bold">منبع: گزارش رسمی تسنیم</span>
              <a
                href="https://www.tasnimnews.ir/fa/news/1402/08/20/2986730/50-%D8%AF%D8%B1%D8%B5%D8%AF-%D9%86%D8%A7%D9%88%DA%AF%D8%A7%D9%86-%D8%A8%D8%A7%D8%B1%DB%8C-%DA%A9%D8%B4%D9%88%D8%B1-%D9%81%D8%B1%D8%B3%D9%88%D8%AF%D9%87-%D8%A7%D8%B3%D8%AA-%D9%88%D8%B9%D8%AF%D9%87-%D8%A7%D9%84%D8%AD%D8%A7%D9%82-10-%D9%87%D8%B2%D8%A7%D8%B1-%D8%A7%D8%AA%D9%88%D8%A8%D9%88%D8%B3-%D9%88-%DA%A9%D8%A7%D9%85%DB%8C%D9%88%D9%86-%D8%A8%D9%87-%D9%86%D8%A7%D9%88%DA%AF%D8%A7%D9%86-%D8%AC%D8%A7%D8%AF%D9%87-%D8%A7%DB%8C-%D8%AA%D8%A7-%D8%A8%D9%87%D8%A7%D8%B1-1403?"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 dark:text-orange-400 hover:underline font-black inline-flex items-center gap-1 group"
              >
                <span>مشاهده گزارش در خبرگزاری تسنیم</span>
                <span className="group-hover:translate-x-[-1px] transition-transform" dir="ltr">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Hero Banner */}
      <div className="relative rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-black">
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
              تسخیر بازار <span className="text-orange-600 dark:text-orange-500">۹۰,۰۰۰ تریلر و ۲۷۰,۰۰۰ محور</span> با ساخت اکوسیستم Running Gear
            </h2>

            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
              در استراتژی نوین <strong>گروه صنعتی اسپوتا (RST)</strong>، دارایی اصلی شرکت صرفاً سود کوتاه‌مدت فروش قطعه منفرد نیست؛ بلکه <strong>تعداد کل محورهای فعال در جاده (Installed Base)</strong> است. هر محوری که از طریق ورود به BOM تریلرسازان (موتور اول: OEM) روی جاده قرار می‌گیرد، تا سال‌ها تقاضای تضمین‌شده قطعات مصرفی یدکی (موتور دوم: Aftermarket) را ایجاد می‌کند.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="p-3 rounded-xl bg-[#242a34] text-white border border-zinc-700/80 shadow-sm flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-orange-600 flex items-center justify-center text-white text-base shrink-0 font-bold">
                  📐
                </div>
                <div>
                  <div className="text-xs text-orange-400 font-black">ENGINEERED</div>
                  <div className="text-[11px] text-zinc-200">طراحی 3D CAD و گواهی EMARK</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#1e242c] border border-zinc-200 dark:border-zinc-700/80 shadow-sm flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#2a313d] flex items-center justify-center text-white text-base shrink-0 font-bold border border-zinc-600/60">
                  ⚙️
                </div>
                <div>
                  <div className="text-xs text-zinc-900 dark:text-white font-black">MANUFACTURED</div>
                  <div className="text-[11px] text-zinc-600 dark:text-zinc-300">ماشین‌کاری CNC و ISO 9001</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-[#1e242c] border border-zinc-200 dark:border-zinc-700/80 shadow-sm flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-[#2a313d] flex items-center justify-center text-white text-base shrink-0 font-bold border border-zinc-600/60">
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
                className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-extrabold text-xs sm:text-sm transition-colors shadow-md shadow-orange-600/20"
              >
                مشاهده ویترین محصولات و قطعات نمونه ←
              </button>
              <button
                onClick={() => onNavigate('sizing')}
                className="px-4 py-2.5 rounded-xl bg-[#242a34] hover:bg-[#2d3542] text-zinc-100 border border-zinc-700/80 font-extrabold text-xs sm:text-sm transition-colors shadow-sm"
              >
                بررسی شبیه‌ساز بازار ۲۷۰,۰۰۰ محور
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-72 sm:h-80 lg:h-full min-h-[340px] bg-gradient-to-b from-white via-zinc-50 to-zinc-100 dark:from-zinc-900 dark:via-[#1e242c] dark:to-[#181d24] border-t lg:border-t-0 lg:border-r border-zinc-200 dark:border-zinc-800 flex items-center justify-center p-6 overflow-hidden">
            {/* Subtle technical grid background */}
            <div className="absolute inset-0 bg-[radial-gradient(#d4d4d8_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px] opacity-70 pointer-events-none" />
            
            {/* Soft spotlight behind the axle */}
            <div className="absolute w-64 h-64 rounded-full bg-white dark:bg-zinc-800/60 blur-3xl opacity-80 pointer-events-none" />

            <img
              src="./assets/aistudio/DFZ.S.R.09.052.M_4db73d13.png"
              alt="پلتفرم کامل محور ۹ تن دیسکی و تعلیق بادی محورسازان جهان اسپوتا (RST DFZ.S.R.09.052.M)"
              className="relative z-10 w-full h-full object-contain max-h-[320px] drop-shadow-[0_20px_25px_rgba(0,0,0,0.16)] dark:drop-shadow-[0_20px_35px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-105"
            />
            
            <div className="absolute bottom-4 left-4 right-4 z-20 p-3 rounded-xl bg-white/95 dark:bg-zinc-950/90 backdrop-blur-md border border-zinc-200 dark:border-zinc-800 shadow-md flex items-center justify-between">
              <div>
                <div className="text-[10px] font-black text-orange-600 dark:text-orange-500">پلتفرم پرچمدار RST (محور ۹ تن بادی دیسکی)</div>
                <div className="text-xs font-black text-zinc-900 dark:text-white" dir="ltr">"Axles that stay on the road."</div>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded-lg bg-orange-600 text-white font-extrabold shadow-sm">
                ۲۷۰K محور / سال
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Quantitative KPI Gauges */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 shadow-sm">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">نیاز سالانه تریلر کشور</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">۹۰,۰۰۰</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">دستگاه تریلر / سال (صمت: ۱۷٪ = ۱۵,۳۵۵)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex items-center justify-center text-lg font-black shrink-0">
            90K
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 shadow-sm">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">کل تقاضای سالانه محور</span>
            <div className="text-2xl sm:text-3xl font-black text-orange-600 dark:text-orange-500 mt-1">۲۷۰,۰۰۰</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">محور در سال (۹۰,۰۰۰ تریلر × ۳ محور)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-orange-600 text-white flex items-center justify-center text-lg font-black shrink-0 shadow-sm">
            ×3
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 shadow-sm">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">پکیج توپی / ترمز / تعلیق</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">۵۴۰,۰۰۰</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">توپی، دیسک/کاسه و کیسه باد (۲ در هر محور)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-lg font-black shrink-0">
            ×2
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 shadow-sm">
          <div>
            <span className="text-[11px] text-zinc-500 dark:text-zinc-400 font-bold">خوشه ارومیه و ۵۰ اکانت</span>
            <div className="text-2xl sm:text-3xl font-black text-zinc-900 dark:text-white mt-1">۵۰ OEM</div>
            <div className="text-[11px] text-zinc-600 dark:text-zinc-400 mt-0.5">۱۹٪ تولید در قطب ارومیه (محورسازان اسپوتا)</div>
          </div>
          <div className="w-12 h-12 rounded-xl bg-[#242a34] text-white border border-zinc-700/80 flex items-center justify-center text-base font-black shrink-0 shadow-sm">
            50
          </div>
        </div>
      </div>

      {/* Flywheel Infographic + Interactive Value Chain */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Visual SVG Flywheel & Simulator */}
        <div className="lg:col-span-5 rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 flex flex-col justify-between space-y-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">چرخ طیار استراتژیک (The RST Flywheel)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">چگونه فروش به OEM دارایی پایدار افترمارکت را می‌سازد؟</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">
              دو موتوره
            </span>
          </div>

          {/* SVG Circular Flywheel Diagram in Light/Orange Palette */}
          <div className="relative flex items-center justify-center py-2 bg-zinc-50 dark:bg-zinc-950 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <svg viewBox="0 0 340 250" className="w-full max-w-[340px] h-auto">
              <defs>
                <linearGradient id="fwGradReact" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ea580c" />
                  <stop offset="100%" stopColor="#fb923c" />
                </linearGradient>
              </defs>
              <circle cx="170" cy="125" r="92" fill="none" stroke="url(#fwGradReact)" strokeWidth="3" strokeDasharray="8 6" className="spin-slow" />
              <circle cx="170" cy="125" r="50" fill="#fff7ed" stroke="#ea580c" strokeWidth="2.5" />
              <text x="170" y="120" textAnchor="middle" fill="#09090b" fontSize="11" fontWeight="900">INSTALLED</text>
              <text x="170" y="136" textAnchor="middle" fill="#c2410c" fontSize="10" fontWeight="800">BASE ASSET</text>

              {/* 6 Orbiting Nodes */}
              <g transform="translate(170, 22)">
                <rect x="-50" y="-13" width="100" height="26" rx="6" fill="#ea580c" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">1. ورود به BOM OEM</text>
              </g>
              <g transform="translate(276, 72)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#ffffff" stroke="#ea580c" strokeWidth="1.8" />
                <text x="0" y="4" textAnchor="middle" fill="#18181b" fontSize="9.5" fontWeight="800">2. نصب محور RST</text>
              </g>
              <g transform="translate(276, 178)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#ffedd5" stroke="#f97316" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#7c2d12" fontSize="9.5" fontWeight="800">3. پیمایش و استهلاک</text>
              </g>
              <g transform="translate(170, 228)">
                <rect x="-54" y="-13" width="108" height="26" rx="6" fill="#18181b" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">4. فروش قطعه یدکی</text>
              </g>
              <g transform="translate(64, 178)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#ffedd5" stroke="#f97316" strokeWidth="1.5" />
                <text x="0" y="4" textAnchor="middle" fill="#7c2d12" fontSize="9.5" fontWeight="800">5. رضایت ناوگان</text>
              </g>
              <g transform="translate(64, 72)">
                <rect x="-46" y="-13" width="92" height="26" rx="6" fill="#ffffff" stroke="#ea580c" strokeWidth="1.8" />
                <text x="0" y="4" textAnchor="middle" fill="#18181b" fontSize="9.5" fontWeight="800">6. سفارش مجدد OEM</text>
              </g>
            </svg>
          </div>

          {/* Interactive 3-Year Installed Base Simulator */}
          <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3">
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
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300'
                  }`}
                >
                  سناریوی {num === 1 ? 'محتاط' : num === 2 ? 'پایه' : 'جهشی'}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">سال اول</span>
                <span className="font-black text-zinc-900 dark:text-white">{currentPlan.y1.toLocaleString('fa-IR')}</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">سال دوم</span>
                <span className="font-black text-orange-600">{currentPlan.y2.toLocaleString('fa-IR')}</span>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <span className="text-[10px] text-zinc-500 block">سال سوم</span>
                <span className="font-black text-zinc-900 dark:text-white">{currentPlan.y3.toLocaleString('fa-IR')}</span>
              </div>
            </div>

            <div className="p-2.5 rounded-xl bg-orange-600 text-white flex items-center justify-between text-xs shadow-sm">
              <span className="font-bold">دارایی محورهای فعال در جاده (تجمعی ۳ سال):</span>
              <span className="text-base font-black">{totalInstalled.toLocaleString('fa-IR')} محور</span>
            </div>
          </div>
        </div>

        {/* Right: Interactive 10-Stage Value Chain */}
        <div className="lg:col-span-7 rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-4 shadow-sm flex flex-col justify-between">
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
                        ? 'bg-orange-600 text-white border-orange-700 shadow-md ring-2 ring-orange-500/20'
                        : 'bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-800 hover:border-orange-400 hover:bg-orange-50/40'
                    }`}
                  >
                    <span className={`text-[10px] font-bold ${isActive ? 'text-orange-100' : 'text-orange-600 dark:text-orange-400'}`}>
                      {item.market}
                    </span>
                    <span className="text-xs font-bold mt-1 line-clamp-1">{item.title}</span>
                  </button>
                );
              })}
            </div>

            {/* Selected Step Detail Panel */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 mt-3 space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-zinc-900 dark:text-white">{currentStepData.title}</span>
                <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-bold">{currentStepData.market}</span>
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
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-[#1e242c] border border-zinc-200 dark:border-zinc-700/80 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-zinc-900 dark:text-white">🏭 موتور اول: بازار OEM (B2B)</span>
                <span className="px-2 py-0.5 rounded bg-[#242a34] text-zinc-100 border border-zinc-600/70 text-[10px] font-bold">
                  ورود به BOM
                </span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-300">
                فروش پکیج کامل Axle + Brake + Suspension به کارخانه‌های تریلرساز و نصب روی تریلرهای نوساز.
              </p>
            </div>

            <div className="p-3.5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-black text-orange-700 dark:text-orange-300">🔧 موتور دوم: بازار Aftermarket</span>
                <span className="px-2 py-0.5 rounded bg-orange-600 text-white text-[10px] font-bold">حاشیه سود بالا</span>
              </div>
              <p className="text-[11px] text-zinc-600 dark:text-zinc-300">
                تأمین قطعات مصرفی توپی، دیسک، کاسه، بوستر و کیسه باد برای ناوگان با گردش مالی مستمر چندساله.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Spoota Industrial Group 6 Companies & Production Pipeline */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <span className="text-xs font-black text-orange-600">پشتوانه زنجیره ارزش یکپارچه عمودی</span>
            <h3 className="text-lg font-black text-zinc-900 dark:text-white mt-0.5">
              ۶ شرکت تخصصی گروه صنعتی اسپوتا (<a href="https://rstaxles.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline">rstaxles.com</a>)
            </h3>
          </div>
          <span className="text-xs text-zinc-500">کیلومتر ۱۲ جاده ارومیه–مهاباد</span>
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
                  ? 'bg-[#242a34] text-white border-orange-500 shadow-md'
                  : 'bg-zinc-50 dark:bg-[#1e242c] text-zinc-900 dark:text-zinc-100 border-zinc-200 dark:border-zinc-700/80 hover:border-orange-400'
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
        <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-xs font-extrabold text-zinc-800 dark:text-zinc-200 mb-2">فرآیند مهندسی و تضمین کیفیت بومی:</div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 items-center text-center text-xs">
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-base block">🔥</span>
              <span className="font-bold text-zinc-900 dark:text-white text-[11px]">فولاد و فورج</span>
              <span className="text-[10px] text-zinc-500 block">فیدار فولاد</span>
            </div>
            <div className="hidden lg:block text-orange-600 font-black">←</div>
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-base block">⚙️</span>
              <span className="font-bold text-zinc-900 dark:text-white text-[11px]">ماشین‌کاری CNC</span>
              <span className="text-[10px] text-zinc-500 block">قطعه‌سازان اسپوتا</span>
            </div>
            <div className="hidden lg:block text-orange-600 font-black">←</div>
            <div className="p-2 rounded-xl bg-orange-600 text-white shadow-sm">
              <span className="text-base block">🛞</span>
              <span className="font-black text-[11px]">محورسازان RST</span>
              <span className="text-[10px] text-orange-100 block">مونتاژ محور کامل</span>
            </div>
            <div className="hidden lg:block text-orange-600 font-black">←</div>
            <div className="p-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
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

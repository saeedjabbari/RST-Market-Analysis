import React from 'react';
import { strategicRisks } from '../data/marketData';

export const RoadmapAndRisks: React.FC = () => {
  const sprints = [
    {
      sprint: 'اسپرینت ۱ (روز ۱ الی ۳۰)',
      title: 'آماده‌سازی مهندسی و دیتابیس ۵۰ OEM',
      tasks: [
        'تکمیل پروفایل ۲۰ فیلدی برای ۵۰ کارخانه مجاز با روش Bottom-Up',
        'تدوین پکیج ۱۴گانه Engineering Pack (فایل‌های CAD، نقشه‌ها و گواهی EMARK)',
        'استخراج برند فعلی محور در BOM کارخانه‌های ارومیه، البرز، تهران و تبریز',
        'طراحی ساختار پارت‌نامبر استاندارد (SKU) و کاتالوگ انطباق (Cross-Ref)',
      ],
      badge: 'فونداسیون فنی',
    },
    {
      sprint: 'اسپرینت ۲ (روز ۳۱ الی ۶۰)',
      title: 'مذاکرات سازمانی و پایلوت ۱۰ تریلرساز هدف',
      tasks: [
        'ارسال Engineering Pack و نمونه اولیه به ۷ اکانت موج اول (فیلپا، اروم تریلر، یاقوت و...)',
        'جلسات فنی رو در رو با کمیته ۶ نفره خرید (DMU) در کارخانه‌ها',
        'راه‌اندازی پایلوت نصب نمونه محور روی ۵ دستگاه تریلر تست جاده‌ای',
        'عقد تفاهمنامه با ۲۰ فروشگاه برتر قطعات یدکی در قطب‌های ترانزیتی',
      ],
      badge: 'ورود به نقشه',
    },
    {
      sprint: 'اسپرینت ۳ (روز ۶۱ الی ۹۰)',
      title: 'ورود رسمی به BOM و راه‌اندازی آکادمی افترمارکت',
      tasks: [
        'نهایی‌سازی قرارداد تأمین سالانه با حداقل ۳ تریلرساز شاخص موج اول',
        'رونمایی از سامانه ثبت گارانتی و آکادمی فنی در وب‌سایت rstaxles.com',
        'توزیع بسته‌بندی‌های هوشمند مجهز به QR Code در شبکه توزیع افترمارکت',
        'شروع مانیتورینگ شاخص کلیدی North Star (تعداد محورهای فعال در جاده)',
      ],
      badge: 'جریان درآمدی',
    },
  ];

  const targetActivations = [
    { count: '۱۰', label: 'اکانت هدف OEM', sub: 'ورود به BOM خطوط مونتاژ' },
    { count: '۲۰', label: 'نماینده قطعه یدکی', sub: 'پوشش استان‌های ترانزیتی' },
    { count: '۲۰', label: 'تعمیرگاه معتمد', sub: 'نقطه تشخیص فنی در جاده' },
    { count: '۱۰', label: 'ناوگان لجستیک', sub: 'تقاضای مستقیم محور RST' },
  ];

  return (
    <section className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black px-2.5 py-0.5 rounded bg-orange-600 text-white">برنامه اقدام عملیاتی و پایش ریسک</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">نقشه راه ۹۰ روزه اجرایی هیئت‌مدیره</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            نقشه راه ۹۰ روزه، پروژه‌های تحول‌آفرین و ماتریس مهار ریسک‌ها
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            برنامه زمان‌بندی فشرده در ۳ اسپرینت ۳۰ روزه جهت ورود قطعی به BOM تریلرسازان هدف، تثبیت شبکه قطعات یدکی و مهار ۶ ریسک بنیادین کسب‌وکار.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-orange-600 text-white text-xs font-bold shrink-0 shadow-sm">
          شاخص قطب‌نما (North Star): +۵۰,۰۰۰ محور فعال در جاده
        </div>
      </div>

      {/* 90-Day Gantt / Sprints Timeline */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <h3 className="text-base font-black text-zinc-900 dark:text-white">۳ اسپرینت ۳۰ روزه اجرای عملیاتی</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">از تحقیقات عمیق میدانی تا عقد قراردادهای سالانه تأمین</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
            ۹۰ روز کاری
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sprints.map((s, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black text-orange-600 dark:text-orange-400">{s.sprint}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200">
                    {s.badge}
                  </span>
                </div>
                <h4 className="text-sm font-black text-zinc-900 dark:text-white mt-1">{s.title}</h4>

                <ul className="mt-3 space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
                  {s.tasks.map((task, tidx) => (
                    <li key={tidx} className="flex items-start gap-2">
                      <span className="text-orange-600 font-bold mt-0.5">✓</span>
                      <span className="leading-relaxed">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex justify-between text-[11px] text-zinc-500">
                <span>پیشرفت فاز:</span>
                <span className="font-bold text-zinc-800 dark:text-zinc-200">
                  {idx === 0 ? 'ماه اول' : idx === 1 ? 'ماه دوم' : 'ماه سوم'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Quantitative Milestones */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
          {targetActivations.map((a, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-[#242a34] text-white border border-zinc-700/80 text-center shadow-xs"
            >
              <span className="text-2xl font-black text-orange-400 block">{a.count}</span>
              <span className="text-xs font-bold text-zinc-100 block mt-0.5">{a.label}</span>
              <span className="text-[10px] text-zinc-300 block mt-1">{a.sub}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3 Flagship Projects & Distribution Corridors */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 3 Flagship Projects */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">۳ پروژه تحول‌آفرین توسعه بازار (Flagship BD Projects)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">ابتکارات راهبردی همزمان جهت تثبیت رهبری بازار</p>
            </div>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 dark:text-white text-xs">پروژه ۱: OEM 50 Intelligence</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-600 text-white">اطلاعات بازار</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                ممیزی میدانی ۵۰ کارخانه تریلرساز، استخراج تیراژ واقعی هر خط تولید با روش Bottom-Up و شناسایی برند فعلی محور در BOM هر کارخانه جهت ارائه پیشنهاد ارزش اختصاصی.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 dark:text-white text-xs">پروژه ۲: پایگاه داده Installed Base ملی</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-800 text-white">دارایی دیجیتال</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                ثبت شناسه هر محور RST فروخته‌شده بر اساس کاربری، سال ساخت و شماره شاسی تریلر جهت پیش‌بینی زمان فرسایش قطعات و ارسال هشدار خودکار تأمین قطعه یدکی به ناوگان.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 dark:text-white text-xs">پروژه ۳: آکادمی تخصصی Running Gear در rstaxles.com</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-zinc-900 text-white">مرجعیت علمی</span>
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                راه‌اندازی بزرگ‌ترین مرجع آموزشی عیب‌یابی محور، توپی، کالیپر و تعلیق در وب‌سایت رسمی <a href="https://rstaxles.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline font-bold">rstaxles.com</a> برای آموزش مکانیک‌ها، تراشکاران و مهندسان ناوگان.
              </p>
            </div>
          </div>
        </div>

        {/* Geographic Corridors Tree */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">کریدورهای توزیع و لجستیک هاب تهران–ارومیه</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">پوشش ۴۸ ساعته قطعات یدکی در ۷ قطب ترانزیتی</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
            <svg viewBox="0 0 440 180" className="w-full h-auto">
              <line x1="220" y1="30" x2="80" y2="80" stroke="#f97316" strokeWidth="2.5" />
              <line x1="220" y1="30" x2="220" y2="80" stroke="#ea580c" strokeWidth="2.5" />
              <line x1="220" y1="30" x2="360" y2="80" stroke="#fb923c" strokeWidth="2.5" />
              <line x1="80" y1="80" x2="80" y2="130" stroke="#a1a1aa" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="80" y1="130" x2="220" y2="155" stroke="#ea580c" strokeWidth="2.5" />
              <line x1="220" y1="155" x2="360" y2="155" stroke="#18181b" strokeWidth="3" />

              {/* Tehran HQ */}
              <g transform="translate(220, 24)">
                <rect x="-70" y="-14" width="140" height="28" rx="6" fill="#ea580c" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">تهران (ستاد خرید و ناوگان)</text>
              </g>

              {/* Alborz */}
              <g transform="translate(80, 78)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#18181b" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">البرز (ماموت/وزین)</text>
              </g>

              {/* Isfahan */}
              <g transform="translate(220, 78)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#3f3f46" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">اصفهان (معدن و فولاد)</text>
              </g>

              {/* Mashhad */}
              <g transform="translate(360, 78)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#52525b" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">مشهد (ترانزیت شرق)</text>
              </g>

              {/* Tabriz */}
              <g transform="translate(220, 155)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#f97316" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">تبریز (یاقوت و صنعت)</text>
              </g>

              {/* Urmia Factory */}
              <g transform="translate(360, 155)">
                <rect x="-65" y="-14" width="130" height="28" rx="6" fill="#18181b" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">کارخانه اسپوتا (ارومیه)</text>
              </g>
            </svg>
          </div>

          <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed">
            استقرار کارخانه در ارومیه در مجاورت بزرگ‌ترین کارخانجات تریلرسازی شمال‌غرب به همراه دفتر و انبار ترانزیت تهران، مزیت زمان تحویل فوری (Just-In-Time) را در اختیار RST قرار می‌دهد.
          </div>
        </div>
      </div>

      {/* 6 Strategic Risks Heatmap */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <h3 className="text-base font-black text-zinc-900 dark:text-white">ماتریس مهار ۶ ریسک استراتژیک توسعه بازار</h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">شناسایی ریسک‌های تجاری و راهکارهای بازدارنده مهندسی و مالی</p>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-orange-600 text-white font-bold">مدیریت ریسک</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {strategicRisks.map((r, i) => (
            <div
              key={i}
              className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-black text-zinc-900 dark:text-white text-xs">{r.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300">
                    {r.severity}
                  </span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">{r.mitigation}</p>
              </div>

              <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-[11px] text-zinc-500">
                <span>رویکرد RST:</span>
                <span className="text-orange-600 dark:text-orange-400 font-bold">مهار فعال (Proactive)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

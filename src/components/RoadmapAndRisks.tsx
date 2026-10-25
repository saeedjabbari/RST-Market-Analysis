import React from 'react';
import { strategicRisks } from '../data/marketData';
import { DrillDownCard } from './common/DrillDownCard';

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
      deliverable: 'خروجی: دیتابیس هوشمند BOM ۵۰ کارخانه + آماده‌سازی پکیج CAD',
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
      deliverable: 'خروجی: ۵ تریلر پایلوت فعال در جاده + تفاهمنامه با ۲۰ نماینده قطعه',
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
      deliverable: 'خروجی: ۳ قرارداد تأمین سالانه قطعی + فعال‌سازی پورتال rstaxles.com',
    },
  ];

  return (
    <section className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
              برنامه اقدام عملیاتی و پایش ریسک
            </span>
            <span className="text-xs text-zinc-500">نقشه راه ۹۰ روزه اجرایی هیئت‌مدیره</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900">
            نقشه راه ۹۰ روزه، پروژه‌های تحول‌آفرین و ماتریس مهار ریسک‌ها
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1">
            برنامه زمان‌بندی فشرده در ۳ اسپرینت ۳۰ روزه جهت ورود قطعی به BOM تریلرسازان هدف، تثبیت شبکه قطعات یدکی و مهار ۶ ریسک بنیادین کسب‌وکار.
          </p>
        </div>

        <div className="p-3.5 rounded-xl bg-orange-600 text-white text-xs font-bold shrink-0 shadow-xs">
          شاخص قطب‌نما (North Star): +۵۰,۰۰۰ محور فعال در جاده
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3 SPRINTS: INTERACTIVE DRILL-DOWN CARDS (FRAMER-MOTION)                   */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
            <h3 className="text-sm font-black text-zinc-900">
              برنامه زمان‌بندی ۳ اسپرینت عملیاتی ۹۰ روزه (Sprint Drill-Downs)
            </h3>
          </div>
          <span className="text-xs text-zinc-500">
            روی هر اسپرینت کلیک کنید تا وظایف و مأموریت‌های تفصیلی باز شود
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sprints.map((s, idx) => (
            <DrillDownCard
              key={idx}
              title={s.title}
              subtitle={s.sprint}
              category={`اسپرینت شماره ${idx + 1}`}
              icon={idx === 0 ? '📐' : idx === 1 ? '🤝' : '🚀'}
              metricBadge={{ value: s.badge, variant: idx === 1 ? 'orange' : 'gray' }}
              defaultExpanded={idx === 0}
            >
              <div className="space-y-3">
                <div className="space-y-2">
                  <span className="text-[11px] font-bold text-zinc-500 block">چک‌لیست اقدامات کلیدی:</span>
                  {s.tasks.map((task, tIdx) => (
                    <div key={tIdx} className="flex items-start gap-2 text-xs text-zinc-700">
                      <span className="w-4 h-4 rounded-full bg-orange-100 text-orange-700 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{task}</span>
                    </div>
                  ))}
                </div>

                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 font-bold">
                  {s.deliverable}
                </div>
              </div>
            </DrillDownCard>
          ))}
        </div>
      </div>

      {/* Projects & Logistics Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 3 Transformational Projects */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900">۳ پروژه استراتژیک تحول‌آفرین RST</h3>
              <p className="text-xs text-zinc-500">طرح‌های مکمل جهت تسریع ورود به BOM و تثبیت وفاداری</p>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold border border-orange-200">
              ارزش‌آفرین
            </span>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 text-xs">پروژه ۱: پکیج جامع مهندسی (Engineering Pack ۱۴گانه)</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
                  نفوذ به BOM
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                ارائه فایل‌های کامل 3D CAD، شبیه‌سازی FEA بارگذاری دینامیکی، نقشه‌های ابعادی شاسی و مستندات آزمون ترمز منطبق با ECE R13 به تیم‌های تحقیق و توسعه تریلرسازان.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 text-xs">پروژه ۲: پایگاه داده Installed Base ملی</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-800 border border-zinc-300">
                  دارایی دیجیتال
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                ثبت شناسه هر محور RST فروخته‌شده بر اساس کاربری، سال ساخت و شماره شاسی تریلر جهت پیش‌بینی زمان فرسایش قطعات و ارسال هشدار خودکار تأمین قطعه یدکی به ناوگان.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="font-bold text-zinc-900 text-xs">پروژه ۳: آکادمی تخصصی Running Gear در rstaxles.com</span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-zinc-200 text-zinc-800 border border-zinc-300">
                  مرجعیت علمی
                </span>
              </div>
              <p className="text-xs text-zinc-600 leading-relaxed">
                راه‌اندازی بزرگ‌ترین مرجع آموزشی عیب‌یابی محور، توپی، کالیپر و تعلیق در وب‌سایت رسمی <a href="https://rstaxles.com/" target="_blank" rel="noopener noreferrer" className="text-orange-600 underline font-bold">rstaxles.com</a> برای آموزش مکانیک‌ها، تراشکاران و مهندسان ناوگان.
              </p>
            </div>
          </div>
        </div>

        {/* Geographic Corridors Tree */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900">کریدورهای توزیع و لجستیک هاب تهران–ارومیه</h3>
              <p className="text-xs text-zinc-500">پوشش ۴۸ ساعته قطعات یدکی در ۷ قطب ترانزیتی</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200">
            <svg viewBox="0 0 440 180" className="w-full h-auto">
              <line x1="220" y1="30" x2="80" y2="80" stroke="#ea580c" strokeWidth="2.5" />
              <line x1="220" y1="30" x2="220" y2="80" stroke="#f97316" strokeWidth="2.5" />
              <line x1="220" y1="30" x2="360" y2="80" stroke="#fb923c" strokeWidth="2.5" />
              <line x1="80" y1="80" x2="80" y2="130" stroke="#a1a1aa" strokeWidth="2" strokeDasharray="3 3" />
              <line x1="80" y1="130" x2="220" y2="155" stroke="#ea580c" strokeWidth="2.5" />
              <line x1="220" y1="155" x2="360" y2="155" stroke="#3f3f46" strokeWidth="2.5" />

              {/* Tehran HQ */}
              <g transform="translate(220, 24)">
                <rect x="-70" y="-14" width="140" height="28" rx="6" fill="#ea580c" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">تهران (ستاد خرید و ناوگان)</text>
              </g>

              {/* Alborz */}
              <g transform="translate(80, 78)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#52525b" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">البرز (ماموت/وزین)</text>
              </g>

              {/* Isfahan */}
              <g transform="translate(220, 78)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#71717a" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">اصفهان (معدن و فولاد)</text>
              </g>

              {/* Mashhad */}
              <g transform="translate(360, 78)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#71717a" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">مشهد (ترانزیت شرق)</text>
              </g>

              {/* Tabriz */}
              <g transform="translate(220, 155)">
                <rect x="-55" y="-13" width="110" height="26" rx="5" fill="#f97316" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">تبریز (یاقوت و صنعت)</text>
              </g>

              {/* Urmia Factory */}
              <g transform="translate(360, 155)">
                <rect x="-65" y="-14" width="130" height="28" rx="6" fill="#ea580c" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">کارخانه اسپوتا (ارومیه)</text>
              </g>
            </svg>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950 leading-relaxed">
            استقرار کارخانه در ارومیه در مجاورت بزرگ‌ترین کارخانجات تریلرسازی شمال‌غرب به همراه دفتر و انبار ترانزیت تهران، مزیت زمان تحویل فوری (Just-In-Time) را در اختیار RST قرار می‌دهد.
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 6 STRATEGIC RISKS: INTERACTIVE DRILL-DOWN CARDS (FRAMER-MOTION)           */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
            <h3 className="text-sm font-black text-zinc-900">
              ماتریس مهار ۶ ریسک استراتژیک توسعه بازار (Risk Drill-Down Cards)
            </h3>
          </div>
          <span className="text-xs text-zinc-500">
            روی هر کارت ریسک کلیک کنید تا راهکارهای پیشگیرانه و اقدامات مهندسی باز شود
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {strategicRisks.map((r, i) => (
            <DrillDownCard
              key={i}
              title={r.title}
              subtitle="ریسک زنجیره تأمین و بازار B2B"
              category={`ریسک شماره ${i + 1}`}
              icon="🛡️"
              metricBadge={{ value: r.severity, variant: r.severity.includes('بالا') ? 'orange' : 'gray' }}
              defaultExpanded={i === 0}
            >
              <div className="space-y-2.5 text-xs">
                <div>
                  <span className="font-bold text-zinc-900 block mb-1">راهکار بازدارنده مهندسی و مالی RST:</span>
                  <p className="text-zinc-700 leading-relaxed bg-zinc-50 p-2.5 rounded-lg border border-zinc-200">
                    {r.mitigation}
                  </p>
                </div>

                <div className="p-2 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-between text-[11px]">
                  <span className="text-orange-900 font-bold">پروتکل اقدام:</span>
                  <span className="text-orange-700 font-bold">مهار فعال و پیشگیرانه (Proactive)</span>
                </div>
              </div>
            </DrillDownCard>
          ))}
        </div>
      </div>
    </section>
  );
};

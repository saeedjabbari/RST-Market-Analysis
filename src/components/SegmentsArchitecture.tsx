import React, { useState } from 'react';
import { segmentsData } from '../data/marketData';
import { DrillDownCard } from './common/DrillDownCard';

export const SegmentsArchitecture: React.FC = () => {
  const [selectedSegId, setSelectedSegId] = useState<string>('tipper');
  const [matrixFilter, setMatrixFilter] = useState<'all' | 'leadgen' | 'oem'>('all');

  const currentSegment = segmentsData.find((s) => s.id === selectedSegId) || segmentsData[0];

  const subsystems = {
    axle: {
      title: 'سیستم محور کامل (Axle System)',
      subtitle: 'هسته مهندسی BOM — تیر بدون درز، سرپلوس فورج، توپی چدن داکتیل',
      tag: 'هسته مهندسی BOM',
      icon: '⚙️',
      badge: '۹ جزء کلیدی',
      parts: [
        'تیر محور بدون درز (Seamless Axle Beam)',
        'سرپلوس فورج ماشین‌کاری شده (Forged Spindle)',
        'توپی چرخ چدن داکتیل (Ductile Iron Wheel Hub)',
        'کاسه ترمز سنگین ضد سایش (Heavy Duty Brake Drum)',
        'دیسک ترمز خنک‌شونده ۴۳۰ میلی‌متر (Ventilated Disc)',
        'بلبرینگ‌های مخروطی دوبل (Tapered Roller Bearings)',
        'کاسه‌نمد دابل‌لیپ ضد آب و غبار (Multi-Lip Seal)',
        'رینگ دندانه‌دار ای‌بی‌اس (ABS Tone Ring)',
        'درپوش رزوه‌ای اختصاصی با آرم RST',
      ],
      desc: 'قلب زیربندی تریلر که کل بار سازه را به زمین انتقال داده و بیشترین تنش‌های دینامیکی و حرارتی را تحمل می‌کند.',
      oemImpact: 'ورود به BOM کارخانه‌ها نیازمند تاییدیه تست ترمز دینامیکی و سازگاری با سیستم‌های تعلیق استاندارد است.',
    },
    suspension: {
      title: 'سیستم تعلیق پنوماتیک و فنری (Suspension System)',
      subtitle: 'جاذب ارتعاش و محافظ بار — کیسه‌های باد Type 881 و کمک‌فنرهای تلسکوپی',
      tag: 'جاذب ارتعاش و محافظ بار',
      icon: '💨',
      badge: '۷ جزء تخصصی',
      parts: [
        'کیسه باد چندلایه با پیستون فولادی (Air Spring Type 881)',
        'کمک‌فنرهای هیدرولیک تلسکوپی سنگین (Shock Absorbers)',
        'بازوهای فنری تثبیت‌کننده (Trailing Arms)',
        'کرپی‌های فولادی آلیاژی گرید ۱۰.۹ (High-Tensile U-Bolts)',
        'بوش‌های لاستیکی-فلزی ضد فرسودگی (Silent Bushings)',
        'دستک‌ها و پلیت‌های اتصال شاسی (Hanger Brackets)',
        'مکانیزم محور بالابر پنوماتیک (Automatic Axle Lift)',
      ],
      desc: 'تضمین‌کننده نرمی حرکت، پایداری در پیچ‌ها، جلوگیری از آسیب به محموله حساس و کاهش سایش غیریکنواخت لاستیک‌ها.',
      oemImpact: 'تعلیق بادی هم‌اکنون به انتخاب پیش‌فرض بیش از ۸۰٪ تریلرسازان مدرن کشور تبدیل شده است.',
    },
    brake: {
      title: 'سیستم ترمز بادی دیسکی و کاسه‌ای (Brake System)',
      subtitle: 'استاندارد ایمنی ECE R13 — کالیپرهای ۲۲.۵ اینچ و بوسترهای جفت‌دیافراگم',
      tag: 'استاندارد ایمنی ECE R13',
      icon: '🛑',
      badge: '۶ جزء ایمنی',
      parts: [
        'کالیپر ترمز دیسکی پنوماتیک رینگ ۲۲.۵ اینچ',
        'بوستر ترمز جفت دیافراگم ۱۶/۲۴ پنوماتیک',
        'کفشک‌های ترمز با لنت استاندارد بدون آزبست',
        'مکانیزم رگلاژ اتوماتیک ترمز (Automatic Slack Adjuster)',
        'میل بادامک‌های سخت‌کاری شده (Induction Hardened S-Cam)',
        'فنرها و پین‌های بازگشت کفشک ترمز',
      ],
      desc: 'بخش اصلی ممیزی فنی و اخذ استاندارد تایید نوع تریلر؛ ترمز دیسکی به سرعت در حال جایگزینی ترمزهای کاسه‌ای در ناوگان نوساز است.',
      oemImpact: 'ارائه ترمز دیسکی با گواهی رسمی E-Mark، مزیت رقابتی اصلی RST در برابر واردات بی‌کیفیت است.',
    },
    chassis: {
      title: 'اتصالات زیربندی به شاسی (Chassis Interface)',
      subtitle: 'مونتاژ سریع در خط تولید OEM — براکت‌های اتصال و پیچ‌های گرید ۱۰.۹',
      tag: 'مونتاژ سریع در خط تولید OEM',
      icon: '🔩',
      badge: '۴ اتصال سازه‌ای',
      parts: [
        'براکت‌های فولادی اتصال به تیرهای اصلی شاسی',
        'صفحات نگهدارنده و تسمه‌های تقویتی',
        'پیچ و مهره‌های خشکه گرید ۱۰.۹ و ۱۲.۹ با پوشش داکرومات',
        'پلیت‌های نشیمنگاه شاسی تریلرساز',
      ],
      desc: 'تضمین انطباق ابعادی ۱۰۰٪ با شاسی کارخانه‌های تریلرساز داخلی بدون نیاز به برش‌کاری یا دوباره‌کاری روی خط مونتاژ.',
      oemImpact: 'کاهش زمان مونتاژ روی خط تریلرساز از ۴ ساعت به کمتر از ۹۰ دقیقه.',
    },
  };

  const productsMatrix = [
    { name: 'محور کامل (دیسکی / کاسه‌ای / کمرشکن)', oem: 'بسیار بالا', after: 'متوسط', value: 'بسیار بالا', cat: 'oem', role: 'محصول پرچمدار ورود به BOM و سازنده دارایی در جاده' },
    { name: 'توپی چرخ (Wheel Hub ۱۰ پیچ)', oem: 'بالا', after: 'بالا', value: 'بسیار بالا', cat: 'oem', role: 'قلب پکیج چرخ؛ مناسب برای فروش همزمان به سازنده و یدکی' },
    { name: 'دیسک ترمز ۴۳۰ میلی‌متر', oem: 'بالا', after: 'بسیار بالا', value: 'بسیار بالا', cat: 'leadgen', role: 'کالای استراتژیک با سرچ بالا و مصرف مداوم در ترانزیت' },
    { name: 'کاسه چرخ ترمز سنگین', oem: 'بالا', after: 'بسیار بالا', value: 'بسیار بالا', cat: 'leadgen', role: 'پرتقاضا در کمپرسی، بونکر سیمان و ناوگان کاسه‌ای کشور' },
    { name: 'کالیپر ترمز دیسکی ۲۲.۵ اینچ', oem: 'بالا', after: 'بالا', value: 'بسیار بالا', cat: 'leadgen', role: 'نقطه تمایز تکنولوژیک RST در ارتقای ترمز ناوگان' },
    { name: 'بوستر ترمز بادی ۱۶/۲۴', oem: 'بالا', after: 'بسیار بالا', value: 'بسیار بالا', cat: 'leadgen', role: 'بهترین Entry Product برای نفوذ سریع به بازار و تعمیرگاه‌ها' },
    { name: 'کیسه باد تعلیق (Airbag 881)', oem: 'متوسط', after: 'بسیار بالا', value: 'بالا', cat: 'leadgen', role: 'قطعه پرمصرف دوره‌ای با تقاضای تضمین‌شده در افترمارکت' },
    { name: 'پایه توقف تریلر (Landing Gear)', oem: 'بالا', after: 'متوسط', value: 'بالا', cat: 'oem', role: 'تکمیل‌کننده سبد خرید تریلرسازان هنگام خرید پکیج زیربندی' },
    { name: 'کمک‌فنر تعلیق هیدرولیک', oem: 'متوسط', after: 'بسیار بالا', value: 'بالا', cat: 'leadgen', role: 'تعویض مداوم به دلیل ارتعاشات جاده‌های ناهموار و کوهستانی' },
    { name: 'کرپی محور (U-Bolt آلیاژی)', oem: 'بالا', after: 'بالا', value: 'بالا', cat: 'oem', role: 'حیاتی در کاربری کمپرسی و معدنی جهت جلوگیری از شکست شاسی' },
    { name: 'سرپلوس فورج (Axle Spindle)', oem: 'بالا', after: 'متوسط', value: 'بسیار بالا', cat: 'oem', role: 'قطعه متالورژی دقیق نیازمند سنگ‌زنی CNC و سخت‌کاری القایی' },
    { name: 'کفشک و لنت ترمز کاسه‌ای', oem: 'متوسط', after: 'بسیار بالا', value: 'بالا', cat: 'leadgen', role: 'بالاترین تکرار خرید در تعمیرگاه‌ها و تعویض سالانه ۲ الی ۳ بار' },
  ];

  const filteredMatrix = matrixFilter === 'all' ? productsMatrix : productsMatrix.filter((p) => p.cat === matrixFilter);

  return (
    <section className="space-y-6">
      {/* 8 Segments Visual Atlas */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-4">
          <div>
            <span className="text-xs font-bold text-orange-600">اطلس ۸ سگمنت تخصصی کاربری تریلر</span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 mt-0.5">
              تحلیل تنش‌های مهندسی و حساسیت‌های فنی در ۸ کاربری بازار
            </h2>
            <p className="text-xs text-zinc-500 mt-1">
              روی هر کاربری کلیک کنید تا مشخصات عملکردی، شاخص‌های ۴گانه و قطعات کلیدی RST نمایش داده شود
            </p>
          </div>
        </div>

        {/* Segment Tabs */}
        <div className="flex flex-wrap gap-2">
          {segmentsData.map((seg) => {
            const isSelected = seg.id === selectedSegId;
            return (
              <button
                key={seg.id}
                onClick={() => setSelectedSegId(seg.id)}
                className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isSelected
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                {seg.name}
              </button>
            );
          })}
        </div>

        {/* Selected Segment Detail Card */}
        <div className="p-6 rounded-2xl bg-zinc-50 border border-zinc-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-orange-600 text-white text-xs font-bold">
                {currentSegment.badge}
              </span>
              <h3 className="text-xl font-black text-zinc-900">{currentSegment.name}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-white border border-zinc-200">
                <span className="text-zinc-500 block font-medium">حوزه حمل و بارگیری:</span>
                <span className="text-zinc-900 font-bold mt-1 block">{currentSegment.apps}</span>
              </div>
              <div className="p-3 rounded-xl bg-white border border-zinc-200">
                <span className="text-zinc-500 block font-medium">شرایط محیطی و جاده‌ای:</span>
                <span className="text-zinc-900 font-bold mt-1 block">{currentSegment.conditions}</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs">
              <span className="font-bold text-orange-800">نقطه درد مهندسی (Pain Point): </span>
              <span className="text-zinc-800 font-semibold">{currentSegment.painPoint}</span>
            </div>

            <div className="text-xs text-zinc-600 leading-relaxed">
              <strong className="text-zinc-900">راهبرد نفوذ RST: </strong>
              {currentSegment.strategy}
            </div>
          </div>

          {/* Scores & Key Parts */}
          <div className="lg:col-span-5 p-5 rounded-xl bg-white border border-zinc-200 space-y-4 shadow-xs">
            <div className="text-xs font-bold text-zinc-900">شاخص‌های حساسیت عملکردی این کاربری:</div>

            <div className="space-y-2.5 text-xs">
              <div>
                <div className="flex justify-between text-zinc-600">
                  <span>دوام سازه‌ای و استحکام ضربه</span>
                  <span className="font-mono font-bold text-orange-600">{currentSegment.scores.durability}٪</span>
                </div>
                <div className="w-full bg-zinc-100 h-2 rounded-full mt-1 overflow-hidden">
                  <div className="bg-orange-600 h-full rounded-full" style={{ width: `${currentSegment.scores.durability}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-600">
                  <span>حساسیت ترمزگیری و استاندارد ایمنی</span>
                  <span className="font-mono font-bold text-zinc-900">{currentSegment.scores.safety}٪</span>
                </div>
                <div className="w-full bg-zinc-100 h-2 rounded-full mt-1 overflow-hidden">
                  <div className="bg-zinc-700 h-full rounded-full" style={{ width: `${currentSegment.scores.safety}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-600">
                  <span>حساسیت به توقف ناوگان (Zero Downtime)</span>
                  <span className="font-mono font-bold text-zinc-900">{currentSegment.scores.uptime}٪</span>
                </div>
                <div className="w-full bg-zinc-100 h-2 rounded-full mt-1 overflow-hidden">
                  <div className="bg-zinc-500 h-full rounded-full" style={{ width: `${currentSegment.scores.uptime}%` }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-zinc-600">
                  <span>حساسیت به سبک‌سازی وزن مرده (Payload)</span>
                  <span className="font-mono font-bold text-zinc-900">{currentSegment.scores.weight}٪</span>
                </div>
                <div className="w-full bg-zinc-100 h-2 rounded-full mt-1 overflow-hidden">
                  <div className="bg-zinc-400 h-full rounded-full" style={{ width: `${currentSegment.scores.weight}%` }} />
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-zinc-100">
              <span className="text-[11px] font-bold text-zinc-500 block mb-1.5">قطعات کلیدی RST برای این کاربری:</span>
              <div className="flex flex-wrap gap-1.5">
                {currentSegment.keyParts.map((kp, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200"
                  >
                    {kp}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 4 DRILL-DOWN CARDS: RUNNING GEAR SUBSYSTEMS (FRAMER-MOTION)               */}
      {/* ========================================================================= */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
            <h3 className="text-sm font-black text-zinc-900">
              کارت‌های تعاملی نقشه انفجاری ۴ زیرسیستم زیربندی (Running Gear Subsystems)
            </h3>
          </div>
          <span className="text-xs text-zinc-500">
            برای بررسی قطعات و الزامات مهندسی هر بخش، روی کارت کلیک کنید
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(subsystems).map(([key, item], idx) => (
            <DrillDownCard
              key={key}
              title={item.title}
              subtitle={item.subtitle}
              category={item.tag}
              icon={item.icon}
              metricBadge={{ value: item.badge, variant: idx === 0 ? 'orange' : 'gray' }}
            >
              <div className="space-y-3">
                <p className="text-xs text-zinc-700 leading-relaxed">
                  {item.desc}
                </p>

                <div className="p-2.5 rounded-xl bg-orange-50 border border-orange-200 text-xs">
                  <strong className="text-orange-950 block mb-0.5">اثر استراتژیک در خط مونتاژ تریلرساز (OEM):</strong>
                  <span className="text-zinc-700">{item.oemImpact}</span>
                </div>

                <div>
                  <span className="text-[11px] font-bold text-zinc-500 block mb-1.5">اجزای تشکیل‌دهنده در BOM:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs">
                    {item.parts.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center gap-2 text-zinc-800"
                      >
                        <span className="w-4 h-4 rounded-md bg-orange-600 text-white flex items-center justify-center text-[9px] font-black shrink-0">
                          {pIdx + 1}
                        </span>
                        <span className="truncate">{p}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DrillDownCard>
          ))}
        </div>
      </div>

      {/* 14-Product Strategic Priority Matrix */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
          <div>
            <span className="text-xs font-bold text-orange-600">ماتریس استراتژیک اولویت‌بندی محصولات</span>
            <h3 className="text-base sm:text-lg font-black text-zinc-900 mt-0.5">
              ماتریس ۱۴ محصول کلیدی RST (OEM در برابر Aftermarket)
            </h3>
            <p className="text-xs text-zinc-500 mt-0.5">
              تفکیک محصولات بر اساس جذابیت خرید کارخانه‌ای و پتانسیل جذب مشتری
            </p>
          </div>
          <div className="flex gap-1.5">
            <button
              onClick={() => setMatrixFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                matrixFilter === 'all'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              همه ({productsMatrix.length})
            </button>
            <button
              onClick={() => setMatrixFilter('leadgen')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                matrixFilter === 'leadgen'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              جذب سرنخ و افترمارکت
            </button>
            <button
              onClick={() => setMatrixFilter('oem')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                matrixFilter === 'oem'
                  ? 'bg-orange-600 text-white shadow-xs'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              ورود استراتژیک OEM
            </button>
          </div>
        </div>

        <div className="overflow-x-auto max-h-[420px]">
          <table className="w-full text-right text-xs sm:text-sm border-collapse">
            <thead className="sticky top-0 bg-zinc-100 text-zinc-900 border-b border-zinc-200 z-10 shadow-xs">
              <tr>
                <th className="py-2.5 px-3">نام محصول</th>
                <th className="py-2.5 px-3">جذابیت OEM</th>
                <th className="py-2.5 px-3">پتانسیل افترمارکت</th>
                <th className="py-2.5 px-3">ارزش استراتژیک</th>
                <th className="py-2.5 px-3">نقش در تسخیر بازار</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-100">
              {filteredMatrix.map((item, i) => (
                <tr key={i} className="hover:bg-zinc-50 transition-colors">
                  <td className="py-2.5 px-3 font-bold text-zinc-900">{item.name}</td>
                  <td className="py-2.5 px-3 text-zinc-700">{item.oem}</td>
                  <td className="py-2.5 px-3 text-zinc-700">{item.after}</td>
                  <td className="py-2.5 px-3">
                    <span
                      className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                        item.value === 'بسیار بالا'
                          ? 'bg-orange-100 text-orange-800 border border-orange-200'
                          : 'bg-zinc-100 text-zinc-800 border border-zinc-200'
                      }`}
                    >
                      {item.value}
                    </span>
                  </td>
                  <td className="py-2.5 px-3 text-xs text-zinc-600">{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

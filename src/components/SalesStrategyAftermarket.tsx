import React, { useState } from 'react';
import { dmuRolesData, skuCatalog } from '../data/marketData';
import { DrillDownCard } from './common/DrillDownCard';

export const SalesStrategyAftermarket: React.FC = () => {
  const [selectedSku, setSelectedSku] = useState<string>('RST-BR-1624');
  const [activePartnerTab, setActivePartnerTab] = useState<'fox' | 'filpa' | 'synergy'>('fox');
  const currentSku = skuCatalog[selectedSku] || skuCatalog['RST-BR-1624'];

  const competitors = [
    {
      name: 'محورسازی FOX (گروه مارال)',
      country: 'ایران (ارومیه)',
      role: 'مشتری و شریک کلیدی: تأمین قطعات، توپی و محور توسط RST',
      url: 'https://www.maralsanat.com/',
      isPartner: true,
      badge: 'تأمین‌کننده فعال',
    },
    {
      name: 'صنایع تریلرسازی فیلپا (FILPA)',
      country: 'ایران (ارومیه)',
      role: 'مشتری کلیدی OEM: تأمین محور کامل و قطعات زیربندی توسط RST',
      url: 'https://www.filran.com/',
      isPartner: true,
      badge: 'تأمین‌کننده فعال',
    },
    {
      name: 'SAF-HOLLAND',
      country: 'آلمان',
      role: 'بنچمارک جهانی محور دیسکی و تعلیق بادی',
      url: 'https://safholland.com/de/en/',
      isPartner: false,
    },
    {
      name: 'BPW Bergische Achsen',
      country: 'آلمان',
      role: 'پیشرو در دوام و محورهای اکوپلاس',
      url: 'https://www.bpw.de/en/',
      isPartner: false,
    },
    {
      name: 'JOST World',
      country: 'آلمان/بین‌المللی',
      role: 'محور، پایه توقف (Landing Gear) و سیستم‌های چرخ پنجم',
      url: 'https://www.jost-world.com/',
      isPartner: false,
    },
    {
      name: 'Özkoç Trax Axle',
      country: 'ترکیه',
      role: 'رقیب وارداتی فعال در بازار تریلر ایران',
      url: 'https://trax.com.tr/',
      isPartner: false,
    },
    {
      name: 'Serin / Sertel',
      country: 'ترکیه',
      role: 'سازنده تریلر و محور در قطب صنعتی قونیه',
      url: 'https://www.serin.com.tr/en/anasayfa',
      isPartner: false,
    },
  ];

  const engPackItems = [
    { title: '۱. فایل‌های سه‌بعدی CAD', desc: 'مدل‌های دقیق STEP و IGES برای انطباق مستقیم با نقشه شاسی OEM', icon: '📐' },
    { title: '۲. نقشه‌های دوبعدی ابعادی', desc: 'نقشه‌های فنی با ذکر تلرانس‌های میلی‌متری نشیمنگاه و سوراخ‌کاری', icon: '📏' },
    { title: '۳. ماتریس توزیع بار و تنش', desc: 'شبیه‌سازی اجزای محدود (FEA) تحت شتاب‌گیری و ترمزهای سنگین', icon: '⚖️' },
    { title: '۴. پروتکل آزمون ترمز', desc: 'نتایج تست دینامیکی ترمز منطبق با مقررات بین‌المللی ECE R13', icon: '🛑' },
    { title: '۵. ابعاد نشیمنگاه شاسی', desc: 'ابعاد هندسی دقیق براکت‌های Hanger جهت جوشکاری بی‌نقص', icon: '🔩' },
    { title: '۶. انطباق مجموعه چرخ‌انتهایی', desc: 'تطابق رینگ، بلبرینگ پکیج، کاسه‌نمد و سنسور الکترونیک ABS', icon: '🛞' },
    { title: '۷. مدل TCO و حذف خواب ناوگان', desc: 'تحلیل اقتصادی بازگشت سرمایه و درآمد ناوگان ناشی از تحویل ۴۸ ساعته قطعه', icon: '📊' },
    { title: '۸. گواهینامه‌های کیفیت و استاندارد', desc: 'تأییدیه TÜV AUSTRIA، استاندارد ISO 9001 و بازرسی متالورژی', icon: '🔬' },
  ];

  const dmuLabels = [
    'دروازه‌بان فنی',
    'تأییدیه کیفی',
    'مذاکره مالی',
    'مجری مونتاژ',
    'خدمات و جاده',
    'تصمیم نهایی',
  ];

  return (
    <section className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
              مهندسی فروش سازمانی B2B
            </span>
            <span className="text-xs text-zinc-500">کمیته ۶ نفره خرید OEM و استراتژی نفوذ به خطوط تولید</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900">
            مهندسی فروش به سازندگان تریلر و شبکه خدمات پس از فروش
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-4xl leading-relaxed">
            در کارخانه‌های تریلرساز، خرید محور و زیربندی یک تصمیم فردی نیست. این فرآیند توسط کمیته ۶ نفره خرید (DMU) ارزیابی می‌شود که RST برای هر کدام بسته‌های ارزش مهندسی، کیفی و بازرگانی اختصاصی فراهم نموده است.
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

      {/* 5-Step Land & Expand Staircase */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
          <div>
            <h3 className="text-base font-black text-zinc-900">نردبان ۵ پله‌ای نفوذ به BOM تریلرساز (Land & Expand)</h3>
            <p className="text-xs text-zinc-500">استراتژی ورود تدریجی و کاهش ریسک خرید برای کارخانجات محافظه‌کار</p>
          </div>
          <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold border border-orange-200">
            ۵ پله ورود
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-xs">
          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
            <span className="text-[10px] text-zinc-500 font-bold block">پله ۱</span>
            <span className="font-black text-zinc-900 block">تک‌قطعه مصرفی</span>
            <span className="text-zinc-600 text-[11px] block">بوستر، دیسک ترمز، کیسه باد</span>
            <span className="text-[10px] text-orange-600 font-bold block pt-1">ورود بدون ریسک</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
            <span className="text-[10px] text-zinc-500 font-bold block">پله ۲</span>
            <span className="font-black text-zinc-900 block">مجموعه چرخ‌انتهایی</span>
            <span className="text-zinc-600 text-[11px] block">پکیج کامل توپی + دیسک + بلبرینگ</span>
            <span className="text-[10px] text-orange-600 font-bold block pt-1">اثبات کیفیت</span>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1">
            <span className="text-[10px] text-zinc-500 font-bold block">پله ۳</span>
            <span className="font-black text-zinc-900 block">زیرسیستم ترمز و تعلیق</span>
            <span className="text-zinc-600 text-[11px] block">تعلیق بادی بازویی + کالیپرها</span>
            <span className="text-[10px] text-orange-600 font-bold block pt-1">تعمیق نفوذ</span>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 space-y-1">
            <span className="text-[10px] text-orange-800 font-bold block">پله ۴</span>
            <span className="font-black text-orange-950 block">محور کامل ۹ و ۱۲ تن</span>
            <span className="text-zinc-700 text-[11px] block">محور کامل ECE R13 با نام RST</span>
            <span className="text-[10px] text-orange-700 font-bold block pt-1">ثبت در BOM سازنده</span>
          </div>

          <div className="p-3.5 rounded-xl bg-orange-600 text-white space-y-1 shadow-xs">
            <span className="text-[10px] text-orange-100 font-bold block">پله ۵</span>
            <span className="font-black text-white block">پلتفرم کامل زیربندی</span>
            <span className="text-orange-100 text-[11px] block">۳ محور + جک + سیستم پنوماتیک</span>
            <span className="text-[10px] text-white font-bold block pt-1">انحصار تأمین خط</span>
          </div>
        </div>
      </div>

      {/* Engineering Pack & Competitors Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Competitor Benchmark with Clickable Links */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900">بانک لینک مستقیم وب‌سایت رقبا و بنچمارک‌ها</h3>
              <p className="text-xs text-zinc-500">بررسی سبد محصولات رقبای داخلی، شرکای OEM و برندهای جهانی</p>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-zinc-100 text-zinc-800 font-bold border border-zinc-200">
              Benchmark Links
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {competitors.map((c, i) => (
              <a
                key={i}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 rounded-xl border transition-all flex flex-col justify-between ${
                  c.isPartner
                    ? 'bg-orange-50/70 border-orange-300 hover:border-orange-500'
                    : 'bg-zinc-50 hover:bg-orange-50 border-zinc-200 hover:border-orange-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    {c.isPartner && <span className="text-orange-600 font-black text-xs">★</span>}
                    <span className="font-bold text-zinc-900">{c.name}</span>
                  </div>
                  <span className="text-orange-600 font-bold text-xs">↗</span>
                </div>
                <div className="flex items-center justify-between mt-1 text-[11px]">
                  <span className="text-zinc-500">{c.country}</span>
                  {c.badge && (
                    <span className="text-[10px] px-2 py-0.2 rounded-md bg-orange-100 text-orange-800 font-bold border border-orange-200">
                      {c.badge}
                    </span>
                  )}
                </div>
                <div className="text-[11px] text-zinc-700 mt-1 font-medium leading-tight">{c.role}</div>
              </a>
            ))}
          </div>
        </div>

        {/* 14-Item Engineering Pack Preview */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900">پکیج مهندسی فروش سازمانی (Engineering Pack)</h3>
              <p className="text-xs text-zinc-500">مجموعه مستندات فنی ارسالی به دفاتر تحقیق و توسعه OEM</p>
            </div>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-bold border border-orange-200">
              ۱۴ سند مهندسی
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            {engPackItems.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex items-start gap-2.5"
              >
                <span className="text-lg shrink-0">{item.icon}</span>
                <div>
                  <span className="font-bold text-zinc-900 block">{item.title}</span>
                  <span className="text-[11px] text-zinc-600 block mt-0.5">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
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

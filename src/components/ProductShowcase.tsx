import React, { useState } from 'react';
import { sampleProducts } from '../data/marketData';
import { ProductItem } from '../types';
import { DrillDownCard } from './common/DrillDownCard';

export const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(sampleProducts[5]); // Default to complete axle system
  const [activeTab, setActiveTab] = useState<'specs' | 'applications' | 'strategy'>('specs');
  const [cadRequested, setCadRequested] = useState(false);

  return (
    <section className="space-y-6">
      {/* Hero Intro Banner */}
      <div className="rounded-2xl p-6 bg-white border border-zinc-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200">
              ویترین محصولات راهبردی RST
            </span>
            <span className="text-xs text-zinc-500">گروه صنعتی اسپوتا (RST Axles)</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900">
            سبد تخصصی Running Gear و اجزای کلیدی زیربندی تریلر
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 mt-1 max-w-3xl leading-relaxed">
            محصولات محورسازان جهان اسپوتا با ماشین‌کاری دقیق CNC، طراحی مطابق استانداردهای بین‌المللی ECE R13 و نظارت کیفی شرکت‌های ۶گانه گروه صنعتی اسپوتا تولید می‌شوند. هر قطعه با هدف نفوذ در BOM تریلرسازان (OEM) و تأمین مطمئن قطعات مصرفی یدکی طراحی شده است.
          </p>
        </div>

        <a
          href="https://rstaxles.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-black flex items-center gap-1.5 shrink-0 transition-colors shadow-xs"
        >
          <span>کاتالوگ کامل در rstaxles.com</span>
          <span>↗</span>
        </a>
      </div>

      {/* Product Selector Carousel / Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
        {sampleProducts.map((p, idx) => {
          const isSelected = selectedProduct.id === p.id;
          return (
            <button
              key={p.id}
              onClick={() => {
                setSelectedProduct(p);
                setCadRequested(false);
              }}
              className={`p-3 rounded-xl border text-right transition-all flex flex-col items-center justify-between gap-2.5 ${
                isSelected
                  ? 'bg-orange-50 text-orange-950 border-orange-500 shadow-xs ring-2 ring-orange-500/20'
                  : 'bg-white text-zinc-800 border-zinc-200 hover:border-orange-400 hover:bg-zinc-50'
              }`}
            >
              <div className="w-full h-24 p-2 rounded-lg bg-zinc-50 flex items-center justify-center overflow-hidden border border-zinc-100">
                <img
                  src={p.image}
                  alt={p.nameFa}
                  className="max-h-full max-w-full object-contain transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-full text-center">
                <span className="text-[10px] font-mono text-orange-600 block font-bold">
                  {idx + 1}. {p.code}
                </span>
                <span className="text-xs font-bold line-clamp-1 mt-0.5 text-zinc-900">{p.nameFa.split('(')[0].trim()}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Product Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white rounded-2xl border border-zinc-200 p-6 shadow-xs">
        {/* Left: Product High-Res Render & 3D Stage */}
        <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 rounded-2xl bg-zinc-50 border border-zinc-200 relative overflow-hidden">
          {/* Top Bar Badges */}
          <div className="w-full flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-white text-zinc-900 border border-zinc-200 shadow-xs">
              {selectedProduct.code}
            </span>
            <div className="flex items-center gap-1.5">
              {selectedProduct.certifications.map((c, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 border border-orange-200"
                >
                  {c.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>

          {/* High-Res Product Image */}
          <div className="relative w-full flex items-center justify-center my-6 min-h-[260px] sm:min-h-[300px]">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.nameFa}
              className="max-h-[280px] w-auto max-w-full object-contain filter drop-shadow-md transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Bottom Card Summary */}
          <div className="w-full pt-4 border-t border-zinc-200 flex items-center justify-between text-xs">
            <span className="text-zinc-600 font-medium">ساخت گروه صنعتی اسپوتا (RST)</span>
            <button
              onClick={() => setCadRequested(!cadRequested)}
              className="px-3.5 py-1.5 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors flex items-center gap-1 shadow-xs"
            >
              <span>{cadRequested ? '✓ ثبت درخواست' : 'دریافت پکیج CAD و تست'}</span>
              <span>📥</span>
            </button>
          </div>
        </div>

        {/* Right: Technical Specs & Strategic Role */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div>
            <div className="space-y-1.5 border-b border-zinc-100 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-black text-orange-600">{selectedProduct.nameEn}</span>
                <span className="text-xs text-zinc-300">·</span>
                <span className="text-xs text-zinc-500 font-mono">{selectedProduct.category.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl font-black text-zinc-900">{selectedProduct.nameFa}</h3>
              <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed pt-1">
                {selectedProduct.description}
              </p>
            </div>

            {/* Sub-tabs */}
            <div className="flex items-center gap-2 my-4">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'specs'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                مشخصات فنی و ابعادی
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'applications'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                کاربری‌های تریلر
              </button>
              <button
                onClick={() => setActiveTab('strategy')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'strategy'
                    ? 'bg-orange-600 text-white shadow-xs'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                }`}
              >
                نقش در BOM و افترمارکت
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                {selectedProduct.keySpecs.map((spec, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 flex justify-between items-center"
                  >
                    <span className="text-zinc-500 font-medium">{spec.label}:</span>
                    <span className="font-bold text-zinc-900" dir="ltr">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-zinc-800">
                  سازگار با انواع شاسی‌های سه‌محوره تریلرسازان ایران و منطقه:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.applications.map((app, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center gap-2 text-xs text-zinc-800 font-semibold"
                    >
                      <span className="w-5 h-5 rounded-md bg-orange-600 text-white flex items-center justify-center text-[10px] shrink-0 font-bold">
                        ✓
                      </span>
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'strategy' && (
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-orange-50 border border-orange-200 text-xs space-y-1.5">
                  <span className="font-bold text-orange-950 block">موقعیت‌یابی تجاری در خط OEM:</span>
                  <p className="text-zinc-700 leading-relaxed">
                    {selectedProduct.oemRole}
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs space-y-1.5">
                  <span className="font-bold text-zinc-900 block">پتانسیل درآمد در بازار خدمات و قطعات (Aftermarket):</span>
                  <p className="text-zinc-600 leading-relaxed">
                    {selectedProduct.aftermarketRole}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* INTERACTIVE DRILL-DOWN CARDS: TECHNICAL ARCHITECTURE & AFTERMARKET SPECS */}
      {/* ========================================================================= */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-orange-600" />
            <h3 className="text-sm font-black text-zinc-900">
              کارت‌های تحلیل مته‌ای مهندسی و زنجیره تأمین زیربندی (Drill-Down Systems)
            </h3>
          </div>
          <span className="text-xs text-zinc-500">
            روی هر کارت کلیک کنید تا جزئیات متالورژی، آزمون‌های کیفی و تحلیل اقتصادی باز شود
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <DrillDownCard
            title="تیر محور بدون درز و سرپلوس فورج (Seamless Axle Tube & Spindle)"
            subtitle="هسته باربر سیستم تعلیق با مقاومت در برابر بار عمودی ۱۲ تا ۱۶ تن دینامیک"
            category="مهندسی سازه و متالورژی"
            icon="🦾"
            metricBadge={{ value: '۱۲ الی ۱۶T', label: 'ظرفیت اسمی', variant: 'orange' }}
          >
            <div className="space-y-2.5 text-xs text-zinc-700">
              <p className="leading-relaxed">
                تیر اصلی محور از لوله فولادی آلیاژی بدون درز (Seamless) با ضخامت دیواره بالا تولید شده و سرپلوس‌های فورج‌شده با روش اصطکاکی جوشکاری می‌شوند.
              </p>
              <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1">
                <span className="font-bold text-zinc-900 block">مشخصات آزمون دوام:</span>
                <span className="text-zinc-600 block">• آزمون خستگی دینامیکی تا ۲,۰۰۰,۰۰۰ چرخه نوسان تحت بار مجاز</span>
                <span className="text-zinc-600 block">• سخت‌کاری القایی محل نشیمنگاه بلبرینگ‌ها تا سختی ۵۸–۶۲ HRC</span>
              </div>
            </div>
          </DrillDownCard>

          <DrillDownCard
            title="کالیپر و دیسک ترمز ۴۳۰ میلی‌متر (Pneumatic Disc Brake Assembly)"
            subtitle="ارتقای ایمنی ناوگان جاده‌ای مطابق استاندارد تایید نوع ECE R13 اروپا"
            category="سیستم ترمز پنوماتیک"
            icon="🛑"
            metricBadge={{ value: 'ECE R13', label: 'استاندارد ایمنی', variant: 'orange' }}
          >
            <div className="space-y-2.5 text-xs text-zinc-700">
              <p className="leading-relaxed">
                سیستم ترمز دیسکی به دلیل زمان پاسخ‌دهی سریع‌تر و کاهش چشمگیر پدیده افت ترمز (Brake Fade) در سراشیبی‌ها، جایگزین ترمزهای سنتی کاسه‌ای می‌شود.
              </p>
              <div className="p-2.5 rounded-lg bg-orange-50 border border-orange-200 space-y-1">
                <span className="font-bold text-orange-950 block">مزیت اقتصادی برای خریدار تریلر:</span>
                <span className="text-zinc-700 block">• کاهش ۵۰ درصدی زمان تعویض لنت نسبت به ترمز کاسه‌ای</span>
                <span className="text-zinc-700 block">• افزایش ۴۰ درصدی طول عمر مفید لاستیک به دلیل توزیع یکنواخت گشتاور ترمز</span>
              </div>
            </div>
          </DrillDownCard>

          <DrillDownCard
            title="پکیج چرخ‌انتهایی و روانکاری مادام‌العمر (Sealed Wheel-End Hub Unit)"
            subtitle="توپی چدن داکتیل با بلبرینگ‌های پیش‌تنظیم و کاسه‌نمد چندلایه ضد نفوذ آب"
            category="دوام و کاهش توقف ناوگان"
            icon="🛞"
            metricBadge={{ value: '۵۰۰K km', label: 'فاصله سرویس', variant: 'gray' }}
          >
            <div className="space-y-2.5 text-xs text-zinc-700">
              <p className="leading-relaxed">
                یونیت توپی چرخ RST طراحی شده تا نیاز به گریسکاری و آچارکشی دوره‌ای مداوم را حذف کند و زمان خواب تریلر در تعمیرگاه را به صفر نزدیک سازد.
              </p>
              <div className="p-2.5 rounded-lg bg-zinc-50 border border-zinc-200 space-y-1">
                <span className="font-bold text-zinc-900 block">تضمین پایداری:</span>
                <span className="text-zinc-600 block">• رینگ دندانه‌دار سنسور ABS منطبق با سامانه‌های Wabco و Knorr</span>
                <span className="text-zinc-600 block">• پیچ چرخ‌های گرید ۱۰.۹ فسفاته مقاوم در برابر خوردگی نمک جاده</span>
              </div>
            </div>
          </DrillDownCard>
        </div>
      </div>
    </section>
  );
};

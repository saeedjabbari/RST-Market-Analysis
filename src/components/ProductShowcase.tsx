import React, { useState } from 'react';
import { sampleProducts } from '../data/marketData';
import { ProductItem } from '../types';

export const ProductShowcase: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(sampleProducts[5]); // Default to complete axle system
  const [activeTab, setActiveTab] = useState<'specs' | 'applications' | 'strategy'>('specs');
  const [cadRequested, setCadRequested] = useState(false);

  return (
    <section className="space-y-6">
      {/* Hero Intro Banner */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black px-2.5 py-0.5 rounded bg-orange-600 text-white">ویترین محصولات راهبردی RST</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">نمونه‌های رسمی ارسالی گروه صنعتی اسپوتا</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            سبد تخصصی Running Gear و اجزای کلیدی زیربندی تریلر
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1 max-w-3xl leading-relaxed">
            محصولات محورسازان جهان اسپوتا با ماشین‌کاری دقیق CNC، طراحی مطابق استانداردهای بین‌المللی ECE R13 و نظارت کیفی شرکت‌های ۶گانه گروه صنعتی اسپوتا تولید می‌شوند. هر قطعه با هدف نفوذ در BOM تریلرسازان (OEM) و تأمین مطمئن قطعات مصرفی یدکی طراحی شده است.
          </p>
        </div>

        <a
          href="https://rstaxles.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-[#242a34] hover:bg-[#2d3542] text-zinc-100 border border-zinc-700/80 text-xs font-black flex items-center gap-1.5 shrink-0 transition-colors shadow-sm"
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
                  ? 'bg-[#242a34] text-white border-orange-500 shadow-md ring-2 ring-orange-500/20'
                  : 'bg-white dark:bg-[#1e242c] text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-700/80 hover:border-orange-400 hover:bg-orange-50/50 dark:hover:bg-zinc-800/50'
              }`}
            >
              <div className="w-full h-24 p-2 rounded-lg bg-zinc-50 dark:bg-[#161a20] flex items-center justify-center overflow-hidden">
                <img
                  src={p.image}
                  alt={p.nameFa}
                  className="max-h-full max-w-full object-contain transition-transform group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="w-full text-center">
                <span className="text-[10px] font-mono text-orange-400 block font-bold">
                  {idx + 1}. {p.code}
                </span>
                <span className="text-xs font-bold line-clamp-1 mt-0.5">{p.nameFa.split('(')[0].trim()}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Product Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 shadow-sm">
        {/* Left: Product High-Res Render & 3D Stage */}
        <div className="lg:col-span-5 flex flex-col items-center justify-between p-6 rounded-2xl bg-gradient-to-b from-zinc-50 to-zinc-100 dark:from-[#181d24] dark:to-[#1e242c] border border-zinc-200 dark:border-zinc-700/80 relative overflow-hidden">
          {/* Top Bar Badges */}
          <div className="w-full flex items-center justify-between z-10">
            <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-[#242a34] text-white border border-zinc-700/80 shadow-xs">
              {selectedProduct.code}
            </span>
            <div className="flex items-center gap-1.5">
              {selectedProduct.certifications.map((c, i) => (
                <span
                  key={i}
                  className="text-[10px] font-bold px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-800/50"
                >
                  {c.split(' ')[0]}
                </span>
              ))}
            </div>
          </div>

          {/* High-Res Product Image with Industrial Ground Reflection */}
          <div className="relative w-full flex items-center justify-center my-6 min-h-[260px] sm:min-h-[320px]">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.nameFa}
              className="max-h-[300px] w-auto max-w-full object-contain filter drop-shadow-xl transition-all duration-300 hover:scale-105"
            />
          </div>

          {/* Bottom Card Summary */}
          <div className="w-full pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
            <span className="text-zinc-600 dark:text-zinc-400 font-medium">ساخت گروه صنعتی اسپوتا (RST)</span>
            <button
              onClick={() => setCadRequested(!cadRequested)}
              className="px-3 py-1 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors flex items-center gap-1"
            >
              <span>{cadRequested ? '✓ ثبت درخواست' : 'دریافت پکیج CAD و تست'}</span>
              <span>📥</span>
            </button>
          </div>
        </div>

        {/* Right: Technical Specs & Strategic Role */}
        <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
          <div>
            <div className="space-y-1.5 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold text-orange-600 dark:text-orange-400">{selectedProduct.nameEn}</span>
                <span className="text-xs text-zinc-400">·</span>
                <span className="text-xs text-zinc-500">{selectedProduct.category.toUpperCase()}</span>
              </div>
              <h3 className="text-2xl font-black text-zinc-900 dark:text-white">{selectedProduct.nameFa}</h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pt-1">
                {selectedProduct.description}
              </p>
            </div>

            {/* Sub-tabs */}
            <div className="flex items-center gap-2 my-4">
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'specs'
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
                }`}
              >
                مشخصات فنی و ابعادی
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'applications'
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
                }`}
              >
                کاربری‌های تریلر
              </button>
              <button
                onClick={() => setActiveTab('strategy')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'strategy'
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200'
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
                    className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex justify-between items-center"
                  >
                    <span className="text-zinc-500 dark:text-zinc-400 font-medium">{spec.label}:</span>
                    <span className="font-bold text-zinc-900 dark:text-white" dir="ltr">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="space-y-3">
                <div className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                  سازگار با انواع شاسی‌های سه‌محوره تریلرسازان ایران و منطقه:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedProduct.applications.map((app, i) => (
                    <div
                      key={i}
                      className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center gap-2 text-xs text-zinc-800 dark:text-zinc-200 font-semibold"
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
              <div className="space-y-3 text-xs">
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                  <div className="font-extrabold text-orange-600 dark:text-orange-400">🏭 نقش در ورود به BOM تریلرسازان (OEM):</div>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{selectedProduct.oemRole}</p>
                </div>
                <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
                  <div className="font-extrabold text-zinc-900 dark:text-white">🔧 پتانسیل درآمدی افترمارکت و قطعات یدکی:</div>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{selectedProduct.aftermarketRole}</p>
                </div>
              </div>
            )}
          </div>

          {/* Certifications & CAD Download Banner */}
          <div className="p-4 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800/40 flex flex-wrap items-center justify-between gap-3 text-xs">
            <div>
              <span className="font-black text-orange-700 dark:text-orange-300 block">گواهی‌های بین‌المللی و استاندارد:</span>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                {selectedProduct.certifications.map((cert, idx) => (
                  <span key={idx} className="font-medium text-zinc-700 dark:text-zinc-300">
                    • {cert}
                  </span>
                ))}
              </div>
            </div>
            {cadRequested && (
              <span className="text-[11px] font-bold text-orange-700 dark:text-orange-300 bg-white dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-orange-300">
                درخواست مدارک فنی برای تیم مهندسی ثبت شد.
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Complete Running Gear Ecosystem Exploded Multiplier */}
      <div className="rounded-2xl p-6 bg-[#1c2128] text-white border border-zinc-700/80 shadow-lg space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-700/80 pb-3">
          <div>
            <span className="text-xs text-orange-400 font-extrabold">اکوسیستم یکپارچه قطعات زیربندی RST در ۱ دستگاه تریلر ۳ محوره</span>
            <h3 className="text-lg font-black text-white mt-0.5">ترکیب مهندسی ۶ محصول ارسالی در هر تریلر فعال در جاده</h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-orange-600 text-white font-extrabold">ضریب تکثیر قطعات</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center">
          <div className="p-3 rounded-xl bg-[#242a34] border border-zinc-600/70 shadow-xs">
            <div className="text-xs text-zinc-300 font-medium">۱. محور کامل DFZ</div>
            <div className="text-xl font-black text-white mt-1">۳ عدد</div>
            <div className="text-[11px] text-orange-400 mt-0.5 font-bold">در هر تریلر سه‌محوره</div>
          </div>
          <div className="p-3 rounded-xl bg-[#242a34] border border-zinc-600/70 shadow-xs">
            <div className="text-xs text-zinc-300 font-medium">۲. توپی و کاسه ۴۱۰۱</div>
            <div className="text-xl font-black text-white mt-1">۶ عدد</div>
            <div className="text-[11px] text-orange-400 mt-0.5 font-bold">۲ مجموعه در هر محور</div>
          </div>
          <div className="p-3 rounded-xl bg-[#242a34] border border-zinc-600/70 shadow-xs">
            <div className="text-xs text-zinc-300 font-medium">۳. کالیپر ترمز دیسکی</div>
            <div className="text-xl font-black text-white mt-1">۶ عدد</div>
            <div className="text-[11px] text-orange-400 mt-0.5 font-bold">چپ و راست هر محور</div>
          </div>
          <div className="p-3 rounded-xl bg-[#242a34] border border-zinc-600/70 shadow-xs">
            <div className="text-xs text-zinc-300 font-medium">۴. بوستر ترمز ۱۶/۲۴</div>
            <div className="text-xl font-black text-white mt-1">۶ عدد</div>
            <div className="text-[11px] text-orange-400 mt-0.5 font-bold">سیستم ترمز بادی اضطراری</div>
          </div>
          <div className="p-3 rounded-xl bg-[#242a34] border border-zinc-600/70 shadow-xs">
            <div className="text-xs text-zinc-300 font-medium">۵. کیسه باد ۸۸۱</div>
            <div className="text-xl font-black text-white mt-1">۶ عدد</div>
            <div className="text-[11px] text-orange-400 mt-0.5 font-bold">تعلیق پنوماتیک تریلر</div>
          </div>
          <div className="p-3 rounded-xl bg-[#242a34] border border-zinc-600/70 shadow-xs">
            <div className="text-xs text-zinc-300 font-medium">۶. جک توقف (Landing)</div>
            <div className="text-xl font-black text-white mt-1">۱ جفت</div>
            <div className="text-[11px] text-orange-400 mt-0.5 font-bold">دو سرعته استاتیک ۵۰ تن</div>
          </div>
        </div>

        <div className="p-3.5 rounded-xl bg-[#242a34] border border-zinc-700/80 text-xs text-zinc-200 leading-relaxed flex items-center justify-between shadow-xs">
          <span>
            💡 <strong className="text-white">تحلیل مدیران:</strong> قرارداد خرید یک بچ ۱۰۰ تریلری با یک سازنده (مانند فیلپا یا اروم تریلر)، تقاضای خرید ۳۰۰ محور، ۶۰۰ توپی، ۶۰۰ بوستر/کالیپر و ۶۰۰ کیسه باد تولید می‌کند و تا ۱۰ سال آینده بازار لوازم یدکی آن به گروه اسپوتا متصل می‌ماند.
          </span>
        </div>
      </div>
    </section>
  );
};

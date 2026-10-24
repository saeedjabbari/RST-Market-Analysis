import React, { useState } from 'react';
import { dmuRolesData, skuCatalog } from '../data/marketData';

export const SalesStrategyAftermarket: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('eng');
  const [selectedSku, setSelectedSku] = useState<string>('RST-BR-1624');

  const currentRole = dmuRolesData.find((r) => r.id === selectedRole) || dmuRolesData[0];
  const currentSku = skuCatalog[selectedSku] || skuCatalog['RST-BR-1624'];

  const competitors = [
    { name: 'SAF-HOLLAND', country: 'آلمان', role: 'بنچمارک جهانی محور دیسکی', url: 'https://safholland.com/de/en/' },
    { name: 'BPW Bergische Achsen', country: 'آلمان', role: 'پیشرو در دوام و محورهای اکوپلاس', url: 'https://www.bpw.de/en/' },
    { name: 'JOST World', country: 'آلمان/بین‌المللی', role: 'محور، جک توقف و زیربندی تریلر', url: 'https://www.jost-world.com/' },
    { name: 'Özkoç Trax Axle', country: 'ترکیه', role: 'رقیب وارداتی فعال در بازار ایران', url: 'https://trax.com.tr/' },
    { name: 'Serin / Sertel', country: 'ترکیه', role: 'سازنده محور و تریلر قونیه', url: 'https://www.serin.com.tr/en/anasayfa' },
    { name: 'FOX / مارال صنعت', country: 'ایران (ارومیه)', role: 'اکوسیستم یکپارچه داخلی', url: 'https://www.maralsanat.com/' },
  ];

  const engPackItems = [
    { title: '1. 3D CAD Files', desc: 'فایل‌های سه‌بعدی STEP/IGES برای تطابق نقشه شاسی', icon: '📐' },
    { title: '2. 2D Tech Drawings', desc: 'نقشه‌های ابعادی با تلرانس دقیق جای پیچ‌ها و براکت‌ها', icon: '📏' },
    { title: '3. Load Capacity Matrix', desc: 'ماتریس بارگذاری دینامیک، ترمز و توزیع وزن', icon: '⚖️' },
    { title: '4. Brake Test Protocol', desc: 'پروتکل‌های رسمی آزمون ترمز منطبق با ECE R13', icon: '🛑' },
    { title: '5. Mounting Dimensions', desc: 'ابعاد دقیق نشیمنگاه شاسی و براکت‌های Hanger', icon: '🔩' },
    { title: '6. Wheel-End Compatibility', desc: 'تطابق رینگ، بلبرینگ، کاسه‌نمد و رینگ ABS', icon: '🛞' },
    { title: '7. TCO Calculator', desc: 'مدل هزینه کل مالکیت و سود ناشی از حذف خواب ناوگان', icon: '📊' },
    { title: '8. QC & EMARK Certs', desc: 'مدارک بازرسی متالورژی و گواهی TÜV AUSTRIA', icon: '🔬' },
  ];

  return (
    <section className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black px-2.5 py-0.5 rounded bg-orange-600 text-white">مهندسی فروش سازمانی B2B</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">کمیته ۶ نفره خرید OEM و استراتژی نفوذ به BOM</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            استراتژی فروش به سازندگان تریلر و شبکه خدمات پس از فروش
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            در کارخانه‌های تریلرساز، تصمیم خرید محور یک تصمیم تک‌نفره نیست. ۶ نقش کلیدی در کمیته تصمیم‌گیری (DMU) حضور دارند که تیم فروش RST برای هر یک ارزش پیشنهادی متفاوتی ارائه می‌دهد.
          </p>
        </div>

        <a
          href="https://rstaxles.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shrink-0 shadow-sm"
        >
          سامانه مشتریان در rstaxles.com ↗
        </a>
      </div>

      {/* 6-Role DMU Committee Wheel & Detail Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">
                کمیته تصمیم‌گیری ۶ نفره خرید در کارخانه تریلرساز (DMU)
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">روی هر نقش کلیک کنید تا دغدغه و پاسخ ارزش‌آفرین RST را مشاهده نمایید</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
              B2B Buying Unit
            </span>
          </div>

          {/* DMU Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            {dmuRolesData.map((role) => {
              const isSelected = selectedRole === role.id;
              return (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-3 rounded-xl border text-right transition-all flex items-center gap-2.5 ${
                    isSelected
                      ? 'bg-orange-600 text-white border-orange-700 shadow-md ring-2 ring-orange-500/20'
                      : 'bg-zinc-50 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-200 border-zinc-200 dark:border-zinc-800 hover:border-orange-400'
                  }`}
                >
                  <span className="text-xl shrink-0">{role.icon}</span>
                  <div className="overflow-hidden">
                    <span className="text-xs font-bold block truncate">{role.title.split('(')[0].trim()}</span>
                    <span className={`text-[10px] block truncate ${isSelected ? 'text-orange-100' : 'text-zinc-500 dark:text-zinc-400'}`}>
                      {role.badge}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Role Detail Card */}
          <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-3 text-xs">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-zinc-900 dark:text-white">{currentRole.title}</span>
              <span className="px-2 py-0.5 rounded bg-orange-600 text-white font-bold">{currentRole.badge}</span>
            </div>

            <div className="p-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
              <strong className="text-orange-600 dark:text-orange-400 block mb-1">دغدغه و پرسش کلیدی در جلسه خرید:</strong>
              {currentRole.question}
            </div>

            <div className="p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 text-zinc-800 dark:text-zinc-200">
              <strong className="text-orange-700 dark:text-orange-300 block mb-1">ارزش پیشنهادی اختصاصی RST (Value Proposition):</strong>
              <p className="leading-relaxed">{currentRole.vp}</p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-zinc-500 block mb-1.5">مستندات ارائه‌شده در پکیج مهندسی فروش:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                {currentRole.deliverables.map((del, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300">
                    <span className="text-orange-600 font-bold">✓</span>
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 5-Step Land & Expand Staircase */}
        <div className="lg:col-span-5 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <h3 className="text-base font-black text-zinc-900 dark:text-white">نردبان نفوذ به BOM تریلرساز (Land & Expand)</h3>
              <span className="text-xs px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">
                ۵ پله ورود
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-2 leading-relaxed">
              اگر تریلرساز در ابتدا برای تغییر کل محور مقاومت کند، ورود از پله‌های پایین‌تر (دیسک، توپی یا بوستر) راه را برای تصاحب کل محور باز می‌کند:
            </p>

            <div className="space-y-2 mt-4 text-xs">
              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border-r-4 border-r-zinc-400 flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">پله ۱: تک‌قطعه (Part Entry)</span>
                  <span className="text-[11px] text-zinc-500">بوستر ۱۶/۲۴، دیسک ترمز، توپی چرخ، کیسه باد</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">ورود بدون ریسک</span>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border-r-4 border-r-zinc-600 flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">پله ۲: مجموعه چرخ‌انتهایی (Wheel-End Assembly)</span>
                  <span className="text-[11px] text-zinc-500">پکیج توپی + بلبرینگ + دیسک + کاسه‌نمد</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">کیفیت اثبات‌شده</span>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border-r-4 border-r-zinc-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-zinc-900 dark:text-white block">پله ۳: زیرسیستم ترمز و تعلیق (Subsystem)</span>
                  <span className="text-[11px] text-zinc-500">مجموعه تعلیق بادی بازویی + کالیپرها و بوسترها</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 font-bold">تعمیق نفوذ</span>
              </div>

              <div className="p-2.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border-r-4 border-r-orange-500 flex items-center justify-between">
                <div>
                  <span className="font-bold text-orange-600 dark:text-orange-400 block">پله ۴: محور کامل ۹ و ۱۲ تن (Complete Axle)</span>
                  <span className="text-[11px] text-zinc-500">محور کامل دیسکی یا کاسه‌ای با تایید نوع ECE R13</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">ثبت در BOM</span>
              </div>

              <div className="p-3 rounded-xl bg-orange-600 text-white shadow-md flex items-center justify-between">
                <div>
                  <span className="font-black text-sm block">پله ۵: پلتفرم یکپارچه (Full Running Gear)</span>
                  <span className="text-[11px] text-orange-100">تأمین تمام ۳ محور تریلر + جک + سیستم باد و ترمز</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-white text-orange-700 font-black">هدف نهایی</span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-600 dark:text-zinc-400">
            💡 <strong>تجربه تجاری:</strong> ورود به عنوان تأمین‌کننده دیسک و کالیپر برای مدل‌های خاص، مقاومت مهندسی را می‌شکند و در مدل بعدی تریلر، کل محور RST در نقشه سازه ثبت می‌شود.
          </div>
        </div>
      </div>

      {/* Competitor Radar & Clickable Directory + 14-Item Engineering Pack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Competitor Benchmark with Clickable Links */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">بانک لینک مستقیم وب‌سایت رقبا و بنچمارک‌ها</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">بررسی سبد محصولات رقبای داخلی و منطقه‌ای</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
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
                className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 hover:bg-orange-50 dark:hover:bg-orange-950/20 border border-zinc-200 dark:border-zinc-800 hover:border-orange-400 transition-colors flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-zinc-900 dark:text-white">{c.name}</span>
                  <span className="text-orange-600 font-bold text-xs">↗</span>
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1">{c.country}</div>
                <div className="text-[11px] text-zinc-700 dark:text-zinc-300 mt-0.5 font-medium">{c.role}</div>
              </a>
            ))}
          </div>

          <a
            href="https://rstaxles.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-xl bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-black flex items-center justify-between hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <span>🌐 مشاهده سبد کامل محصولات گروه صنعتی اسپوتا (RST Axles)</span>
            <span className="font-mono text-xs">https://rstaxles.com/ ↗</span>
          </a>
        </div>

        {/* 14-Item Engineering Pack */}
        <div className="lg:col-span-6 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">بسته ۱۴گانه مهندسی فروش (Engineering Pack)</h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">ابزارهای متقاعدسازی مهندسان و مدیران تدارکات تریلرساز</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">
              CAD & Specs
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            {engPackItems.map((item, idx) => (
              <div
                key={idx}
                className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1"
              >
                <div className="flex items-center gap-1.5 font-bold text-zinc-900 dark:text-white">
                  <span>{item.icon}</span>
                  <span>{item.title}</span>
                </div>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Smart Packaging & QR Technical Label Simulator */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <span className="text-xs font-bold text-orange-600">بسته‌بندی هوشمند و اصالت قطعه در افترمارکت</span>
            <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white mt-0.5">
              شبیه‌ساز لیبل جعبه قطعات با QR Code اختصاصی متصل به rstaxles.com
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              روی هر شماره فنی کلیک کنید تا پیش‌نمایش لیبل بسته‌بندی هوشمند و مقاصد اسکن QR Code را مشاهده نمایید
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(skuCatalog).map((code) => (
              <button
                key={code}
                onClick={() => setSelectedSku(code)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold transition-colors ${
                  selectedSku === code
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Selected SKU Label Mockup */}
        <div className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border-2 border-orange-500/30 max-w-2xl mx-auto shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] font-bold text-orange-600 block">{currentSku.family}</span>
              <span className="text-lg font-black text-zinc-900 dark:text-white font-mono mt-0.5 block">{currentSku.code}</span>
            </div>
            {/* Functional Mock QR SVG */}
            <a
              href="https://rstaxles.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-xl bg-white border border-zinc-300 shadow-sm shrink-0 hover:scale-105 transition-transform"
              title="اسکن و ورود به پرتال rstaxles.com"
            >
              <svg className="w-14 h-14" viewBox="0 0 36 36">
                <rect x="2" y="2" width="10" height="10" fill="#09090b" />
                <rect x="4" y="4" width="6" height="6" fill="#fff" />
                <rect x="5" y="5" width="4" height="4" fill="#ea580c" />
                <rect x="24" y="2" width="10" height="10" fill="#09090b" />
                <rect x="26" y="4" width="6" height="6" fill="#fff" />
                <rect x="27" y="5" width="4" height="4" fill="#ea580c" />
                <rect x="2" y="24" width="10" height="10" fill="#09090b" />
                <rect x="4" y="26" width="6" height="6" fill="#fff" />
                <rect x="5" y="27" width="4" height="4" fill="#ea580c" />
                <rect x="15" y="4" width="3" height="6" fill="#09090b" />
                <rect x="14" y="14" width="8" height="8" fill="#ea580c" />
                <rect x="25" y="16" width="7" height="4" fill="#09090b" />
                <rect x="15" y="25" width="5" height="7" fill="#09090b" />
                <rect x="24" y="24" width="8" height="8" fill="#09090b" />
              </svg>
            </a>
          </div>

          <div className="text-xs space-y-1.5">
            <div className="font-black text-sm text-zinc-900 dark:text-white">{currentSku.title}</div>
            <div className="text-zinc-600 dark:text-zinc-400">
              <strong>سازگاری با محورها:</strong> {currentSku.compat}
            </div>
            <div className="text-zinc-600 dark:text-zinc-400">
              <strong>مشخصات فنی و استاندارد:</strong> {currentSku.specs}
            </div>
            <div className="p-2 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 font-mono text-[11px] font-bold text-zinc-700 dark:text-zinc-300">
              کد رهگیری متالورژی: {currentSku.batch}
            </div>
          </div>

          <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 text-xs">
            <span className="font-bold text-orange-700 dark:text-orange-300 block mb-1">
              محتوای دیجیتال پس از اسکن QR Code روی بسته:
            </span>
            <ul className="space-y-1 text-zinc-700 dark:text-zinc-300 text-[11px]">
              {currentSku.qrLinks.map((link, idx) => (
                <li key={idx} className="flex items-center gap-1.5">
                  <span className="text-orange-600">🔗</span>
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';

export const MarketSizing: React.FC = () => {
  const [trailersScenario, setTrailersScenario] = useState<number>(90000);
  const [targetShare, setTargetShare] = useState<number>(20);
  const [avgAxlePriceMln, setAvgAxlePriceMln] = useState<number>(250); // 250 million Tomans per complete axle with suspension & brakes

  const totalAxles = trailersScenario * 3;
  const rstAxles = Math.round(totalAxles * (targetShare / 100));
  const rstWheelEndComponents = rstAxles * 2;
  const totalMarketComponents = totalAxles * 2;
  const annualTurnoverBln = Math.round((rstAxles * avgAxlePriceMln) / 1000); // in Billion Tomans

  const scenarios = [
    { label: 'آمار کل کشور (۹۰,۰۰۰ تریلر = ۲۷۰,۰۰۰ محور)', value: 90000 },
    { label: 'سناریوی محافظه‌کارانه (۲۰,۰۰۰ تریلر)', value: 20000 },
    { label: 'سناریوی پایه صنعتی (۳۰,۰۰۰ تریلر)', value: 30000 },
    { label: 'سناریوی میانه بالا (۴۵,۰۰۰ تریلر)', value: 45000 },
  ];

  const benchmarks = [
    { name: 'Tırsan (ترکیه)', capacity: 20000, color: 'bg-zinc-700' },
    { name: 'Kässbohrer (ترکیه)', capacity: 20000, color: 'bg-zinc-700' },
    { name: 'تولید فعلی آذربایجان غربی', capacity: 15355, color: 'bg-orange-600' },
    { name: 'Krone Turkey (هدف ۲۰۲۶)', capacity: 10000, color: 'bg-zinc-600' },
    { name: 'یاقوت تبریز (ظرفیت اسمی سالانه)', capacity: 7500, color: 'bg-zinc-800' },
    { name: 'مارال تریلر (ظرفیت اعلامی)', capacity: 5000, color: 'bg-zinc-900' },
    { name: 'پویا خودرو ماهان (انواع کاربری)', capacity: 3000, color: 'bg-zinc-500' },
  ];

  return (
    <section className="space-y-6">
      {/* Sizing Formula Header */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-2">
            <span className="text-xs font-black px-2.5 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300">
              مبنای آماری رسمی وزارت صنعت، معدن و تجارت (دی ۱۴۰۴)
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
              ۹۰,۰۰۰ تریلر سالانه × ۳ محور = ۲۷۰,۰۰۰ محور در سال
            </h2>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              بر اساس گزارش رسمی اداره کل صمت آذربایجان غربی، تولید فعلی این استان <strong>۱۵,۳۵۵ دستگاه در سال</strong> است که <strong>۱۷٪ نیاز کل کشور</strong> را پوشش می‌دهد (`15,355 ÷ 0.17 = 90,324`). از آنجا که هر تریلر تجاری سه‌محوره است، حجم تقاضای کل محور کشور سالانه <strong>۲۷۰,۰۰۰ محور</strong> برآورد می‌شود.
            </p>
          </div>

          <div className="lg:col-span-6 grid grid-cols-5 gap-2 items-center text-center">
            <div className="col-span-2 p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-xs text-zinc-500 font-bold block">نیاز سالانه تریلر کشور</span>
              <span className="text-2xl font-black text-orange-600 block mt-1">۹۰,۰۰۰</span>
              <span className="text-[11px] text-zinc-400">دستگاه / سال</span>
            </div>
            <div className="col-span-1 flex flex-col items-center">
              <span className="w-10 h-10 rounded-full bg-orange-600 text-white font-black flex items-center justify-center text-sm shadow">
                ×۳
              </span>
              <span className="text-[10px] text-zinc-500 font-bold mt-1">محور در تریلر</span>
            </div>
            <div className="col-span-2 p-3.5 rounded-2xl bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow">
              <span className="text-xs text-zinc-400 dark:text-zinc-500 font-bold block">کل بازار سالانه محور</span>
              <span className="text-2xl font-black text-orange-400 dark:text-orange-600 block mt-1">۲۷۰,۰۰۰</span>
              <span className="text-[11px] text-zinc-300 dark:text-zinc-600">محور کامل / سال</span>
            </div>
          </div>
        </div>
      </div>

      {/* SVG 3-Axle Semi-Trailer Bogie Component Multiplier Schematic */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-zinc-200 dark:border-zinc-800 pb-3">
          <div>
            <span className="text-xs font-bold text-orange-600">مهندسی ضریب تکثیر قطعات (Parts Multiplier)</span>
            <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white mt-0.5">
              چرا بازار واقعی RST دو برابر تعداد کل محورهاست؟
            </h3>
          </div>
          <span className="text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
            ۲۷۰,۰۰۰ محور = ۵۴۰,۰۰۰ چرخ‌انتهایی (Wheel-End)
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
          {/* SVG Schematic */}
          <div className="lg:col-span-5 p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center">
            <svg viewBox="0 0 380 185" className="w-full h-auto">
              <rect x="20" y="18" width="340" height="18" rx="4" fill="#ea580c" />
              <text x="190" y="30" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="800">
                شاسی تریلر سه‌محوره (3-Axle Semi-Trailer Bogie)
              </text>

              {/* Axle 1 */}
              <g transform="translate(85, 36)">
                <line x1="0" y1="0" x2="0" y2="80" stroke="#ea580c" strokeWidth="3" />
                <circle cx="0" cy="38" r="14" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
                <text x="0" y="42" textAnchor="middle" fill="#7c2d12" fontSize="8" fontWeight="800">Air×2</text>
                <rect x="-24" y="72" width="48" height="20" rx="5" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
                <text x="0" y="86" textAnchor="middle" fill="#18181b" fontSize="8.5" fontWeight="900">محور ۱</text>
                <text x="0" y="108" textAnchor="middle" fill="#71717a" fontSize="8" fontWeight="700">2 Hub + 2 Brake</text>
              </g>

              {/* Axle 2 */}
              <g transform="translate(190, 36)">
                <line x1="0" y1="0" x2="0" y2="80" stroke="#ea580c" strokeWidth="3" />
                <circle cx="0" cy="38" r="14" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
                <text x="0" y="42" textAnchor="middle" fill="#7c2d12" fontSize="8" fontWeight="800">Air×2</text>
                <rect x="-24" y="72" width="48" height="20" rx="5" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
                <text x="0" y="86" textAnchor="middle" fill="#18181b" fontSize="8.5" fontWeight="900">محور ۲</text>
                <text x="0" y="108" textAnchor="middle" fill="#71717a" fontSize="8" fontWeight="700">2 Hub + 2 Brake</text>
              </g>

              {/* Axle 3 */}
              <g transform="translate(295, 36)">
                <line x1="0" y1="0" x2="0" y2="80" stroke="#ea580c" strokeWidth="3" />
                <circle cx="0" cy="38" r="14" fill="#ffedd5" stroke="#f97316" strokeWidth="2" />
                <text x="0" y="42" textAnchor="middle" fill="#7c2d12" fontSize="8" fontWeight="800">Air×2</text>
                <rect x="-24" y="72" width="48" height="20" rx="5" fill="#ffffff" stroke="#ea580c" strokeWidth="2" />
                <text x="0" y="86" textAnchor="middle" fill="#18181b" fontSize="8.5" fontWeight="900">محور ۳</text>
                <text x="0" y="108" textAnchor="middle" fill="#71717a" fontSize="8" fontWeight="700">2 Hub + 2 Brake</text>
              </g>

              <rect x="25" y="154" width="330" height="24" rx="6" fill="#18181b" />
              <text x="190" y="170" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">
                هر ۱ تریلر = ۳ محور کامل | ۶ توپی چرخ | ۶ دیسک/کاسه | ۶ بوستر/کالیپر | ۶ کیسه باد
              </text>
            </svg>
          </div>

          {/* Cards Breakdown */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 rounded-xl bg-orange-600 text-white shadow-sm">
              <span className="text-[11px] text-orange-100 font-bold block">۱. مجموعه محور کامل</span>
              <span className="text-xl font-black block mt-1">۲۷۰,۰۰۰ عدد</span>
              <span className="text-[10px] text-orange-100 block">۹۰,۰۰۰ تریلر × ۳ محور</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-900 dark:bg-zinc-800 text-white shadow-sm">
              <span className="text-[11px] text-zinc-400 font-bold block">۲. توپی چرخ (Hub)</span>
              <span className="text-xl font-black text-orange-400 block mt-1">۵۴۰,۰۰۰ عدد</span>
              <span className="text-[10px] text-zinc-400 block">۲ عدد در هر محور</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] text-zinc-500 font-bold block">۳. دیسک و کاسه ترمز</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">۵۴۰,۰۰۰ عدد</span>
              <span className="text-[10px] text-zinc-500 block">۶ قطعه در هر تریلر</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] text-zinc-500 font-bold block">۴. کالیپر و بوستر ترمز</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">۵۴۰,۰۰۰ واحد</span>
              <span className="text-[10px] text-zinc-500 block">سیستم ترمز پنوماتیک</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] text-zinc-500 font-bold block">۵. کیسه باد تعلیق</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">۵۴۰,۰۰۰ واحد</span>
              <span className="text-[10px] text-zinc-500 block">تعلیق بادی مستقل</span>
            </div>
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-[11px] text-zinc-500 font-bold block">۶. بلبرینگ و کاسه‌نمد</span>
              <span className="text-xl font-black text-orange-600 block mt-1">+۱,۰۸۰,۰۰۰ عدد</span>
              <span className="text-[10px] text-zinc-500 block">مجموعه ایمنی Wheel-End</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Sizing & Revenue Calculator */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <h3 className="text-base sm:text-lg font-black text-zinc-900 dark:text-white">
              ماشین‌حساب تعاملی تقاضای محور و درآمد هدف RST
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
              سناریوی تیراژ تریلر و سهم هدف RST را تغییر دهید تا نتایج حجم فروش و گردش مالی بلادرنگ به‌روزرسانی شود
            </p>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {scenarios.map((sc) => (
              <button
                key={sc.value}
                onClick={() => setTrailersScenario(sc.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors ${
                  trailersScenario === sc.value
                    ? 'bg-orange-600 text-white shadow-sm'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
                }`}
              >
                {sc.label.split('(')[0]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-6 space-y-4">
            {/* Share Slider */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200">سهم هدف RST از بازار:</label>
                <span className="text-sm font-black px-2.5 py-0.5 rounded bg-orange-600 text-white">
                  {targetShare}٪ بازار
                </span>
              </div>
              <input
                type="range"
                min="5"
                max="30"
                step="5"
                value={targetShare}
                onChange={(e) => setTargetShare(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>5%</span>
                <span>10%</span>
                <span>15%</span>
                <span>20%</span>
                <span>25%</span>
                <span>30%</span>
              </div>
            </div>

            {/* Price Slider */}
            <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold text-zinc-800 dark:text-zinc-200">میانگین قیمت محور کامل با تعلیق و ترمز:</label>
                <span className="text-xs font-bold text-zinc-900 dark:text-white font-mono">
                  {avgAxlePriceMln.toLocaleString('fa-IR')} میلیون تومان
                </span>
              </div>
              <input
                type="range"
                min="180"
                max="350"
                step="10"
                value={avgAxlePriceMln}
                onChange={(e) => setAvgAxlePriceMln(Number(e.target.value))}
                className="w-full accent-orange-600 cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-zinc-500 font-mono">
                <span>180 M</span>
                <span>250 M</span>
                <span>350 M</span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-zinc-900 text-white flex items-center justify-between text-xs shadow-md">
              <div>
                <span className="text-zinc-400 block font-medium">گردش مالی سالانه حاصل از سهم هدف {targetShare}٪:</span>
                <span className="text-xl sm:text-2xl font-black text-orange-400 block mt-1">
                  {annualTurnoverBln.toLocaleString('fa-IR')} میلیارد تومان
                </span>
              </div>
              <span className="text-[11px] px-2.5 py-1 rounded bg-orange-600 text-white font-bold">
                {rstAxles.toLocaleString('fa-IR')} محور / سال
              </span>
            </div>
          </div>

          {/* Calculator Output Grid */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3 text-xs">
            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block font-medium">کل تقاضای محور بازار:</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">
                {totalAxles.toLocaleString('fa-IR')}
              </span>
              <span className="text-[10px] text-zinc-400">محور سه‌محوره در سال</span>
            </div>

            <div className="p-3.5 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40">
              <span className="text-orange-700 dark:text-orange-300 block font-bold">محور هدف RST ({targetShare}٪):</span>
              <span className="text-xl font-black text-orange-600 block mt-1">{rstAxles.toLocaleString('fa-IR')}</span>
              <span className="text-[10px] text-orange-600/70">دستگاه محور نو در سال</span>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block font-medium">تقاضای متناظر توپی چرخ RST:</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">
                {rstWheelEndComponents.toLocaleString('fa-IR')}
              </span>
              <span className="text-[10px] text-zinc-400">کل بازار: {totalMarketComponents.toLocaleString('fa-IR')}</span>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block font-medium">تقاضای متناظر دیسک و کاسه RST:</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">
                {rstWheelEndComponents.toLocaleString('fa-IR')}
              </span>
              <span className="text-[10px] text-zinc-400">قطعه ترمز در سال</span>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block font-medium">کالیپر و بوستر ترمز RST:</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">
                {rstWheelEndComponents.toLocaleString('fa-IR')}
              </span>
              <span className="text-[10px] text-zinc-400">سیستم پنوماتیک ECE</span>
            </div>

            <div className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block font-medium">کیسه باد تعلیق RST:</span>
              <span className="text-xl font-black text-zinc-900 dark:text-white block mt-1">
                {rstWheelEndComponents.toLocaleString('fa-IR')}
              </span>
              <span className="text-[10px] text-zinc-400">تیپ 881 استاندارد</span>
            </div>
          </div>
        </div>
      </div>

      {/* Benchmark Capacities & Middle East 521K Comparison */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-7 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <h3 className="text-base font-black text-zinc-900 dark:text-white">
                مقایسه ظرفیت‌های مستند سازندگان ایران و بنچمارک‌های ترکیه
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">ظرفیت اعلامی کارخانه‌ها بر حسب دستگاه تریلر در سال</p>
            </div>
            <span className="text-xs px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
              آمار صنعتی
            </span>
          </div>

          <div className="space-y-3 pt-1">
            {benchmarks.map((b, i) => {
              const maxCap = 20000;
              const pct = (b.capacity / maxCap) * 100;
              return (
                <div key={i} className="space-y-1 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-zinc-800 dark:text-zinc-200">{b.name}</span>
                    <span className="font-mono font-bold text-zinc-600 dark:text-zinc-400">
                      {b.capacity.toLocaleString('fa-IR')} دستگاه/سال
                    </span>
                  </div>
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-3 rounded-full overflow-hidden">
                    <div className={`${b.color} h-full rounded-full transition-all duration-500`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
              <h3 className="text-base font-black text-zinc-900 dark:text-white">تحلیل تضاد گزارش ۵۲۱K با آمار Bottom-Up</h3>
              <span className="text-xs px-2 py-0.5 rounded bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 font-bold">
                نقد آماری
              </span>
            </div>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-3 leading-relaxed">
              گزارش خارجی IndexBox حجم بازار تریلر خاورمیانه را ۵۲۱,۰۰۰ دستگاه دانسته که ۲۰۲,۰۰۰ دستگاه آن را به ایران نسبت می‌دهد. با این حال، تحلیل مهندسی صمت نشان می‌دهد:
            </p>

            <div className="mt-3 space-y-2 text-xs">
              <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
                <span className="font-bold text-zinc-900 dark:text-white block">۱. واقعیت آماری ایران:</span>
                <span className="text-zinc-600 dark:text-zinc-400 mt-1 block">
                  نیاز کل سالانه کشور حدود ۹۰,۰۰۰ دستگاه تریلر است و عدد ۲۰۲,۰۰۰ به احتمال زیاد ناوگان در گردش یا تمامی یدک‌کش‌های سبک را نیز شامل شده است.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40">
                <span className="font-bold text-orange-700 dark:text-orange-300 block">۲. مدل Bottom-Up گروه اسپوتا:</span>
                <span className="text-zinc-600 dark:text-zinc-400 mt-1 block">
                  راهکار دقیق: شمارش تیراژ حقیقی تک‌تک ۵۰ کارخانه مجاز (`Σ تولید OEMها × ۳ محور`) برای پیش‌بینی دقیق ظرفیت بازار.
                </span>
              </div>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-zinc-900 text-white text-xs">
            💡 <strong>نتیجه‌گیری برای مدیران:</strong> حتی با محافظه‌کارانه‌ترین فرض‌ها (۲۰ الی ۳۰ هزار تریلر در سال)، بازار ایران به ۶۰ الی ۹۰ هزار محور نو نیاز دارد که سهم ۲۰ درصدی آن به تنهایی گردش مالی بیش از ۲,۵۰۰ میلیارد تومان برای RST به همراه دارد.
          </div>
        </div>
      </div>
    </section>
  );
};

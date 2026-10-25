import React, { useState } from 'react';
import { spootaCompanies, valueChainData } from '../data/marketData';

export const ExecutiveSummary: React.FC<{
  onNavigate: (tabId: string) => void;
  onStartPresentation?: () => void;
}> = ({ onNavigate, onStartPresentation }) => {
  // Master Dynamic Stage Controller: Only ONE stage is displayed at a time!
  const [currentStage, setCurrentStage] = useState<'radar' | 'simulator' | 'teams' | 'campaigns' | 'ecosystem'>('radar');

  // Gamification & Quest Tracker
  const [completedStages, setCompletedStages] = useState<Record<string, boolean>>({
    radar: true,
    simulator: false,
    teams: false,
    campaigns: false,
    ecosystem: false,
  });

  const markStageCompleted = (stage: string) => {
    setCompletedStages((prev) => ({ ...prev, [stage]: true }));
  };

  const completedCount = Object.values(completedStages).filter(Boolean).length;
  const progressPercent = Math.round((completedCount / 5) * 100);

  // Stage 1: Market Radar States
  const [activeRadarNode, setActiveRadarNode] = useState<'mimt' | 'tasnim' | 'cluster'>('mimt');

  // Stage 2: Market Conquest Simulator States
  const [marketShareTarget, setMarketShareTarget] = useState<number>(10); // 10% default
  const totalNationalAxles = 270000;
  const targetAxles = Math.round(totalNationalAxles * (marketShareTarget / 100));
  const trailersEquipped = Math.round(targetAxles / 3);
  const estimatedTurnoverBlnToman = Math.round(targetAxles * 0.048);
  const urmiaCoveragePercent = Math.min(100, Math.round((targetAxles / 46065) * 100));

  // Stage 3: Three Teams War Room States
  const [activeTeam, setActiveTeam] = useState<'marketing' | 'sales' | 'media'>('sales');
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({
    'm1': true, 'm2': false, 'm3': false,
    's1': true, 's2': false, 's3': false,
    'a1': true, 'a2': false, 'a3': false,
  });

  const toggleTask = (id: string) => {
    setCheckedTasks((prev) => ({ ...prev, [id]: !prev[id] }));
    markStageCompleted('teams');
  };

  // Stage 4: Campaign Launcher States
  const [activeCampaign, setActiveCampaign] = useState<'b2c' | 'b2b' | 'tech'>('b2c');

  // Stage 5: Ecosystem & Flywheel States
  const [flywheelPlan, setFlywheelPlan] = useState<1 | 2 | 3>(2);
  const [selectedStep, setSelectedStep] = useState(3);

  const plans = {
    1: { label: 'سناریوی محافظه‌کارانه (۵K ← ۱۰K ← ۱۵K)', y1: 5000, y2: 10000, y3: 15000 },
    2: { label: 'برنامه پایه گزارش (۱۰K ← ۲۰K ← ۳۰K)', y1: 10000, y2: 20000, y3: 30000 },
    3: { label: 'سناریوی رشد پرشتاب (۱۵K ← ۲۵K ← ۳۵K)', y1: 15000, y2: 25000, y3: 35000 },
  };

  const currentPlan = plans[flywheelPlan];
  const totalInstalled = currentPlan.y1 + currentPlan.y2 + currentPlan.y3;
  const currentStepData = valueChainData.find((s) => s.step === selectedStep) || valueChainData[2];

  // Stage metadata
  const stages = [
    { id: 'radar', num: '۱', label: 'رادار کشف بازار', sub: '۹۰K تریلر و فرسودگی', icon: '📡' },
    { id: 'simulator', num: '۲', label: 'شبیه‌ساز تصاحب سهم', sub: 'تارگت ۲۷۰K محور', icon: '🎯' },
    { id: 'teams', num: '۳', label: 'اتاق فرمان ۳ تیم', sub: 'فروش، مارکتینگ، رسانه', icon: '💼' },
    { id: 'campaigns', num: '۴', label: 'لانچر ۳ کمپین', sub: 'B2C رانندگان و B2B', icon: '🚀' },
    { id: 'ecosystem', num: '۵', label: 'اکوسیستم اسپوتا', sub: 'چرخ طیار و خط تولید', icon: '⚙️' },
  ];

  const currentStageIndex = stages.findIndex((s) => s.id === currentStage);

  const goToNextStage = () => {
    if (currentStageIndex < stages.length - 1) {
      const nextId = stages[currentStageIndex + 1].id as typeof currentStage;
      setCurrentStage(nextId);
      markStageCompleted(nextId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const goToPrevStage = () => {
    if (currentStageIndex > 0) {
      const prevId = stages[currentStageIndex - 1].id as typeof currentStage;
      setCurrentStage(prevId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section className="space-y-5">
      {/* ========================================================================= */}
      {/* 1. MASTER CONTROLLER: BRIGHT THEME (WHITE + ORANGE + GRAY ONLY)           */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-4 sm:p-5 bg-white border border-zinc-200 shadow-xs text-zinc-900">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-3 border-b border-zinc-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-50 border border-orange-200 flex items-center justify-center text-xl shrink-0">
              🎮
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-800 font-black border border-orange-200">
                  کنسول تعاملی استراتژی (Dynamic Strategy Hub)
                </span>
                <span className="text-xs text-zinc-300">|</span>
                <span className="text-xs font-bold text-zinc-600">
                  {progressPercent === 100 ? 'تسلط کامل ۱۰۰٪: آماده صدور مصوبه' : `مرحله ${currentStageIndex + 1} از ۵`}
                </span>
              </div>
              <h1 className="text-base sm:text-lg font-black text-zinc-900 mt-0.5">
                اتاق عملیات تسخیر بازار داخل، پتانسیل ما و هدف‌گذاری ۳ تیم اجرایی
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Progress Bar */}
            <div className="hidden sm:block w-36 space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-zinc-500">پیشرفت مطالعه:</span>
                <span className="font-mono font-bold text-orange-600">{progressPercent}٪</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-100 overflow-hidden border border-zinc-200">
                <div
                  className="h-full bg-orange-600 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>

            {onStartPresentation && (
              <button
                onClick={onStartPresentation}
                className="px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-black transition-all flex items-center gap-1.5 shadow-xs"
              >
                <span>▶</span>
                <span>اسلایدشوی مدیران</span>
              </button>
            )}
          </div>
        </div>

        {/* 5 Dynamic Stage Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {stages.map((stg) => {
            const isActive = currentStage === stg.id;
            const isCompleted = completedStages[stg.id];
            return (
              <button
                key={stg.id}
                onClick={() => {
                  setCurrentStage(stg.id as typeof currentStage);
                  markStageCompleted(stg.id);
                }}
                className={`p-2.5 rounded-xl border text-right transition-all flex items-center gap-2 relative ${
                  isActive
                    ? 'bg-orange-50 border-orange-500 text-orange-950 shadow-xs ring-2 ring-orange-500/20'
                    : 'bg-zinc-50 border-zinc-200 text-zinc-700 hover:bg-white hover:border-zinc-300'
                }`}
              >
                <span className="text-xl shrink-0">{stg.icon}</span>
                <div className="overflow-hidden">
                  <div className="flex items-center gap-1">
                    <span className={`text-[10px] font-bold ${isActive ? 'text-orange-600' : 'text-zinc-400'}`}>
                      گام {stg.num}
                    </span>
                    {isCompleted && (
                      <span className="text-[9px] text-orange-600 font-bold">✓</span>
                    )}
                  </div>
                  <div className="text-xs font-black truncate text-zinc-900">{stg.label}</div>
                  <div className="text-[10px] text-zinc-500 truncate hidden lg:block">{stg.sub}</div>
                </div>

                {isActive && (
                  <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-orange-600 rounded-full" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. DYNAMIC STAGE CONTAINER: BRIGHT WHITE & SOFT GRAY PALETTE              */}
      {/* ========================================================================= */}
      <div className="rounded-2xl p-5 sm:p-7 bg-white border border-zinc-200 shadow-xs text-zinc-900 transition-all">

        {/* ----------------------------------------------------------------------- */}
        {/* STAGE 1: MARKET RADAR (داده‌های رسمی صمت و تسنیم با چارت‌های روشن)         */}
        {/* ----------------------------------------------------------------------- */}
        {currentStage === 'radar' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-zinc-100 text-orange-700 font-black border border-zinc-200">
                  مرحله ۱: رادار کشف تقاضای بازار داخل
                </span>
                <h2 className="text-lg sm:text-xl font-black text-zinc-900 mt-1">
                  مبانی آماری صمت و تسنیم: نیاز ۹۰ هزار تریلر در سال و فرسودگی ۵۰٪ ناوگان
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  برای مشاهده نمودار و تحلیل تخصصی، روی هر یک از ۳ کادر تعاملی کلیک کنید:
                </p>
              </div>

              {/* 3 Interactive Radar Pills */}
              <div className="flex items-center gap-1.5 bg-zinc-50 p-1 rounded-xl border border-zinc-200">
                <button
                  onClick={() => setActiveRadarNode('mimt')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeRadarNode === 'mimt'
                      ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  ۱. آمار رسمی صمت
                </button>
                <button
                  onClick={() => setActiveRadarNode('tasnim')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeRadarNode === 'tasnim'
                      ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  ۲. بحران فرسودگی ناوگان
                </button>
                <button
                  onClick={() => setActiveRadarNode('cluster')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    activeRadarNode === 'cluster'
                      ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  ۳. قطب ۵۴ سازنده ارومیه
                </button>
              </div>
            </div>

            {/* Stage 1 Visual Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              {/* Left Visual Infographic Component (Clean Light Donut / Bar) */}
              <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 flex flex-col items-center justify-center text-center space-y-4">
                {activeRadarNode === 'mimt' && (
                  <div className="w-full space-y-3">
                    <span className="text-xs font-black text-zinc-800">چارت اینفوگرافیک سهم ارومیه در تقاضای تریلر ایران</span>
                    
                    {/* Visual Light Donut Infographic */}
                    <div className="relative flex items-center justify-center py-2">
                      <svg className="w-40 h-40 transform -rotate-90" viewBox="0 0 100 100">
                        <circle cx="50" cy="50" r="38" stroke="#e4e4e7" strokeWidth="12" fill="transparent" />
                        <circle
                          cx="50"
                          cy="50"
                          r="38"
                          stroke="#ea580c"
                          strokeWidth="12"
                          strokeDasharray="238.76"
                          strokeDashoffset="198.17"
                          fill="transparent"
                          strokeLinecap="round"
                        />
                      </svg>
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-zinc-900">
                        <span className="text-2xl font-black text-orange-600 font-mono">۱۷٪</span>
                        <span className="text-[10px] text-zinc-500 font-bold">خوشه ارومیه</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-orange-600 block font-bold">تولید سالانه استان:</span>
                        <span className="font-mono font-black text-zinc-900 text-base">۱۵,۳۵۵</span>
                        <span className="text-[9px] text-zinc-500 block">دستگاه تریلر</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-zinc-500 block font-bold">نیاز کل کشور:</span>
                        <span className="font-mono font-black text-zinc-900 text-base">۹۰,۳۲۴</span>
                        <span className="text-[9px] text-zinc-500 block">دستگاه تریلر</span>
                      </div>
                    </div>
                  </div>
                )}

                {activeRadarNode === 'tasnim' && (
                  <div className="w-full space-y-4 text-right">
                    <span className="text-xs font-black text-zinc-800 text-center block">نمودار فرسودگی ناوگان سنگین باری جاده‌ای</span>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-zinc-600 font-bold">کل ناوگان باری جاده‌ای:</span>
                          <span className="font-mono font-bold text-zinc-900">۴۱۱,۰۰۰ دستگاه</span>
                        </div>
                        <div className="h-3.5 rounded-full bg-zinc-200 overflow-hidden">
                          <div className="h-full bg-zinc-400 rounded-full w-full" />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-orange-600 font-bold">ناوگان فرسوده قطعی (&gt;۵۰٪):</span>
                          <span className="font-mono font-bold text-orange-600">۲۰۰,۰۰۰+ دستگاه</span>
                        </div>
                        <div className="h-3.5 rounded-full bg-zinc-200 overflow-hidden">
                          <div className="h-full bg-orange-600 rounded-full w-[51%]" />
                        </div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white border border-zinc-200 text-[11px] text-zinc-700 leading-relaxed shadow-xs">
                      💡 <strong>تحلیل نوسازی:</strong> تعویض ۲۰۰ هزار کشنده فرسوده، محرک تضمین‌شده برای خرید ۲۰۰ هزار تریلر نو و ۶۰۰ هزار محور در سراسر کشور است.
                    </div>
                  </div>
                )}

                {activeRadarNode === 'cluster' && (
                  <div className="w-full space-y-3 text-right">
                    <span className="text-xs font-black text-zinc-800 text-center block">پایگاه بومی کارخانه اسپوتا در ارومیه</span>
                    <div className="p-3.5 rounded-xl bg-white border border-zinc-200 space-y-2.5 shadow-xs">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-600 font-bold">تعداد تریلرسازان فعال:</span>
                        <span className="font-mono text-zinc-900 font-bold">۵۴ کارخانه و کارگاه</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-600 font-bold">فاصله از کارخانه ما:</span>
                        <span className="text-orange-600 font-bold">کمتر از ۵۰ کیلومتر</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-zinc-600 font-bold">تقاضای محور ارومیه:</span>
                        <span className="font-mono text-zinc-900 font-bold">۴۶,۰۰۰ محور در سال</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-zinc-500">
                      «این قطب به‌تنهایی قادر به جذب ظرفیت تولید ۳ سال آینده ما با هزینه حمل نزدیک به صفر است.»
                    </p>
                  </div>
                )}
              </div>

              {/* Right Context & Decision Narrative (Crisp Typography) */}
              <div className="lg:col-span-7 space-y-4 text-right">
                {activeRadarNode === 'mimt' && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-orange-600">فرمول رسمی وزارت صمت:</span>
                      <span className="font-mono text-xs px-2.5 py-1 rounded bg-zinc-100 text-zinc-900 border border-zinc-200 dir-ltr inline-block font-bold">
                        15,355 ÷ 0.17 = 90,324 Trailers/Year
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-zinc-900">
                      تقاضای سالانه کشور: ۹۰,۳۲۴ تریلر معادل ۲۷۰,۰۰۰ محور نو
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      مدیرکل صمت آذربایجان غربی رسماً اعلام کرد که ارومیه با ۵۴ تریلرساز فعال و تولید سالانه ۱۵,۳۵۵ دستگاه، ۱۷٪ کل تریلرهای کشور را تأمین می‌کند. با توجه به ۳ محور بودن هر تریلر، تقاضای سالانه محور در کشور <strong>۲۷۰,۰۰۰ محور</strong> و <strong>۵۴۰,۰۰۰ توپی، دیسک، لنت و کیسه باد</strong> است.
                    </p>
                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                      <strong>دستور مدیرعامل:</strong> اولویت قطعی و ۱۰۰٪ شرکت، تسخیر بازار داخل است. تا زمانی که نیمی از بازار ۲۷۰K محوری داخل را تصاحب نکرده‌ایم، صادرات در اولویت دوم قرار دارد.
                    </div>
                  </>
                )}

                {activeRadarNode === 'tasnim' && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-orange-600">گزارش خبرگزاری تسنیم:</span>
                      <span className="text-xs text-zinc-600 font-bold">فرسودگی بیش از ۵۰٪ ناوگان باری جاده‌ای</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-zinc-900">
                      ورود هر کشنده نو، مستلزم خرید یک تریلر نو و استاندارد است
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      از مجموع ۴۱۱ هزار ناوگان باری جاده‌ای کشور، بیش از ۲۰۰ هزار دستگاه فرسوده قطعی هستند. برنامه نوسازی ناوگان توسط دولت، تقاضای سنگینی برای تریلرهای نوساز با استانداردهای ۸۵‌گانه و ECE R13 اروپا رقم زده است.
                    </p>
                    <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 text-xs text-zinc-800">
                      <strong>فرصت طلایی:</strong> رانندگان دیگر حاضر به بستن محورهای بی‌کیفیت و متفرقه بدون گارانتی نیستند؛ آنها محوری با تأمین قطعه سریع و گارانتی معتبر می‌خواهند.
                    </div>
                  </>
                )}

                {activeRadarNode === 'cluster' && (
                  <>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-orange-600">استراتژی تمرکز محلی (Geographic Focus):</span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black text-zinc-900">
                      فاز اول: اشباع ۵۴ سازنده ارومیه پیش از هرگونه پراکندگی منابع
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      تولید سالانه ۱۵,۳۵۵ تریلر در ارومیه معادل ۴۶,۰۰۰ محور است. تصاحب ۵۰٪ از همین یک قطب، فروش سالانه ۲۳,۰۰۰ محور در شعاع چند کیلومتری کارخانه را قطعی می‌کند.
                    </p>
                    <div className="p-3 rounded-xl bg-orange-50 border border-orange-200 text-xs text-orange-950">
                      <strong>فازبندی استراتژیک:</strong> فاز ۱: تسخیر عمق بازار داخل و ارومیه | فاز ۲: صادرات منطقه (عراق، قفقاز و CIS) با تکیه بر مرزهای بازرگان، سرو و تمرچین.
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* STAGE 2: MARKET CONQUEST SIMULATOR (شبیه‌ساز اسلایدری در تم روشن)        */}
        {/* ----------------------------------------------------------------------- */}
        {currentStage === 'simulator' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-zinc-100 text-orange-700 font-black border border-zinc-200">
                  مرحله ۲: شبیه‌ساز تصاحب بازار داخل
                </span>
                <h2 className="text-lg sm:text-xl font-black text-zinc-900 mt-1">
                  پتانسیل‌سنجی زنده: جابجایی اسلایدر برای محاسبه درآمد و مأموریت تیم‌ها
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  اسلایدر را حرکت دهید تا اثر آن بر تیراژ محور، گردش مالی ریالی و وظایف ۳ تیم را ببینید:
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-600 font-bold">سهم هدف‌گذاری شده:</span>
                <span className="text-xl font-black font-mono text-orange-600 bg-orange-50 px-3.5 py-1 rounded-xl border border-orange-200">
                  {marketShareTarget}٪
                </span>
              </div>
            </div>

            {/* Slider Controller (White & Orange) */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4">
              <div className="flex justify-between text-xs font-bold text-zinc-700">
                <span>محتاطانه (۲٪ - ۵٪)</span>
                <span className="text-orange-600 font-black">پایه مصوب استراتژیک (۱۰٪ - ۱۵٪)</span>
                <span>تسخیر سهم مسلط کشوری (۲۰٪ - ۲۵٪)</span>
              </div>

              <input
                type="range"
                min={2}
                max={25}
                step={1}
                value={marketShareTarget}
                onChange={(e) => setMarketShareTarget(Number(e.target.value))}
                className="w-full h-3 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
              />

              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>۵,۴۰۰ محور / سال</span>
                <span>۲۷,۰۰۰ محور / سال</span>
                <span>۶۷,۵۰۰ محور / سال</span>
              </div>
            </div>

            {/* Realtime 4 Metric Badges in White */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <span className="text-xs text-zinc-500 font-bold block">تیراژ سالانه محور RST</span>
                <div className="text-xl sm:text-3xl font-black font-mono text-zinc-900">
                  {targetAxles.toLocaleString('fa-IR')}
                </div>
                <span className="text-[11px] text-orange-600 font-bold block">محور در سال</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <span className="text-xs text-zinc-500 font-bold block">تعداد تریلر مجهز شده</span>
                <div className="text-xl sm:text-3xl font-black font-mono text-zinc-900">
                  {trailersEquipped.toLocaleString('fa-IR')}
                </div>
                <span className="text-[11px] text-zinc-500 font-bold block">دستگاه تریلر نوساز</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <span className="text-xs text-zinc-500 font-bold block">گردش مالی تخمینی</span>
                <div className="text-xl sm:text-3xl font-black font-mono text-orange-600">
                  {estimatedTurnoverBlnToman.toLocaleString('fa-IR')}
                </div>
                <span className="text-[11px] text-zinc-500 font-bold block">میلیارد تومان / سال</span>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-xs space-y-1">
                <span className="text-xs text-zinc-500 font-bold block">پوشش تقاضای ارومیه</span>
                <div className="text-xl sm:text-3xl font-black font-mono text-zinc-900">
                  {urmiaCoveragePercent}٪
                </div>
                <span className="text-[11px] text-zinc-500 font-bold block">از کل خوشه استانی</span>
              </div>
            </div>

            {/* Simulated Orders Dispatched to Teams */}
            <div className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 space-y-2 text-right">
              <span className="text-xs font-black text-orange-600 block">
                📋 مأموریت محاسباتی این تارگت برای ۳ تیم اجرایی:
              </span>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs pt-1">
                <div className="p-3 rounded-lg bg-white border border-zinc-200">
                  <span className="text-zinc-900 font-bold block">تیم فروش:</span>
                  <span className="text-zinc-600 text-[11.5px]">باید قرارداد تأمین با حداقل <strong>{Math.ceil(trailersEquipped / 350)} تریلرساز فعال</strong> منعقد نماید.</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-zinc-200">
                  <span className="text-zinc-900 font-bold block">تیم بازاریابی:</span>
                  <span className="text-zinc-600 text-[11.5px]">باید <strong>{trailersEquipped * 2} پکیج مهندسی 3D CAD</strong> برای طراحان شاسی ارسال کند.</span>
                </div>
                <div className="p-3 rounded-lg bg-white border border-zinc-200">
                  <span className="text-zinc-900 font-bold block">تیم رسانه و کمپین:</span>
                  <span className="text-zinc-600 text-[11.5px]">باید کمپین رانندگان را در ۵ پایانه باربری ترانزیتی فعال کند.</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* STAGE 3: 3-TEAM WAR ROOM (اتاق فرمان و چک‌لیست ۳ تیم در تم روشن)          */}
        {/* ----------------------------------------------------------------------- */}
        {currentStage === 'teams' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-zinc-100 text-orange-700 font-black border border-zinc-200">
                  مرحله ۳: اتاق فرمان ۳ تیم اجرایی
                </span>
                <h2 className="text-lg sm:text-xl font-black text-zinc-900 mt-1">
                  اهداف تفکیکی بازاریابی، اهداف فروش و اهداف رسانه‌ای و تبلیغات
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  تیم مورد نظر را انتخاب کرده و روی مأموریت‌ها کلیک کنید تا وضعیت اقدام فعال شود:
                </p>
              </div>

              {/* 3 Team Selector Tabs */}
              <div className="flex items-center gap-1.5 bg-zinc-50 p-1 rounded-xl border border-zinc-200">
                <button
                  onClick={() => setActiveTeam('marketing')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTeam === 'marketing'
                      ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <span>📊</span>
                  <span>تیم بازاریابی</span>
                </button>
                <button
                  onClick={() => setActiveTeam('sales')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTeam === 'sales'
                      ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <span>💼</span>
                  <span>تیم فروش OEM</span>
                </button>
                <button
                  onClick={() => setActiveTeam('media')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeTeam === 'media'
                      ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  <span>📢</span>
                  <span>تیم رسانه و تبلیغات</span>
                </button>
              </div>
            </div>

            {/* Team Specific Mission Cards */}
            {activeTeam === 'marketing' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => toggleTask('m1')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['m1'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۱. مپینگ اطلاعات ۵۴ تریلرساز</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['m1'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['m1'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    استخراج مشخصات فنی شاسی، اکسل و تعلیق مصرفی در کارگاه‌های ارومیه جهت انطباق با پلتفرم RST.
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    خروجی: دیتابیس BOM Intelligence
                  </div>
                </div>

                <div
                  onClick={() => toggleTask('m2')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['m2'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۲. پایش هفتگی قیمت رقبای ترک</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['m2'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['m2'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    رصد قیمت هفتگی چلان، سرتل، پیرلانتا و نرخ ارز جهت تضمین مزیت رقابتی ۱۰ تا ۱۵ درصد ارزان‌تر.
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    خروجی: ایندکس هفتگی قیمت‌گذاری
                  </div>
                </div>

                <div
                  onClick={() => toggleTask('m3')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['m3'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۳. تدوین گارانتی خواب ناوگان</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['m3'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['m3'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    تدوین ضمانت‌نامه ۵ ساله تعویض پوسته و تأمین قطعه در ۴۸ ساعت در سراسر کشور جهت خنثی‌سازی ادعای رقبا.
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    خروجی: سند گزاره ارزش TCO
                  </div>
                </div>
              </div>
            )}

            {activeTeam === 'sales' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => toggleTask('s1')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['s1'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۱. تارگت سال اول: ۱۰,۰۰۰ محور</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['s1'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['s1'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    عقد تفاهم‌نامه با ۲۰ کارگاه ارومیه و آغاز پایلوت مهندسی با ۳ برند بزرگ ملی (ماموت، مارال، مایان).
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    تارگت مقداری: ۱۰,۰۰۰ محور در سال
                  </div>
                </div>

                <div
                  onClick={() => toggleTask('s2')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['s2'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۲. فروش اعتباری (LC / چک صیادی)</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['s2'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['s2'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    ارائه تسهیلات خرید چکی به تریلرسازان داخلی؛ مزیتی که واردکنندگان نقدی محور ترک هرگز قادر به ارائه آن نیستند.
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    ابزار: فروش اعتباری و تسهیلات بانکی
                  </div>
                </div>

                <div
                  onClick={() => toggleTask('s3')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['s3'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۳. تأسیس ۵ عاملیت افترمارکت</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['s3'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['s3'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    افتتاح عاملیت‌های رسمی قطعات در تهران (شورآباد)، تبریز، بندرعباس، اصفهان و مشهد جهت تصاحب سود بالای ۴۰٪ یدکی.
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    هدف: پوشش کامل شاهراه‌های کشور
                  </div>
                </div>
              </div>
            )}

            {activeTeam === 'media' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div
                  onClick={() => toggleTask('a1')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['a1'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۱. کمپین B2B: خط تولید بدون توقف</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['a1'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['a1'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    مخاطب: مدیران کارخانجات؛ پیام: «تحویل آنی پای خط کارخانه بدون ریسک گمرک و نوسان ارز + فایل‌های 3D CAD».
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    کانال: تور بازدید حضوری کارخانه
                  </div>
                </div>

                <div
                  onClick={() => toggleTask('a2')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['a2'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۲. کمپین B2C: محوری که خواب ندارد</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['a2'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['a2'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    مخاطب: رانندگان پایه‌یک؛ پیام: «به تریلرسازت بگو RST بندازه؛ ۵ سال ضمانت تعویض پوسته و قطعات در دسترس».
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    کانال: اینستاگرام و پایانه‌های باربری
                  </div>
                </div>

                <div
                  onClick={() => toggleTask('a3')}
                  className={`p-4 rounded-2xl border text-right cursor-pointer transition-all space-y-3 ${
                    checkedTasks['a3'] ? 'bg-orange-50/70 border-orange-500 shadow-xs' : 'bg-white border-zinc-200 hover:border-zinc-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-zinc-900">۳. ویدیوهای کالبدشکافی کیفیت</span>
                    <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${checkedTasks['a3'] ? 'bg-orange-600 text-white' : 'bg-zinc-100 text-zinc-400 border border-zinc-200'}`}>
                      {checkedTasks['a3'] ? '✓' : '○'}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    انتشار مستند تست خستگی و متالوژی TÜV اتریش و مقایسه ضخامت لوله محور RST با نمونه‌های ضعیف ریخته‌گری وارداتی.
                  </p>
                  <div className="text-[11px] text-orange-600 font-mono font-bold pt-1 border-t border-zinc-100">
                    کانال: آپارات، یوتیوب و rstaxles.com
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* STAGE 4: CAMPAIGN LAUNCHER (شبیه‌ساز و پرتاب ۳ کمپین در تم روشن)           */}
        {/* ----------------------------------------------------------------------- */}
        {currentStage === 'campaigns' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-zinc-100 text-orange-700 font-black border border-zinc-200">
                  مرحله ۴: لانچر و شبیه‌ساز اجرای ۳ کمپین
                </span>
                <h2 className="text-lg sm:text-xl font-black text-zinc-900 mt-1">
                  شبیه‌ساز پرتاب کمپین‌ها: انتخاب کمپین برای نمایش پیش‌نمایش تبلیغ و واکنش راننده
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  روی هر یک از ۳ کمپین کلیک کنید تا ماکت اجرایی آن را ببینید:
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-zinc-600 font-bold">کمپین فعال:</span>
                <span className="text-xs font-black px-3 py-1 rounded-xl bg-orange-50 text-orange-800 border border-orange-200">
                  {activeCampaign === 'b2c' ? 'کمپین رانندگان (B2C)' : activeCampaign === 'b2b' ? 'کمپین تریلرسازان (B2B)' : 'کمپین شفافیت فنی'}
                </span>
              </div>
            </div>

            {/* 3 Campaign Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <button
                onClick={() => setActiveCampaign('b2c')}
                className={`p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                  activeCampaign === 'b2c' ? 'bg-orange-50 border-orange-500 text-zinc-900 shadow-xs ring-2 ring-orange-500/20' : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div>
                  <span className="text-[10px] text-orange-600 font-bold block">کمپین ۱: تقاضای معکوس رانندگان</span>
                  <span className="text-sm font-black text-zinc-900">«محوری که خواب ندارد»</span>
                </div>
                <span className="text-2xl">🚛</span>
              </button>

              <button
                onClick={() => setActiveCampaign('b2b')}
                className={`p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                  activeCampaign === 'b2b' ? 'bg-orange-50 border-orange-500 text-zinc-900 shadow-xs ring-2 ring-orange-500/20' : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div>
                  <span className="text-[10px] text-orange-600 font-bold block">کمپین ۲: B2B تریلرسازان</span>
                  <span className="text-sm font-black text-zinc-900">«خط تولید بدون توقف»</span>
                </div>
                <span className="text-2xl">🏭</span>
              </button>

              <button
                onClick={() => setActiveCampaign('tech')}
                className={`p-3.5 rounded-2xl border text-right transition-all flex items-center justify-between ${
                  activeCampaign === 'tech' ? 'bg-orange-50 border-orange-500 text-zinc-900 shadow-xs ring-2 ring-orange-500/20' : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300'
                }`}
              >
                <div>
                  <span className="text-[10px] text-orange-600 font-bold block">کمپین ۳: شفافیت کیفی</span>
                  <span className="text-sm font-black text-zinc-900">«کالبدشکافی کیفیت TÜV»</span>
                </div>
                <span className="text-2xl">🔬</span>
              </button>
            </div>

            {/* Campaign Simulator Monitor (Bright) */}
            <div className="p-5 rounded-2xl bg-zinc-50 border border-zinc-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-8 space-y-3 text-right">
                {activeCampaign === 'b2c' && (
                  <>
                    <span className="text-xs font-bold text-orange-600">مخاطب: رانندگان پایه‌یک و مالکان ناوگان ترانزیت جاده‌ای</span>
                    <h3 className="text-lg font-black text-zinc-900">
                      «به تریلرسازت بگو محور RST بندازه؛ ۵ سال ضمانت واقعی پوسته و قطعات در دسترس»
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      با شکستن انحصار روانی قطعات ترکیه، راننده با اطمینان از خدمات پس از فروش و قیمت نصف قطعات یدکی، خودش هنگام سفارش به تریلرساز فشار می‌آورد که محور RST نصب کند (کشش تقاضا).
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-zinc-500 block">کانال‌های اصلی انتشار:</span>
                        <span className="text-zinc-900 font-bold">اینستاگرام ترانزیت، کانال‌های تلگرام رانندگان، پایانه‌های نسیم‌شهر و بندرعباس</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-zinc-500 block">شاخص کشش تقاضا (Pull Demand):</span>
                        <span className="text-orange-600 font-bold font-mono text-sm">۸۸٪ تغییر تمایل رانندگان</span>
                      </div>
                    </div>
                  </>
                )}

                {activeCampaign === 'b2b' && (
                  <>
                    <span className="text-xs font-bold text-orange-600">مخاطب: مدیران کارخانجات و مهندسان طراح شاسی تریلر</span>
                    <h3 className="text-lg font-black text-zinc-900">
                      «چرا خواب سرمایه در گمرک؟ تحویل فوری محور استاندارد پای خط تولید»
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      حذف دغدغه نوسان ارز و معطلی در گمرک بازرگان؛ محور کامل با سیستم تعلیق پنوماتیک و نقشه‌های 3D CAD ظرف ۴۸ ساعت پای خط تولید تریلرساز تحویل داده می‌شود.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-zinc-500 block">ابزارهای عملیاتی:</span>
                        <span className="text-zinc-900 font-bold">ارسال محور تستی پایلوت + تور بازدید از کارخانجات فورج و CNC ارومیه</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-zinc-500 block">نرخ پذیرش در خطوط:</span>
                        <span className="text-orange-600 font-bold font-mono text-sm">۷۵٪ کاهش زمان مذاکره</span>
                      </div>
                    </div>
                  </>
                )}

                {activeCampaign === 'tech' && (
                  <>
                    <span className="text-xs font-bold text-orange-600">مخاطب: مهندسان متالوژی، آزمایشگاه‌های استاندارد و استادکاران زیربندی</span>
                    <h3 className="text-lg font-black text-zinc-900">
                      «کالبدشکافی کیفیت: چرا محور اسپوتا تحمل سنگین‌ترین شرایط جاده‌های ایران را دارد؟»
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed">
                      مستندات آزمایشگاهی از آزمون‌های متالوژی فولاد و شبیه‌سازی ۵ میلیون سیکل تست خستگی هیدرولیک TÜV اتریش که برتری قطعی محور بومی نسبت به نمونه‌های ضعیف ریخته‌گری را ثابت می‌کند.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                      <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-zinc-500 block">کانال فنی:</span>
                        <span className="text-zinc-900 font-bold">ویدیوهای QR Code روی جعبه قطعات در rstaxles.com و آپارات</span>
                      </div>
                      <div className="p-3 rounded-xl bg-white border border-zinc-200 shadow-xs">
                        <span className="text-[10px] text-zinc-500 block">تأییدیه رسمی:</span>
                        <span className="text-orange-600 font-bold font-mono text-sm">استاندارد ECE R13 اروپا</span>
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* Mobile Phone Simulation Card */}
              <div className="lg:col-span-4 p-4 rounded-2xl bg-white border border-zinc-200 text-center space-y-3 shadow-xs">
                <div className="flex items-center justify-between text-[10px] text-zinc-400 border-b border-zinc-100 pb-2">
                  <span>شبیه‌سازی بازخورد میدانی</span>
                  <span className="w-2 h-2 rounded-full bg-orange-600"></span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-50 text-right space-y-1.5 border border-zinc-200">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-600">
                    <span>💬</span>
                    <span>نظر راننده ترانزیت (مسیر ارومیه-تهران):</span>
                  </div>
                  <p className="text-[11px] text-zinc-700 leading-relaxed">
                    «وقتی دیدم پوسته محور RST گارانتی ۵ ساله تعویض بی‌قیدوشرط داره، به تریلرسازم گفتم فقط RST ببنده. محور ترک اگه بلبرینگ یا پوسته‌ش مشکل پیدا کنه باید هفته‌ها تو جاده بخوابی.»
                  </p>
                </div>
                <span className="text-[10px] text-orange-700 font-bold block">
                  نتیجه: فروش تضمین‌شده بدون تخفیف‌های سنگین
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* STAGE 5: ECOSYSTEM & FLYWHEEL (اکوسیستم اسپوتا و چرخ طیار در تم روشن)     */}
        {/* ----------------------------------------------------------------------- */}
        {currentStage === 'ecosystem' && (
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-100 pb-3">
              <div>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-zinc-100 text-orange-700 font-black border border-zinc-200">
                  مرحله ۵: اکوسیستم کارخانجات و دارایی پایدار افترمارکت
                </span>
                <h2 className="text-lg sm:text-xl font-black text-zinc-900 mt-1">
                  چرخ طیار دو موتوره: فروش به OEM و خلق دارایی ۱۰ ساله در جاده
                </h2>
                <p className="text-xs text-zinc-500 mt-0.5">
                  ارزش اصلی شرکت در تعداد محورهای فعال در جاده (Installed Base) است:
                </p>
              </div>

              {/* Flywheel Scenario Switcher */}
              <div className="flex items-center gap-1.5 bg-zinc-50 p-1 rounded-xl border border-zinc-200">
                {[1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => setFlywheelPlan(num as 1 | 2 | 3)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      flywheelPlan === num
                        ? 'bg-white text-orange-700 border border-zinc-300 shadow-xs'
                        : 'text-zinc-600 hover:text-zinc-900'
                    }`}
                  >
                    سناریوی {num === 1 ? 'محتاط' : num === 2 ? 'پایه' : 'جهشی'}
                  </button>
                ))}
              </div>
            </div>

            {/* Flywheel & 3-Year Metrics in White */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-4 text-center">
                <span className="text-xs font-black text-zinc-800 block">شبیه‌ساز رشد دارایی ۳ ساله در جاده</span>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                    <span className="text-[10px] text-zinc-500 block">سال اول</span>
                    <span className="font-mono font-black text-zinc-900 text-base">{currentPlan.y1.toLocaleString('fa-IR')}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                    <span className="text-[10px] text-zinc-500 block">سال دوم</span>
                    <span className="font-mono font-black text-orange-600 text-base">{currentPlan.y2.toLocaleString('fa-IR')}</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                    <span className="text-[10px] text-zinc-500 block">سال سوم</span>
                    <span className="font-mono font-black text-zinc-900 text-base">{currentPlan.y3.toLocaleString('fa-IR')}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white border border-zinc-200 text-xs flex justify-between items-center shadow-xs">
                  <span className="font-bold text-zinc-700">دارایی تجمعی محور فعال:</span>
                  <span className="font-mono font-black text-orange-600 text-base">{totalInstalled.toLocaleString('fa-IR')} محور</span>
                </div>

                <p className="text-[11px] text-zinc-500 text-right">
                  💡 هر محور فعال تا ۱۰ سال مشتری قطعات مصرفی توپی، لنت، دیسک و کیسه باد ما خواهد بود.
                </p>
              </div>

              <div className="lg:col-span-7 space-y-3 text-right">
                <span className="text-xs font-black text-orange-600">زنجیره یکپارچه ۶ شرکت گروه صنعتی اسپوتا:</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {spootaCompanies.slice(0, 4).map((c, idx) => (
                    <a
                      key={idx}
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white border border-zinc-200 hover:border-orange-500 transition-colors block shadow-xs"
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-black text-zinc-900">{c.name}</span>
                        <span className="text-orange-600 text-xs">↗</span>
                      </div>
                      <span className="text-[11px] text-zinc-500 block mt-1">{c.role}</span>
                    </a>
                  ))}
                </div>

                <div className="pt-2 flex gap-3 text-xs">
                  <button
                    onClick={() => onNavigate('products')}
                    className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold transition-colors shadow-xs"
                  >
                    مشاهده ویترین محصولات و قطعات ←
                  </button>
                  <button
                    onClick={() => onNavigate('sizing')}
                    className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-800 border border-zinc-200 font-bold transition-colors"
                  >
                    شبیه‌ساز تخصصی بازار ۲۷۰K
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ----------------------------------------------------------------------- */}
        {/* FOOTER OF STAGE: NEXT / PREVIOUS GAME NAVIGATION CONTROLS (LIGHT THEME)*/}
        {/* ----------------------------------------------------------------------- */}
        <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between text-xs">
          <button
            onClick={goToPrevStage}
            disabled={currentStageIndex === 0}
            className="px-4 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 text-zinc-700 disabled:opacity-30 disabled:pointer-events-none transition-colors flex items-center gap-1.5 font-bold"
          >
            <span>→</span>
            <span>مرحله قبلی: {currentStageIndex > 0 ? stages[currentStageIndex - 1].label : ''}</span>
          </button>

          <span className="text-zinc-400 font-mono text-[11px]">
            گام {currentStageIndex + 1} از ۵
          </span>

          {currentStageIndex < stages.length - 1 ? (
            <button
              onClick={goToNextStage}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black shadow-xs flex items-center gap-1.5 transition-all active:scale-95"
            >
              <span>گام بعدی: {stages[currentStageIndex + 1].label}</span>
              <span>←</span>
            </button>
          ) : (
            <button
              onClick={() => onNavigate('products')}
              className="px-5 py-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-black shadow-xs flex items-center gap-1.5 transition-all"
            >
              <span>مشاهده کاتالوگ محصولات RST</span>
              <span>←</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

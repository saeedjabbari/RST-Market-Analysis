import React, { useState } from 'react';
import { oemDatabase } from '../data/marketData';
import { OEMCompany } from '../types';

export const OemDirectoryMap: React.FC = () => {
  const [selectedOem, setSelectedOem] = useState<OEMCompany>(oemDatabase[1]); // Default to FILPA
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCountry, setSelectedCountry] = useState<string>('ALL');
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedGroup, setSelectedGroup] = useState<string>('ALL');

  const filteredOems = oemDatabase.filter((item) => {
    const matchCountry = selectedCountry === 'ALL' || item.country === selectedCountry;
    const matchCity = !selectedCity || item.city.includes(selectedCity);
    const matchGroup = selectedGroup === 'ALL' || item.group === selectedGroup;
    const matchSearch =
      !searchTerm ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.portfolio.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.country.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCountry && matchCity && matchGroup && matchSearch;
  });

  const groupLabels: Record<string, { label: string; badgeCls: string }> = {
    'Wave 1': { label: 'Wave 1 Target OEM', badgeCls: 'bg-orange-600 text-white' },
    'Wave 2': { label: 'Wave 2 Specialized', badgeCls: 'bg-zinc-800 text-white dark:bg-zinc-200 dark:text-zinc-900' },
    Integrated: { label: 'Integrated + FOX', badgeCls: 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900' },
    Benchmark: { label: 'Regional Benchmark', badgeCls: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700' },
    SASO: { label: 'SASO Certified', badgeCls: 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-200' },
    MENA: { label: 'MENA OEM', badgeCls: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300' },
  };

  const countries = ['ALL', 'ایران', 'ترکیه', 'عربستان', 'امارات', 'اردن', 'مصر'];

  const resetAllFilters = () => {
    setSelectedCountry('ALL');
    setSelectedCity('');
    setSelectedGroup('ALL');
    setSearchTerm('');
  };

  return (
    <section className="space-y-6">
      {/* Intro Header */}
      <div className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-black px-2.5 py-0.5 rounded bg-orange-600 text-white">بانک اطلاعاتی ۵۰ تولیدکننده Semi-Trailer</span>
            <span className="text-xs text-zinc-500 dark:text-zinc-400">ایران و خاورمیانه به همراه لینک وب‌سایت</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-zinc-900 dark:text-white">
            نقشه تعاملی قطب‌های تریلرسازی و تارگت‌های فروش B2B
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            روی هر کشور یا شهر در نقشه‌ها کلیک کنید تا جدول فیلتر شود. با کلیک روی نام هر شرکت می‌توانید مستقیماً وارد وب‌سایت رسمی آن شوید.
          </p>
        </div>

        <button
          onClick={resetAllFilters}
          className="px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold transition-colors shrink-0 shadow-sm"
        >
          نمایش تمام ۵۰ کارخانه ⟲
        </button>
      </div>

      {/* Dual Interactive Maps (Middle East + Iran Clusters) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Map 1: Middle East Regional Map */}
        <div className="lg:col-span-6 rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-black text-zinc-900 dark:text-white">🌍 نقشه منطقه‌ای خاورمیانه (کلیک روی کشورها)</span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-orange-600 dark:text-orange-400 font-bold">
              منتخب: {selectedCountry === 'ALL' ? 'همه کشورها' : selectedCountry}
            </span>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-2 overflow-hidden">
            <svg viewBox="0 0 480 250" className="w-full h-auto select-none">
              <rect width="480" height="250" rx="8" fill="transparent" />

              {/* Geographic outlines */}
              {/* Turkey */}
              <path
                d="M125,40 L245,36 L260,70 L130,74 Z"
                className="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-700 cursor-pointer hover:fill-orange-200 dark:hover:fill-orange-950 transition-colors"
                onClick={() => {
                  setSelectedCountry('ترکیه');
                  setSelectedCity('');
                }}
              />
              {/* Iran */}
              <path
                d="M265,50 L415,62 L430,150 L295,145 L262,82 Z"
                className="fill-orange-100 dark:fill-orange-950/40 stroke-orange-500 cursor-pointer hover:fill-orange-200 dark:hover:fill-orange-900/50 transition-colors stroke-2"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('');
                }}
              />
              {/* Saudi Arabia */}
              <path
                d="M165,130 L275,140 L295,220 L180,225 Z"
                className="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-700 cursor-pointer hover:fill-orange-200 dark:hover:fill-orange-950 transition-colors"
                onClick={() => {
                  setSelectedCountry('عربستان');
                  setSelectedCity('');
                }}
              />
              {/* UAE */}
              <path
                d="M298,170 L345,168 L348,200 L298,200 Z"
                className="fill-zinc-200 dark:fill-zinc-800 stroke-zinc-300 dark:stroke-zinc-700 cursor-pointer hover:fill-orange-200 dark:hover:fill-orange-950 transition-colors"
                onClick={() => {
                  setSelectedCountry('امارات');
                  setSelectedCity('');
                }}
              />

              {/* Pins with Badges */}
              {/* Iran Pin (12) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(340, 98)"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('');
                }}
              >
                <circle cx="0" cy="0" r="14" fill="#ea580c" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="900">12</text>
                <rect x="-40" y="18" width="80" height="18" rx="4" fill="#18181b" />
                <text x="0" y="30" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">🇮🇷 ایران (۱۲)</text>
              </g>

              {/* Turkey Pin (20) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(190, 54)"
                onClick={() => {
                  setSelectedCountry('ترکیه');
                  setSelectedCity('');
                }}
              >
                <circle cx="0" cy="0" r="13" fill="#3f3f46" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">20</text>
                <rect x="-42" y="17" width="84" height="18" rx="4" fill="#18181b" />
                <text x="0" y="29" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="800">🇹🇷 ترکیه (۲۰)</text>
              </g>

              {/* Saudi Arabia Pin (8) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(230, 178)"
                onClick={() => {
                  setSelectedCountry('عربستان');
                  setSelectedCity('');
                }}
              >
                <circle cx="0" cy="0" r="12" fill="#52525b" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">8</text>
                <rect x="-44" y="16" width="88" height="18" rx="4" fill="#18181b" />
                <text x="0" y="28" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="800">🇸🇦 عربستان (۸)</text>
              </g>

              {/* UAE Pin (5) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(320, 184)"
                onClick={() => {
                  setSelectedCountry('امارات');
                  setSelectedCity('');
                }}
              >
                <circle cx="0" cy="0" r="11" fill="#71717a" />
                <text x="0" y="3.5" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">5</text>
                <rect x="-40" y="15" width="80" height="18" rx="4" fill="#18181b" />
                <text x="0" y="27" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="800">🇦🇪 امارات (۵)</text>
              </g>
            </svg>
          </div>

          <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
            {countries.map((c) => (
              <button
                key={c}
                onClick={() => {
                  setSelectedCountry(c);
                  setSelectedCity('');
                }}
                className={`px-2.5 py-1 rounded-md font-bold transition-colors ${
                  selectedCountry === c
                    ? 'bg-orange-600 text-white'
                    : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200'
                }`}
              >
                {c === 'ALL' ? 'همه کشورها (۵۰)' : c}
              </button>
            ))}
          </div>
        </div>

        {/* Map 2: Iran Clusters Zoom Map */}
        <div className="lg:col-span-6 rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between space-y-3">
          <div className="flex items-center justify-between text-xs">
            <span className="font-black text-zinc-900 dark:text-white">🇮🇷 زوم خوشه‌های صنعتی ایران (کلیک روی شهرها)</span>
            <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 font-bold">
              {selectedCity ? `خوشه: ${selectedCity}` : 'قطب اول: ارومیه (محورسازان اسپوتا)'}
            </span>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 p-2 overflow-hidden">
            <svg viewBox="0 0 480 250" className="w-full h-auto select-none">
              <path
                d="M75,35 L165,28 L235,60 L375,56 L425,122 L395,220 L255,230 L155,190 L95,122 Z"
                fill="#f4f4f5"
                className="dark:fill-zinc-800/60 stroke-zinc-300 dark:stroke-zinc-700"
                strokeWidth="2"
              />

              {/* Corridor Line */}
              <polyline points="98,65 145,50 212,90 255,90 258,135 268,170" fill="none" stroke="#ea580c" strokeWidth="2" strokeDasharray="4 3" />

              {/* 1. Urmia (4) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(98, 65)"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('ارومیه');
                }}
              >
                <circle cx="0" cy="0" r="14" fill="#ea580c" />
                <text x="0" y="4" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="900">4</text>
                <rect x="-46" y="16" width="92" height="19" rx="4" fill="#18181b" />
                <text x="0" y="29" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">ارومیه (مارال/فیلپا)</text>
              </g>

              {/* 2. Tabriz (2) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(145, 50)"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('تبریز');
                }}
              >
                <circle cx="0" cy="0" r="11" fill="#f97316" />
                <text x="0" y="3.5" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">2</text>
                <rect x="-38" y="-28" width="76" height="18" rx="4" fill="#18181b" />
                <text x="0" y="-16" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="800">تبریز (یاقوت)</text>
              </g>

              {/* 3. Alborz (2) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(212, 90)"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('البرز');
                }}
              >
                <circle cx="0" cy="0" r="11" fill="#27272a" />
                <text x="0" y="3.5" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">2</text>
                <rect x="-44" y="15" width="88" height="18" rx="4" fill="#18181b" />
                <text x="0" y="27" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="800">البرز (ماموت/وزین)</text>
              </g>

              {/* 4. Tehran (2) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(255, 90)"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('تهران');
                }}
              >
                <circle cx="0" cy="0" r="11" fill="#3f3f46" />
                <text x="0" y="3.5" textAnchor="middle" fill="#ffffff" fontSize="9.5" fontWeight="900">2</text>
                <rect x="-42" y="-28" width="84" height="18" rx="4" fill="#18181b" />
                <text x="0" y="-16" textAnchor="middle" fill="#ffffff" fontSize="8.5" fontWeight="800">تهران (کاوه/پویا)</text>
              </g>

              {/* 5. Kashan (1) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(258, 135)"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('کاشان');
                }}
              >
                <circle cx="0" cy="0" r="9" fill="#52525b" />
                <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">1</text>
                <rect x="12" y="-8" width="68" height="16" rx="3" fill="#18181b" />
                <text x="46" y="3" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="800">کاشان صنعت</text>
              </g>

              {/* 6. Isfahan (1) */}
              <g
                className="cursor-pointer transition-transform hover:scale-110"
                transform="translate(268, 172)"
                onClick={() => {
                  setSelectedCountry('ایران');
                  setSelectedCity('اصفهان');
                }}
              >
                <circle cx="0" cy="0" r="9" fill="#52525b" />
                <text x="0" y="3" textAnchor="middle" fill="#ffffff" fontSize="9" fontWeight="900">1</text>
                <rect x="-38" y="13" width="76" height="16" rx="3" fill="#18181b" />
                <text x="0" y="24" textAnchor="middle" fill="#ffffff" fontSize="8" fontWeight="800">اصفهان (فولاد امید)</text>
              </g>
            </svg>
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-zinc-500">
            <span>کلیک روی شهر = فیلتر کارخانه‌های همان خوشه</span>
            <span className="text-orange-600 font-bold">خوشه ارومیه: ۴ کارخانه اصلی + هاب قطعه‌سازی اسپوتا</span>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center bg-white dark:bg-zinc-900 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-sm">
        <div className="md:col-span-5 relative">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="جستجوی نام شرکت، شهر، کشور یا کاربری (مثلاً Filpa, Maral, Tanker)..."
            className="w-full rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-4 py-2.5 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-orange-500"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute left-3 top-2.5 text-zinc-400 hover:text-zinc-600 text-xs font-bold"
            >
              ✕
            </button>
          )}
        </div>

        <div className="md:col-span-4 flex flex-wrap gap-1">
          <select
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
            className="w-full rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 px-3 py-2.5 text-xs text-zinc-800 dark:text-zinc-200 font-bold focus:outline-none focus:border-orange-500"
          >
            <option value="ALL">همه دسته‌های راهبردی (موج ۱ و ۲، بنچمارک و منطقه)</option>
            <option value="Wave 1">موج اول فروش ایران (Wave 1 Target)</option>
            <option value="Wave 2">موج دوم و تخصصی (Wave 2 Specialized)</option>
            <option value="Integrated">اکوسیستم یکپارچه داخلی (Maral + FOX)</option>
            <option value="Benchmark">بنچمارک ترکیه (Tırsan, Krone, Serin)</option>
            <option value="SASO">تأییدشده رسمی SASO عربستان</option>
            <option value="MENA">سایر سازندگان منطقه (امارات، اردن، مصر)</option>
          </select>
        </div>

        <div className="md:col-span-3 text-left">
          <span className="text-xs text-zinc-500">
            تعداد نتایج: <strong className="text-orange-600 font-black">{filteredOems.length}</strong> از ۵۰
          </span>
        </div>
      </div>

      {/* Main 50 OEM Directory Table + Side CRM Account Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Table Column */}
        <div className="lg:col-span-8 rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-3">
          <div className="flex items-center justify-between text-xs text-zinc-500 pb-2 border-b border-zinc-200 dark:border-zinc-800">
            <span className="font-semibold text-zinc-700 dark:text-zinc-300">
              🔗 کلیک روی نام شرکت = ورود به سایت | کلیک روی ردیف = مشاهده پرونده CRM
            </span>
          </div>

          <div className="overflow-x-auto max-h-[560px]">
            <table className="w-full text-right text-xs sm:text-sm border-collapse">
              <thead className="sticky top-0 bg-zinc-900 text-white dark:bg-zinc-950 border-b border-zinc-700 z-10">
                <tr>
                  <th className="py-2.5 px-2.5">#</th>
                  <th className="py-2.5 px-3">نام شرکت (کلیک = وب‌سایت ↗)</th>
                  <th className="py-2.5 px-2.5">کشور / شهر</th>
                  <th className="py-2.5 px-3">محصولات تریلر</th>
                  <th className="py-2.5 px-2.5">تیراژ / ظرفیت</th>
                  <th className="py-2.5 px-2.5">دسته</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                {filteredOems.map((item) => {
                  const isSelected = selectedOem?.id === item.id;
                  const gb = groupLabels[item.group] || groupLabels.MENA;
                  return (
                    <tr
                      key={item.id}
                      onClick={() => setSelectedOem(item)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? 'bg-orange-50 dark:bg-orange-950/30 border-r-4 border-r-orange-600'
                          : 'hover:bg-zinc-50 dark:hover:bg-zinc-800/40'
                      }`}
                    >
                      <td className="py-2.5 px-2.5 font-mono font-bold text-orange-600">{item.id}</td>
                      <td className="py-2.5 px-3 font-black text-zinc-900 dark:text-white">
                        <a
                          href={item.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="text-zinc-900 dark:text-white hover:text-orange-600 dark:hover:text-orange-400 inline-flex items-center gap-1 group/link"
                        >
                          <span className="group-hover/link:underline">{item.name}</span>
                          <span className="text-[10px] text-orange-500">↗</span>
                        </a>
                      </td>
                      <td className="py-2.5 px-2.5 text-xs text-zinc-700 dark:text-zinc-300">
                        {item.country} ({item.city})
                      </td>
                      <td className="py-2.5 px-3 text-xs text-zinc-600 dark:text-zinc-400 max-w-[200px] truncate">
                        {item.portfolio}
                      </td>
                      <td className="py-2.5 px-2.5 text-xs text-zinc-500 font-mono">{item.capacity}</td>
                      <td className="py-2.5 px-2.5">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold whitespace-nowrap ${gb.badgeCls}`}>
                          {gb.label}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Side CRM Account Inspector */}
        <div className="lg:col-span-4 rounded-2xl p-5 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm space-y-4 sticky top-24">
          <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
            <div>
              <span className="text-[11px] text-orange-600 font-extrabold">پرونده هوش فروش اکانت (CRM Schema)</span>
              <h3 className="text-base font-black text-zinc-900 dark:text-white mt-0.5">{selectedOem.name}</h3>
            </div>
            <span className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">
              #{selectedOem.id}
            </span>
          </div>

          <a
            href={selectedOem.website}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold flex items-center justify-between transition-colors shadow-sm"
          >
            <span>ورود به وب‌سایت رسمی این شرکت</span>
            <span className="font-mono text-[11px]" dir="ltr">
              {selectedOem.website.replace('https://', '').replace('http://', '').split('/')[0]} ↗
            </span>
          </a>

          <div className="space-y-2.5 text-xs">
            <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block">کشور و شهر کارخانه:</span>
              <span className="font-bold text-zinc-900 dark:text-white mt-0.5 block">
                {selectedOem.country} — {selectedOem.city}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block">سبد تولیدات Semi-Trailer:</span>
              <span className="font-bold text-zinc-900 dark:text-white mt-0.5 block">{selectedOem.portfolio}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block">تیراژ و ظرفیت اعلامی:</span>
              <span className="font-bold text-zinc-900 dark:text-white mt-0.5 block">{selectedOem.capacity}</span>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800">
              <span className="text-zinc-500 block">برند محور و سیستم ترمز فعلی در BOM:</span>
              <span className="font-bold text-orange-600 dark:text-orange-400 mt-0.5 block">
                {selectedOem.axleBrand}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800/40 space-y-1">
              <span className="font-bold text-orange-700 dark:text-orange-300 block">محصول ورودی پیشنهادی (Land & Expand):</span>
              <span className="text-zinc-800 dark:text-zinc-200 block font-semibold leading-relaxed">
                {selectedOem.entryProduct}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 space-y-1">
              <span className="font-bold text-zinc-700 dark:text-zinc-300 block">تحلیل استراتژیک حساب:</span>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-[11px]">{selectedOem.note}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { rstLogos } from '../data/marketData';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tabId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenExecModal: () => void;
  onOpenAnalysisModal: () => void;
  onStartPresentation: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  isDark,
  onToggleTheme,
  onOpenExecModal,
  onOpenAnalysisModal,
  onStartPresentation,
}) => {
  const navTabs = [
    { id: 'summary', num: '۱', label: '۱. خلاصه و چرخ طیار', shortLabel: '۱. خلاصه', icon: '⚡' },
    { id: 'products', num: '★', label: '★ محصولات RST', shortLabel: 'محصولات RST', icon: '⚙️' },
    { id: 'sizing', num: '۲', label: '۲. سایزینگ ۲۷۰K محور', shortLabel: '۲. سایزینگ', icon: '📊' },
    { id: 'segments', num: '۳', label: '۳. کاربری‌ها و معماری', shortLabel: '۳. کاربری‌ها', icon: '🚛' },
    { id: 'oem', num: '۴', label: '۴. بانک ۵۰ OEM و نقشه', shortLabel: '۴. نقشه ۵۰ OEM', icon: '🌍' },
    { id: 'sales', num: '۵', label: '۵. مهندسی فروش B2B', shortLabel: '۵. فروش B2B', icon: '🎯' },
    { id: 'roadmap', num: '۶', label: '۶. برنامه اقدام و ریسک', shortLabel: '۶. برنامه اقدام', icon: '🗺️' },
    { id: 'critique', num: '🔍', label: '🔍 آنالیز و بهبودها', shortLabel: 'آنالیز طرح', icon: '💡' },
  ];

  const currentIndex = navTabs.findIndex((t) => t.id === currentTab);
  const currentTabObj = navTabs[currentIndex] || navTabs[0];

  const handlePrevTab = () => {
    if (currentIndex > 0) {
      onTabChange(navTabs[currentIndex - 1].id);
    }
  };

  const handleNextTab = () => {
    if (currentIndex < navTabs.length - 1) {
      onTabChange(navTabs[currentIndex + 1].id);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-[#1a1f26]/95 backdrop-blur-md shadow-xs transition-colors duration-200">
      {/* Top Bar: Brand + Quick Actions */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2.5 flex items-center justify-between gap-3">
        {/* Brand Zone */}
        <div className="flex items-center gap-2.5 shrink-0">
          <a
            href="https://rstaxles.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
            title="ورود به وب‌سایت رسمی محورسازان جهان اسپوتا (rstaxles.com)"
          >
            <div className="h-9 w-9 sm:h-10 sm:w-10 px-1 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 flex items-center justify-center shadow-xs shrink-0">
              <img
                src={isDark ? rstLogos.white : rstLogos.orange}
                alt="RST Axles Logo"
                className="h-5 sm:h-6 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className="text-sm sm:text-base font-black text-zinc-900 dark:text-white tracking-tight">RST Axles</span>
                <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 rounded bg-orange-600 text-white font-black">اسپوتا</span>
              </div>
              <span className="text-[10px] sm:text-[11px] text-zinc-500 dark:text-zinc-400 block font-medium leading-none mt-0.5">
                پورتال راهبردی بازار تریلر
              </span>
            </div>
          </a>
        </div>

        {/* Top Actions Zone (Clean, No Duplicates) */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onStartPresentation}
            className="px-3 sm:px-4 py-1.5 rounded-xl text-xs font-black bg-orange-600 hover:bg-orange-700 text-white transition-all flex items-center gap-1.5 whitespace-nowrap active:scale-95 shadow-xs ds-glow-orange"
            title="اجرای اسلایدشوی ۶۰ ثانیه‌ای برای فهم سریع استراتژی توسط مدیران"
          >
            <span className="text-white text-xs">▶</span>
            <span>شروع پرزنت مدیران</span>
          </button>

          <button
            onClick={onOpenExecModal}
            className="px-3 py-1.5 rounded-xl text-xs font-bold bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 transition-colors whitespace-nowrap shadow-xs"
            title="مشاهده مصوبه و ۱۰ تصمیم کلیدی مدیرعامل"
          >
            تصمیم نهایی 📋
          </button>

          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            title="تغییر تم تیره/روشن"
            aria-label="تغییر تم"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Dedicated Navigation Bar: Desktop (100% visible across 8 columns - NO SCROLL) */}
      <div className="hidden lg:block border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/80 dark:bg-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-1.5">
          <nav className="grid grid-cols-8 gap-1.5 w-full" aria-label="فهرست اصلی بخش‌ها">
            {navTabs.map((tab) => {
              const isActive = currentTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => onTabChange(tab.id)}
                  className={`px-1.5 py-2 rounded-xl text-xs font-bold text-center transition-all flex items-center justify-center gap-1 select-none ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-sm ring-1 ring-orange-500 scale-[1.01]'
                      : 'bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200/90 dark:border-zinc-800 hover:border-orange-500 hover:text-orange-600 dark:hover:text-orange-400'
                  }`}
                  title={tab.label}
                >
                  <span className="text-[11px] opacity-80">{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Dedicated Navigation Bar: Mobile & Tablet (All 8 pages directly accessible - NO SCROLL) */}
      <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 px-3 py-2">
        {/* Quick Stepper Bar: Prev / Current Title / Next */}
        <div className="flex items-center justify-between gap-2 mb-2 bg-white dark:bg-zinc-900 p-1.5 rounded-xl border border-zinc-200/90 dark:border-zinc-800 shadow-xs">
          <button
            onClick={handlePrevTab}
            disabled={currentIndex === 0}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-orange-600 hover:text-white transition-colors flex items-center gap-1 shrink-0"
            title="صفحه قبلی"
          >
            <span>▶</span>
            <span>قبلی</span>
          </button>

          <div className="flex items-center gap-1.5 text-xs font-black text-zinc-900 dark:text-white truncate">
            <span className="w-2 h-2 rounded-full bg-orange-600 shrink-0"></span>
            <span className="truncate text-[11px] sm:text-xs">{currentTabObj.label}</span>
            <span className="text-[10px] text-zinc-400 shrink-0 font-mono">({currentIndex + 1}/۸)</span>
          </div>

          <button
            onClick={handleNextTab}
            disabled={currentIndex === navTabs.length - 1}
            className="px-2.5 py-1 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 disabled:opacity-30 disabled:pointer-events-none hover:bg-orange-600 hover:text-white transition-colors flex items-center gap-1 shrink-0"
            title="صفحه بعدی"
          >
            <span>بعدی</span>
            <span>◀</span>
          </button>
        </div>

        {/* 4x2 Grid of All 8 Pages: Every page is 100% visible and tappable without any scrolling */}
        <div className="grid grid-cols-4 gap-1">
          {navTabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`py-1.5 px-1 rounded-lg text-[10px] sm:text-[11px] font-bold text-center truncate transition-all ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-xs font-black'
                    : 'bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/90 dark:border-zinc-700/80 active:scale-95'
                }`}
                title={tab.label}
              >
                {tab.shortLabel}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};

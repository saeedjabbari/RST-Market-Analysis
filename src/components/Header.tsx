import React from 'react';
import { rstLogos } from '../data/marketData';

interface HeaderProps {
  currentTab: string;
  onTabChange: (tabId: string) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenExecModal: () => void;
  onOpenAnalysisModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onTabChange,
  isDark,
  onToggleTheme,
  onOpenExecModal,
  onOpenAnalysisModal,
}) => {
  const navTabs = [
    { id: 'summary', label: '۱. خلاصه و چرخ طیار' },
    { id: 'products', label: '★ محصولات RST' },
    { id: 'sizing', label: '۲. سایزینگ ۲۷۰K محور' },
    { id: 'segments', label: '۳. کاربری‌ها و معماری' },
    { id: 'oem', label: '۴. بانک ۵۰ OEM و نقشه' },
    { id: 'sales', label: '۵. مهندسی فروش B2B' },
    { id: 'roadmap', label: '۶. برنامه ۹۰ روزه و ریسک' },
    { id: 'critique', label: '🔍 آنالیز و بهبودها' },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 dark:border-zinc-800 bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Brand Zone (Single-line wordmark with official logo + domain links) */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="https://rstaxles.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 group"
            title="ورود به وب‌سایت رسمی محورسازان جهان اسپوتا (rstaxles.com)"
          >
            <div className="h-10 px-2.5 rounded-xl bg-zinc-900 dark:bg-zinc-900 border border-zinc-800 flex items-center justify-center shadow-sm">
              <img
                src={isDark ? rstLogos.white : rstLogos.orange}
                alt="RST Axles Logo"
                className="h-6 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className="text-base font-black text-zinc-900 dark:text-white tracking-tight">RST Axles</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-orange-600 text-white font-extrabold">گروه اسپوتا</span>
              </div>
              <span className="text-[11px] text-zinc-500 dark:text-zinc-400 block font-medium">پورتال راهبردی بازار تریلر</span>
            </div>
          </a>
        </div>

        {/* Clean Single-Line Nav Tabs */}
        <nav className="hidden lg:flex items-center gap-1 overflow-x-auto py-1" aria-label="فهرست اصلی">
          {navTabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 shadow-sm border-b-2 border-orange-600'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-zinc-100 dark:hover:bg-zinc-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenAnalysisModal}
            className="px-2.5 py-1.5 rounded-lg text-xs font-bold bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-200 border border-zinc-300 dark:border-zinc-700 hover:border-orange-500 transition-colors whitespace-nowrap"
            title="مشاهده گزارش تحلیل و بهبودهای اعمال‌شده در طرح پرزنت"
          >
            آنالیز طرح 💡
          </button>

          <button
            onClick={onOpenExecModal}
            className="px-3 py-1.5 rounded-lg text-xs font-black bg-orange-600 hover:bg-orange-700 text-white shadow-sm shadow-orange-500/20 transition-colors whitespace-nowrap"
          >
            تصمیم مدیران 📋
          </button>

          <button
            onClick={onToggleTheme}
            className="p-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
            title="تغییر تم تیره/روشن"
            aria-label="تغییر تم"
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Sub-Navigation Bar */}
      <div className="lg:hidden border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 px-4 py-2 overflow-x-auto">
        <div className="flex items-center gap-1.5 min-w-max">
          {navTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`px-2.5 py-1 rounded-md text-xs font-bold whitespace-nowrap transition-colors ${
                currentTab === tab.id
                  ? 'bg-zinc-900 text-white dark:bg-white dark:text-zinc-900'
                  : 'text-zinc-600 dark:text-zinc-400 bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

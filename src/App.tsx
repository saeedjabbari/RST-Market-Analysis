import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { ExecutiveSummary } from './components/ExecutiveSummary';
import { ProductShowcase } from './components/ProductShowcase';
import { MarketSizing } from './components/MarketSizing';
import { SegmentsArchitecture } from './components/SegmentsArchitecture';
import { OemDirectoryMap } from './components/OemDirectoryMap';
import { SalesStrategyAftermarket } from './components/SalesStrategyAftermarket';
import { RoadmapAndRisks } from './components/RoadmapAndRisks';
import { AnalysisAndCritique } from './components/AnalysisAndCritique';
import { ExecutiveBriefModal } from './components/ExecutiveBriefModal';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('summary');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isExecModalOpen, setIsExecModalOpen] = useState<boolean>(false);

  const tabList = ['summary', 'products', 'sizing', 'segments', 'oem', 'sales', 'roadmap', 'critique'];

  // Sync dark class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['INPUT', 'SELECT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;
      const currentIndex = tabList.indexOf(currentTab);
      if (e.key === 'ArrowLeft') {
        const nextIndex = (currentIndex + 1) % tabList.length;
        setCurrentTab(tabList[nextIndex]);
      } else if (e.key === 'ArrowRight') {
        const prevIndex = (currentIndex - 1 + tabList.length) % tabList.length;
        setCurrentTab(tabList[prevIndex]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentTab, tabList]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-100 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors duration-200">
      {/* Top Bar Navigation */}
      <Header
        currentTab={currentTab}
        onTabChange={(tabId) => {
          setCurrentTab(tabId);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenExecModal={() => setIsExecModalOpen(true)}
        onOpenAnalysisModal={() => {
          setCurrentTab('critique');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Main View Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 py-6">
        {currentTab === 'summary' && <ExecutiveSummary onNavigate={(tabId) => setCurrentTab(tabId)} />}
        {currentTab === 'products' && <ProductShowcase />}
        {currentTab === 'sizing' && <MarketSizing />}
        {currentTab === 'segments' && <SegmentsArchitecture />}
        {currentTab === 'oem' && <OemDirectoryMap />}
        {currentTab === 'sales' && <SalesStrategyAftermarket />}
        {currentTab === 'roadmap' && <RoadmapAndRisks />}
        {currentTab === 'critique' && <AnalysisAndCritique />}
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-6 px-4 sm:px-6 mt-8 transition-colors">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-center md:text-right">
            <span className="font-bold text-zinc-800 dark:text-zinc-200">گروه صنعتی اسپوتا — محورسازان جهان اسپوتا (RST Axles)</span>
            <span>·</span>
            <span>کیلومتر ۱۲ جاده ارومیه به مهاباد • تلفن کارخانه: ۰۴۴۳۱۹۶</span>
            <span>·</span>
            <a
              href="https://rstaxles.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-600 dark:text-orange-400 font-black hover:underline"
              dir="ltr"
            >
              https://rstaxles.com/ ↗
            </a>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-zinc-400">جابه‌جایی اسلایدها با کلیدهای جهت‌نما (← / →)</span>
            <button
              onClick={() => setIsExecModalOpen(true)}
              className="text-orange-600 dark:text-orange-400 font-bold hover:underline"
            >
              ۱۰ تصمیم استراتژیک مدیران
            </button>
          </div>
        </div>
      </footer>

      {/* Executive Decision Summary Modal */}
      <ExecutiveBriefModal
        isOpen={isExecModalOpen}
        onClose={() => setIsExecModalOpen(false)}
      />
    </div>
  );
}

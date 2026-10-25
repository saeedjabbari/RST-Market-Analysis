import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export interface DrillDownCardProps {
  id?: string;
  title: string;
  subtitle?: string;
  category?: string;
  metricBadge?: {
    value: string;
    label?: string;
    variant?: 'orange' | 'gray';
  };
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
  expandHint?: string;
}

export const DrillDownCard: React.FC<DrillDownCardProps> = ({
  title,
  subtitle,
  category,
  metricBadge,
  icon,
  children,
  defaultExpanded = false,
  className = '',
  expandHint = 'مشاهده تحلیل تفصیلی و داده‌های آماری',
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(defaultExpanded);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <motion.div
      layout
      transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-2xl border transition-all duration-200 bg-white ${
        isExpanded
          ? 'border-orange-500 shadow-md ring-2 ring-orange-500/10'
          : isHovered
          ? 'border-orange-300 shadow-sm'
          : 'border-zinc-200 shadow-xs'
      } ${className}`}
    >
      {/* Clickable Header Area */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsExpanded((prev) => !prev);
          }
        }}
        className="p-4 sm:p-5 cursor-pointer select-none focus:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-500 rounded-2xl"
      >
        <div className="flex items-start justify-between gap-3">
          {/* Left info column (Right in RTL) */}
          <div className="flex items-start gap-3 flex-1 min-w-0">
            {icon && (
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 text-lg transition-colors ${
                  isExpanded || isHovered
                    ? 'bg-orange-100 text-orange-700 border border-orange-200'
                    : 'bg-zinc-100 text-zinc-700 border border-zinc-200'
                }`}
              >
                {icon}
              </div>
            )}

            <div className="flex-1 min-w-0">
              {category && (
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-orange-600 mb-0.5">
                  <span>{category}</span>
                </div>
              )}
              <h3 className="text-sm sm:text-base font-black text-zinc-900 leading-snug break-words">
                {title}
              </h3>
              {subtitle && (
                <p className="text-xs text-zinc-600 mt-1 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>

          {/* Right badge & toggle chevron */}
          <div className="flex items-center gap-2.5 shrink-0 pt-0.5">
            {metricBadge && (
              <div
                className={`text-right px-2.5 py-1 rounded-xl border text-xs font-black ${
                  metricBadge.variant === 'gray'
                    ? 'bg-zinc-50 border-zinc-200 text-zinc-800'
                    : 'bg-orange-50 border-orange-200 text-orange-700'
                }`}
              >
                <span className="font-mono">{metricBadge.value}</span>
                {metricBadge.label && (
                  <span className="text-[10px] block font-normal text-zinc-500">
                    {metricBadge.label}
                  </span>
                )}
              </div>
            )}

            {/* Small Action Toggle Button + Chevron */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded((prev) => !prev);
              }}
              className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shadow-2xs active:scale-95 ${
                isExpanded
                  ? 'bg-orange-600 text-white hover:bg-orange-700'
                  : 'bg-orange-50 hover:bg-orange-600 text-orange-700 hover:text-white border border-orange-200 hover:border-orange-600'
              }`}
              title={isExpanded ? 'بستن کارت' : 'باز کردن و مشاهده جزئیات'}
            >
              <span>{isExpanded ? '− بستن' : '+ جزئیات'}</span>
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.2 }}
                className="text-[9px] inline-block"
              >
                ▼
              </motion.span>
            </button>
          </div>
        </div>

        {/* Small Bottom Bar with Clear Prompt to Open */}
        {!isExpanded && (
          <div className="mt-3 pt-2.5 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
            <span className="flex items-center gap-1.5 truncate">
              <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${isHovered ? 'bg-orange-500' : 'bg-zinc-300'}`} />
              <span className={`truncate ${isHovered ? 'text-orange-700 font-bold' : ''}`}>
                {expandHint}
              </span>
            </span>
            <span className="text-[10px] font-bold text-orange-600 shrink-0 mr-2 flex items-center gap-0.5">
              <span>کلیک برای باز کردن</span>
              <span>▾</span>
            </span>
          </div>
        )}
      </div>

      {/* Expandable Drill-Down Body with Framer Motion */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: 'auto',
              opacity: 1,
              transition: {
                height: { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.25, delay: 0.05 },
              },
            }}
            exit={{
              height: 0,
              opacity: 0,
              transition: {
                height: { duration: 0.2, ease: [0.04, 0.62, 0.23, 0.98] },
                opacity: { duration: 0.15 },
              },
            }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0">
              <div className="pt-3 border-t border-zinc-100 text-xs text-zinc-700">
                {children}
              </div>

              {/* Close footer button */}
              <div className="mt-3 pt-2 border-t border-zinc-100 flex justify-end">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsExpanded(false);
                  }}
                  className="text-[11px] font-bold text-zinc-500 hover:text-orange-600 flex items-center gap-1 transition-colors"
                >
                  <span>بستن تحلیل تفصیلی</span>
                  <span>▲</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

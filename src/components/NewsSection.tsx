import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { NEWS_ITEMS, type NewsItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const FILTER_TYPES: Array<'All' | NewsItem['workType']> = [
  'All',
  'Project',
  'Certificate',
];

export function NewsSection() {
  const [activeType, setActiveType] = useState<'All' | NewsItem['workType']>('All');
  const [selectedUpdate, setSelectedUpdate] = useState<NewsItem | null>(null);

  const visibleUpdates =
    activeType === 'All'
      ? NEWS_ITEMS
      : NEWS_ITEMS.filter((item) => item.workType === activeType);

  useEffect(() => {
    if (!selectedUpdate) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedUpdate(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedUpdate]);

  return (
    <section id="news" className="border-b border-white/[0.08] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.02em] text-[#F48FB1]">
              01. Recent Activity
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#F6F3FA] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              New / Recent Updates
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter recent updates by type"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#161224] p-1"
          >
            {FILTER_TYPES.map((type) => {
              const isActive = activeType === type;
              return (
                <button
                  key={type}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveType(type)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1] ${
                    isActive
                      ? 'bg-[#F48FB1] text-[#0D0A14] font-semibold'
                      : 'text-[#B6ADC7] hover:text-[#F6F3FA]'
                  }`}
                >
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Chronological 5-Item Recent Updates List (Title & Type) */}
        <div className="mt-10 divide-y divide-white/[0.08] rounded-2xl border border-white/[0.08] bg-[#161224]">
          {visibleUpdates.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.28,
                delay: Math.min(idx * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col justify-between gap-3 px-6 py-5 transition-colors duration-150 hover:bg-white/[0.02] sm:flex-row sm:items-center"
            >
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-mono text-xs font-medium text-[#F48FB1] tabular-nums">
                  {item.orderLabel}
                </span>
                <h3 className="font-display text-base font-semibold tracking-tight text-[#F6F3FA] sm:text-lg">
                  {item.workName}{' '}
                  <span className="font-normal text-[#9E95B3]">— {item.workType}</span>
                </h3>
              </div>

              <div className="shrink-0">
                <button
                  type="button"
                  onClick={() => setSelectedUpdate(item)}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.1] bg-[#100D1B] px-3.5 py-2 text-xs font-semibold text-[#F48FB1] whitespace-nowrap shrink-0 transition-colors hover:border-[#F48FB1]/50 hover:bg-[#1E1830] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1]"
                >
                  View Details
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Update Details Modal */}
      {selectedUpdate && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="update-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedUpdate(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-white/[0.12] bg-[#161224] p-6 sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedUpdate(null)}
              aria-label="Close update details"
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#B6ADC7] transition-colors hover:bg-white/[0.06] hover:text-[#F6F3FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-10">
              <p className="text-xs text-[#F48FB1]">
                {selectedUpdate.orderLabel} · {selectedUpdate.workType} · {selectedUpdate.date}
              </p>
              <h3
                id="update-modal-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#F6F3FA]"
              >
                {selectedUpdate.workName} — {selectedUpdate.workType}
              </h3>
            </div>

            {selectedUpdate.image && (
              <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#100D1B]">
                <ResilientImage
                  src={selectedUpdate.image}
                  alt={selectedUpdate.workName}
                  className="max-h-[45vh] w-full object-contain"
                />
              </div>
            )}

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-[#D4D4D8]">
              {selectedUpdate.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

import { motion } from 'motion/react';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const MARQUEE_ITEMS = [
  'Software Engineering',
  'Language C',
  'Language Java',
  'SQL Databases',
  'HTML & CSS',
  'JavaScript',
  'Algorithms',
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden border-b border-white/[0.08]">
      {/* Subtle IT-Women Geometric Circuit & Node Backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute -right-24 -top-24 h-[440px] w-[440px] rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, rgba(244, 143, 177, 0.16) 0%, rgba(167, 139, 250, 0.08) 45%, transparent 72%)',
          }}
        />
        <svg
          className="absolute right-0 top-0 h-full w-full max-w-[780px] opacity-[0.16]"
          viewBox="0 0 800 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M120 80 H320 L380 140 H620 L680 200 V360"
            stroke="#F48FB1"
            strokeWidth="1"
          />
          <path
            d="M210 520 H410 L470 460 H710"
            stroke="#C4B5FD"
            strokeWidth="1"
          />
          <path
            d="M480 40 V190 L540 250 H760"
            stroke="#F48FB1"
            strokeWidth="0.8"
            strokeDasharray="4 6"
          />
          <circle cx="320" cy="80" r="4" fill="#F48FB1" />
          <circle cx="620" cy="140" r="4" fill="#C4B5FD" />
          <circle cx="680" cy="360" r="4" fill="#F48FB1" />
          <circle cx="470" cy="460" r="4" fill="#C4B5FD" />
          <circle cx="540" cy="250" r="3.5" fill="#F48FB1" />
          <rect
            x="555"
            y="85"
            width="170"
            height="170"
            rx="24"
            stroke="#F48FB1"
            strokeOpacity="0.45"
            strokeWidth="1"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1200px] px-6 pt-14 pb-16 lg:pt-20 lg:pb-20">
        {/* Split-Screen Editorial Hero */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-stretch">
          {/* Left Column: Typographic Hierarchy */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-sm font-medium tracking-[0.01em] text-[#F48FB1]">
                {PROFILE.department}
              </p>

              <h1
                className="mt-4 font-display text-[clamp(2.35rem,4.5vw,3.9rem)] font-semibold leading-[1.06] tracking-tight text-[#F6F3FA]"
                style={{ textWrap: 'balance' }}
              >
                {PROFILE.headline}
              </h1>

              <p className="mt-6 max-w-[60ch] text-base leading-[1.65] tracking-[0.01em] text-[#B6ADC7]">
                I&apos;m <span className="font-medium text-[#F6F3FA]">{PROFILE.name}</span> —{' '}
                {PROFILE.bio}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#F48FB1] px-5 py-3 text-sm font-semibold text-[#0D0A14] whitespace-nowrap shrink-0 transition-transform duration-150 hover:bg-[#F8B4CB] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0A14]"
                >
                  Explore Projects
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.14] bg-[#161224] px-5 py-3 text-sm font-medium text-[#F6F3FA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#F48FB1]/60 hover:bg-[#1E1830] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1]"
                >
                  <Mail className="h-4 w-4 text-[#F48FB1]" aria-hidden="true" />
                  Contact Me
                </a>

                <a
                  href="#certificates"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/[0.14] bg-[#161224] px-5 py-3 text-sm font-medium text-[#F6F3FA] whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-white/30 hover:bg-[#1E1830] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1]"
                >
                  View Certificates
                  <ArrowUpRight className="h-4 w-4 text-[#B6ADC7]" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Direct Identity Row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/[0.08] pt-6 text-xs text-[#9E95B3]">
              <span>{PROFILE.roleTitle}</span>
              <span aria-hidden="true">·</span>
              <span>{PROFILE.location}</span>
              <span aria-hidden="true">·</span>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 text-[#E3DCF0] transition-colors hover:text-[#F48FB1]"
              >
                <Mail className="h-3.5 w-3.5" aria-hidden="true" />
                {PROFILE.email}
              </a>
            </div>
          </motion.div>

          {/* Right Column: Matching-Height Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-white/[0.1] bg-[#161224]">
              <ResilientImage
                src={PROFILE.portraitImage}
                alt={`${PROFILE.name}, ${PROFILE.department}`}
                fallbackTitle={PROFILE.name}
                fallbackSubtitle={PROFILE.department}
                className="h-full w-full object-cover object-top"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0A14]/95 via-[#0D0A14]/35 to-transparent"
              />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-base font-semibold text-[#F6F3FA]">
                  {PROFILE.name}
                </p>
                <p className="mt-0.5 text-xs text-[#D8D1E6]">
                  {PROFILE.department} · Portfolio 2026
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Metrics Strip Below Hero Split */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4"
        >
          {PROFILE.metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-white/[0.08] bg-[#161224]/90 p-5 transition-colors duration-150 hover:border-[#F48FB1]/30"
            >
              <p className="font-mono text-2xl font-medium tracking-tight text-[#F6F3FA] tabular-nums">
                {item.value}
              </p>
              <p className="mt-1.5 text-sm font-medium text-[#E3DCF0]">{item.label}</p>
              <p className="mt-0.5 text-xs text-[#8E85A3]">{item.detail}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Subtle Marquee Section Divider */}
      <div
        aria-hidden="true"
        className="border-t border-white/[0.08] bg-[#100D1B] py-3.5 overflow-hidden select-none"
      >
        <div className="animate-marquee text-xs font-medium tracking-[0.04em] text-[#B6ADC7]">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={`${item}-${idx}`} className="inline-flex items-center">
              <span className="px-5">{item}</span>
              <span className="text-[#F48FB1]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

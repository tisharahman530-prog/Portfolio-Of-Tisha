import { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS, type SkillItem } from '../data/portfolioData';

const CATEGORIES: Array<'All' | SkillItem['category']> = [
  'All',
  'Programming Languages',
  'Web Technologies',
  'Database & Logic',
];

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<'All' | SkillItem['category']>('All');

  const filteredSkills =
    activeCategory === 'All'
      ? SKILLS
      : SKILLS.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="border-b border-[#EEDCE8] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.02em] text-[#BE185D]">
              03. Technical Skills
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1F122B] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Core Stack &amp; Engineering Foundations
            </h2>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter skills by category"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-[#EEDCE8] bg-[#FBF2F7] p-1"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D] ${
                    isActive
                      ? 'bg-[#BE185D] text-white font-semibold'
                      : 'text-[#534363] hover:text-[#1F122B]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {filteredSkills.map((skill, idx) => (
            <motion.article
              key={skill.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.3,
                delay: Math.min(idx * 0.04, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-xl border border-[#EEDCE8] bg-white p-6 shadow-[0_2px_10px_rgba(31,18,43,0.03)] transition-colors duration-150 hover:border-[#F472B6]"
            >
              <div>
                <div className="flex items-center justify-between gap-4 text-xs text-[#736084]">
                  <span>{skill.category}</span>
                  <span className="font-mono font-medium tabular-nums text-[#3D2C4D]">
                    {skill.proficiency}%
                  </span>
                </div>

                <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-[#1F122B]">
                  {skill.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-[#534363]">
                  {skill.summary}
                </p>
              </div>

              <div className="mt-5">
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#F3E2ED]">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: skill.proficiency / 100 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformOrigin: 'left center' }}
                    className="h-full w-full rounded-full bg-[#BE185D]"
                  />
                </div>
                <p className="mt-2 text-xs text-[#736084]">
                  Hands-on experience · {skill.experience}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

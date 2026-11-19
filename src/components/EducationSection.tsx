import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export function EducationSection() {
  return (
    <section id="education" className="border-b border-[#EEDCE8] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.02em] text-[#BE185D]">
              02. Academic Background
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1F122B] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Education
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#534363]">
            Formal academic training in software engineering, computational theory, and science
            foundations.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {EDUCATION.map((item, idx) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.3,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col justify-between rounded-xl border border-[#EEDCE8] bg-white p-6 shadow-[0_2px_10px_rgba(31,18,43,0.03)] transition-colors duration-150 hover:border-[#F472B6]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs text-[#736084]">
                  <span>{item.level}</span>
                  <GraduationCap className="h-4 w-4 text-[#BE185D]" aria-hidden="true" />
                </div>

                <h3 className="mt-3 font-display text-lg font-semibold leading-snug tracking-tight text-[#1F122B]">
                  {item.degree}
                </h3>

                <p className="mt-2 text-sm font-medium text-[#3D2C4D]">{item.institution}</p>
              </div>

              <p className="mt-5 border-t border-[#EEDCE8] pt-4 text-xs leading-relaxed text-[#736084]">
                {item.focus}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

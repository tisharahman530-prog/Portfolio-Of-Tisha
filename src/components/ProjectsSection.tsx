import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ExternalLink, Github, X } from 'lucide-react';
import { PROJECTS, type ProjectItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

const FILTERS: Array<'All Projects' | ProjectItem['category']> = [
  'All Projects',
  'Web & AI',
  'Systems & Database',
];

export function ProjectsSection() {
  const [filter, setFilter] = useState<'All Projects' | ProjectItem['category']>('All Projects');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    filter === 'All Projects'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === filter);

  useEffect(() => {
    if (!selectedProject) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedProject]);

  return (
    <section id="projects" className="border-b border-white/[0.08] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium tracking-[0.02em] text-[#F48FB1]">
              04. Selected Engineering Work
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#F6F3FA] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Projects &amp; Software Architecture
            </h2>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by discipline"
            className="flex flex-wrap items-center gap-1.5 rounded-xl border border-white/[0.08] bg-[#161224] p-1"
          >
            {FILTERS.map((item) => {
              const isActive = filter === item;
              return (
                <button
                  key={item}
                  role="tab"
                  aria-selected={isActive}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1] ${
                    isActive
                      ? 'bg-[#F48FB1] text-[#0D0A14] font-semibold'
                      : 'text-[#B6ADC7] hover:text-[#F6F3FA]'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>

        {/* Balanced 2-Column Project Showcase */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleProjects.map((project, index) => {
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.35,
                  delay: Math.min(index * 0.06, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#161224] transition-colors duration-150 hover:border-white/25"
              >
                {project.image && (
                  <div className="relative aspect-[16/10] overflow-hidden border-b border-white/[0.08] bg-[#100D1B]">
                    <ResilientImage
                      src={project.image}
                      alt={`${project.title} showcase`}
                      fallbackTitle={project.title}
                      fallbackSubtitle={project.category}
                      className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-xs text-[#9E95B3]">
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono tabular-nums">{project.year}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.role}</span>
                    </div>

                    <h3 className="mt-2.5 font-display text-xl font-semibold tracking-tight text-[#F6F3FA]">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#B6ADC7]">
                      {project.summary}
                    </p>

                    <p className="mt-4 text-xs font-medium text-[#D4D4D8]">
                      {project.stack.join(' · ')}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F48FB1] transition-colors hover:text-[#F8B4CB] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1] rounded-sm"
                    >
                      Inspect Case Study
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>

                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Source repository for ${project.title}`}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-[#B6ADC7] transition-colors hover:text-[#F6F3FA]"
                    >
                      <Github className="h-3.5 w-3.5" aria-hidden="true" />
                      Source
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Case Study Lightbox Modal */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProject(null)}
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
              onClick={() => setSelectedProject(null)}
              aria-label="Close project details"
              className="absolute right-5 top-5 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-[#B6ADC7] transition-colors hover:bg-white/[0.06] hover:text-[#F6F3FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F48FB1]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-10">
              <p className="text-xs text-[#F48FB1]">
                {selectedProject.category} · {selectedProject.year} · {selectedProject.role}
              </p>
              <h3
                id="project-modal-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#F6F3FA]"
              >
                {selectedProject.title}
              </h3>
            </div>

            {selectedProject.image && (
              <div className="mt-5 overflow-hidden rounded-xl border border-white/[0.08]">
                <ResilientImage
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="aspect-[16/9] w-full object-cover"
                />
              </div>
            )}

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#B6ADC7]">
              <div>
                <h4 className="font-display text-sm font-semibold text-[#F6F3FA]">
                  Engineering Challenge
                </h4>
                <p className="mt-1">{selectedProject.problem}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-[#F6F3FA]">
                  System Architecture
                </h4>
                <p className="mt-1">{selectedProject.architecture}</p>
              </div>
              <div>
                <h4 className="font-display text-sm font-semibold text-[#F6F3FA]">
                  Measured Outcome
                </h4>
                <p className="mt-1 text-[#D4D4D8]">{selectedProject.impact}</p>
              </div>
              <div className="border-t border-white/[0.08] pt-4">
                <p className="text-xs text-[#9E95B3]">
                  Technologies: {selectedProject.stack.join(' · ')}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={selectedProject.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#F48FB1] px-4 py-2 text-xs font-semibold text-[#0D0A14] transition-colors hover:bg-[#F8B4CB]"
              >
                <Github className="h-3.5 w-3.5" aria-hidden="true" />
                View Repository
              </a>
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs font-medium text-[#D4D4D8] hover:bg-white/[0.05]"
              >
                <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                Back to Portfolio
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

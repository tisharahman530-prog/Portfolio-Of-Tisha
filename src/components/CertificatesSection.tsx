import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Award, ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import { CERTIFICATES, PROFILE, type CertificateItem } from '../data/portfolioData';
import { ResilientImage } from './ResilientImage';

export function CertificatesSection() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    if (!selectedCert) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedCert(null);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedCert]);

  return (
    <section id="certificates" className="border-b border-[#EEDCE8] py-20 lg:py-24">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.02em] text-[#BE185D]">
              05. Verified Credentials
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1F122B] sm:text-4xl"
              style={{ textWrap: 'balance' }}
            >
              Certificates &amp; Academic Honors
            </h2>
          </div>

          <p className="max-w-md text-sm text-[#534363]">
            Select any certificate below to view the full credential image, issuer details, and
            verified certificate ID.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((cert, idx) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.3,
                delay: Math.min(idx * 0.05, 0.2),
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-[#EEDCE8] bg-white shadow-[0_2px_12px_rgba(31,18,43,0.03)] transition-colors duration-150 hover:border-[#F472B6]"
            >
              {cert.image && (
                <button
                  type="button"
                  onClick={() => setSelectedCert(cert)}
                  aria-label={`View full certificate for ${cert.title}`}
                  className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#EEDCE8] bg-[#FBF2F7] p-2 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D]"
                >
                  <ResilientImage
                    src={cert.image}
                    alt={`${cert.title} certificate issued to ${PROFILE.name}`}
                    fallbackTitle={cert.title}
                    fallbackSubtitle={cert.issuer}
                    className="h-full w-full object-contain transition-transform duration-300 ease-out group-hover:scale-[1.02]"
                  />
                </button>
              )}

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs text-[#736084]">
                    <span>{cert.category}</span>
                    <span className="font-mono tabular-nums">{cert.issueDate}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-lg font-semibold tracking-tight text-[#1F122B]">
                    {cert.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-[#3D2C4D]">{cert.issuer}</p>

                  <p className="mt-2.5 text-sm leading-relaxed text-[#534363]">{cert.summary}</p>
                </div>

                <div className="mt-6 border-t border-[#EEDCE8] pt-4">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs text-[#736084] tabular-nums truncate">
                      ID: {cert.credentialId}
                    </span>

                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#BE185D] whitespace-nowrap shrink-0 transition-colors hover:text-[#9D174D] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D] rounded-sm"
                    >
                      Inspect
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Certificate Verification Lightbox Modal */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F122B]/45 p-4 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-[#E5CFE0] bg-white p-6 shadow-xl sm:p-8"
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
              className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#E5CFE0] bg-white text-[#534363] transition-colors hover:bg-[#FBF2F7] hover:text-[#1F122B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="pr-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#BE185D]">
                <Award className="h-4 w-4" aria-hidden="true" />
                <span>Verified Credential · {selectedCert.issueDate}</span>
              </div>

              <h3
                id="cert-modal-title"
                className="mt-2 font-display text-2xl font-semibold tracking-tight text-[#1F122B]"
              >
                {selectedCert.title}
              </h3>

              <p className="mt-1 text-sm text-[#3D2C4D]">{selectedCert.issuer}</p>
            </div>

            {selectedCert.image && (
              <div className="mt-5 overflow-hidden rounded-xl border border-[#EEDCE8] bg-[#FBF2F7] p-2">
                <ResilientImage
                  src={selectedCert.image}
                  alt={`${selectedCert.title} full certificate`}
                  className="max-h-[55vh] w-full object-contain"
                />
              </div>
            )}

            <div className="mt-5 space-y-3 text-sm text-[#534363]">
              <p>{selectedCert.summary}</p>
              <div className="flex flex-wrap items-center justify-between gap-2 border-t border-[#EEDCE8] pt-4 text-xs">
                <span className="font-mono font-medium text-[#3D2C4D] tabular-nums">
                  Certificate ID: {selectedCert.credentialId}
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium text-[#059669]">
                  <CheckCircle2 className="h-3.5 w-3.5" aria-hidden="true" />
                  Record Verified
                </span>
              </div>
              <p className="text-xs text-[#736084]">
                Competencies: {selectedCert.skills.join(' · ')}
              </p>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}

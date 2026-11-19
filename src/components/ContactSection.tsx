import { type FormEvent, useState } from 'react';
import { Check, Copy, Github, Linkedin, Mail, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer id="contact" className="bg-[#FBF2F7]/85 pt-20 pb-12">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Direct Details */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold tracking-[0.02em] text-[#BE185D]">
              06. Contact &amp; Collaboration
            </p>
            <h2
              className="mt-2 font-display text-3xl font-semibold tracking-tight text-[#1F122B]"
              style={{ textWrap: 'balance' }}
            >
              Let&apos;s build dependable software together.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[#534363]">
              Open to software engineering internships, research collaborations, and full-stack
              web development opportunities. Reach out directly via email or send a quick note.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5CFE0] bg-white px-4 py-2.5 text-sm font-medium text-[#1F122B] transition-colors hover:border-[#BE185D]/50"
                >
                  <Mail className="h-4 w-4 text-[#BE185D]" aria-hidden="true" />
                  {PROFILE.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[#E5CFE0] bg-white px-3.5 py-2.5 text-xs font-medium text-[#3D2C4D] transition-colors hover:border-[#BE185D]/50 hover:text-[#1F122B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D]"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-[#059669]" aria-hidden="true" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href={PROFILE.facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5CFE0] bg-white px-4 py-2.5 text-sm font-medium text-[#1F122B] transition-colors hover:border-[#1877F2]/60 hover:bg-[#FDF8FB]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 text-[#1877F2]"
                  >
                    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                  </svg>
                  Facebook
                </a>

                <a
                  href={PROFILE.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#E5CFE0] bg-white px-4 py-2.5 text-sm font-medium text-[#1F122B] transition-colors hover:border-[#16A34A]/60 hover:bg-[#FDF8FB]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 text-[#16A34A]"
                  >
                    <path d="M12.031 2c-5.516 0-9.969 4.453-9.969 9.969 0 1.766.469 3.484 1.344 5l-1.406 5.156 5.281-1.375c1.469.797 3.109 1.219 4.75 1.219 5.516 0 9.969-4.453 9.969-9.969S17.547 2 12.031 2zm5.813 14.125c-.25.703-1.438 1.344-2 1.422-.516.078-1.172.109-1.891-.125-.438-.141-1-.328-1.719-.641-3.031-1.313-5-4.375-5.156-4.578-.156-.203-1.234-1.641-1.234-3.125s.781-2.219 1.063-2.516c.281-.297.609-.375.813-.375.203 0 .406 0 .578.016.188.016.438-.078.688.516.25.609.859 2.094.938 2.25.078.156.125.344.031.547-.094.203-.141.328-.297.5-.156.172-.313.391-.453.516-.156.141-.313.297-.141.594.172.297.781 1.281 1.672 2.078 1.156 1.031 2.125 1.344 2.422 1.5.297.156.469.125.641-.078.172-.203.75-.875.953-1.172.203-.297.406-.25.672-.156.266.094 1.719.813 2.016.953.297.141.484.219.563.344.078.125.078.734-.172 1.438z" />
                  </svg>
                  <span className="font-mono tabular-nums">{PROFILE.whatsappDisplay}</span>
                </a>
              </div>

              <div className="flex items-center gap-4 pt-2 text-sm text-[#534363]">
                <a
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#1F122B]"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  GitHub
                </a>
                <span aria-hidden="true">·</span>
                <a
                  href={PROFILE.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 transition-colors hover:text-[#1F122B]"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#EEDCE8] bg-white p-6 shadow-[0_2px_12px_rgba(31,18,43,0.03)] sm:p-8">
              {submitted ? (
                <div className="py-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FCE7F3] text-[#BE185D]">
                    <Check className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[#1F122B]">
                    Message Prepared
                  </h3>
                  <p className="mt-2 text-sm text-[#534363]">
                    Thank you for reaching out. You can also connect directly at{' '}
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="font-medium text-[#BE185D] underline underline-offset-4"
                    >
                      {PROFILE.email}
                    </a>
                    .
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 rounded-lg border border-[#E5CFE0] px-4 py-2 text-xs font-medium text-[#3D2C4D] hover:bg-[#FBF2F7]"
                  >
                    Send Another Note
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-medium text-[#3D2C4D]"
                      >
                        Your Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Dr. Anika Rahman"
                        className="mt-1.5 w-full rounded-lg border border-[#E5CFE0] bg-[#FDF8FB] px-3.5 py-2.5 text-sm text-[#1F122B] placeholder:text-[#8C799E] focus:border-[#BE185D] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-medium text-[#3D2C4D]"
                      >
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@organization.com"
                        className="mt-1.5 w-full rounded-lg border border-[#E5CFE0] bg-[#FDF8FB] px-3.5 py-2.5 text-sm text-[#1F122B] placeholder:text-[#8C799E] focus:border-[#BE185D] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-medium text-[#3D2C4D]"
                    >
                      Project or Inquiry Details
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Share details about the role, project, or collaboration..."
                      className="mt-1.5 w-full rounded-lg border border-[#E5CFE0] bg-[#FDF8FB] px-3.5 py-2.5 text-sm text-[#1F122B] placeholder:text-[#8C799E] focus:border-[#BE185D] focus:outline-none"
                    />
                  </div>

                  <div className="flex items-center justify-end pt-2">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#BE185D] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-150 hover:bg-[#9D174D] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BE185D]"
                    >
                      Send Message
                      <Send className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Quiet Editorial Footer */}
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[#EEDCE8] pt-8 text-xs text-[#736084] sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {PROFILE.name} · {PROFILE.department}
          </p>
          <nav aria-label="Footer Navigation" className="flex flex-wrap items-center gap-5">
            <a href="#home" className="transition-colors hover:text-[#1F122B]">
              Home
            </a>
            <a href="#news" className="transition-colors hover:text-[#1F122B]">
              Updates
            </a>
            <a href="#education" className="transition-colors hover:text-[#1F122B]">
              Education
            </a>
            <a href="#skills" className="transition-colors hover:text-[#1F122B]">
              Skills
            </a>
            <a href="#projects" className="transition-colors hover:text-[#1F122B]">
              Projects
            </a>
            <a href="#certificates" className="transition-colors hover:text-[#1F122B]">
              Certificates
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

const UPDATES = [
  {
    id: 'update-5-latest',
    orderLabel: 'Latest',
    workName: 'AI Virtual Assistant for University Students',
    workType: 'Project',
    date: '2026',
    image: '/assets/aistudio/become-a-virtual-assistant-featured-image_ae8ddbba.webp',
    body: [
      'Built an interactive AI Virtual Assistant tailored for university students to organize class schedules, study reminders, and campus queries.',
      'Engineered with HTML, CSS, JavaScript, intent-matching algorithms, and a relational SQL backend.',
    ],
  },
  {
    id: 'update-4',
    orderLabel: '04',
    workName: 'Library Management System',
    workType: 'Project',
    date: '2026',
    image: '/assets/aistudio/images_aa6601a3.jfif',
    body: [
      'Developed a full-featured Library Management System managing book inventory, borrowing workflows, and overdue fee calculations.',
      'Implemented structured search and sorting algorithms in Java backed by normalized SQL database tables.',
    ],
  },
  {
    id: 'update-3',
    orderLabel: '03',
    workName: 'CS202: Discrete Structures',
    workType: 'Certificate',
    date: 'April 21, 2026',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.43_1__da3d1534.jpeg',
    body: [
      'Earned the CS202: Discrete Structures certificate from Saylor Academy (saylor.org University), strengthening formal mathematical reasoning for software engineering.',
      'Topics covered include Boolean algebra, proof techniques, recurrence relations, trees, and directed graph algorithms.',
    ],
  },
  {
    id: 'update-2',
    orderLabel: '02',
    workName: 'SQL Certification Course',
    workType: 'Certificate',
    date: 'April 6, 2026',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.44_c77fded1.jpeg',
    body: [
      "Completed Intellipaat Academy's SQL Certification Course focused on structured database querying and relational data modeling.",
      'Applied multi-table joins, subqueries, constraints, and indexed lookups across academic database engineering projects.',
    ],
  },
  {
    id: 'update-1',
    orderLabel: '01',
    workName: 'CS301: Computer Architecture',
    workType: 'Certificate',
    date: 'April 4, 2026',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.43_49a770b9.jpeg',
    body: [
      'Completed CS301: Computer Architecture via Saylor Academy, examining digital logic, datapath execution, cache coherence, and hardware-software interfaces.',
      'This foundation supports writing memory-conscious backend services and systems code.',
    ],
  },
];

const SKILLS = [
  {
    name: 'Language C',
    category: 'Programming Languages',
    proficiency: 90,
    experience: '3+ years',
    summary:
      'Structured procedural programming, pointers, dynamic memory management, and file handling.',
  },
  {
    name: 'Language Java',
    category: 'Programming Languages',
    proficiency: 88,
    experience: '2.5 years',
    summary:
      'Object-oriented programming, collections framework, exception handling, and modular class design.',
  },
  {
    name: 'SQL',
    category: 'Database & Logic',
    proficiency: 89,
    experience: '2.5 years',
    summary:
      'Relational schema design, complex joins, subqueries, constraints, and certified query optimization.',
  },
  {
    name: 'Language HTML',
    category: 'Web Technologies',
    proficiency: 95,
    experience: '3+ years',
    summary:
      'Semantic HTML5 landmarks, accessible forms, clean document structure, and SEO-friendly markup.',
  },
  {
    name: 'Language CSS',
    category: 'Web Technologies',
    proficiency: 92,
    experience: '3+ years',
    summary:
      'Responsive Flexbox and CSS Grid layouts, custom dark-theme styling, and smooth keyframe animations.',
  },
  {
    name: 'Language JavaScript',
    category: 'Web Technologies',
    proficiency: 90,
    experience: '3 years',
    summary:
      'Modern ES6+ syntax, DOM manipulation, event handling, asynchronous fetch workflows, and interactive UI logic.',
  },
  {
    name: 'Algorithm',
    category: 'Database & Logic',
    proficiency: 87,
    experience: '2.5 years',
    summary:
      'Sorting, searching, recursion, dynamic programming, graph traversal, and time-space complexity analysis.',
  },
];

const PROJECTS = [
  {
    id: 'proj-ai-assistant',
    title: 'AI Virtual Assistant for University Students',
    category: 'Web & AI',
    year: '2026',
    role: 'Software Engineer & Designer',
    stack: ['HTML', 'CSS', 'JavaScript', 'Algorithm', 'SQL'],
    summary:
      'Intelligent academic companion helping university students manage course schedules, exam countdowns, study plans, and campus information through natural-language queries.',
    problem:
      'University students frequently navigate scattered portals for class routines, syllabus milestones, and administrative guidelines, wasting time during busy exam periods.',
    architecture:
      'Built a responsive dark-mode conversational web interface in HTML, CSS, and JavaScript backed by structured intent matching algorithms and a relational SQL knowledge base.',
    impact:
      'Streamlined daily schedule lookup, assignment tracking, and academic Q&A into a single fast, accessible student workspace.',
    image: '/assets/aistudio/become-a-virtual-assistant-featured-image_ae8ddbba.webp',
    repoUrl: 'https://github.com/',
  },
  {
    id: 'proj-library-system',
    title: 'Library Management System',
    category: 'Systems & Database',
    year: '2026',
    role: 'Lead Developer',
    stack: ['Java', 'SQL', 'Algorithm', 'HTML', 'CSS'],
    summary:
      'Structured academic library platform handling book cataloging, member registration, issue/return tracking, and automated overdue fine computation.',
    problem:
      'Manual book ledger entries made inventory tracking slow and led to frequent errors when verifying due dates and available copies across departments.',
    architecture:
      'Engineered an object-oriented Java core with efficient search/sort algorithms connected to a normalized SQL database enforcing referential integrity on borrow and return records.',
    impact:
      'Eliminated duplicate issue records and delivered instant ISBN, author, and availability search across the catalog.',
    image: '/assets/aistudio/images_aa6601a3.jfif',
    repoUrl: 'https://github.com/',
  },
];

const CERTIFICATES = [
  {
    id: 'cert-saylor-cs202',
    title: 'CS202: Discrete Structures',
    issuer: 'Saylor Academy (saylor.org University)',
    issueDate: 'April 21, 2026',
    credentialId: '9264078092MR',
    category: 'Computer Science Theory',
    skills: ['Discrete Mathematics', 'Logic & Proofs', 'Graph Theory', 'Combinatorics'],
    summary:
      'Completed formal university-level coursework covering propositional logic, mathematical induction, set theory, relations, and graph structures.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.43_1__da3d1534.jpeg',
  },
  {
    id: 'cert-intellipaat-sql',
    title: 'SQL Certification Course',
    issuer: 'Intellipaat Academy',
    issueDate: 'April 6, 2026',
    credentialId: '31679-619-333944',
    category: 'Database Systems',
    skills: ['SQL Queries', 'Joins & Subqueries', 'Relational Schema', 'Data Manipulation'],
    summary:
      'Verified completion of structured relational database querying, schema design, aggregations, and SQL optimization requirements.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.44_c77fded1.jpeg',
  },
  {
    id: 'cert-saylor-cs301',
    title: 'CS301: Computer Architecture',
    issuer: 'Saylor Academy (saylor.org University)',
    issueDate: 'April 4, 2026',
    credentialId: '8125419700MR',
    category: 'Computer Systems',
    skills: ['CPU Pipelining', 'Memory Hierarchy', 'Instruction Sets', 'Digital Logic'],
    summary:
      'Earned certificate of achievement in processor architecture, assembly fundamentals, cache organization, and hardware-software interfaces.',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.43_49a770b9.jpeg',
  },
];

// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobile-menu-toggle');
const mobileDrawer = document.getElementById('mobile-drawer');

if (mobileToggle && mobileDrawer) {
  mobileToggle.addEventListener('click', () => {
    const isHidden = mobileDrawer.hasAttribute('hidden');
    if (isHidden) {
      mobileDrawer.removeAttribute('hidden');
      mobileToggle.setAttribute('aria-expanded', 'true');
    } else {
      mobileDrawer.setAttribute('hidden', '');
      mobileToggle.setAttribute('aria-expanded', 'false');
    }
  });

  mobileDrawer.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileDrawer.setAttribute('hidden', '');
      mobileToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Modal Helpers
const modal = document.getElementById('detail-modal');
const modalBody = document.getElementById('modal-body');
const modalCloseBtn = document.getElementById('modal-close-btn');

function openModal(htmlContent) {
  if (!modal || !modalBody) return;
  modalBody.innerHTML = htmlContent;
  modal.removeAttribute('hidden');
}

function closeModal() {
  if (!modal) return;
  modal.setAttribute('hidden', '');
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
}
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Render Recent Updates
function renderUpdates(filter = 'All') {
  const container = document.getElementById('updates-list');
  if (!container) return;
  const items =
    filter === 'All' ? UPDATES : UPDATES.filter((item) => item.workType === filter);

  container.innerHTML = items
    .map(
      (item) => `
      <article class="update-row">
        <div class="update-heading-wrap">
          <span class="update-order mono-num">${item.orderLabel}</span>
          <h3 class="update-title">
            ${item.workName} <span class="update-type">— ${item.workType}</span>
          </h3>
        </div>
        <button type="button" class="btn btn-secondary btn-sm" data-update-id="${item.id}">
          View Details ↗
        </button>
      </article>
    `
    )
    .join('');

  container.querySelectorAll('[data-update-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const target = UPDATES.find((u) => u.id === btn.getAttribute('data-update-id'));
      if (!target) return;
      openModal(`
        <p class="section-kicker">${target.orderLabel} · ${target.workType} · ${target.date}</p>
        <h3 class="card-title" style="font-size:1.5rem;margin-top:8px;">${target.workName} — ${target.workType}</h3>
        ${
          target.image
            ? `<div class="modal-img-wrap"><img src="${target.image}" alt="${target.workName}" /></div>`
            : ''
        }
        <div class="modal-sections">
          ${target.body.map((p) => `<p>${p}</p>`).join('')}
        </div>
      `);
    });
  });
}

document.querySelectorAll('[data-update-filter]').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-update-filter]').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    renderUpdates(tab.getAttribute('data-update-filter') || 'All');
  });
});

// Render Skills
function renderSkills(filter = 'All') {
  const container = document.getElementById('skills-grid');
  if (!container) return;
  const items = filter === 'All' ? SKILLS : SKILLS.filter((s) => s.category === filter);

  container.innerHTML = items
    .map(
      (skill) => `
      <article class="card">
        <div>
          <div class="card-top-meta">
            <span>${skill.category}</span>
            <span class="mono-num">${skill.proficiency}%</span>
          </div>
          <h3 class="card-title">${skill.name}</h3>
          <p class="card-text">${skill.summary}</p>
        </div>
        <div>
          <div class="progress-track">
            <div class="progress-fill" data-progress="${skill.proficiency / 100}"></div>
          </div>
          <p class="card-footer-note" style="border:none;padding-top:8px;margin-top:0;">
            Hands-on experience · ${skill.experience}
          </p>
        </div>
      </article>
    `
    )
    .join('');

  requestAnimationFrame(() => {
    container.querySelectorAll('.progress-fill').forEach((bar) => {
      const ratio = bar.getAttribute('data-progress') || '0';
      bar.style.transform = `scaleX(${ratio})`;
    });
  });
}

document.querySelectorAll('[data-skill-filter]').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-skill-filter]').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    renderSkills(tab.getAttribute('data-skill-filter') || 'All');
  });
});

// Render Projects
function renderProjects(filter = 'All Projects') {
  const container = document.getElementById('projects-grid');
  if (!container) return;
  const items =
    filter === 'All Projects' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  container.innerHTML = items
    .map(
      (project) => `
      <article class="media-card">
        <div class="media-thumb-wrap">
          <img src="${project.image}" alt="${project.title}" class="media-thumb-img" />
        </div>
        <div class="media-card-body">
          <div>
            <div class="card-top-meta">
              <span>${project.category} · <span class="mono-num">${project.year}</span> · ${project.role}</span>
            </div>
            <h3 class="card-title">${project.title}</h3>
            <p class="card-text">${project.summary}</p>
            <p class="card-stack">${project.stack.join(' · ')}</p>
          </div>
          <div class="card-actions-bar">
            <button type="button" class="text-action-btn" data-project-id="${project.id}">
              Inspect Case Study ↗
            </button>
            <a href="${project.repoUrl}" target="_blank" rel="noreferrer" class="muted-link">Source</a>
          </div>
        </div>
      </article>
    `
    )
    .join('');

  container.querySelectorAll('[data-project-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const project = PROJECTS.find((p) => p.id === btn.getAttribute('data-project-id'));
      if (!project) return;
      openModal(`
        <p class="section-kicker">${project.category} · ${project.year} · ${project.role}</p>
        <h3 class="card-title" style="font-size:1.5rem;margin-top:8px;">${project.title}</h3>
        <div class="modal-img-wrap"><img src="${project.image}" alt="${project.title}" /></div>
        <div class="modal-sections">
          <div><h4>Engineering Challenge</h4><p>${project.problem}</p></div>
          <div><h4>System Architecture</h4><p>${project.architecture}</p></div>
          <div><h4>Measured Outcome</h4><p>${project.impact}</p></div>
          <p class="muted-link">Technologies: ${project.stack.join(' · ')}</p>
        </div>
      `);
    });
  });
}

document.querySelectorAll('[data-project-filter]').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('[data-project-filter]').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    renderProjects(tab.getAttribute('data-project-filter') || 'All Projects');
  });
});

// Render Certificates
function renderCertificates() {
  const container = document.getElementById('certificates-grid');
  if (!container) return;

  container.innerHTML = CERTIFICATES.map(
    (cert) => `
    <article class="media-card">
      <button type="button" class="cert-thumb-btn" data-cert-id="${cert.id}" aria-label="View full certificate for ${cert.title}">
        <img src="${cert.image}" alt="${cert.title}" class="cert-thumb-img" />
      </button>
      <div class="media-card-body">
        <div>
          <div class="card-top-meta">
            <span>${cert.category}</span>
            <span class="mono-num">${cert.issueDate}</span>
          </div>
          <h3 class="card-title">${cert.title}</h3>
          <p class="card-subtitle">${cert.issuer}</p>
          <p class="card-text">${cert.summary}</p>
        </div>
        <div class="card-actions-bar">
          <span class="mono-num muted-link">ID: ${cert.credentialId}</span>
          <button type="button" class="text-action-btn" data-cert-id="${cert.id}">Inspect ↗</button>
        </div>
      </div>
    </article>
  `
  ).join('');

  container.querySelectorAll('[data-cert-id]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const cert = CERTIFICATES.find((c) => c.id === btn.getAttribute('data-cert-id'));
      if (!cert) return;
      openModal(`
        <p class="section-kicker">Verified Credential · ${cert.issueDate}</p>
        <h3 class="card-title" style="font-size:1.5rem;margin-top:8px;">${cert.title}</h3>
        <p class="card-subtitle">${cert.issuer}</p>
        <div class="modal-img-wrap cert-bg"><img src="${cert.image}" alt="${cert.title}" /></div>
        <div class="modal-sections">
          <p>${cert.summary}</p>
          <p class="mono-num">Certificate ID: ${cert.credentialId} · Record Verified</p>
          <p class="muted-link">Competencies: ${cert.skills.join(' · ')}</p>
        </div>
      `);
    });
  });
}

// Copy Email & Contact Form
const copyBtn = document.getElementById('copy-email-btn');
if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText('tisharahman530@gmail.com');
      copyBtn.textContent = 'Copied';
      setTimeout(() => {
        copyBtn.textContent = 'Copy Email';
      }, 2200);
    } catch {
      copyBtn.textContent = 'Copy Email';
    }
  });
}

const contactForm = document.getElementById('contact-form');
const contactSuccess = document.getElementById('contact-success');
const resetFormBtn = document.getElementById('reset-form-btn');

if (contactForm && contactSuccess) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactForm.setAttribute('hidden', '');
    contactSuccess.removeAttribute('hidden');
    contactForm.reset();
  });
}

if (resetFormBtn && contactForm && contactSuccess) {
  resetFormBtn.addEventListener('click', () => {
    contactSuccess.setAttribute('hidden', '');
    contactForm.removeAttribute('hidden');
  });
}

// Scroll Reveal Observer
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Initial Render
renderUpdates();
renderSkills();
renderProjects();
renderCertificates();

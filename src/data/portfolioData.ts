export interface SkillItem {
  id: string;
  name: string;
  category: 'Programming Languages' | 'Web Technologies' | 'Database & Logic';
  proficiency: number;
  experience: string;
  summary: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Web & AI' | 'Systems & Database';
  year: string;
  role: string;
  stack: string[];
  summary: string;
  problem: string;
  architecture: string;
  impact: string;
  image?: string;
  featured?: boolean;
  repoUrl: string;
  liveUrl: string;
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialId: string;
  category: string;
  skills: string[];
  summary: string;
  image?: string;
  verifyUrl: string;
}

export interface NewsItem {
  id: string;
  orderLabel: string;
  workName: string;
  workType: 'Project' | 'Certificate' | 'Experience';
  date: string;
  summary: string;
  image?: string;
  body: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  level: string;
  focus: string;
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'edu-bsc',
    degree: 'Bachelor of Science (B.Sc.) in Software Engineering',
    institution: 'Daffodil International University',
    level: 'Undergraduate Degree',
    focus: 'Software Architecture, Algorithms, Database Systems & Web Engineering',
  },
  {
    id: 'edu-hsc',
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Milestone College',
    level: 'Higher Secondary',
    focus: 'Science Division — Mathematics, Physics & Information Technology',
  },
  {
    id: 'edu-ssc',
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Milestone College',
    level: 'Secondary Education',
    focus: 'Science Division — Core Analytical & Quantitative Foundations',
  },
];

export const PROFILE = {
  name: 'MST Tisha Rahman',
  shortName: 'Tisha Rahman',
  department: 'Department of Software Engineering',
  roleTitle: 'Software Engineer & Full-Stack Builder',
  headline: 'Engineering resilient software systems with human clarity.',
  bio: 'Undergraduate researcher and software engineer in the Department of Software Engineering. I design modular web applications, clean RESTful architectures, and accessible dark-mode interfaces built for reliability and speed.',
  email: 'tisharahman530@gmail.com',
  location: 'Dhaka, Bangladesh',
  portraitImage: '/assets/aistudio/Tisha_ce438a3a.jpeg',
  githubUrl: 'https://github.com/',
  linkedinUrl: 'https://linkedin.com/',
  facebookUrl: 'https://www.facebook.com/tisha.rahman.90281',
  whatsappDisplay: '01715167861',
  whatsappUrl: 'https://wa.me/8801715167861',
  metrics: [
    { label: 'Shipped Projects', value: '02', detail: 'Library & AI Assistant' },
    { label: 'Verified Certificates', value: '03', detail: 'CS301, CS202 & SQL' },
    { label: 'Core Technologies', value: '07', detail: 'C, Java, SQL, Web & Algo' },
    { label: 'Department Focus', value: 'SWE', detail: 'Systems & Web Architecture' },
  ],
};

export const SKILLS: SkillItem[] = [
  {
    id: 'sk-c',
    name: 'Language C',
    category: 'Programming Languages',
    proficiency: 90,
    experience: '3+ years',
    summary:
      'Structured procedural programming, pointers, dynamic memory management, and file handling.',
  },
  {
    id: 'sk-java',
    name: 'Language Java',
    category: 'Programming Languages',
    proficiency: 88,
    experience: '2.5 years',
    summary:
      'Object-oriented programming, collections framework, exception handling, and modular class design.',
  },
  {
    id: 'sk-sql',
    name: 'SQL',
    category: 'Database & Logic',
    proficiency: 89,
    experience: '2.5 years',
    summary:
      'Relational schema design, complex joins, subqueries, constraints, and certified query optimization.',
  },
  {
    id: 'sk-html',
    name: 'Language HTML',
    category: 'Web Technologies',
    proficiency: 95,
    experience: '3+ years',
    summary:
      'Semantic HTML5 landmarks, accessible forms, clean document structure, and SEO-friendly markup.',
  },
  {
    id: 'sk-css',
    name: 'Language CSS',
    category: 'Web Technologies',
    proficiency: 92,
    experience: '3+ years',
    summary:
      'Responsive Flexbox and CSS Grid layouts, custom dark-theme styling, and smooth keyframe animations.',
  },
  {
    id: 'sk-js',
    name: 'Language JavaScript',
    category: 'Web Technologies',
    proficiency: 90,
    experience: '3 years',
    summary:
      'Modern ES6+ syntax, DOM manipulation, event handling, asynchronous fetch workflows, and interactive UI logic.',
  },
  {
    id: 'sk-algo',
    name: 'Algorithm',
    category: 'Database & Logic',
    proficiency: 87,
    experience: '2.5 years',
    summary:
      'Sorting, searching, recursion, dynamic programming, graph traversal, and time-space complexity analysis.',
  },
];

export const PROJECTS: ProjectItem[] = [
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
    featured: true,
    repoUrl: 'https://github.com/',
    liveUrl: '#projects',
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
    liveUrl: '#projects',
  },
];

export const CERTIFICATES: CertificateItem[] = [
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
    verifyUrl: '#certificates',
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
    verifyUrl: '#certificates',
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
    verifyUrl: '#certificates',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'update-5-latest',
    orderLabel: 'Latest',
    workName: 'AI Virtual Assistant for University Students',
    workType: 'Project',
    date: '2026',
    summary:
      'Intelligent student companion unifying course routines, exam reminders, and academic Q&A.',
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
    summary:
      'Cataloging, member management, issue/return tracking, and fine computation powered by Java and SQL.',
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
    summary:
      'Completed Saylor Academy university certification in propositional logic, mathematical induction, set theory, and graph structures (ID: 9264078092MR).',
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
    summary:
      'Verified completion of Intellipaat Academy SQL training covering relational schema design, complex joins, and query optimization (ID: 31679-619-333944).',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.44_c77fded1.jpeg',
    body: [
      'Completed Intellipaat Academy’s SQL Certification Course focused on structured database querying and relational data modeling.',
      'Applied multi-table joins, subqueries, constraints, and indexed lookups across academic database engineering projects.',
    ],
  },
  {
    id: 'update-1',
    orderLabel: '01',
    workName: 'CS301: Computer Architecture',
    workType: 'Certificate',
    date: 'April 4, 2026',
    summary:
      'Awarded Saylor Academy certificate of achievement for CPU pipelining, memory hierarchy, and instruction set design (ID: 8125419700MR).',
    image: '/assets/aistudio/WhatsApp_Image_2026-11-17_at_03.51.43_49a770b9.jpeg',
    body: [
      'Completed CS301: Computer Architecture via Saylor Academy, examining digital logic, datapath execution, cache coherence, and hardware-software interfaces.',
      'This foundation supports writing memory-conscious backend services and systems code.',
    ],
  },
];

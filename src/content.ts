export const site = {
  name: "Loc Tran",
  initials: "LT",
  title: "ORFE @ Princeton",
  location: "Princeton, NJ",
  tagline:
    "Operations Research & Financial Engineering student at Princeton — interested in the intersection of markets, technology, and businesses.",
  bio: "Sophomore building tools for finance, writing about markets, and collecting reps in M&A and trading.",
  resumeUrl: "https://drive.google.com/file/d/1ssBi3n2j8kKbW7pNRwGbeQG5Sr3w5thN/view?usp=sharing",
  email: "loctran@princeton.edu",
  status: "Available · Summer 2027",
  links: {
    github: "https://github.com/loctran0323",
    linkedin: "https://www.linkedin.com/in/loctran0323",
    twitter: "",
  },
  facts: [
    { k: "Studying", v: "ORFE" },
    { k: "Class of", v: "2028" },
    { k: "Based in", v: "Princeton, NJ" },
    { k: "Currently", v: "Sophomore" },
  ],
};

/** Add logo: "/logos/file.png" (file in public/logos/) or any https image URL */
export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  detail: string;
  logo?: string;
  tags?: string[];
  /** Expanded bullet points shown when the user clicks the role.
      Add 3-6 short, action-oriented lines per role. */
  details?: string[];
  /** Optional location, e.g. "New York, NY" */
  location?: string;
};

export const experiences: Experience[] = [
  // ─── TEMPLATE — copy this block above existing entries ───
  // {
  //   id: "00",
  //   logo: "https://...",                          // optional logo URL
  //   role: "Your Role",
  //   company: "Company Name",
  //   location: "City, ST",                         // optional
  //   period: "Month YYYY – Month YYYY",
  //   detail: "One short summary line for the list view.",
  //   tags: ["Tag One", "Tag Two"],                 // optional
  //   details: [                                    // shown when user clicks the role
  //     "Did X with Y, resulting in Z.",
  //     "Built / led / shipped …",
  //     "Worked alongside …",
  //   ],
  // },
  {
    id: "01",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQGidLYgsI0R5Q/company-logo_200_200/company-logo_200_200/0/1721299937776/mirae_asset_securities_usa_inc__logo?e=2147483647&v=beta&t=K4YzK0aKyMIM_yuv_H2Jfnl6NGJ8n5E-cUY96l_pYM0",
    role: "Incoming Investment Banking Summer Analyst",
    company: "Mirae Asset Securities",
    location: "Seoul, South Korea",
    period: "Jun 2026 – Aug 2026",
    detail: "Joining the M&A group to write proposals for clients on corporate financing solutions.",
    tags: ["Investment Banking", "M&A", "Corporate Finance"],
    details: [
      "Placed on the M&A group, writing client proposals on corporate financing solutions.",
    ],
  },
  {
    id: "02",
    logo: "https://jsf.co/wp-content/uploads/2024/03/Lambent-Data-Inc.jpg",
    role: "AI Product Engineering Intern Lead",
    company: "Lambent Data",
    location: "Princeton, NJ",
    period: "Apr 2026 – Jun 2026",
    detail: "Lead engineer on \"Building the Brain,\" the rules engine for VAIntage Pathways across 80+ MAT clinics.",
    tags: ["AI", "Product", "Healthcare"],
    details: [
      "Lead engineer on \"Building the Brain,\" the rules engine for VAIntage Pathways, an AI overlay deploying to 80+ Medication-Assisted Treatment clinics, using Python scrapers (BeautifulSoup, Selenium) that pull billing rules from ~15 federal and Florida sources into JSON for sub-200ms point-of-care checks that prevent costly denials.",
      "Build \"diff\" validation logic to catch rule changes between scraped and live matrices, then containerize scrapers as scheduled Azure Functions to keep the rules engine current without triggering clinician alert fatigue.",
      "Lead onboarding for a 5-person intern cohort across Azure DevOps, Cursor AI, GitHub, and Vanta within a Zero Trust, HIPAA-compliant sandbox ensuring zero PHI leaves the clinical environment.",
    ],
  },
  {
    id: "03",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHOBMz1dCm6Jw/company-logo_200_200/B4EZcJV9_nHsAI-/0/1748208443674/aspen_academies_logo?e=2147483647&v=beta&t=Wwb5VP7haUunbjelHjoQvb-YTi86_2BJI-AWRZ4gw7g",
    role: "M&A Analyst Intern",
    company: "Aspen Academies",
    location: "Remote",
    period: "Jul 2025 – Sep 2025",
    detail: "Sourced and evaluated early childhood education companies for acquisition.",
    tags: ["M&A", "Diligence", "Sourcing"],
    details: [
      "Sourced and evaluated 45+ early childhood education companies for acquisition, identifying high-growth opportunities in fragmented markets and presenting potential investment opportunities to Aspen's team.",
      "Conducted financial modeling and performed due diligence on target companies, analyzing 5+ kinds of revenue drivers, unit economics, and operational metrics to assess investment viability.",
      "Designed and implemented market research surveys, collecting and synthesizing primary data to inform investment theses and strategic decision-making.",
    ],
  },
  {
    id: "04",
    logo: "https://jsf.co/wp-content/uploads/2024/03/Lambent-Data-Inc.jpg",
    role: "Data Analyst & Business Development Intern",
    company: "Lambent Data",
    location: "Princeton, NJ",
    period: "May 2025 – Jul 2025",
    detail: "Built data visualizations powering in-app client reporting at Lambent.",
    tags: ["SQL", "BI", "Analytics"],
    details: [
      "Designed and implemented 7+ data visualization charts using PostgreSQL and BI tools to enhance in-app client reporting and progress tracking for partnered organizations.",
      "Enhanced data visualization dashboards by integrating 15+ client-specific insights, improving clarity, decision-making efficiency, and alignment across partner organizations.",
      "Researched 25+ organizations and CRM tools to identify potential clients and partnerships.",
    ],
  },
  {
    id: "05",
    logo: "https://s3-media0.fl.yelpcdn.com/bphoto/8KU_rQoZVj2kI0sHO3kOUQ/l.jpg",
    role: "Bank Teller",
    company: "Valley Strong Credit Union",
    period: "Aug 2022 – Jun 2024",
    detail: "Daily cash ops and member service at a high-volume branch.",
    details: [
      "Delivered daily banking services — withdrawals, deposits, and account maintenance — for a high-volume member base.",
      "Pitched and educated members on financial products to support informed decision-making and deeper engagement.",
      "Built working knowledge of banking operations, policies, and product offerings across the branch.",
    ],
  },
  {
    id: "06",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7r0NaeEwZBMD6kg5Myz2QjCxUADYcA0z3Q&s",
    role: "Certified Tax Preparer (VITA)",
    company: "Kings Community Action Org.",
    period: "Dec 2021 – Apr 2024",
    detail: "Prepared tax returns pro bono for low-income individuals and families.",
    details: [
      "Prepared tax returns (W-2s, 1099s, 1040s) for low-income clients each season, ensuring IRS compliance and maximizing eligible refunds.",
      "Sharpened communication and interpersonal skills through working with a diverse client base across multiple tax seasons.",
    ],
  },
];

export type Project = {
  id: string;
  name: string;
  url?: string;
  blurb: string;
  date: string;
  stack?: string[];
  accent?: "amber" | "wine" | "forest" | "ink";
};

export const projects: Project[] = [
  // ─── TEMPLATE: copy this block, fill in fields ───
  // {
  //   id: "00",
  //   name: "Project Name",
  //   url: "https://...",                     // optional
  //   blurb: "One-sentence description of what it does.",
  //   date: "Month YYYY",
  //   stack: ["React", "TypeScript"],         // optional
  //   accent: "amber",                        // amber | wine | forest | ink
  // },
  {
    id: "01",
    name: "Conifer",
    url: "https://conifer.build/",
    blurb: "An operating system for local AI — automates setup, storage, memory, and hardware optimization so developers can run model inference privately on consumer devices, distributing workloads across CPU, GPU, and accelerators in a unified memory space.",
    date: "May 2026 – Present",
    accent: "ink",
  },
  {
    id: "02",
    name: "Bart",
    url: "https://studywithbart.com",
    blurb: "The smartest way to study — drop in your lectures, notes, and problem sets and Bart returns a personalized study packet in ten minutes: lesson plan, schematics, memory aids, and practice exams, every line cited back to your own materials.",
    date: "May 2026 – Present",
    accent: "forest",
  },
  {
    id: "03",
    name: "AlphaBrief",
    url: "https://alphabrief.net",
    blurb: "Solo-built full-stack Next.js 15 platform for market intelligence and stock research — earnings calendar, sentiment, treemap, watchlists, price alerts.",
    date: "Mar 2026 – Present",
    stack: ["Next.js", "TypeScript", "Supabase", "Stripe", "Vercel"],
    accent: "amber",
  },
  {
    id: "04",
    name: "MarketsAndMergers",
    url: "https://marketsandmergers.blogspot.com/",
    blurb: "Personal finance blog covering market news, M&A activity, and macroeconomic trends — read by 10.5K+ people.",
    date: "Jan 2026 – Present",
    stack: ["Writing"],
    accent: "wine",
  },
];

export type Leadership = {
  id: string;
  role: string;
  org: string;
  period: string;
  detail: string;
  logo?: string;
  details: string[];
};

export const leadership: Leadership[] = [
  {
    id: "01",
    role: "Vice President & Co-Founder",
    org: "Princeton Quantitative Traders",
    period: "Sep 2024 – Present",
    detail: "Co-founded the club, raised $74K+ in sponsorships, and grew membership to 185+.",
    details: [
      "Helped raise $74K+ in sponsorships, grew the club to 185+ members, and hosted the first trading competition.",
      "Hosted educational events on quantitative finance roles (including guest sessions with Jane Street, Citadel, Tower, and others), interview prep, and coding projects to introduce students to the world of quant trading.",
    ],
  },
];

export type Certification = {
  id: string;
  name: string;
  issuer?: string;
};

export const certifications: Certification[] = [
  { id: "01", name: "Bloomberg Market Concepts" },
  { id: "02", name: "Financial and Valuation Modeling Certification", issuer: "WallStreetPrep" },
];

export type CourseTerm = {
  term: string;
  items: { code: string; title: string }[];
};

export type Education = {
  id: string;
  school: string;
  degree: string;
  years: string;
  logo?: string;
  detail?: string;
  courses?: CourseTerm[];
};

export const education: Education[] = [
  {
    id: "01",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg",
    school: "Princeton University",
    degree: "B.S.E. — Operations Research & Financial Engineering",
    years: "Class of 2028",
    detail: "Coursework in probability, optimization, statistics, and financial mathematics.",
    courses: [
      {
        term: "Summer 2024",
        items: [{ code: "HUM 254", title: "Ways of Knowing" }],
      },
      {
        term: "Fall 2024 — First Year",
        items: [
          { code: "CEE 102A", title: "Engineering in the Modern World" },
          { code: "CHM 207", title: "General Chemistry: Applications in Modern Life" },
          { code: "COS 126", title: "Computer Science: An Interdisciplinary Approach" },
          { code: "EGR 151", title: "Foundations: Mechanics, Energy and Waves" },
          { code: "EGR 152", title: "Foundations: Mathematics of Shape-Motion" },
        ],
      },
      {
        term: "Spring 2025 — First Year",
        items: [
          { code: "EGR 153", title: "Foundations of Engineering: Electricity" },
          { code: "MAT 202", title: "Linear Algebra with Applications" },
          { code: "ORF 245", title: "Fundamentals of Statistics" },
          { code: "PHI 358", title: "Buddhist Philosophy" },
          { code: "REL 252", title: "Jesus: How Christianity Began" },
          { code: "WRI 129", title: "Writing Seminar" },
        ],
      },
      {
        term: "Fall 2025 — Sophomore",
        items: [
          { code: "ECO 310", title: "Microeconomic Theory: A Mathematical Approach" },
          { code: "EGR 156", title: "Foundations: Multivariable Calculus" },
          { code: "ORF 309", title: "Probability and Stochastic Systems" },
          { code: "PHI 201", title: "Introductory Logic" },
        ],
      },
      {
        term: "Spring 2026 — Sophomore",
        items: [
          { code: "CEE 304", title: "Energy and Environmental Engineering" },
          { code: "ORF 307", title: "Optimization" },
          { code: "ORF 335", title: "Introduction to Financial Mathematics" },
          { code: "ORF 401", title: "Electronic Commerce" },
          { code: "PHI 205", title: "Introduction to Ancient Greek and Roman Philosophy" },
        ],
      },
      {
        term: "Fall 2026 — Junior",
        items: [
          { code: "COS 226", title: "Algorithms and Data Structures" },
          { code: "ORF 435", title: "Financial Risk and Wealth Management" },
          { code: "ORF 455", title: "Energy and Commodities Markets" },
          { code: "PSY 360", title: "Computational Models of Cognition" },
        ],
      },
    ],
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  { title: "Code",      items: ["Python", "TypeScript", "SQL", "R", "Java", "LaTeX"] },
  { title: "Frameworks", items: ["Next.js", "React", "Node.js"] },
  { title: "Tools",     items: ["PostgreSQL", "Excel", "Bloomberg", "GitHub", "Cursor", "Azure", "Vercel"] },
  { title: "Markets",   items: ["Equities", "Fixed Income", "FX", "M&A"] },
  { title: "Spoken",    items: ["English (Native)", "Vietnamese (Native)", "Spanish (Learning)"] },
];

// kept for backwards compatibility (used by older Skills section)
export const toolkit: string[] = skillGroups.flatMap((g) => g.items);

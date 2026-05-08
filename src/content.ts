export const site = {
  name: "Loc Tran",
  initials: "LT",
  title: "ORFE @ Princeton",
  location: "Princeton, NJ",
  tagline:
    "Operations Research & Financial Engineering student at Princeton — interested in the intersection of markets, technology, and businesses.",
  bio: "Sophomore building tools for finance, writing about markets, and collecting reps in M&A and trading.",
  resumeUrl: "https://drive.google.com/file/d/1Y1x_htXwLTErWvscEYjuS2JPn2QJ443k/view?usp=sharing",
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
    role: "Incoming Global Markets Summer Analyst",
    company: "Mirae Asset Securities",
    location: "New York, NY",
    period: "May 2026 – Jul 2026",
    detail: "Developing trading strategies across credit, rates, FX, equity-linked products, and global equities.",
    tags: ["Trading", "Fixed Income", "Equities"],
    details: [
      "Edit me — add a sentence on the desk you'll sit on and the products you'll cover.",
      "Edit me — note the trading strategies / models / research you'll be building.",
      "Edit me — call out any specific markets exposure you're getting (rates, FX, EQD, etc.).",
    ],
  },
  {
    id: "02",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHOBMz1dCm6Jw/company-logo_200_200/B4EZcJV9_nHsAI-/0/1748208443674/aspen_academies_logo?e=2147483647&v=beta&t=Wwb5VP7haUunbjelHjoQvb-YTi86_2BJI-AWRZ4gw7g",
    role: "M&A Analyst Intern",
    company: "Aspen Academies",
    period: "Jul 2025 – Sep 2025",
    detail: "Sourced and evaluated early childhood education companies for acquisition.",
    tags: ["M&A", "Diligence", "Sourcing"],
    details: [
      "Sourced acquisition targets in the fragmented early-childhood education market.",
      "Built diligence memos on operations, unit economics, and growth profile.",
      "Presented investment theses to the partner group and shaped sourcing criteria.",
      "Edit me — add a quantitative outcome (deals reviewed, pipeline built, etc.).",
    ],
  },
  {
    id: "03",
    logo: "https://jsf.co/wp-content/uploads/2024/03/Lambent-Data-Inc.jpg",
    role: "Data Analyst & Business Development Intern",
    company: "Lambent Data",
    period: "May 2025 – Jul 2025",
    detail: "Built data visualizations powering in-app client reporting at Lambent.",
    tags: ["SQL", "BI", "Analytics"],
    details: [
      "Designed PostgreSQL queries and BI dashboards used by partner organizations.",
      "Shipped in-app reporting + progress tracking surfaces.",
      "Edit me — add an example of an insight or outcome you delivered.",
    ],
  },
  {
    id: "04",
    logo: "https://s3-media0.fl.yelpcdn.com/bphoto/8KU_rQoZVj2kI0sHO3kOUQ/l.jpg",
    role: "Bank Teller",
    company: "Valley Strong Credit Union",
    period: "Aug 2022 – Jun 2024",
    detail: "Daily cash ops and member service at a high-volume branch.",
    details: [
      "Processed deposits, withdrawals, and account servicing for hundreds of members per shift.",
      "Balanced drawer to the cent across a multi-year tenure.",
      "Edit me — add anything you took on beyond the standard role.",
    ],
  },
  {
    id: "05",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS7r0NaeEwZBMD6kg5Myz2QjCxUADYcA0z3Q&s",
    role: "Certified Tax Preparer (VITA)",
    company: "Kings Community Action Org.",
    period: "Dec 2021 – Apr 2024",
    detail: "Prepared tax returns pro bono for low-income individuals and families.",
    details: [
      "IRS-certified VITA volunteer across multiple seasons.",
      "Filed federal and state returns, ensuring compliance and maximizing eligible refunds.",
      "Edit me — add the number of returns you filed or the impact of the program.",
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
    name: "Alpha Brief",
    url: "https://alpha-brief.vercel.app/",
    blurb: "Markets dashboard with watchlist, macro timeline, and summarized news so you get the key signal fast.",
    date: "Mar 2026 – Present",
    stack: ["React", "TypeScript", "Vercel"],
    accent: "amber",
  },
  {
    id: "02",
    name: "Markets and Mergers",
    url: "https://marketsandmergers.blogspot.com/",
    blurb: "Personal finance blog covering market news, M&A activity, and other financial topics.",
    date: "Jan 2026 – Present",
    stack: ["Writing"],
    accent: "wine",
  },
];

export type Education = {
  id: string;
  school: string;
  degree: string;
  years: string;
  logo?: string;
  detail?: string;
};

export const education: Education[] = [
  {
    id: "01",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg",
    school: "Princeton University",
    degree: "B.S.E. — Operations Research & Financial Engineering",
    years: "Class of 2028",
    detail: "Coursework in probability, optimization, statistics, and financial mathematics.",
  },
];

export type SkillGroup = { title: string; items: string[] };

export const skillGroups: SkillGroup[] = [
  // ─── Edit / add categories as you like ───
  { title: "Languages",  items: ["Python", "SQL", "TypeScript", "R"] },
  { title: "Markets",    items: ["Equities", "Fixed Income", "FX", "M&A"] },
  { title: "Tools",      items: ["PostgreSQL", "Bloomberg", "Tableau", "Excel", "Git"] },
  { title: "Frameworks", items: ["React", "Node.js"] },
];

// kept for backwards compatibility (used by older Skills section)
export const toolkit: string[] = skillGroups.flatMap((g) => g.items);

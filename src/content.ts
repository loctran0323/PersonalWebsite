export const site = {
  name: "Loc Tran",
  title: "",
  location: "",
  tagline:
    "Operations Research and Financial Engineering Student at Princeton",
  bio: "I'm a sophomore at Princeton University, interested in financial markets, technology, and businesses.",
  resumeUrl: "https://drive.google.com/file/d/1Y1x_htXwLTErWvscEYjuS2JPn2QJ443k/view?usp=sharing",
  email: "loctran@princeton.edu",
  links: {
    github: "https://github.com/loctran0323",
    linkedin: "https://www.linkedin.com/in/loctran0323",
    twitter: "",
  },
};

/** Add logo: "/logos/file.png" (file in public/logos/) or any https image URL */
export type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  detail: string;
  logo?: string;
};

export const experiences: Experience[] = [
  {
    id: "01",
    role: "Incoming Global Markets Summer Analyst",
    company: "Mirae Asset Securities",
    period: "May 2026 – July 2026",
    detail: "Responsible for developing various trading strategies for financial products such as credit, interest rates, FX, equity-linked products, and global equities in the financial market.",
  },
  {
    id: "02",
    logo: "https://media.licdn.com/dms/image/v2/D4E0BAQHOBMz1dCm6Jw/company-logo_200_200/B4EZcJV9_nHsAI-/0/1748208443674/aspen_academies_logo?e=2147483647&v=beta&t=Wwb5VP7haUunbjelHjoQvb-YTi86_2BJI-AWRZ4gw7g",
    role: "M&A Analyst Intern",
    company: "Aspen Academies",
    period: "July 2025 – September 2025",
    detail: "Sourced and evaluated early childhood education companies for acquisition, identifying high-growth opportunities in fragmented markets and presenting potential investment opportunities to Aspen’s team.",
  },
  {
    id: "03",
    logo: "https://jsf.co/wp-content/uploads/2024/03/Lambent-Data-Inc.jpg",
    role: "Data Analyst and Business Development Intern",
    company: "Lambent Data",
    period: "May 2025 – July 2025",
    detail: "Designed and implemented data visualizations charts using PostgreSQL and BI tools to enhance in-app client reporting and progress tracking for partnered organizations.",
  },
  {
    id: "04",
    role: "Bank Teller",
    company: "Valley Strong Credit Union",
    period: "August 2022 – June 2024",
    detail: "Managed daily cash transactions, processed deposits and withdrawals, and provided exceptional customer service to ensure smooth banking operations.",
  },
  {
    id: "05",
    role: "Certified Tax Preparer (VITA)",
    company: "Kings Community Action Organization",
    period: "December 2021 – April 2024",
    detail: "Prepared tax returns for low-income individuals and families, ensuring compliance with tax laws and maximizing tax refunds for eligible clients.",
  }
];

export const projects = [
  {
    id: "01",
    name: "Alpha Brief",
    url: "https://alpha-brief.vercel.app/",
    blurb: "Markets-based website that gives you a watchlist, macro timeline, and summarized market news in one place so you can get the key signal fast.",
    date: "March 2026 - Present",
  },
  {
    id: "02",
    name: "MarketsAndMergers",
    url: "https://marketsandmergers.blogspot.com/",
    blurb: "Financial blog that covers market news, mergers and acquisitions, and other financial topics.",
    date: "January 2026 - Present",
  },
];

export type Education = {
  id: string;
  school: string;
  degree: string;
  years: string;
  logo?: string;
};

export const education: Education[] = [
  {
    id: "01",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Princeton_seal.svg",
    school: "Princeton University",
    degree: "B.S.E in Operations Research and Financial Engineering",
    years: "Class of 2028",
  },
];

export interface CareerRole {
  id: string;
  title: string;
  department: string;
  type: "remote" | "hybrid" | "on-site";
  location: string;
  description: string;
  requirements: string[];
}

export const CAREERS: CareerRole[] = [
  {
    id: "1",
    title: "SEO Specialist",
    department: "SEO & Growth",
    type: "remote",
    location: "India (Remote)",
    description: "We are looking for an experienced SEO Specialist to manage and grow organic search performance for our clients across India. You will conduct keyword research, implement on-page and off-page SEO strategies, and deliver measurable ranking improvements for local Indian businesses.",
    requirements: [
      "2+ years of SEO experience with proven ranking results",
      "Proficiency in Google Search Console, Ahrefs, or SEMrush",
      "Experience with local SEO and Google Business Profile optimisation",
      "Understanding of technical SEO  -  Core Web Vitals, schema markup, crawl optimisation",
      "Strong analytical skills and ability to interpret data",
      "Excellent written communication in English and Hindi",
      "Experience working with Indian local businesses is a plus",
    ],
  },
  {
    id: "2",
    title: "Full Stack Web Developer",
    department: "Engineering",
    type: "remote",
    location: "India (Remote)",
    description: "Join our engineering team to build fast, scalable websites and web applications for Indian local businesses. You will work with Next.js, React, TypeScript, and MongoDB to create high-performance digital products that rank well on Google and convert visitors into customers.",
    requirements: [
      "2+ years of experience with React and Next.js",
      "Strong TypeScript skills",
      "Experience with MongoDB and REST APIs",
      "Knowledge of Tailwind CSS and responsive design",
      "Understanding of web performance optimisation and Core Web Vitals",
      "Familiarity with Vercel or AWS deployment",
      "Experience with Indian payment gateway integrations (Razorpay, PayU) is a plus",
    ],
  },
  {
    id: "3",
    title: "Digital Marketing Manager",
    department: "Marketing",
    type: "hybrid",
    location: "Bangalore, Karnataka",
    description: "Lead digital marketing campaigns for RankVillage AI and our clients. You will manage Google Ads, Meta Ads, and content marketing strategies, with a focus on driving measurable ROI for Indian local businesses across multiple industries.",
    requirements: [
      "3+ years of digital marketing experience",
      "Google Ads and Meta Ads certification preferred",
      "Experience managing ad budgets of Rs. 5L+ per month",
      "Strong understanding of conversion rate optimisation",
      "Proficiency in Google Analytics 4 and Meta Business Suite",
      "Experience with Indian market and consumer behaviour",
      "Excellent project management and client communication skills",
    ],
  },
  {
    id: "4",
    title: "Content Writer (SEO)",
    department: "Content",
    type: "remote",
    location: "India (Remote)",
    description: "Create compelling, SEO-optimised content for RankVillage AI's blog and our clients' websites. You will write articles, landing pages, and Google Business Profile posts that rank on Google and resonate with Indian local business owners and their customers.",
    requirements: [
      "1+ years of SEO content writing experience",
      "Strong understanding of keyword research and on-page SEO",
      "Excellent writing skills in English; Hindi writing ability is a strong plus",
      "Experience writing for Indian audiences and local businesses",
      "Familiarity with content management systems",
      "Ability to write across multiple industries  -  restaurants, healthcare, education, retail",
      "Portfolio of published SEO content with ranking results",
    ],
  },
  {
    id: "5",
    title: "UI/UX Designer",
    department: "Design",
    type: "remote",
    location: "India (Remote)",
    description: "Design beautiful, conversion-focused user interfaces for websites and web applications serving Indian local businesses. You will create wireframes, prototypes, and high-fidelity designs in Figma that balance aesthetics with usability and business goals.",
    requirements: [
      "2+ years of UI/UX design experience",
      "Proficiency in Figma",
      "Strong portfolio demonstrating web and mobile design work",
      "Understanding of conversion rate optimisation principles",
      "Experience designing for Indian audiences and mobile-first experiences",
      "Knowledge of accessibility standards (WCAG)",
      "Ability to collaborate closely with developers for pixel-perfect implementation",
    ],
  },
];

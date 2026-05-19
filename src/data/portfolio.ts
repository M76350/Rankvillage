export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  category: "web" | "ecommerce" | "seo" | "local-seo" | "ui-ux";
  industry: string;
  techStack: string[];
  results: Array<{ metric: string; value: string }>;
  description: string;
}

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: "1",
    title: "Restaurant Website & Local SEO",
    client: "Sharma Family Restaurant",
    category: "web",
    industry: "Restaurant",
    techStack: ["Next.js", "Tailwind CSS", "Vercel", "Google Business Profile"],
    results: [
      { metric: "Google Maps Views", value: "+2,300%" },
      { metric: "Monthly Walk-ins", value: "+180" },
      { metric: "Lighthouse Score", value: "97" },
    ],
    description: "A complete digital transformation for a family-run restaurant in Dwarka, Delhi. We built a fast, mobile-first website with an online menu, table booking form, and integrated Google Business Profile optimisation. The site ranks #1 for 'restaurant near Dwarka' and drives over 180 new walk-in customers every month.",
  },
  {
    id: "2",
    title: "Gym Membership E-commerce Store",
    client: "PowerFit Gym",
    category: "ecommerce",
    industry: "Gym & Fitness",
    techStack: ["Next.js", "Razorpay", "MongoDB", "Tailwind CSS", "Vercel"],
    results: [
      { metric: "Online Memberships Sold", value: "65/month" },
      { metric: "Cart Abandonment Rate", value: "-42%" },
      { metric: "Mobile Conversion Rate", value: "+88%" },
    ],
    description: "An e-commerce platform for PowerFit Gym in Koramangala, Bangalore, allowing customers to purchase gym memberships, personal training packages, and supplements online. Integrated with Razorpay for UPI and card payments, with automated membership confirmation emails and WhatsApp notifications.",
  },
  {
    id: "3",
    title: "Medical Store SEO Campaign",
    client: "Meena Medical Store",
    category: "seo",
    industry: "Medical & Pharmacy",
    techStack: ["Google Search Console", "Ahrefs", "Schema Markup", "Google Business Profile"],
    results: [
      { metric: "Organic Traffic Growth", value: "+420%" },
      { metric: "Keywords on Page 1", value: "34" },
      { metric: "Monthly Leads", value: "+95" },
    ],
    description: "A comprehensive SEO campaign for a medical store in Hyderabad that was struggling to compete with large pharmacy chains. We implemented local SEO, built citations across 50+ directories, and created location-specific content pages. The store now ranks above MedPlus and Apollo Pharmacy for several local search terms.",
  },
  {
    id: "4",
    title: "Dairy Farm Local SEO & GBP",
    client: "Suresh Fresh Dairy",
    category: "local-seo",
    industry: "Dairy Farm",
    techStack: ["Google Business Profile", "Local Citations", "Review Management", "Schema Markup"],
    results: [
      { metric: "Google Maps Ranking", value: "#1 in 45 Days" },
      { metric: "Daily Home Delivery Orders", value: "+45" },
      { metric: "Star Rating", value: "3.2 to 4.8" },
    ],
    description: "Local SEO transformation for a dairy farm in Andheri, Mumbai. The owner had no digital presence and relied entirely on word-of-mouth. We set up and optimised their Google Business Profile, built local citations, and implemented a review generation strategy. They now rank #1 for 'fresh milk delivery near me' in their area.",
  },
  {
    id: "5",
    title: "Coaching Centre UI/UX Redesign",
    client: "Sunrise Coaching Centre",
    category: "ui-ux",
    industry: "Education & Coaching",
    techStack: ["Figma", "Next.js", "Framer Motion", "Tailwind CSS"],
    results: [
      { metric: "Bounce Rate Reduction", value: "-55%" },
      { metric: "Enquiry Form Submissions", value: "+210%" },
      { metric: "Average Session Duration", value: "+4.1 min" },
    ],
    description: "A complete UI/UX redesign for a competitive exam coaching centre in Pune. The old website had a 78% bounce rate and generated almost no online enquiries. We redesigned the entire user experience with a focus on trust signals, course information architecture, and a streamlined enquiry flow. The new design tripled online enquiries within 30 days.",
  },
  {
    id: "6",
    title: "Salon Booking Website",
    client: "Royal Salon & Spa",
    category: "web",
    industry: "Salon & Beauty",
    techStack: ["Next.js", "Calendly API", "Tailwind CSS", "Vercel", "Google Analytics"],
    results: [
      { metric: "Online Bookings", value: "+320%" },
      { metric: "No-show Rate", value: "-60%" },
      { metric: "Monthly Revenue", value: "+Rs. 85,000" },
    ],
    description: "A modern booking website for a premium salon in Chennai with online appointment scheduling, service menu, stylist profiles, and before/after gallery. Integrated with automated WhatsApp reminders to reduce no-shows. The salon went from zero online bookings to 120+ per month within 60 days of launch.",
  },
  {
    id: "7",
    title: "Hotel Website & Direct Booking",
    client: "Hotel Raj Palace",
    category: "web",
    industry: "Hotel & Hospitality",
    techStack: ["Next.js", "Razorpay", "MongoDB", "Tailwind CSS", "Google Analytics"],
    results: [
      { metric: "Direct Bookings", value: "+180%" },
      { metric: "OTA Commission Saved", value: "Rs. 1.2L/month" },
      { metric: "Lighthouse Score", value: "96" },
    ],
    description: "A direct booking website for a heritage hotel in Udaipur, reducing dependence on OTA platforms like MakeMyTrip and Booking.com. The site features a custom room booking engine, virtual tour gallery, and integrated Razorpay payment gateway. Direct bookings increased by 180%, saving over Rs. 1.2 lakh per month in OTA commissions.",
  },
  {
    id: "8",
    title: "Retail Shop E-commerce Platform",
    client: "Kapoor Electronics",
    category: "ecommerce",
    industry: "Retail Electronics",
    techStack: ["Next.js", "Razorpay", "MongoDB", "Shiprocket", "Tailwind CSS"],
    results: [
      { metric: "Monthly Online Revenue", value: "Rs. 3.8L" },
      { metric: "Product Catalogue", value: "500+ Items" },
      { metric: "Repeat Purchase Rate", value: "42%" },
    ],
    description: "A full-featured e-commerce store for an electronics retailer in Lajpat Nagar, Delhi, with 500+ products, GST-compliant invoicing, and Shiprocket delivery integration. The store includes a product comparison feature, EMI options via Razorpay, and an automated inventory management system.",
  },
];

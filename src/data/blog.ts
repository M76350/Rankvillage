export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: "seo-tips" | "web-dev" | "ai-tools" | "local-business" | "speed";
  publishedAt: string;
  readTime: number;
  featured: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "how-to-rank-1-google-maps-indian-restaurant",
    title: "How to Rank #1 on Google Maps for Your Indian Restaurant in 2025",
    excerpt: "A step-by-step guide to dominating local search results for your restaurant. Learn how to optimise your Google Business Profile, generate reviews, and outrank competitors in your city.",
    category: "seo-tips",
    publishedAt: "2025-01-15",
    readTime: 8,
    featured: true,
  },
  {
    id: "2",
    slug: "nextjs-website-local-business-india",
    title: "Why Every Indian Local Business Needs a Next.js Website in 2025",
    excerpt: "Static sites built with Next.js load 3x faster than WordPress, rank higher on Google, and cost less to host. Here is why Indian businesses are switching and how to get started.",
    category: "web-dev",
    publishedAt: "2025-01-22",
    readTime: 6,
    featured: false,
  },
  {
    id: "3",
    slug: "ai-review-management-local-business",
    title: "How AI is Revolutionising Review Management for Indian Local Businesses",
    excerpt: "Responding to every Google review manually takes hours. AI-powered review management tools can respond in seconds, in Hindi and English, improving your star rating and customer trust.",
    category: "ai-tools",
    publishedAt: "2025-02-03",
    readTime: 5,
    featured: false,
  },
  {
    id: "4",
    slug: "local-seo-guide-small-business-india",
    title: "The Complete Local SEO Guide for Small Businesses in India (2025)",
    excerpt: "Everything you need to know about Local SEO  -  from Google Business Profile optimisation to citation building and review strategies. Written specifically for Indian local businesses.",
    category: "local-business",
    publishedAt: "2025-02-10",
    readTime: 12,
    featured: false,
  },
  {
    id: "5",
    slug: "core-web-vitals-improve-website-speed",
    title: "Core Web Vitals Explained: How to Fix Your Website Speed and Rank Higher",
    excerpt: "Google uses Core Web Vitals as a ranking factor. Learn what LCP, FID, and CLS mean, how to measure them, and the exact fixes that will improve your scores from red to green.",
    category: "speed",
    publishedAt: "2025-02-18",
    readTime: 7,
    featured: false,
  },
  {
    id: "6",
    slug: "google-ads-vs-seo-indian-business",
    title: "Google Ads vs SEO: Which is Better for Your Indian Local Business?",
    excerpt: "Both Google Ads and SEO can drive customers to your business, but they work differently. This guide breaks down the costs, timelines, and ROI of each approach for Indian local businesses.",
    category: "seo-tips",
    publishedAt: "2025-03-01",
    readTime: 9,
    featured: false,
  },
  {
    id: "7",
    slug: "ecommerce-website-indian-payment-gateway",
    title: "How to Build an E-commerce Website with Indian Payment Gateways (Razorpay, UPI)",
    excerpt: "A practical guide to setting up an online store for Indian customers with Razorpay, UPI, COD, and GST-compliant invoicing. Includes a comparison of the top Indian payment gateways.",
    category: "web-dev",
    publishedAt: "2025-03-12",
    readTime: 10,
    featured: false,
  },
  {
    id: "8",
    slug: "chatgpt-content-marketing-local-business",
    title: "How to Use ChatGPT for Content Marketing as an Indian Local Business",
    excerpt: "AI writing tools can help you create blog posts, social media captions, and Google Business Profile posts in minutes. Here is how to use them effectively without sounding robotic.",
    category: "ai-tools",
    publishedAt: "2025-03-20",
    readTime: 6,
    featured: false,
  },
  {
    id: "9",
    slug: "digital-marketing-dairy-farm-india",
    title: "Digital Marketing for Dairy Farms in India: A Complete Guide",
    excerpt: "Dairy farms are one of the most underserved industries in digital marketing. Learn how to get your dairy on Google Maps, build a home delivery customer base, and grow online.",
    category: "local-business",
    publishedAt: "2025-04-02",
    readTime: 7,
    featured: false,
  },
  {
    id: "10",
    slug: "website-speed-optimisation-wordpress-nextjs",
    title: "WordPress vs Next.js: Which is Faster for Indian Business Websites?",
    excerpt: "We tested 50 Indian business websites on both platforms. The results are clear  -  Next.js sites score 40+ points higher on Lighthouse and load 3x faster on Indian mobile networks.",
    category: "speed",
    publishedAt: "2025-04-15",
    readTime: 8,
    featured: false,
  },
];

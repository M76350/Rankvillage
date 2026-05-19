export interface CaseStudy {
  id: string;
  slug: string;
  clientName: string;
  industry: string;
  challenge: string;
  solution: string;
  metrics: {
    trafficGrowth: string;
    rankingImprovement: string;
    lighthouseScore: string;
    revenueImpact?: string;
    timeframe: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "1",
    slug: "sharma-restaurant-local-seo",
    clientName: "Sharma Family Restaurant",
    industry: "Restaurant",
    challenge: "Sharma Family Restaurant in Dwarka, Delhi had been operating for 12 years but was invisible online. They had no Google Business Profile, no website, and were losing customers to newer restaurants that appeared on Google Maps. Monthly footfall had declined 30% over two years as competitors gained digital visibility.",
    solution: "We built a mobile-first website with an online menu and table booking system, set up and fully optimised their Google Business Profile with professional photos and regular posts, built citations across 60+ local directories, and implemented a review generation strategy that collected 200+ genuine reviews in 90 days.",
    metrics: {
      trafficGrowth: "+2,300%",
      rankingImprovement: "#1 on Google Maps",
      lighthouseScore: "97",
      revenueImpact: "+Rs. 1.8L/month",
      timeframe: "45 days",
    },
    testimonial: {
      quote: "RankVillage AI ne meri restaurant ko Google Maps pe #1 rank dilaya sirf 45 din mein. Pehle 200 views the, ab 4,800+ monthly views hain. Customers khud aa rahe hain!",
      author: "Rajesh Sharma",
      role: "Owner, Sharma Family Restaurant",
    },
  },
  {
    id: "2",
    slug: "powerfit-gym-digital-transformation",
    clientName: "PowerFit Gym",
    industry: "Gym & Fitness",
    challenge: "PowerFit Gym in Koramangala, Bangalore had a 3.8-star Google rating due to unresponded negative reviews, no online membership purchase option, and was losing potential members to competitor gyms with better digital presence. The owner was spending 2 hours daily manually responding to reviews.",
    solution: "We deployed our AI review management system to automatically respond to all reviews in Hindi and English, built an e-commerce platform for online membership purchases, ran targeted Meta Ads campaigns to reach fitness enthusiasts in a 5km radius, and optimised their Google Business Profile with before/after transformation photos.",
    metrics: {
      trafficGrowth: "+340%",
      rankingImprovement: "3.8 to 4.9 Stars",
      lighthouseScore: "94",
      revenueImpact: "+65 new members/month",
      timeframe: "60 days",
    },
    testimonial: {
      quote: "The AI review reply feature is amazing! It replies to all my gym reviews automatically in perfect Hindi and English. My rating went from 3.8 to 4.9 stars in 2 months.",
      author: "Priya Fitness",
      role: "Owner, PowerFit Gym",
    },
  },
  {
    id: "3",
    slug: "meena-medical-seo-campaign",
    clientName: "Meena Medical Store",
    industry: "Medical & Pharmacy",
    challenge: "Meena Medical Store in Hyderabad was struggling to compete with large pharmacy chains like MedPlus and Apollo Pharmacy that dominated local search results. Despite being a trusted neighbourhood pharmacy for 20 years, they were invisible online and losing customers who searched for medicines online.",
    solution: "We conducted a comprehensive SEO audit, identified 47 high-intent local keywords, created location-specific landing pages for each neighbourhood they served, built 80+ local citations, implemented medical schema markup, and ran a Google Ads campaign targeting urgent medicine searches.",
    metrics: {
      trafficGrowth: "+420%",
      rankingImprovement: "Page 5 to Page 1",
      lighthouseScore: "91",
      revenueImpact: "+Rs. 95,000/month",
      timeframe: "90 days",
    },
    testimonial: {
      quote: "Competitor analysis feature ne mujhe bataya ki mere competitors kya kar rahe hain. Maine unse better strategy banai aur ab mera shop unse upar rank karta hai.",
      author: "Meena Agarwal",
      role: "Owner, Meena Medical Store",
    },
  },
  {
    id: "4",
    slug: "sunrise-coaching-website-redesign",
    clientName: "Sunrise Coaching Centre",
    industry: "Education & Coaching",
    challenge: "Sunrise Coaching Centre in Pune had a 10-year-old website with a 78% bounce rate, no mobile optimisation, and generated fewer than 5 online enquiries per month. The centre was spending Rs. 50,000/month on newspaper ads with poor ROI while competitors with modern websites were capturing all online leads.",
    solution: "We redesigned the entire website with a focus on trust signals, clear course information architecture, and a streamlined enquiry flow. We implemented technical SEO fixes, created content for 25 competitive exam keywords, set up Google Ads for high-intent searches, and built a WhatsApp integration for instant lead follow-up.",
    metrics: {
      trafficGrowth: "+280%",
      rankingImprovement: "#2 for 'coaching centre Pune'",
      lighthouseScore: "96",
      revenueImpact: "+210% online enquiries",
      timeframe: "30 days",
    },
    testimonial: {
      quote: "Our online enquiries went from 5 to 65 per month after the redesign. The new website pays for itself every single day.",
      author: "Sunil Patil",
      role: "Director, Sunrise Coaching Centre",
    },
  },
  {
    id: "5",
    slug: "hotel-raj-palace-direct-bookings",
    clientName: "Hotel Raj Palace",
    industry: "Hotel & Hospitality",
    challenge: "Hotel Raj Palace in Udaipur was paying 18-22% commission to OTA platforms (MakeMyTrip, Booking.com) on every booking, which was severely impacting profitability. They had no direct booking capability and no digital marketing strategy to attract guests without OTA dependency.",
    solution: "We built a stunning hotel website with a custom direct booking engine, virtual room tour gallery, and Razorpay payment integration. We implemented a Local SEO strategy targeting 'hotels in Udaipur' keywords, ran Google Ads for high-intent travel searches, and created a loyalty programme to encourage repeat direct bookings.",
    metrics: {
      trafficGrowth: "+180%",
      rankingImprovement: "#3 for 'hotels in Udaipur'",
      lighthouseScore: "96",
      revenueImpact: "Rs. 1.2L/month OTA commission saved",
      timeframe: "60 days",
    },
  },
];

export interface Industry {
  slug: string;
  name: string;
  icon: string;
  description: string;
  useCases: string[];
  stats: Array<{ value: string; label: string }>;
  color: string;
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "restaurant",
    name: "Restaurant & Dhaba",
    icon: "UtensilsCrossed",
    description: "Help hungry customers find your restaurant on Google Maps and drive more walk-ins, takeaway orders, and table bookings with targeted local SEO and a fast, mobile-first website.",
    useCases: [
      "Rank #1 for 'restaurant near me' in your area",
      "Online menu with WhatsApp ordering integration",
      "Google Business Profile with photos and regular posts",
      "Automated review responses in Hindi and English",
      "Table booking system with WhatsApp confirmation",
    ],
    stats: [
      { value: "+2,300%", label: "Avg Google Views" },
      { value: "45 Days", label: "To Rank #1" },
      { value: "180+", label: "New Customers/Month" },
    ],
    color: "orange",
  },
  {
    slug: "dairy",
    name: "Dairy Farm",
    icon: "Milk",
    description: "Connect dairy farms with local customers searching for fresh milk, paneer, and dairy products. Build trust with verified reviews and rank for high-intent local searches.",
    useCases: [
      "Rank for 'fresh milk delivery near me' searches",
      "Home delivery order management system",
      "Google Business Profile with product listings",
      "WhatsApp-based subscription management",
      "Local citation building across dairy directories",
    ],
    stats: [
      { value: "+45", label: "Daily Orders Added" },
      { value: "3.2 to 4.8", label: "Star Rating Growth" },
      { value: "#1", label: "Google Maps Rank" },
    ],
    color: "blue",
  },
  {
    slug: "real-estate",
    name: "Real Estate",
    icon: "Building2",
    description: "Generate high-quality property leads with targeted SEO and Google Ads. Rank for location-specific property searches and showcase listings with a professional website.",
    useCases: [
      "Rank for 'flats for sale in [city]' keywords",
      "Property listing website with search and filters",
      "Google Ads for high-intent buyer and renter searches",
      "Virtual tour integration for remote property viewing",
      "Lead capture forms with instant WhatsApp notification",
    ],
    stats: [
      { value: "+320%", label: "Property Enquiries" },
      { value: "?8", label: "Cost Per Lead" },
      { value: "30 Days", label: "Avg Lead to Sale" },
    ],
    color: "purple",
  },
  {
    slug: "coaching",
    name: "Coaching Centre",
    icon: "GraduationCap",
    description: "Fill your coaching centre with students by ranking for competitive exam keywords, running targeted ads, and building a website that converts visitors into enrolled students.",
    useCases: [
      "Rank for 'IIT coaching near me' and similar searches",
      "Course catalogue with online enquiry and admission forms",
      "Google Ads targeting students and parents",
      "Student testimonials and result showcase pages",
      "WhatsApp integration for instant enquiry follow-up",
    ],
    stats: [
      { value: "+210%", label: "Online Enquiries" },
      { value: "-55%", label: "Bounce Rate" },
      { value: "65/month", label: "New Admissions" },
    ],
    color: "cyan",
  },
  {
    slug: "retail",
    name: "Retail Shop",
    icon: "ShoppingBag",
    description: "Drive more foot traffic and online sales for your retail shop with local SEO, an e-commerce website, and targeted digital advertising to reach customers in your area.",
    useCases: [
      "Rank for product-specific local searches",
      "E-commerce store with inventory management",
      "Google Shopping Ads for product visibility",
      "Local SEO to drive in-store foot traffic",
      "WhatsApp catalogue integration for quick orders",
    ],
    stats: [
      { value: "+180%", label: "Online Revenue" },
      { value: "42%", label: "Repeat Purchase Rate" },
      { value: "+95", label: "Monthly New Customers" },
    ],
    color: "green",
  },
  {
    slug: "medical",
    name: "Medical Store & Clinic",
    icon: "Stethoscope",
    description: "Help patients find your clinic or medical store when they need it most. Rank for urgent medical searches and build trust with verified reviews and a professional online presence.",
    useCases: [
      "Rank for 'medical store near me' and 'doctor near me'",
      "Online appointment booking for clinics",
      "Google Ads for urgent healthcare searches",
      "Patient review management and reputation building",
      "Health content marketing for organic traffic",
    ],
    stats: [
      { value: "+420%", label: "Organic Traffic" },
      { value: "34", label: "Page 1 Keywords" },
      { value: "+95", label: "Monthly New Patients" },
    ],
    color: "blue",
  },
  {
    slug: "gym",
    name: "Gym & Fitness Centre",
    icon: "Dumbbell",
    description: "Attract fitness enthusiasts in your area with targeted local SEO, social media ads, and a website that showcases your facilities and makes it easy to join online.",
    useCases: [
      "Rank for 'gym near me' and 'fitness centre in [city]'",
      "Online membership purchase and renewal system",
      "Meta Ads targeting fitness enthusiasts by location",
      "AI-powered review management for star rating growth",
      "Trainer profiles and class schedule pages",
    ],
    stats: [
      { value: "3.8 to 4.9", label: "Star Rating" },
      { value: "+65", label: "New Members/Month" },
      { value: "+340%", label: "Website Traffic" },
    ],
    color: "purple",
  },
  {
    slug: "hotel",
    name: "Hotel & Lodge",
    icon: "Hotel",
    description: "Reduce OTA dependency and increase direct bookings with a professional hotel website, local SEO, and targeted Google Ads that reach travellers planning their trip.",
    useCases: [
      "Direct booking engine to reduce OTA commissions",
      "Rank for 'hotels in [city]' and travel keywords",
      "Google Ads targeting travellers searching for accommodation",
      "Virtual room tours and photo gallery",
      "Review management across Google, TripAdvisor, and OTAs",
    ],
    stats: [
      { value: "+180%", label: "Direct Bookings" },
      { value: "?1.2L", label: "OTA Commission Saved/Month" },
      { value: "#3", label: "Google Ranking" },
    ],
    color: "cyan",
  },
  {
    slug: "automobile",
    name: "Automobile Service",
    icon: "Car",
    description: "Get more service bookings and spare parts customers with local SEO, Google Ads, and a website that builds trust and makes it easy to book a service appointment.",
    useCases: [
      "Rank for 'car service near me' and 'bike repair near me'",
      "Online service booking with slot management",
      "Google Ads for urgent repair and service searches",
      "Service history tracking for repeat customers",
      "WhatsApp service reminders and follow-ups",
    ],
    stats: [
      { value: "4.2x", label: "Return on Ad Spend" },
      { value: "+180", label: "Monthly Service Bookings" },
      { value: "-52%", label: "Cost Per Lead" },
    ],
    color: "orange",
  },
  {
    slug: "salon",
    name: "Salon & Spa",
    icon: "Scissors",
    description: "Fill your appointment book with local SEO, Instagram ads, and an online booking system that makes it effortless for customers to book their next visit.",
    useCases: [
      "Rank for 'salon near me' and 'beauty parlour in [city]'",
      "Online appointment booking with stylist selection",
      "Instagram and Facebook Ads for beauty audiences",
      "Before/after gallery to showcase transformations",
      "Loyalty programme and referral system",
    ],
    stats: [
      { value: "+320%", label: "Online Bookings" },
      { value: "?6.50", label: "Cost Per Lead via Meta Ads" },
      { value: "-60%", label: "No-show Rate" },
    ],
    color: "pink",
  },
];

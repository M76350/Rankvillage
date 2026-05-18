import type { Metadata } from "next";
import "./globals.css";
import { AuthProvider } from "@/lib/auth-context";

export const metadata: Metadata = {
  metadataBase: new URL("https://rankvillage.ai"),
  title: "AI SEO Tools for Indian Local Businesses | RankVillage AI",
  description:
    "RankVillage AI helps Indian local businesses grow using AI-powered SEO tools, Google Business optimization, review reply generation, schema generators, and local ranking solutions.",
  keywords:
    "local SEO India, AI SEO tools, Google Business optimization, local business SEO, review reply generator, schema generator, keyword ranking tracker, Indian business SEO",
  authors: [{ name: "RankVillage AI" }],
  creator: "RankVillage AI",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://rankvillage.ai",
    siteName: "RankVillage AI",
    title: "AI SEO Tools for Indian Local Businesses | RankVillage AI",
    description:
      "RankVillage AI helps Indian local businesses grow using AI-powered SEO tools, Google Business optimization, review reply generation, schema generators, and local ranking solutions.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RankVillage AI" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI SEO Tools for Indian Local Businesses | RankVillage AI",
    description: "Grow your local business with AI-powered SEO tools.",
    images: ["/og-image.png"],
    creator: "@rankvillageai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  alternates: { canonical: "https://rankvillage.ai" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "RankVillage AI",
              applicationCategory: "BusinessApplication",
              description: "AI-powered Local SEO and Business Growth platform for Indian local businesses",
              url: "https://rankvillage.ai",
              offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
              operatingSystem: "Web",
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}

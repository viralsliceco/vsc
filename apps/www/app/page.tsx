import dynamic from 'next/dynamic';
import Header from "../components/header";
import HeroSection from "../components/hero";
import ViralVideosShowcase from "../components/viral-videos";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Viral Slice Co.",
  "description": "Transform your brand with viral marketing that drives explosive growth. Viral Slice Co. creates content that captivates audiences and delivers measurable results for businesses worldwide.",
  "url": "https://viralsliceco.com",
  "logo": "https://viralsliceco.com/vsc-large.png",
  "image": "https://viralsliceco.com/vsc-large.png",
  "sameAs": [
    "https://twitter.com/viralsliceco",
    "https://instagram.com/viralsliceco",
    "https://linkedin.com/company/viralsliceco"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "availableLanguage": "English"
  },
  "areaServed": "Worldwide",
  "serviceType": [
    "Viral Marketing",
    "Content Marketing",
    "Social Media Marketing",
    "Brand Strategy",
    "Digital Marketing"
  ],
  "founder": {
    "@type": "Person",
    "name": "Viral Slice Co. Founder"
  }
};

const ServicesSection = dynamic(() => import("../components/services"), {
  loading: () => <div className="min-h-[600px] bg-black animate-pulse flex items-center justify-center"><div className="text-gray-600">Loading Services...</div></div>
});
const TargetAudience = dynamic(() => import("../components/target-audience"), {
  loading: () => <div className="min-h-[500px] bg-black animate-pulse flex items-center justify-center"><div className="text-gray-600">Loading Audience...</div></div>
});
const ResultsIntroSection = dynamic(() => import("../components/results-intro"), {
  loading: () => <div className="min-h-[400px] bg-black animate-pulse flex items-center justify-center"><div className="text-gray-600">Loading Results...</div></div>
});
const ResultsSection = dynamic(() => import("../components/results"), {
  loading: () => <div className="min-h-[700px] bg-black animate-pulse flex items-center justify-center"><div className="text-gray-600">Loading Carousel...</div></div>
});
const FounderSection = dynamic(() => import("../components/founder"), {
  loading: () => <div className="min-h-[800px] bg-black animate-pulse flex items-center justify-center"><div className="text-gray-600">Loading About...</div></div>
});
// const TestimonialsSection = dynamic(() => import("../components/testimonials"), {
//   loading: () => <div className="min-h-[400px] bg-black animate-pulse flex items-center justify-center"><div className="text-gray-600">Loading Testimonials...</div></div>
// });
const Footer = dynamic(() => import("../components/footer"), {
  loading: () => <div className="min-h-[200px] bg-black animate-pulse flex items-center justify-center"><div className="text-gray-600">Loading Footer...</div></div>
});

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="min-h-screen bg-black">
        <Header />
        <main>
          <HeroSection />
          <ViralVideosShowcase />
          <ServicesSection />
          <TargetAudience />
          <ResultsIntroSection />
          <ResultsSection />
          <FounderSection />
          {/* <TestimonialsSection /> */}
        </main>
        <Footer />
      </div>
    </>
  );
}

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
  loading: () => <div className="h-96 bg-black animate-pulse" />
});
const TargetAudience = dynamic(() => import("../components/target-audience"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
});
const ResultsIntroSection = dynamic(() => import("../components/results-intro"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
});
const ResultsSection = dynamic(() => import("../components/results"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
});
const FounderSection = dynamic(() => import("../components/founder"), {
  loading: () => <div className="h-96 bg-black animate-pulse" />
});
// const TestimonialsSection = dynamic(() => import("../components/testimonials"), {
//   loading: () => <div className="h-96 bg-black animate-pulse" />
// });
const Footer = dynamic(() => import("../components/footer"), {
  loading: () => <div className="h-32 bg-black animate-pulse" />
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

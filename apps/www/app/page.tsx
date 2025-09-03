import dynamic from 'next/dynamic';
import Header from "../components/header";
import HeroSection from "../components/hero";
import ViralVideosShowcase from "../components/viral-videos";

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
  );
}

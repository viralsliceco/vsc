import Header from "../components/header";
import HeroSection from "../components/hero";
import ServicesSection from "../components/services";
import ResultsSection from "../components/results";
import FounderSection from "../components/founder";
import TestimonialsSection from "../components/testimonials";
import Footer from "../components/footer";
import ViralVideosShowcase from "../components/viral-videos";
import TargetAudience from "../components/target-audience";
import ResultsIntroSection from "../components/results-intro";

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
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
}

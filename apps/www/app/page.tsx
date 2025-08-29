import Header from "../components/header";
import HeroSection from "../components/hero";
import BrandLogos from "../components/brand-logos";
import ServicesSection from "../components/services";
import ResultsSection from "../components/results";
import FounderSection from "../components/founder";
import TestimonialsSection from "../components/testimonials";
import Footer from "../components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-black">
      {/* <Header /> */}
      <HeroSection />
      {/* <BrandLogos /> */}
      <ServicesSection />
      <ResultsSection />
      <FounderSection />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}

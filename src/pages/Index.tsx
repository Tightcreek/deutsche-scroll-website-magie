import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LeistungenSection from "@/components/LeistungenSection";
import ReviewsSection from "@/components/ReviewsSection";
import UnternehmenSection from "@/components/UnternehmenSection";
import KontaktSection from "@/components/KontaktSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <LeistungenSection />
      <ReviewsSection />
      <UnternehmenSection />
      <KontaktSection />
      <Footer />
    </div>
  );
};

export default Index;

import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-manufacturing.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/90 via-secondary/70 to-primary/80"></div>
      </div>

      {/* Hero Pattern Overlay */}
      <div className="absolute inset-0 hero-pattern"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            <span className="gradient-text">GANZ SCHÖN GUT</span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary-foreground/90 mb-4">
            GANZHEITLICHER SERVICE VON ANFANG BIS ENDE
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-3xl mx-auto">
            Seit 25 Jahren spezialisiert auf CNC-Teilefertigung, Baugruppenmontage und Prototypenfertigung. 
            Höchste Ansprüche an Qualität, Termintreue und Kundenfreundlichkeit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => scrollToSection('leistungen')}
              className="animate-scale-in"
            >
              Unsere Leistungen
            </Button>
            <Button 
              variant="industrial" 
              size="xl"
              onClick={() => scrollToSection('kontakt')}
              className="animate-scale-in"
            >
              Jetzt Anfragen
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">25+</div>
              <div className="text-primary-foreground/80">Jahre Erfahrung</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">50+</div>
              <div className="text-primary-foreground/80">Profis im Team</div>
            </div>
            <div className="text-center animate-slide-up">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">4.1★</div>
              <div className="text-primary-foreground/80">Kundenbewertung</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('leistungen')}
          className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
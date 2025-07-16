import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-card border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold gradient-text">D+E GmbH</h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('leistungen')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Leistungen
              </button>
              <button
                onClick={() => scrollToSection('unternehmen')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Unternehmen
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                Kontakt
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>

        <div id="mobile-menu" className="md:hidden hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('leistungen')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Leistungen
            </button>
            <button
              onClick={() => scrollToSection('unternehmen')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Unternehmen
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">D+E GmbH</h3>
            <p className="text-secondary-foreground/80 text-sm mb-4">
              Ihr zuverlässiger Partner für CNC-Teilefertigung, 
              Baugruppenmontage und Prototypenfertigung seit über 25 Jahren.
            </p>
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/80">
              <span className="w-2 h-2 bg-primary rounded-full"></span>
              ISO 9001 zertifiziert
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#leistungen" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#unternehmen" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Unternehmen
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Leistungen</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-secondary-foreground/80">CNC-Teilefertigung</li>
              <li className="text-secondary-foreground/80">Baugruppenmontage</li>
              <li className="text-secondary-foreground/80">Service aus einer Hand</li>
              <li className="text-secondary-foreground/80">Prototypenfertigung</li>
              <li className="text-secondary-foreground/80">Sondermaschinenbau</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Kontakt</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div className="text-secondary-foreground/80">
                  D+E GmbH<br />
                  Gumbinnenstraße 4<br />
                  56566 Neuwied
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+4926318244" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  +49 2631 82 44-0
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:info@due-group.com" className="text-secondary-foreground/80 hover:text-primary transition-colors">
                  info@due-group.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4 text-primary flex-shrink-0" />
                <a 
                  href="https://d-u-e.de" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                >
                  www.d-u-e.de
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-secondary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-secondary-foreground/60">
            <div>
              © 2024 D+E GmbH. Alle Rechte vorbehalten.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-colors">
                Impressum
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Datenschutz
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                AGB
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
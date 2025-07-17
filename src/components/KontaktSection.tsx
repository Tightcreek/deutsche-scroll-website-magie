import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const KontaktSection = () => {
  return (
    <section id="kontakt" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Kontakt
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Haben Sie Fragen oder benötigen Sie ein Angebot? 
            Wir freuen uns auf Ihre Nachricht und antworten innerhalb von 24 Stunden.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <MapPin className="w-5 h-5" />
                  Adresse
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  D+E GmbH<br />
                  Gumbinnenstraße 4<br />
                  56566 Neuwied<br />
                  Deutschland
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Phone className="w-5 h-5" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="tel:+4926318244" className="hover:text-primary transition-colors">
                    +49 2631 82 44-0
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Mail className="w-5 h-5" />
                  E-Mail
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  <a href="mailto:info@due-group.com" className="hover:text-primary transition-colors">
                    info@due-group.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card animate-slide-up">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                  <Clock className="w-5 h-5" />
                  Öffnungszeiten
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Montag - Donnerstag:</span>
                    <span>8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Freitag:</span>
                    <span>8:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag - Sonntag:</span>
                    <span>Geschlossen</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card animate-scale-in">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Schnellanfrage</CardTitle>
                <CardDescription>
                  Nutzen Sie unser Kontaktformular für eine schnelle Anfrage. 
                  Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Ihr Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-Mail-Adresse *</Label>
                    <Input id="email" type="email" placeholder="ihre.email@beispiel.de" required />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon (optional)</Label>
                    <Input id="phone" type="tel" placeholder="+49 123 456789" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Unternehmen (optional)</Label>
                    <Input id="company" placeholder="Ihr Unternehmen" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Betreff</Label>
                  <Input id="subject" placeholder="Anfrage bezüglich..." />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Nachricht *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Beschreiben Sie bitte Ihr Anliegen oder Ihre Anfrage..."
                    className="min-h-[120px]"
                    required
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="rounded border-border"
                    required
                  />
                  <Label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Ich bin mit der Übermittlung meiner Daten an die D+E GmbH einverstanden 
                    und habe die Datenschutzerklärung gelesen. *
                  </Label>
                </div>

                <Button variant="cta" size="lg" className="w-full md:w-auto">
                  Nachricht senden
                </Button>

                <div className="text-sm text-muted-foreground">
                  * Pflichtfelder
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-card rounded-lg p-8 shadow-card animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            Sie wollen mehr wissen?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nutzen Sie unsere Online-Anfrage für ein kostenloses und unverbindliches Angebot. 
            Unser erfahrenes Team berät Sie gerne bei der optimalen Lösung für Ihr Projekt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              <Phone className="w-5 h-5 mr-2" />
              Jetzt anrufen
            </Button>
            <Button variant="industrial" size="xl">
              <Mail className="w-5 h-5 mr-2" />
              E-Mail schreiben
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KontaktSection;
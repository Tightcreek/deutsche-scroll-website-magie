import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const LeistungenSection = () => {
  const services = [
    {
      title: "CNC-Teilefertigung",
      description: "Präzisionsteile aus verschiedensten Werkstoffen - von Stahl über Aluminium bis hin zu Kunststoff. Maßgenaue Arbeit nach modernsten Standards.",
      features: [
        "Einzelfertigung oder (Klein-)Serie",
        "Verschiedenste Werkstoffe",
        "Modernste CNC-Technologie",
        "Höchste Präzision"
      ]
    },
    {
      title: "Service aus einer Hand",
      description: "Ganzheitlicher Service von der Anfrage bis zur Lieferung. Wir übernehmen Konstruktion, Fertigung, Veredelung und Montage.",
      features: [
        "Komplettlösung",
        "Konstruktion & Entwicklung",
        "Termingerechte Umsetzung",
        "Qualitätssicherung"
      ]
    },
    {
      title: "Baugruppenmontage",
      description: "Professionelle Montage komplexer Baugruppen mit höchster Sorgfalt und Präzision. Auch anspruchsvolle Materialien sind kein Problem.",
      features: [
        "Komplexe Baugruppen",
        "Verschiedene Materialien",
        "Qualitätskontrolle",
        "Dokumentation"
      ]
    },
    {
      title: "Prototypenfertigung",
      description: "Schnelle und kostengünstige Prototypenerstellung für Ihre Entwicklungsprojekte. Von der Idee zum fertigen Prototyp.",
      features: [
        "Schnelle Umsetzung",
        "Kosteneffizient",
        "Entwicklungsbegleitung",
        "Iterative Optimierung"
      ]
    }
  ];

  const advantages = [
    {
      icon: "⚡",
      title: "Schnell",
      points: [
        "Zügige Antwort auf Ihre Fragen",
        "Zeitnahes Angebot",
        "Schneller Versand",
        "Exklusiver 24-Stundenservice"
      ]
    },
    {
      icon: "🔒",
      title: "Verlässlich",
      points: [
        "Termintreue und Handschlag-Qualität",
        "Termingerecht und hochwertig",
        "Auch komplexe Aufgaben und anspruchsvolle Materialien"
      ]
    },
    {
      icon: "🎯",
      title: "Genau",
      points: [
        "Maßgenaue Arbeit nach modernsten Standards",
        "Einzelfertigung oder (Klein-)Serie"
      ]
    }
  ];

  return (
    <section id="leistungen" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Unsere Leistungen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Wir bieten Ihnen ganzheitliche Lösungen in der Präzisionsfertigung - 
            von der ersten Idee bis zum fertigen Produkt.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up border-border/50">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Advantages */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Vorteile von D+E
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center animate-scale-in">
                <div className="text-4xl mb-4">{advantage.icon}</div>
                <h4 className="text-xl font-bold mb-4 text-primary">{advantage.title}</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {advantage.points.map((point, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="bg-card rounded-lg p-8 shadow-card">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Ausgezeichneter Service von Anfang bis Ende
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {['Anfrage', 'Fertigung', 'Veredelung', 'Montage', 'Lieferung'].map((step, index) => (
              <div key={index} className="text-center animate-fade-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mx-auto mb-4">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-primary">{step}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Nutzen Sie unsere Schnellanfrage!</h3>
          <p className="text-muted-foreground mb-8">
            Erhalten Sie ein detailliertes Angebot innerhalb von 24 Stunden
          </p>
          <Button variant="cta" size="xl" className="animate-scale-in">
            Jetzt Anfrage stellen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LeistungenSection;
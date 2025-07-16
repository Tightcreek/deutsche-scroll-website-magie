import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const UnternehmenSection = () => {
  const whyChooseUs = [
    "Wir sind ein eingespieltes Team",
    "Wir beschäftigen 50 Profis",
    "Wir haben ein Ohr für Ihre Bedürfnisse",
    "Wir produzieren termingerecht und hochwertig",
    "Wir verfügen über mehr als 25 Jahre Spezialerfahrung",
    "Wir überzeugen mit Termintreue und Handschlag-Qualität"
  ];

  const companyValues = [
    {
      title: "Qualität",
      description: "Höchste Standards in der Präzisionsfertigung seit über 25 Jahren.",
      icon: "🏆"
    },
    {
      title: "Erfahrung",
      description: "Über 25 Jahre Expertise in CNC-Fertigung und Baugruppenmontage.",
      icon: "⚙️"
    },
    {
      title: "Innovation",
      description: "Modernste Technologien und kontinuierliche Weiterentwicklung.",
      icon: "💡"
    },
    {
      title: "Zuverlässigkeit",
      description: "Termintreue und Handschlag-Qualität sind unsere Markenzeichen.",
      icon: "🤝"
    }
  ];

  const expertise = [
    "CNC-Drehen und Fräsen",
    "Präzisionsteile aus Metall, NE-Metall und Kunststoff",
    "Baugruppenmontage",
    "Prototypenfertigung",
    "Sondermaschinenbau",
    "Konstruktion und Entwicklung"
  ];

  return (
    <section id="unternehmen" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-6">
            Unternehmen
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Die D+E GmbH steht seit über 25 Jahren für höchste Qualität in der 
            Präzisionsfertigung und Baugruppenmontage.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Company Story */}
          <div className="animate-slide-up">
            <Card className="h-full shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Über D+E GmbH</CardTitle>
                <CardDescription>
                  Seit 1999 Ihr zuverlässiger Partner für Präzisionsfertigung
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Wir haben uns seit 25 Jahren auf die Herstellung von Präzisionsdrehteilen, 
                  Frästeilen und Baugruppen aus Metall, NE-Metall und Kunststoffen spezialisiert. 
                  Dabei stellen wir höchste Ansprüche an Qualität, Termintreue und Kundenfreundlichkeit.
                </p>
                <p className="text-muted-foreground">
                  Als mittelständisches Unternehmen in Neuwied verbinden wir persönlichen Service 
                  mit modernster Technologie und langjähriger Erfahrung.
                </p>
                <div className="pt-4">
                  <Badge variant="secondary" className="mr-2 mb-2">ISO 9001 zertifiziert</Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">25+ Jahre Erfahrung</Badge>
                  <Badge variant="secondary" className="mr-2 mb-2">50+ Mitarbeiter</Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Why Choose Us */}
          <div className="animate-slide-up">
            <Card className="h-full shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl gradient-text">Warum D+E?</CardTitle>
                <CardDescription>
                  Weil wir einfach mehr können
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {whyChooseUs.map((reason, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Values */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 gradient-text">
            Unsere Werte
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 animate-scale-in">
                <CardHeader>
                  <div className="text-4xl mb-2">{value.icon}</div>
                  <CardTitle className="text-xl text-primary">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Expertise */}
        <div className="bg-card rounded-lg p-8 shadow-card animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 gradient-text">
            Unsere Kernkompetenzen
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {expertise.map((skill, index) => (
              <div key={index} className="flex items-center p-4 bg-background rounded-lg">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="animate-scale-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Jahre Erfahrung</div>
          </div>
          <div className="animate-scale-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Mitarbeiter</div>
          </div>
          <div className="animate-scale-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1000+</div>
            <div className="text-muted-foreground">Projekte</div>
          </div>
          <div className="animate-scale-in">
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Zufriedenheit</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnternehmenSection;
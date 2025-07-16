import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      rating: 5,
      text: "Ausgezeichnete Qualität und termingerechte Lieferung. Das Team von D+E ist sehr professionell und zuverlässig.",
      author: "Michael K.",
      project: "CNC-Teilefertigung"
    },
    {
      rating: 5,
      text: "Kompetente Beratung und präzise Umsetzung unserer Anforderungen. Wir arbeiten schon seit Jahren erfolgreich zusammen.",
      author: "Andrea S.",
      project: "Baugruppenmontage"
    },
    {
      rating: 4,
      text: "Schneller Service und faire Preise. Die Kommunikation ist immer sehr gut und die Ergebnisse überzeugen.",
      author: "Thomas B.",
      project: "Prototypenfertigung"
    },
    {
      rating: 5,
      text: "Hervorragende Arbeit! Auch komplexe Anforderungen werden zuverlässig und in hoher Qualität umgesetzt.",
      author: "Sarah M.",
      project: "Sonderlösungen"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h3 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
            Das sagen unsere Kunden
          </h3>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(4)}
              </div>
              <span className="text-lg font-semibold">4.1/5</span>
              <span className="text-muted-foreground">(9 Google Bewertungen)</span>
            </div>
            <div className="h-6 w-px bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="flex">
                {renderStars(5)}
              </div>
              <span className="text-lg font-semibold">5/5</span>
              <span className="text-muted-foreground">(11 Facebook Bewertungen)</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 animate-slide-up">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  {renderStars(review.rating)}
                </div>
                <p className="text-sm text-muted-foreground italic">"{review.text}"</p>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-sm">
                  <div className="font-semibold text-primary">{review.author}</div>
                  <div className="text-muted-foreground">{review.project}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Über 95% unserer Kunden sind mit unserer Arbeit vollständig zufrieden und 
            empfehlen uns weiter. Qualität, Termintreue und persönlicher Service 
            stehen bei uns an erster Stelle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
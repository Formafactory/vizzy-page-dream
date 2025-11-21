import { Heart, Cake, Users, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const GiftCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const occasions = [
    {
      icon: Heart,
      title: "San Valentino & Anniversari",
      description: "Il regalo romantico più originale per il tuo fidanzato o fidanzata",
    },
    {
      icon: Cake,
      title: "Compleanni Speciali",
      description: "Un regalo unico e personalizzato che rimarrà per sempre",
    },
    {
      icon: Users,
      title: "Regali di Coppia",
      description: "Scultura di coppia per celebrare il vostro amore insieme",
    },
    {
      icon: Home,
      title: "Sculture Famiglia",
      description: "Ricordo commemorativo perfetto per tutta la famiglia",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-virgold/10 via-surface to-background">
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <span className="text-virgold font-bold tracking-widest text-xs uppercase mb-2 block">
              Regali Personalizzati
            </span>
            <h2 className="font-serif text-4xl font-bold mb-4 text-virblack">
              Il Regalo Perfetto per Ogni Occasione
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Che sia per San Valentino, un compleanno, un anniversario o una commemorazione,
              il busto 3D personalizzato è il regalo più originale e romantico che tu possa fare.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {occasions.map((occasion, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-lg hover-lift group transition-all duration-300 border border-border hover:border-virgold"
              >
                <div className="bg-virgold/10 w-14 h-14 rounded-full flex items-center justify-center mb-4 group-hover:bg-virgold/20 transition-colors duration-300">
                  <occasion.icon className="w-7 h-7 text-virgold-dark group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-lg mb-2 text-virblack group-hover:text-virgold-dark transition-colors">
                  {occasion.title}
                </h3>
                <p className="text-sm text-muted-foreground">{occasion.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-virgold-dark hover:bg-virgold-dark/90 text-white font-semibold uppercase tracking-wider shadow-lg shadow-virgold/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-virgold/30"
            >
              <a href="#configurator">Crea il tuo regalo personalizzato</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

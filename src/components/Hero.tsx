import { Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBust from "@/assets/hero-bust.jpg";

export const Hero = () => {
  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-surface">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in">
          <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight mb-6 text-virblack">
            Il Tuo Ricordo, <br />
            <span className="text-virgold-dark italic">Scolpito per Sempre.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Trasforma una semplice foto in un mezzobusto 3D d'autore. Artigianato digitale italiano, spedito in 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-virgold-dark hover:bg-virgold-dark/90 text-white font-semibold uppercase tracking-wider shadow-lg shadow-virgold/20"
            >
              <a href="#configurator">Configura il tuo Busto</a>
            </Button>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Star className="w-4 h-4 text-virgold fill-virgold" />
              4.9/5 da 1200+ clienti
            </div>
          </div>
        </div>
        <div className="relative animate-fade-in">
          <img 
            src={heroBust} 
            alt="Busto 3D personalizzato" 
            className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
          />
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-xs">
            <div className="bg-orange-100 p-2 rounded-full">
              <Trophy className="w-6 h-6 text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-virblack">"Somiglianza Incredibile"</p>
              <p className="text-[10px] text-muted-foreground">Famiglia Rossi - Cliente Verificato</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

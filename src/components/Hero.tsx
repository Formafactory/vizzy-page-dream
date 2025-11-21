import { Star, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useParallax } from "@/hooks/useParallax";
import heroBust from "@/assets/hero-bust.jpg";

export const Hero = () => {
  const { ref: textRef, isVisible: textVisible } = useScrollAnimation(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.2);
  const parallaxRef = useParallax(0.3);

  return (
    <section className="pt-32 pb-12 md:pt-40 md:pb-20 bg-surface overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-virgold/5 via-transparent to-transparent opacity-0 animate-fade-in" />
      
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div 
          ref={textRef}
          className={`transition-all duration-1000 ${
            textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="font-serif text-4xl lg:text-6xl font-bold leading-tight mb-6 text-virblack">
            Il Tuo Ricordo, <br />
            <span className="text-virgold-dark italic text-shimmer">Scolpito per Sempre.</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8 max-w-lg">
            Trasforma una semplice foto in un mezzobusto 3D d'autore. Artigianato digitale italiano, spedito in 48h.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg"
              className="bg-virgold-dark hover:bg-virgold-dark/90 text-white font-semibold uppercase tracking-wider shadow-lg shadow-virgold/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-virgold/30"
            >
              <a href="#configurator">Configura il tuo Busto</a>
            </Button>
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Star className="w-4 h-4 text-virgold fill-virgold animate-pulse" />
              4.9/5 da 1200+ clienti
            </div>
          </div>
        </div>
        <div 
          ref={imageRef}
          className={`relative transition-all duration-1000 delay-200 ${
            imageVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <div ref={parallaxRef} className="parallax">
            <img 
              src={heroBust} 
              alt="Busto 3D personalizzato" 
              className="rounded-lg shadow-2xl w-full max-w-md mx-auto hover-lift transition-all duration-500"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg flex items-center gap-3 max-w-xs hover-lift animate-fade-in animation-delay-500">
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

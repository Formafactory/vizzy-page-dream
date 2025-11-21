import { Upload, Box, Award, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import photoRef from "@/assets/real_photo_1.png";
import wireframe from "@/assets/gallery_bust_wireframe.png";
import marbleBust from "@/assets/gallery_bust_marble_detail.png";

export const TransformationSteps = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: step1Ref, isVisible: step1Visible } = useScrollAnimation(0.2);
  const { ref: step2Ref, isVisible: step2Visible } = useScrollAnimation(0.2);
  const { ref: step3Ref, isVisible: step3Visible } = useScrollAnimation(0.2);

  return (
    <section id="trasformazione" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-orange-50/50 via-transparent to-transparent opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-virgold font-bold tracking-widest text-xs uppercase mb-2 block">
            Come funziona
          </span>
          <h2 className="font-serif text-4xl font-bold mb-4 text-virblack">
            Da foto a scultura 3D personalizzata
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Nessuna competenza tecnica: ci occupiamo noi di trasformare le tue immagini in un <strong>busto 3D da foto</strong> pronto per essere esposto o regalato.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[20%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Step 1 */}
          <div 
            ref={step1Ref}
            className={`relative group transition-all duration-1000 ${
              step1Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white p-2 rounded-full w-40 h-40 mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-all duration-500 border border-border hover-lift">
              <div className="w-full h-full rounded-full overflow-hidden bg-muted relative">
                <img 
                  src={photoRef} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Foto Originale"
                />
                <div className="absolute inset-0 bg-virblack/10 flex items-center justify-center group-hover:bg-virblack/5 transition-all duration-500">
                  <div className="bg-white/90 p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <Upload className="w-5 h-5 text-virblack" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-virgold text-white w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md group-hover:animate-pulse">
                1
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-virblack group-hover:text-virgold transition-colors duration-300">Carica le tue foto</h3>
            <p className="text-sm text-muted-foreground leading-relaxed px-4">
              Carica da <strong>1 a 4 foto</strong> del soggetto (fronte, tre quarti, profilo se possibile).  
              Più angolazioni ci dai, più il <strong>busto 3D personalizzato</strong> sarà fedele al ritratto.
            </p>
          </div>

          {/* Step 2 */}
          <div 
            ref={step2Ref}
            className={`relative group transition-all duration-1000 delay-200 ${
              step2Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white p-2 rounded-full w-40 h-40 mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-all duration-500 border border-border hover-lift group-hover:rotate-3">
              <div className="w-full h-full rounded-full overflow-hidden bg-virblack relative">
                <img 
                  src={wireframe} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" 
                  alt="Modellazione 3D"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Box className="w-8 h-8 text-white opacity-50 group-hover:opacity-70 group-hover:rotate-12 transition-all duration-500" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-virgold text-white w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md group-hover:animate-pulse">
                2
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-virblack group-hover:text-virgold transition-colors duration-300">Scultura 3D digitale</h3>
            <p className="text-sm text-muted-foreground leading-relaxed px-4">
              I nostri artisti 3D scolpiscono virtualmente il volto e il mezzobusto, creando una <strong>scultura 3D personalizzata</strong> pronta per la stampa.
              Lavoriamo su proporzioni, espressione e dettagli.
            </p>
          </div>

          {/* Step 3 */}
          <div 
            ref={step3Ref}
            className={`relative group transition-all duration-1000 delay-[400ms] ${
              step3Visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white p-2 rounded-full w-40 h-40 mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-110 transition-all duration-500 border border-border hover-lift animate-float">
              <div className="w-full h-full rounded-full overflow-hidden bg-muted relative">
                <img 
                  src={marbleBust} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt="Stampa e Finitura"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-virgold text-white w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md group-hover:animate-pulse">
                3
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-virblack group-hover:text-virgold transition-colors duration-300">Stampa 3D & finitura</h3>
            <p className="text-sm text-muted-foreground leading-relaxed px-4">
              Stampiamo il busto in <strong>PLA eco</strong> o <strong>resina premium</strong>, rifiniamo le superfici e applichiamo eventuali finiture 
              (bianco opaco, effetto marmo, effetto legno) per un risultato da galleria.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#configurator" 
            className="inline-flex items-center gap-2 text-virgold font-bold hover:text-virgold/80 transition-all duration-300 border-b-2 border-virgold pb-1 hover:gap-3 group"
          >
            Inizia ora il tuo busto 3D da foto 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

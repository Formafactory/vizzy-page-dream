import { Upload, Box, Award, ArrowRight } from "lucide-react";
import photoRef from "@/assets/photo-reference.jpg";
import wireframe from "@/assets/wireframe-model.jpg";
import marbleBust from "@/assets/marble-bust.jpg";

export const TransformationSteps = () => {
  return (
    <section id="trasformazione" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-orange-50/50 via-transparent to-transparent opacity-60" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-virgold font-bold tracking-widest text-xs uppercase mb-2 block">
            Il Processo
          </span>
          <h2 className="font-serif text-4xl font-bold mb-4 text-virblack">
            La Metamorfosi
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Tre semplici passi per trasformare un'immagine digitale in un'opera d'arte tangibile che durerà per sempre.
          </p>
        </div>

        <div className="relative grid md:grid-cols-3 gap-12 text-center max-w-5xl mx-auto">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[20%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Step 1 */}
          <div className="relative group">
            <div className="bg-white p-2 rounded-full w-40 h-40 mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300 border border-border">
              <div className="w-full h-full rounded-full overflow-hidden bg-muted relative">
                <img 
                  src={photoRef} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                  alt="Foto Originale"
                />
                <div className="absolute inset-0 bg-virblack/10 flex items-center justify-center">
                  <div className="bg-white/90 p-2 rounded-full shadow-sm">
                    <Upload className="w-5 h-5 text-virblack" />
                  </div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-virgold text-white w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md">
                1
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-virblack">Carica la Foto</h3>
            <p className="text-sm text-muted-foreground leading-relaxed px-4">
              Scegli una foto frontale ben illuminata. Il nostro algoritmo, guidato da artisti esperti, analizzerà i tratti somatici.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="bg-white p-2 rounded-full w-40 h-40 mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300 border border-border">
              <div className="w-full h-full rounded-full overflow-hidden bg-virblack relative">
                <img 
                  src={wireframe} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-500" 
                  alt="Modellazione 3D"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Box className="w-8 h-8 text-white opacity-50" />
                </div>
              </div>
              <div className="absolute -top-2 -right-2 bg-virgold text-white w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md">
                2
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-virblack">Modellazione 3D</h3>
            <p className="text-sm text-muted-foreground leading-relaxed px-4">
              Creiamo un modello digitale ad alta fedeltà. Ogni dettaglio viene scolpito virtualmente per garantire una somiglianza del 95%.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="bg-white p-2 rounded-full w-40 h-40 mx-auto mb-6 shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300 border border-border">
              <div className="w-full h-full rounded-full overflow-hidden bg-muted relative">
                <img 
                  src={marbleBust} 
                  className="w-full h-full object-cover" 
                  alt="Stampa e Finitura"
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-virgold text-white w-8 h-8 rounded-full flex items-center justify-center font-serif font-bold text-lg shadow-md">
                3
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl mb-3 text-virblack">Stampa & Finitura</h3>
            <p className="text-sm text-muted-foreground leading-relaxed px-4">
              Stampiamo in alta definizione e rifiniamo a mano. Scegli tra effetto marmo, legno o resina pura.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#configurator" 
            className="inline-flex items-center gap-2 text-virgold font-bold hover:text-virgold/80 transition-colors border-b border-virgold pb-1"
          >
            Inizia la tua creazione <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

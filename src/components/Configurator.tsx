import { useState } from "react";
import { UserCheck, Camera, Award, ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import resinDark from "@/assets/resin-dark-bust.jpg";
import marbleBust from "@/assets/marble-bust.jpg";
import heroBust from "@/assets/hero-bust.jpg";
import photoRef from "@/assets/photo-reference.jpg";

type SizeOption = "piccolo" | "medio" | "grande";
type MaterialOption = "pla" | "resina";

export const Configurator = () => {
  const [selectedSize, setSelectedSize] = useState<SizeOption>("medio");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>("pla");
  const [includeShoulders, setIncludeShoulders] = useState(false);
  const [finishPrice, setFinishPrice] = useState(0);
  const [previewImage, setPreviewImage] = useState(resinDark);
  
  const { ref: configRef, isVisible: configVisible } = useScrollAnimation(0.1);

  const sizes = {
    piccolo: { price: 53.90, height: "10cm", description: "Busto 3D compatto perfetto come statuetta da scrivania" },
    medio: { price: 62.90, height: "15cm", description: "Il nostro formato più richiesto per ritratti e busti commemorativi" },
    grande: { price: 79.90, height: "20cm", description: "Scultura 3D d'impatto per uffici, studi o salotti" },
  };

  const materials = {
    pla: { price: 0, description: "Bioplastica derivata da fonti rinnovabili. Ideale per un busto 3D personalizzato economico ma di qualità, leggero e resistente" },
    resina: { price: 12.58, description: "Per chi cerca un busto 3D professionale: dettagli ultra-definiti, superfici lisce e resa perfetta per sculture commemorative di pregio" },
  };

  const shouldersPrice = 10.80;

  const calculateTotal = () => {
    return (
      sizes[selectedSize].price +
      materials[selectedMaterial].price +
      (includeShoulders ? shouldersPrice : 0) +
      finishPrice
    ).toFixed(2);
  };

  const images = [resinDark, marbleBust, heroBust, photoRef];

  return (
    <section id="configurator" className="py-20 bg-surface">
      <div className="container mx-auto px-4 max-w-6xl">
        <div 
          ref={configRef}
          className={`grid lg:grid-cols-12 gap-12 transition-all duration-1000 ${
            configVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
          {/* Left Column: Product Preview */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border mb-6 hover-lift group">
              <img 
                src={previewImage} 
                alt="Anteprima busto" 
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  onClick={() => setPreviewImage(img)}
                  src={img}
                  alt={`Anteprima ${idx + 1}`}
                  className={`rounded-lg cursor-pointer border transition-all duration-300 hover:scale-105 hover-lift ${
                    previewImage === img ? "border-virgold ring-2 ring-virgold" : "hover:border-virgold"
                  }`}
                />
              ))}
            </div>
            
            {/* Trust Signals */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm hover-lift group transition-all duration-300">
                <UserCheck className="w-6 h-6 mx-auto mb-2 text-virgold group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs font-bold">Somiglianza curata a mano</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover-lift group transition-all duration-300">
                <Camera className="w-6 h-6 mx-auto mb-2 text-virgold group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs font-bold">Busto 3D da 1–4 foto</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm hover-lift group transition-all duration-300">
                <Award className="w-6 h-6 mx-auto mb-2 text-virgold group-hover:scale-110 transition-transform duration-300" />
                <p className="text-xs font-bold">13 anni di stampa 3D</p>
              </div>
            </div>
          </div>

          {/* Right Column: Configuration Form */}
          <div className="lg:col-span-5">
            <div className="bg-transparent">
              <h2 className="font-serif text-3xl font-bold mb-2">Configura il tuo busto 3D da foto</h2>
              <p className="text-sm text-muted-foreground mb-3">
                Compila i parametri principali: riceverai un <strong>preventivo preciso per il tuo busto 3D personalizzato</strong> in base a dimensione, materiale e finitura.
              </p>
              <div className="flex items-center gap-2 mb-8 text-sm text-green-700 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
                <CheckCircle className="w-4 h-4" />
                Made in Italy – spedizione busti 3D in tutta Europa
              </div>

              {/* 1. Dimensioni */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Dimensioni del busto</h3>
                <div className="space-y-3">
                  {Object.entries(sizes).map(([key, value]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedSize(key as SizeOption)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 hover-lift ${
                        selectedSize === key
                          ? "border-virblack bg-virblack text-white scale-105"
                          : "border-border bg-white hover:border-virgold hover:scale-102"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold capitalize">{key}</span>
                        <span className={`font-bold ${selectedSize === key ? "text-virgold" : ""}`}>
                          €{value.price.toFixed(2).replace(".", ",")}
                        </span>
                      </div>
                      <p className={`text-xs ${selectedSize === key ? "text-white/60" : "text-muted-foreground"}`}>
                        {value.height} altezza • {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Materiale */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Materiale del busto 3D</h3>
                <div className="space-y-3">
                  {Object.entries(materials).map(([key, value]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedMaterial(key as MaterialOption)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all duration-300 hover-lift ${
                        selectedMaterial === key
                          ? "border-virblack bg-virblack text-white scale-105"
                          : "border-border bg-white hover:border-virgold hover:scale-102"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold">{key === "pla" ? "PLA eco (bioplastica)" : "Resina premium"}</span>
                        {value.price > 0 && (
                          <span className={`font-bold ${selectedMaterial === key ? "text-virgold" : ""}`}>
                            +€{value.price.toFixed(2).replace(".", ",")}
                          </span>
                        )}
                      </div>
                      <p className={`text-xs ${selectedMaterial === key ? "text-white/60" : "text-muted-foreground"}`}>
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Add-ons */}
              <div className="mb-8">
                <div className="flex items-start gap-3 cursor-pointer group">
                  <Checkbox
                    id="shoulders"
                    checked={includeShoulders}
                    onCheckedChange={(checked) => setIncludeShoulders(checked as boolean)}
                  />
                  <Label htmlFor="shoulders" className="cursor-pointer">
                    <span className="font-bold text-foreground group-hover:text-virgold transition-colors">
                      Includi spalle e torace +€{shouldersPrice.toFixed(2).replace(".", ",")}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Trasforma il mezzobusto in una scultura più completa, simile a una piccola statua 3D personalizzata
                    </p>
                  </Label>
                </div>
              </div>

              {/* 4. Finitura */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Finitura</h3>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    onClick={() => setFinishPrice(0)}
                    className="hover:border-virgold focus:border-virblack focus:bg-virblack focus:text-white transition-all duration-300 hover:scale-105"
                  >
                    Bianco Opaco
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setFinishPrice(0)}
                    className="hover:border-virgold focus:border-virblack focus:bg-virblack focus:text-white"
                  >
                    Grigio Scuro
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setFinishPrice(0)}
                    className="hover:border-virgold focus:border-virblack focus:bg-virblack focus:text-white"
                  >
                    Grigio Chiaro
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setFinishPrice(5)}
                    className="hover:border-virgold focus:border-virblack focus:bg-virblack focus:text-white"
                  >
                    Effetto Marmo +€5
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setFinishPrice(10)}
                    className="col-span-2 hover:border-virgold focus:border-virblack focus:bg-virblack focus:text-white"
                  >
                    Effetto Legno +€10
                  </Button>
                </div>
              </div>

              {/* 5. Personalizzazione */}
              <div className="mb-8 space-y-4">
                <div>
                  <Label htmlFor="engraving" className="text-sm font-bold mb-2 block">
                    Incisione sulla base (opzionale)
                  </Label>
                  <Input
                    id="engraving"
                    placeholder="Es: In memoria di Nonno Giuseppe • 1935–2023"
                    className="focus-visible:ring-virgold"
                  />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-sm font-bold mb-2 block">
                    Note per l'artista (opzionale)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Es: enfatizzare il sorriso, includere gli occhiali, scultura 3D con look elegante..."
                    className="h-24 resize-none focus-visible:ring-virgold"
                  />
                </div>
              </div>

              {/* Sticky Bottom Total */}
              <div className="sticky bottom-4 bg-white p-6 rounded-xl shadow-2xl border border-border z-30 hover-lift">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-3xl font-bold text-virblack transition-all duration-300">
                      €{calculateTotal().replace(".", ",")}
                    </p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Busto 3D personalizzato da foto • mezzobusto in stampa 3D
                    </p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded animate-pulse">
                    Made in Italy
                  </span>
                </div>
                <Button className="w-full bg-virgold-dark hover:bg-virgold-dark/90 text-white font-bold py-4 text-lg uppercase tracking-wider shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-virgold/30 group">
                  <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" /> 
                  Acquista ora il tuo busto
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

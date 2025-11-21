import { useState } from "react";
import { UserCheck, Camera, Award, ShoppingCart, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
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

  const sizes = {
    piccolo: { price: 53.90, height: "10cm", description: "Formato compatto" },
    medio: { price: 62.90, height: "15cm", description: "Formato classico" },
    grande: { price: 79.90, height: "20cm", description: "Presenza importante" },
  };

  const materials = {
    pla: { price: 0, description: "Dettagli superiori, finitura liscia (predefinito)" },
    resina: { price: 12.58, description: "Dettagli del volto ultra-precisi (+20%)" },
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
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Left Column: Product Preview */}
          <div className="lg:col-span-7 lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-border mb-6">
              <img 
                src={previewImage} 
                alt="Anteprima busto" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  onClick={() => setPreviewImage(img)}
                  src={img}
                  alt={`Anteprima ${idx + 1}`}
                  className="rounded-lg cursor-pointer border hover:border-virgold transition-all"
                />
              ))}
            </div>
            
            {/* Trust Signals */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <UserCheck className="w-6 h-6 mx-auto mb-2 text-virgold" />
                <p className="text-xs font-bold">Somiglianza 95%</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Camera className="w-6 h-6 mx-auto mb-2 text-virgold" />
                <p className="text-xs font-bold">8-12 Foto</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <Award className="w-6 h-6 mx-auto mb-2 text-virgold" />
                <p className="text-xs font-bold">13 Anni Exp.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Configuration Form */}
          <div className="lg:col-span-5">
            <div className="bg-transparent">
              <h2 className="font-serif text-3xl font-bold mb-2">Configura il tuo Busto</h2>
              <div className="flex items-center gap-2 mb-8 text-sm text-green-700 bg-green-50 w-fit px-3 py-1 rounded-full border border-green-100">
                <CheckCircle className="w-4 h-4" />
                Prodotto artigianale Made in Italy
              </div>

              {/* 1. Dimensioni */}
              <div className="mb-8">
                <h3 className="font-bold text-lg mb-4">Dimensioni del Busto</h3>
                <div className="space-y-3">
                  {Object.entries(sizes).map(([key, value]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedSize(key as SizeOption)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedSize === key
                          ? "border-virblack bg-virblack text-white"
                          : "border-border bg-white hover:border-virgold"
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
                <h3 className="font-bold text-lg mb-4">Materiale</h3>
                <div className="space-y-3">
                  {Object.entries(materials).map(([key, value]) => (
                    <div
                      key={key}
                      onClick={() => setSelectedMaterial(key as MaterialOption)}
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${
                        selectedMaterial === key
                          ? "border-virblack bg-virblack text-white"
                          : "border-border bg-white hover:border-virgold"
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-bold">{key === "pla" ? "PLA Premium" : "Resina DLP"}</span>
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
                      Includi Spalle e Torace +€{shouldersPrice.toFixed(2).replace(".", ",")}
                    </span>
                    <p className="text-xs text-muted-foreground mt-1">
                      Maggiore presenza e impatto visivo, stile più completo
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
                    className="hover:border-virgold focus:border-virblack focus:bg-virblack focus:text-white"
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
                    Incisione sulla Base (Opzionale)
                  </Label>
                  <Input
                    id="engraving"
                    placeholder="Es: In memoria di Nonno Giuseppe • 1935-2023"
                    className="focus-visible:ring-virgold"
                  />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-sm font-bold mb-2 block">
                    Note per l'Artista (Opzionale)
                  </Label>
                  <Textarea
                    id="notes"
                    placeholder="Es: Enfatizzare il sorriso, includere gli occhiali..."
                    className="h-24 resize-none focus-visible:ring-virgold"
                  />
                </div>
              </div>

              {/* Sticky Bottom Total */}
              <div className="sticky bottom-4 bg-white p-6 rounded-xl shadow-2xl border border-border z-30">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-3xl font-bold text-virblack">€{calculateTotal().replace(".", ",")}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wider">
                      Somiglianza garantita • Arte personalizzata
                    </p>
                  </div>
                  <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">
                    Arte Italiana
                  </span>
                </div>
                <Button className="w-full bg-virgold-dark hover:bg-virgold-dark/90 text-white font-bold py-4 text-lg uppercase tracking-wider shadow-lg">
                  <ShoppingCart className="w-5 h-5 mr-2" /> Acquista Ora
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

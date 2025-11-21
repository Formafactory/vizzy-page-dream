import { useState, useEffect } from "react";
import { UserCheck, Camera, Award, ShoppingCart, CheckCircle, Heart, ArrowRight, ArrowLeft, Users, Ruler, Sparkles, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import coupleBust from "@/assets/couple_bust_3d_romantic.png";
import familyBust from "@/assets/family_bust_3d_group.png";
import giftValentine from "@/assets/gift_valentine_bust_3d.png";
import resinDark from "@/assets/resin-dark-bust.jpg";

type SizeOption = "piccolo" | "medio" | "grande";
type MaterialOption = "pla" | "resina";
type PeopleOption = "singola" | "coppia" | "famiglia";

export const Configurator = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPeople, setSelectedPeople] = useState<PeopleOption>("singola");
  const [selectedSize, setSelectedSize] = useState<SizeOption>("medio");
  const [selectedMaterial, setSelectedMaterial] = useState<MaterialOption>("pla");
  const [includeShoulders, setIncludeShoulders] = useState(false);
  const [finishPrice, setFinishPrice] = useState(0);
  const [selectedFinish, setSelectedFinish] = useState("bianco");
  const [previewImage, setPreviewImage] = useState(coupleBust);
  
  const { ref: configRef, isVisible: configVisible } = useScrollAnimation(0.1);

  // Aggiorna preview dinamicamente in base alle selezioni
  useEffect(() => {
    if (selectedPeople === "coppia") {
      setPreviewImage(coupleBust);
    } else if (selectedPeople === "famiglia") {
      setPreviewImage(familyBust);
    } else if (selectedMaterial === "resina") {
      setPreviewImage(resinDark);
    } else {
      setPreviewImage(giftValentine);
    }
  }, [selectedPeople, selectedMaterial]);

  const people = {
    singola: { multiplier: 0, description: "Un solo soggetto" },
    coppia: { multiplier: 1.25, description: "Due volti affiancati su base unica - Perfetto come regalo fidanzati, anniversario o San Valentino" },
    famiglia: { multiplier: 2, description: "3-4 persone insieme - Scultura famiglia commemorativa, regalo nozze genitori" },
  };

  const sizes = {
    piccolo: { price: 53.90, height: "10cm", description: "Busto 3D compatto, perfetto come regalo compleanno fidanzato o statuetta da scrivania" },
    medio: { price: 62.90, height: "15cm", description: "Il formato più richiesto per regali anniversario, San Valentino e sculture commemorative" },
    grande: { price: 79.90, height: "20cm", description: "Scultura 3D d'impatto, ideale come regalo matrimonio o per uffici e salotti" },
  };

  const materials = {
    pla: { price: 0, description: "Bioplastica derivata da fonti rinnovabili. Ideale per un busto 3D personalizzato economico ma di qualità, leggero e resistente" },
    resina: { 
      getPrice: (basePrice: number) => basePrice * 0.3, 
      description: "Per chi cerca un busto 3D professionale: dettagli ultra-definiti, superfici lisce e resa perfetta per sculture commemorative di pregio" 
    },
  };

  const shouldersPrice = 10.80;

  const calculateTotal = () => {
    const basePrice = sizes[selectedSize].price;
    const peopleExtra = basePrice * people[selectedPeople].multiplier;
    const materialExtra = selectedMaterial === "resina" ? materials.resina.getPrice(basePrice) : 0;
    
    return (
      basePrice +
      peopleExtra +
      materialExtra +
      (includeShoulders ? shouldersPrice : 0) +
      finishPrice
    ).toFixed(2);
  };

  const images = [coupleBust, resinDark, familyBust, giftValentine];

  const progressSteps = [
    { number: 1, label: "Per chi lo crei", icon: Users },
    { number: 2, label: "Le dimensioni perfette", icon: Ruler },
    { number: 3, label: "Materiale & stile", icon: Sparkles },
    { number: 4, label: "Tocchi finali", icon: Heart },
  ];

  const trustBadgesByStep = {
    1: [
      { icon: Heart, text: "872 coppie lo hanno scelto questo mese", highlight: true },
      { icon: Users, text: "Perfetto per anniversari e San Valentino" },
    ],
    2: [
      { icon: Award, text: "15cm è il formato più richiesto", highlight: true },
      { icon: Camera, text: "Dettagli nitidi anche nelle dimensioni piccole" },
    ],
    3: [
      { icon: Sparkles, text: "Resina premium: 94% di clienti soddisfatti", highlight: true },
      { icon: UserCheck, text: "Finiture curate a mano da artigiani italiani" },
    ],
    4: [
      { icon: CheckCircle, text: "Spedizione gratuita sopra €100", highlight: true },
      { icon: Award, text: "Garanzia soddisfatti o rimborsati" },
    ],
  };

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const getBasePrice = () => sizes[selectedSize].price;
  const getPeopleExtra = () => getBasePrice() * people[selectedPeople].multiplier;
  const getMaterialExtra = () => selectedMaterial === "resina" ? materials.resina.getPrice(getBasePrice()) : 0;
  const getShouldersExtra = () => includeShoulders ? shouldersPrice : 0;

  return (
    <section id="configurator" className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div 
          ref={configRef}
          className={`transition-all duration-1000 ${
            configVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          
          {/* Header con Progress Emotivo */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-virblack via-virgold to-virblack bg-clip-text text-transparent">
              Crea la tua scultura unica
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Immortala chi ami in una scultura 3D che durerà per sempre. Seguici passo dopo passo.
            </p>
            
            {/* Progress Bar Narrativo */}
            <div className="max-w-4xl mx-auto mb-8">
              <div className="flex justify-between items-center mb-4">
                {progressSteps.map((step) => {
                  const StepIcon = step.icon;
                  return (
                    <div key={step.number} className="flex flex-col items-center flex-1 relative">
                      <div 
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                          currentStep === step.number 
                            ? "bg-virgold text-white scale-110 shadow-lg shadow-virgold/50" 
                            : currentStep > step.number 
                            ? "bg-virblack text-white" 
                            : "bg-border text-muted-foreground"
                        }`}
                      >
                        <StepIcon className="w-6 h-6" />
                      </div>
                      <p className={`text-xs mt-2 font-medium text-center transition-colors duration-300 ${
                        currentStep === step.number ? "text-virgold font-bold" : "text-muted-foreground"
                      }`}>
                        {step.label}
                      </p>
                      {step.number < 4 && (
                        <div className={`absolute top-6 left-[60%] w-full h-0.5 transition-all duration-500 ${
                          currentStep > step.number ? "bg-virblack" : "bg-border"
                        }`} style={{ zIndex: -1 }} />
                      )}
                    </div>
                  );
                })}
              </div>
              <Progress value={(currentStep / 4) * 100} className="h-2" />
            </div>
          </div>

          {/* Layout Principale */}
          <div className="grid lg:grid-cols-12 gap-8">
            
            {/* Left: Preview Grande e Dinamico */}
            <div className="lg:col-span-7 space-y-6">
              <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden border border-border group">
                <div className="absolute top-4 right-4 bg-virgold text-white px-3 py-1 rounded-full text-xs font-bold z-10 animate-pulse">
                  Anteprima Live
                </div>
                <img 
                  src={previewImage} 
                  alt="Anteprima scultura" 
                  className="w-full h-auto object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105"
                />
              </div>
              
              {/* Galleria Thumbnail */}
              <div className="grid grid-cols-4 gap-3">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPreviewImage(img)}
                    className={`rounded-lg overflow-hidden border-2 transition-all duration-300 hover:scale-105 focus:outline-none ${
                      previewImage === img 
                        ? "border-virgold ring-2 ring-virgold shadow-lg" 
                        : "border-transparent hover:border-virgold"
                    }`}
                  >
                    <img src={img} alt={`Variante ${idx + 1}`} className="w-full h-auto aspect-square object-cover" />
                  </button>
                ))}
              </div>

              {/* Price Breakdown Animato - Sempre Visibile */}
              <div className="bg-white rounded-xl p-6 shadow-lg border border-border space-y-3">
                <h3 className="font-bold text-lg flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-virgold" />
                  Riepilogo del tuo ordine
                </h3>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center py-2 border-b border-border/50">
                    <span className="text-muted-foreground">Busto {selectedSize} ({sizes[selectedSize].height})</span>
                    <span className="font-bold">€{getBasePrice().toFixed(2).replace(".", ",")}</span>
                  </div>
                  
                  {selectedPeople !== "singola" && (
                    <div className="flex justify-between items-center py-2 border-b border-border/50 animate-fade-in">
                      <span className="text-muted-foreground capitalize">{selectedPeople} (+{(people[selectedPeople].multiplier * 100).toFixed(0)}%)</span>
                      <span className="font-bold text-virgold">+€{getPeopleExtra().toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                  
                  {selectedMaterial === "resina" && (
                    <div className="flex justify-between items-center py-2 border-b border-border/50 animate-fade-in">
                      <span className="text-muted-foreground">Resina premium (+30%)</span>
                      <span className="font-bold text-virgold">+€{getMaterialExtra().toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                  
                  {includeShoulders && (
                    <div className="flex justify-between items-center py-2 border-b border-border/50 animate-fade-in">
                      <span className="text-muted-foreground">Spalle e torace</span>
                      <span className="font-bold text-virgold">+€{shouldersPrice.toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                  
                  {finishPrice > 0 && (
                    <div className="flex justify-between items-center py-2 border-b border-border/50 animate-fade-in">
                      <span className="text-muted-foreground">Finitura speciale</span>
                      <span className="font-bold text-virgold">+€{finishPrice.toFixed(2).replace(".", ",")}</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-between items-center pt-4 border-t-2 border-virblack">
                  <span className="text-lg font-bold">Totale</span>
                  <span className="text-3xl font-bold text-virblack">€{calculateTotal().replace(".", ",")}</span>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-green-700 bg-green-50 px-3 py-2 rounded-lg">
                  <CheckCircle className="w-4 h-4" />
                  Made in Italy • Spedizione gratuita sopra €100
                </div>
              </div>
            </div>

            {/* Right: Wizard Steps */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-xl shadow-xl p-8 border border-border min-h-[600px] flex flex-col">
                
                {/* Step 1: Chi */}
                {currentStep === 1 && (
                  <div className="animate-fade-in flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl font-bold mb-2">Per chi stai creando questa scultura?</h3>
                      <p className="text-sm text-muted-foreground">
                        Scegli se immortalare una persona speciale o creare un ricordo di coppia o famiglia
                      </p>
                    </div>

                    <div className="space-y-4 flex-1">
                      {Object.entries(people).map(([key, value]) => {
                        const isSelected = selectedPeople === key;
                        const Icon = key === "singola" ? User : key === "coppia" ? Heart : Users;
                        return (
                          <button
                            key={key}
                            onClick={() => setSelectedPeople(key as PeopleOption)}
                            className={`w-full p-6 border-2 rounded-xl text-left transition-all duration-300 hover:scale-102 hover:shadow-lg ${
                              isSelected
                                ? "border-virgold bg-gradient-to-br from-virgold/10 to-virblack/5 shadow-lg scale-102"
                                : "border-border hover:border-virgold"
                            }`}
                          >
                            <div className="flex items-start gap-4">
                              <div className={`p-3 rounded-lg ${isSelected ? "bg-virgold text-white" : "bg-surface"}`}>
                                <Icon className="w-6 h-6" />
                              </div>
                              <div className="flex-1">
                                <div className="flex justify-between items-center mb-2">
                                  <span className="font-bold text-lg capitalize">{key}</span>
                                  {value.multiplier > 0 && (
                                    <span className="font-bold text-virgold">
                                      +{(value.multiplier * 100).toFixed(0)}%
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                  {value.description}
                                </p>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {/* Trust Badges Contestuali */}
                    <div className="mt-6 space-y-2">
                      {trustBadgesByStep[1].map((badge, idx) => {
                        const BadgeIcon = badge.icon;
                        return (
                          <div 
                            key={idx}
                            className={`flex items-center gap-2 text-xs p-2 rounded-lg ${
                              badge.highlight ? "bg-virgold/10 text-virgold font-bold" : "text-muted-foreground"
                            }`}
                          >
                            <BadgeIcon className="w-4 h-4" />
                            {badge.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 2: Dimensioni */}
                {currentStep === 2 && (
                  <div className="animate-fade-in flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl font-bold mb-2">Che dimensioni preferisci?</h3>
                      <p className="text-sm text-muted-foreground">
                        Ogni formato è perfetto: scegli in base a dove la esporrai
                      </p>
                    </div>

                    <div className="space-y-4 flex-1">
                      {Object.entries(sizes).map(([key, value]) => {
                        const isSelected = selectedSize === key;
                        return (
                          <button
                            key={key}
                            onClick={() => setSelectedSize(key as SizeOption)}
                            className={`w-full p-6 border-2 rounded-xl text-left transition-all duration-300 hover:scale-102 hover:shadow-lg ${
                              isSelected
                                ? "border-virgold bg-gradient-to-br from-virgold/10 to-virblack/5 shadow-lg scale-102"
                                : "border-border hover:border-virgold"
                            }`}
                          >
                            <div className="flex justify-between items-start mb-3">
                              <div>
                                <span className="font-bold text-xl capitalize">{key}</span>
                                <p className="text-xs text-muted-foreground mt-1">{value.height} di altezza</p>
                              </div>
                              <span className={`text-2xl font-bold ${isSelected ? "text-virgold" : "text-foreground"}`}>
                                €{value.price.toFixed(2).replace(".", ",")}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6 space-y-2">
                      {trustBadgesByStep[2].map((badge, idx) => {
                        const BadgeIcon = badge.icon;
                        return (
                          <div 
                            key={idx}
                            className={`flex items-center gap-2 text-xs p-2 rounded-lg ${
                              badge.highlight ? "bg-virgold/10 text-virgold font-bold" : "text-muted-foreground"
                            }`}
                          >
                            <BadgeIcon className="w-4 h-4" />
                            {badge.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Materiale & Finitura */}
                {currentStep === 3 && (
                  <div className="animate-fade-in flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl font-bold mb-2">Scegli materiale e stile</h3>
                      <p className="text-sm text-muted-foreground">
                        Ogni materiale ha il suo carattere unico
                      </p>
                    </div>

                    {/* Materiale */}
                    <div className="space-y-3 mb-6">
                      <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide">Materiale</h4>
                      {Object.entries(materials).map(([key, value]) => {
                        const isSelected = selectedMaterial === key;
                        const extraPrice = key === "resina" ? materials.resina.getPrice(sizes[selectedSize].price) : 0;
                        return (
                          <button
                            key={key}
                            onClick={() => setSelectedMaterial(key as MaterialOption)}
                            className={`w-full p-5 border-2 rounded-xl text-left transition-all duration-300 hover:scale-102 ${
                              isSelected
                                ? "border-virgold bg-gradient-to-br from-virgold/10 to-virblack/5 shadow-lg scale-102"
                                : "border-border hover:border-virgold"
                            }`}
                          >
                            <div className="flex justify-between items-center mb-2">
                              <span className="font-bold text-lg capitalize">
                                {key === "pla" ? "PLA Eco" : "Resina Premium"}
                              </span>
                              {extraPrice > 0 && (
                                <span className="font-bold text-virgold">
                                  +€{extraPrice.toFixed(2).replace(".", ",")}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {value.description}
                            </p>
                          </button>
                        );
                      })}
                    </div>

                    {/* Finitura */}
                    <div className="space-y-3 flex-1">
                      <h4 className="font-bold text-sm text-muted-foreground uppercase tracking-wide">Colore e Finitura</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "Bianco Opaco", price: 0, color: "bg-white" },
                          { name: "Grigio Scuro", price: 0, color: "bg-gray-700" },
                          { name: "Grigio Chiaro", price: 0, color: "bg-gray-300" },
                          { name: "Effetto Marmo", price: 5, color: "bg-gradient-to-br from-gray-200 to-gray-400" },
                        ].map((finish) => (
                          <button
                            key={finish.name}
                            onClick={() => {
                              setFinishPrice(finish.price);
                              setSelectedFinish(finish.name);
                            }}
                            className={`p-4 border-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                              selectedFinish === finish.name
                                ? "border-virgold shadow-lg scale-105"
                                : "border-border hover:border-virgold"
                            }`}
                          >
                            <div className={`w-full h-8 rounded mb-2 ${finish.color} border border-border`} />
                            <p className="text-xs font-bold">{finish.name}</p>
                            {finish.price > 0 && (
                              <p className="text-xs text-virgold font-bold">+€{finish.price}</p>
                            )}
                          </button>
                        ))}
                        <button
                          onClick={() => {
                            setFinishPrice(10);
                            setSelectedFinish("Effetto Legno");
                          }}
                          className={`col-span-2 p-4 border-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                            selectedFinish === "Effetto Legno"
                              ? "border-virgold shadow-lg scale-105"
                              : "border-border hover:border-virgold"
                          }`}
                        >
                          <div className="w-full h-8 rounded mb-2 bg-gradient-to-r from-amber-800 to-amber-600 border border-border" />
                          <p className="text-xs font-bold">Effetto Legno</p>
                          <p className="text-xs text-virgold font-bold">+€10</p>
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      {trustBadgesByStep[3].map((badge, idx) => {
                        const BadgeIcon = badge.icon;
                        return (
                          <div 
                            key={idx}
                            className={`flex items-center gap-2 text-xs p-2 rounded-lg ${
                              badge.highlight ? "bg-virgold/10 text-virgold font-bold" : "text-muted-foreground"
                            }`}
                          >
                            <BadgeIcon className="w-4 h-4" />
                            {badge.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 4: Personalizza */}
                {currentStep === 4 && (
                  <div className="animate-fade-in flex-1 flex flex-col">
                    <div className="mb-6">
                      <h3 className="font-serif text-2xl font-bold mb-2">Gli ultimi tocchi personali</h3>
                      <p className="text-sm text-muted-foreground">
                        Rendi la tua scultura ancora più unica e speciale
                      </p>
                    </div>

                    <div className="space-y-6 flex-1">
                      {/* Incisione */}
                      <div>
                        <Label htmlFor="engraving" className="font-bold text-sm mb-2 block">
                          Incisione sulla base (opzionale)
                        </Label>
                        <Input
                          id="engraving"
                          placeholder="Es: 'Sempre insieme' o 'Per sempre nel cuore'"
                          className="focus-visible:ring-virgold transition-all duration-300"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Un messaggio che renderà il regalo ancora più emozionante
                        </p>
                      </div>

                      {/* Note */}
                      <div>
                        <Label htmlFor="notes" className="font-bold text-sm mb-2 block">
                          Note speciali per l'artista (opzionale)
                        </Label>
                        <Textarea
                          id="notes"
                          placeholder="Es: 'Enfatizzare il sorriso', 'Includere gli occhiali', 'Stile elegante e romantico'..."
                          className="h-24 resize-none focus-visible:ring-virgold transition-all duration-300"
                        />
                        <p className="text-xs text-muted-foreground mt-1">
                          Aiutaci a catturare ogni dettaglio importante per te
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 space-y-2">
                      {trustBadgesByStep[4].map((badge, idx) => {
                        const BadgeIcon = badge.icon;
                        return (
                          <div 
                            key={idx}
                            className={`flex items-center gap-2 text-xs p-2 rounded-lg ${
                              badge.highlight ? "bg-virgold/10 text-virgold font-bold" : "text-muted-foreground"
                            }`}
                          >
                            <BadgeIcon className="w-4 h-4" />
                            {badge.text}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-3 mt-8 pt-6 border-t border-border">
                  {currentStep > 1 && (
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      className="flex-1 hover:border-virgold transition-all duration-300 hover:scale-105"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Indietro
                    </Button>
                  )}
                  {currentStep < 4 ? (
                    <Button
                      onClick={handleNextStep}
                      className="flex-1 bg-virgold hover:bg-virgold-dark transition-all duration-300 hover:scale-105 shadow-lg"
                    >
                      Continua
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  ) : (
                    <Button
                      className="flex-1 bg-virblack hover:bg-virblack/90 text-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-virgold/30"
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Acquista ora
                    </Button>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const faqs = [
    {
      question: "Quanto costa un busto 3D personalizzato da foto?",
      answer: "Il prezzo di un busto 3D personalizzato da foto inizia da circa 60€ per la versione in PLA eco di dimensioni ridotte. Il costo aumenta scegliendo misure più grandi, resina premium o finiture speciali come effetto marmo o legno. Per statue 3D personalizzate o sculture 1:1 realizziamo un preventivo dedicato in base al progetto."
    },
    {
      question: "Quante foto servono per realizzare un busto 3D da foto?",
      answer: "Possiamo creare il busto 3D anche da una sola foto, ma per ottenere una somiglianza davvero alta consigliamo 3–4 fotografie: fronte, tre quarti e profilo. Sono perfette anche foto scattate con lo smartphone, purché nitide, non troppo scure e senza filtri pesanti."
    },
    {
      question: "In quanto tempo riceverò il mio busto 3D?",
      answer: "I tempi medi per un busto 3D personalizzato sono 7–14 giorni lavorativi, che includono modellazione digitale, stampa 3D, finitura a mano e preparazione della spedizione. Se hai una data importante (anniversario, ricorrenza, commemorazione), segnalala nel configuratore: ti diremo subito se è fattibile."
    },
    {
      question: "Che differenza c'è tra busto 3D e statua 3D personalizzata?",
      answer: "Il busto 3D (mezzobusto) rappresenta testa, collo e parte del torace, mentre una statua 3D personalizzata raffigura il soggetto a figura intera. Il busto è più compatto, ideale come scultura da esporre su mensole, librerie o altari domestici; la statua 3D è perfetta per pose dinamiche o installazioni di maggior impatto."
    },
    {
      question: "Il busto 3D da foto va bene come scultura commemorativa?",
      answer: "Sì, il busto 3D è spesso scelto come scultura 3D commemorativa personalizzata. Possiamo riprodurre un'espressione serena, incidere nome e date sulla base e suggerire finiture sobrie (bianco opaco o effetto marmo) per un risultato elegante e rispettoso."
    },
    {
      question: "Spedite busti 3D in tutta Italia e in Europa?",
      answer: "Certo. Spediamo i nostri busti 3D personalizzati da foto in tutta Italia e in molti Paesi europei, utilizzando imballaggi rinforzati e corrieri affidabili. I costi di spedizione vengono calcolati in base alla destinazione e comunicati nel preventivo o al momento dell'ordine."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-background border-t border-border">
      <div className="container mx-auto px-4 max-w-5xl">
        <div 
          ref={ref}
          className={`text-center mb-10 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-virgold font-bold tracking-widest text-xs uppercase mb-2 block">
            Domande frequenti
          </span>
          <h2 className="font-serif text-3xl font-bold mb-3 text-virblack">
            FAQ sul busto 3D personalizzato da foto
          </h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">
            Rispondiamo alle domande più cercate su Google su busti 3D, statue 3D personalizzate e sculture 3D commemorative.
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-surface border border-border rounded-lg px-4 hover-lift"
            >
              <AccordionTrigger className="text-left text-sm font-semibold hover:text-virgold transition-colors py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

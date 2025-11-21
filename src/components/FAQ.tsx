import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [showAll, setShowAll] = useState(false);

  const faqs = [
    {
      question: "Il busto 3D è un buon regalo per fidanzato/fidanzata?",
      answer: "Assolutamente sì! Il busto 3D personalizzato da foto è il regalo più originale e romantico per San Valentino, compleanno o anniversario di fidanzamento. Puoi scegliere la versione singola oppure la scultura di coppia (+125%) per immortalare insieme voi due. È un regalo unico che rimarrà per sempre e celebra il vostro amore in modo speciale."
    },
    {
      question: "Posso ordinare un busto di coppia?",
      answer: "Certamente! Offriamo la scultura 3D di coppia al +125% del prezzo base: due volti affiancati su base unica. È il regalo anniversario fidanzati perfetto, ideale per San Valentino, matrimoni o per celebrare il vostro amore. Puoi anche scegliere l'opzione famiglia (+200%) per sculture con 3-4 persone."
    },
    {
      question: "Quali sono le migliori occasioni per regalare un busto 3D?",
      answer: "Il busto 3D personalizzato è perfetto per: San Valentino, compleanno fidanzato/a, anniversario di matrimonio, nozze d'oro/argento, laurea, pensionamento, commemorazioni. La versione coppia è ideale per anniversari romantici e matrimoni, mentre la versione famiglia è perfetta per celebrare momenti importanti insieme."
    },
    {
      question: "Quanto tempo prima devo ordinare per un regalo?",
      answer: "Consigliamo di ordinare almeno 3 settimane prima della data del regalo (San Valentino, compleanno, anniversario). I tempi standard sono 7-14 giorni lavorativi + spedizione. Per urgenze contattaci: valuteremo la fattibilità per il tuo evento speciale e cercheremo di accontentarti."
    },
    {
      question: "Quanto costa un busto 3D personalizzato da foto?",
      answer: "Il prezzo di un busto 3D personalizzato da foto inizia da circa 60€ per la versione in PLA eco di dimensioni ridotte. Il costo aumenta scegliendo misure più grandi, resina premium (+30%) o finiture speciali come effetto marmo. Per sculture di coppia (+125%) o famiglia (+200%) il prezzo base viene moltiplicato. Per statue 3D personalizzate o sculture 1:1 realizziamo un preventivo dedicato in base al progetto."
    },
    {
      question: "Quante foto servono per realizzare un busto 3D da foto?",
      answer: "Possiamo creare il busto 3D anche da una sola foto, ma per ottenere una somiglianza davvero alta consigliamo 3–4 fotografie: fronte, tre quarti e profilo. Sono perfette anche foto scattate con lo smartphone, purché nitide, non troppo scure e senza filtri pesanti. Per sculture di coppia, servono 3-4 foto di ciascuna persona."
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
          {faqs.slice(0, showAll ? faqs.length : 2).map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-surface border border-border rounded-lg px-4 hover-lift animate-fade-in"
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

        <div className="flex justify-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="group hover:border-virgold hover:text-virgold transition-all"
            aria-expanded={showAll}
            aria-label={showAll ? "Mostra meno FAQ" : "Mostra tutte le FAQ"}
          >
            {showAll ? "Mostra meno" : "Mostra tutte le FAQ"}
            <ChevronDown 
              className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                showAll ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>
      </div>
    </section>
  );
};

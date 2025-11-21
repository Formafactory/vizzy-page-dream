import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-8 left-0 right-0 z-40 transition-all duration-300 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-2xl font-serif font-bold text-virblack flex items-center gap-1">
          Vir3D<span className="text-xs align-top mt-1">™</span>
        </a>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#prodotto" className="text-sm font-medium hover:text-virgold transition-colors">
            Busto 3D da foto
          </a>
          <a href="#trasformazione" className="text-sm font-medium hover:text-virgold transition-colors">
            Come Funziona
          </a>
          <a href="#configurator" className="text-sm font-medium hover:text-virgold transition-colors">
            Configura
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-virgold transition-colors">
            FAQ
          </a>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </Button>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border p-4">
          <a href="#configurator" className="block py-2 font-bold text-virgold" onClick={() => setMobileMenuOpen(false)}>
            Configura il busto 3D
          </a>
          <a href="#trasformazione" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            Come Funziona
          </a>
          <a href="#faq" className="block py-2" onClick={() => setMobileMenuOpen(false)}>
            FAQ busto 3D
          </a>
        </div>
      )}
    </nav>
  );
};

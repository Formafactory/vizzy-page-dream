import { AlertCircle } from "lucide-react";

export const ScarcityBar = () => {
  return (
    <div className="bg-virgold-dark text-white text-[10px] md:text-xs font-bold py-2 text-center tracking-widest uppercase sticky top-0 z-50">
      <AlertCircle className="inline w-3 h-3 mr-1" />
      Solo 4 slot di modellazione disponibili per questa settimana
    </div>
  );
};

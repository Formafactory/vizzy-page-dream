import { ScarcityBar } from "@/components/ScarcityBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TransformationSteps } from "@/components/TransformationSteps";
import { Configurator } from "@/components/Configurator";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScarcityBar />
      <Navbar />
      <Hero />
      <TransformationSteps />
      <Configurator />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;

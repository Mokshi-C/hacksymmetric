import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Themes } from "@/components/Themes";
import { Timeline } from "@/components/Timeline";
import { Pricing } from "@/components/Pricing";
import { Registration } from "@/components/Registration";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Themes />
        <Timeline />
        <Pricing />
        <Registration />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] text-primary/5 text-6xl font-bold animate-float">
          {"</>"}
        </div>
        <div className="absolute top-[30%] right-[10%] text-secondary/5 text-6xl font-bold animate-float" style={{ animationDelay: "3s" }}>
          +
        </div>
        <div className="absolute top-[60%] left-[15%] text-accent/5 text-6xl font-bold animate-float" style={{ animationDelay: "6s" }}>
          ❤️
        </div>
        <div className="absolute bottom-[15%] right-[20%] text-primary/5 text-6xl font-bold animate-float" style={{ animationDelay: "9s" }}>
          💊
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <div className="mb-8 opacity-0 animate-slide-up" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="inline-block p-2 px-4 rounded-full glass-card mb-6">
            <span className="text-gradient font-semibold">🏥 Health Tech Innovation</span>
          </div>
        </div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 opacity-0"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <span className="text-gradient animate-glow-pulse">
            Hacksymmetric
          </span>
          <br />
          <span className="text-foreground">2025</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto opacity-0 animate-slide-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          Where Healthcare Meets Innovation. Join us for <span className="text-secondary font-semibold">36 hours</span> of intense collaboration, creativity, and cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-slide-up" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
          <Button
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg font-bold px-8 py-6 glow-primary"
            onClick={() => scrollToSection("registration")}
          >
            Register Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-primary/30 hover:border-primary hover:bg-primary/10 text-lg font-bold px-8 py-6"
            onClick={() => scrollToSection("about")}
          >
            Learn More
          </Button>
        </div>

        <button
          onClick={() => scrollToSection("about")}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors opacity-0 animate-slide-up"
          style={{ animationDelay: "1s", animationFillMode: "forwards" }}
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

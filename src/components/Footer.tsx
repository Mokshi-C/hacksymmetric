import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gradient mb-4">Hacksymmetric 2025</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Where Healthcare Meets Innovation. Join us in building the future of medical technology.
          </p>

          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#themes" className="text-muted-foreground hover:text-primary transition-colors">
              Themes
            </a>
            <a href="#timeline" className="text-muted-foreground hover:text-primary transition-colors">
              Timeline
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Hacksymmetric. Made with</span>
            <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" />
            <span>for healthcare innovation</span>
          </div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 blur-[100px] pointer-events-none" />
    </footer>
  );
};

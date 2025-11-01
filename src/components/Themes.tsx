import { Brain, Activity, Shield, Smartphone } from "lucide-react";

export const Themes = () => {
  const themes = [
    {
      icon: Brain,
      title: "AI in Healthcare",
      description: "Leverage artificial intelligence and machine learning to diagnose, predict, and personalize healthcare solutions.",
      color: "from-primary to-secondary",
    },
    {
      icon: Activity,
      title: "Telemedicine & Remote Care",
      description: "Build innovative platforms for remote patient monitoring, virtual consultations, and accessible healthcare.",
      color: "from-secondary to-accent",
    },
    {
      icon: Shield,
      title: "Healthcare Data Security",
      description: "Create secure systems for managing sensitive patient data, ensuring privacy and compliance with regulations.",
      color: "from-accent to-primary",
    },
    {
      icon: Smartphone,
      title: "Patient Engagement",
      description: "Design mobile and web applications that empower patients to take control of their health journey.",
      color: "from-primary/80 to-secondary/80",
    },
  ];

  return (
    <section id="themes" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hackathon <span className="text-gradient">Themes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your track and create solutions that will transform healthcare as we know it
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((theme, index) => {
            const Icon = theme.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all duration-300 group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${theme.color} flex items-center justify-center mb-6 glow-primary group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{theme.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground">
            <span className="text-accent font-semibold">Pro tip:</span> You can combine multiple themes to create even more innovative solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

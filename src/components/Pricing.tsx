import { Check, Users, User, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Pricing = () => {
  const plans = [
    {
      icon: User,
      name: "Solo Innovator",
      price: "₹299",
      description: "Perfect for individual participants",
      features: [
        "36-hour access to venue",
        "All meals & refreshments",
        "Mentorship sessions",
        "Networking opportunities",
        "Swag kit",
        "Certificate of participation",
      ],
      highlight: false,
    },
    {
      icon: Users,
      name: "Team Package",
      price: "₹999",
      description: "Best value for teams of 4",
      features: [
        "Everything in Solo",
        "Team workspace allocation",
        "Priority mentorship access",
        "Extra swag for team",
        "Group photo session",
        "Team certificates",
        "Save ₹197!",
      ],
      highlight: true,
    },
    {
      icon: Sparkles,
      name: "VIP Experience",
      price: "₹499",
      description: "Premium experience for serious hackers",
      features: [
        "Everything in Solo",
        "VIP seating area",
        "Premium swag kit",
        "One-on-one mentor sessions",
        "Fast-track judging",
        "Exclusive workshop access",
        "Networking dinner invite",
      ],
      highlight: false,
    },
  ];

  const scrollToRegistration = () => {
    document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-20 px-4 bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Registration <span className="text-gradient">Packages</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the package that fits your needs and join the innovation revolution
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={index}
                className={`relative glass-card p-8 rounded-2xl transition-all duration-300 ${
                  plan.highlight
                    ? "border-primary/60 scale-105 glow-primary"
                    : "hover:border-primary/40 hover:-translate-y-2"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-bold glow-primary">
                    Most Popular
                  </div>
                )}

                <div className="text-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${
                    plan.highlight ? "from-primary to-secondary" : "from-primary/60 to-secondary/60"
                  } flex items-center justify-center mx-auto mb-4 ${
                    plan.highlight ? "glow-primary" : ""
                  }`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="text-4xl font-extrabold text-gradient mb-2">
                    {plan.price}
                  </div>
                  <p className="text-sm text-muted-foreground">per {plan.name === "Team Package" ? "team" : "person"}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.highlight
                      ? "bg-gradient-to-r from-primary to-secondary hover:opacity-90 glow-primary"
                      : "bg-primary/10 hover:bg-primary/20 text-primary"
                  } font-bold`}
                  onClick={scrollToRegistration}
                >
                  Choose {plan.name}
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center glass-card p-6 rounded-xl">
          <p className="text-muted-foreground">
            <span className="text-accent font-semibold">Limited spots available!</span> Early bird registrations close on{" "}
            <span className="text-primary font-semibold">January 15, 2025</span>
          </p>
        </div>
      </div>
    </section>
  );
};

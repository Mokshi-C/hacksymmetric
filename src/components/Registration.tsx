import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export const Registration = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Registration Successful! 🎉",
      description: "Check your email for confirmation details.",
    });

    setLoading(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="registration" className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Register</span> Now
          </h2>
          <p className="text-xl text-muted-foreground">
            Secure your spot and be part of the healthcare revolution
          </p>
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground font-semibold">
                  First Name *
                </Label>
                <Input
                  id="firstName"
                  required
                  placeholder="John"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground font-semibold">
                  Last Name *
                </Label>
                <Input
                  id="lastName"
                  required
                  placeholder="Doe"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground font-semibold">
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="john.doe@example.com"
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-foreground font-semibold">
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                placeholder="+91 98765 43210"
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="institution" className="text-foreground font-semibold">
                  Institution/Organization *
                </Label>
                <Input
                  id="institution"
                  required
                  placeholder="Your college/company"
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="package" className="text-foreground font-semibold">
                  Package *
                </Label>
                <Select required>
                  <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select package" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solo">Solo Innovator - ₹299</SelectItem>
                    <SelectItem value="team">Team Package - ₹999</SelectItem>
                    <SelectItem value="vip">VIP Experience - ₹499</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="theme" className="text-foreground font-semibold">
                Preferred Theme *
              </Label>
              <Select required>
                <SelectTrigger className="bg-background/50 border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Select theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai">AI in Healthcare</SelectItem>
                  <SelectItem value="telemedicine">Telemedicine & Remote Care</SelectItem>
                  <SelectItem value="security">Healthcare Data Security</SelectItem>
                  <SelectItem value="engagement">Patient Engagement</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="experience" className="text-foreground font-semibold">
                Tell us about your experience
              </Label>
              <Textarea
                id="experience"
                placeholder="Share your background, skills, and what excites you about this hackathon..."
                className="bg-background/50 border-primary/20 focus:border-primary min-h-32"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg font-bold py-6 glow-primary"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  Register Now
                  <Send className="w-5 h-5" />
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

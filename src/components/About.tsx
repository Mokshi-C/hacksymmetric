import { Heart, Code, Users, Trophy } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Heart,
      title: "Health Innovation",
      description: "Transform healthcare through technology and innovative solutions",
    },
    {
      icon: Code,
      title: "36-Hour Sprint",
      description: "Intensive coding, prototyping, and collaboration",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry leaders and healthcare professionals",
    },
    {
      icon: Trophy,
      title: "Amazing Prizes",
      description: "Compete for prizes, internships, and recognition",
    },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">About</span> Hacksymmetric
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hacksymmetric 2025 is where the brightest minds converge to revolutionize healthcare through technology. 
            Join us for an unforgettable journey of innovation, learning, and impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 glow-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gradient">
            What Makes Us Different?
          </h3>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              <span className="text-secondary font-semibold">Hacksymmetric 2025</span> isn't just another hackathon—it's a 
              movement to bridge the gap between technology and healthcare. We bring together students, professionals, and 
              innovators to create solutions that matter.
            </p>
            <p>
              With <span className="text-primary font-semibold">expert mentorship</span>, cutting-edge tools, and a 
              collaborative environment, you'll have everything you need to turn your vision into reality. Whether you're 
              a developer, designer, or healthcare enthusiast, there's a place for you here.
            </p>
            <p className="text-accent font-semibold">
              Join us in shaping the future of healthcare. One hack at a time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

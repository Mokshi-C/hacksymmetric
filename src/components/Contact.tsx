import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "contact@hacksymmetric.com",
      link: "mailto:contact@hacksymmetric.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: MapPin,
      title: "Venue",
      value: "Tech Innovation Center, Mumbai",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-background to-background/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? We're here to help! Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <a
                key={index}
                href={info.link}
                className="glass-card p-8 rounded-xl hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 group text-center"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mx-auto mb-4 glow-primary group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-muted-foreground">{info.title}</h3>
                <p className="text-foreground font-semibold">{info.value}</p>
              </a>
            );
          })}
        </div>

        <div className="glass-card p-8 md:p-12 rounded-2xl text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Join Our <span className="text-gradient">Community</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay updated with the latest news, announcements, and hackathon tips. Follow us on social media!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Twitter", "LinkedIn", "Instagram", "Discord"].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="px-6 py-3 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary font-semibold transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-primary/20">
              <p className="text-muted-foreground">
                Questions about sponsorship or partnerships?{" "}
                <a href="mailto:partnerships@hacksymmetric.com" className="text-primary hover:text-secondary transition-colors font-semibold">
                  Contact our partnerships team →
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

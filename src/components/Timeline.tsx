import { Calendar, Clock } from "lucide-react";

export const Timeline = () => {
  const events = [
    {
      time: "9:00 AM",
      title: "Registration & Check-in",
      description: "Arrive, get your swag, and meet fellow participants",
      day: "Day 1",
    },
    {
      time: "10:00 AM",
      title: "Opening Ceremony",
      description: "Kickoff event with keynote speakers and hackathon rules",
      day: "Day 1",
    },
    {
      time: "11:00 AM",
      title: "Hacking Begins!",
      description: "Form teams and start building your solutions",
      day: "Day 1",
    },
    {
      time: "1:00 PM",
      title: "Lunch & Networking",
      description: "Fuel up and connect with mentors",
      day: "Day 1",
    },
    {
      time: "6:00 PM",
      title: "Dinner & Workshop",
      description: "Evening meal with technical workshops",
      day: "Day 1",
    },
    {
      time: "12:00 AM",
      title: "Midnight Snacks",
      description: "Late-night coding fuel for the dedicated teams",
      day: "Night",
    },
    {
      time: "8:00 AM",
      title: "Breakfast",
      description: "Morning boost to keep the momentum going",
      day: "Day 2",
    },
    {
      time: "11:00 AM",
      title: "Submission Deadline",
      description: "Final touches and project submissions close",
      day: "Day 2",
    },
    {
      time: "12:00 PM",
      title: "Judging Begins",
      description: "Showcase your project to expert judges",
      day: "Day 2",
    },
    {
      time: "3:00 PM",
      title: "Final Presentations",
      description: "Top teams present to all participants",
      day: "Day 2",
    },
    {
      time: "5:00 PM",
      title: "Awards Ceremony",
      description: "Celebrate winners and close the hackathon",
      day: "Day 2",
    },
  ];

  return (
    <section id="timeline" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Event <span className="text-gradient">Timeline</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            A packed schedule designed to maximize your innovation potential
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

          <div className="space-y-8">
            {events.map((event, index) => (
              <div key={index} className="relative pl-20 group">
                {/* Timeline dot */}
                <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-primary to-secondary border-4 border-background group-hover:scale-125 transition-transform glow-primary" />

                <div className="glass-card p-6 rounded-xl hover:border-primary/40 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                      <Calendar className="w-4 h-4" />
                      {event.day}
                    </span>
                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

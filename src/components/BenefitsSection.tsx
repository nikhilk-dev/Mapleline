import { Clock, Heart, Shield } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save 15–20 Staff Hours/Week",
      description:
        "Offload routine calls so MOAs can focus on in‑clinic patients, complex cases, and quality-of-care tasks.",
      stat: "15-20",
      statLabel: "Hours Saved Weekly",
    },
    {
      icon: Heart,
      title: "Happier Patients, Fewer Complaints",
      description:
        "Every call is answered. No more calling 7 times in a row. Clear information, quick bookings, and polite, consistent tone every time.",
      stat: "100%",
      statLabel: "Calls Answered",
    },
    {
      icon: Shield,
      title: "Safer, More Reliable Triage",
      description:
        "Urgent symptoms never sit in voicemail. AI follows conservative protocols and escalates when in doubt. Staff receives clear, time-stamped summaries for follow‑up.",
      stat: "24/7",
      statLabel: "Urgent Escalation",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Benefits</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            What Clinics <span className="text-gradient">Actually Get</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group text-center glass-dark rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <benefit.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <div className="mb-4">
                <span className="text-4xl font-bold text-gradient">{benefit.stat}</span>
                <p className="text-sm text-muted-foreground mt-1">{benefit.statLabel}</p>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

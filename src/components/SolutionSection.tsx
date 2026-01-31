import { Phone, Calendar, AlertTriangle, Moon } from "lucide-react";

const SolutionSection = () => {
  const features = [
    {
      icon: Phone,
      title: "Voice Receptionist",
      description: "Warm greeting, natural conversation",
      bullets: [
        "Answers on the first ring",
        "Handles common questions without putting patients on hold",
      ],
    },
    {
      icon: Calendar,
      title: "Smart Booking & Rescheduling",
      description: "Seamless appointment management",
      bullets: [
        "Checks real-time availability in Google/Outlook calendars",
        "Books and reschedules appointments automatically",
        "Sends SMS confirmations and reminders to cut no-shows",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Light Triage & Urgent Escalation",
      description: "Safety-first approach",
      bullets: [
        "Understands key red-flag symptoms (chest pain, breathing issues, pregnancy concerns)",
        "Flags urgent calls and alerts staff instantly via SMS/phone",
        "Provides structured call summaries so nothing gets missed",
      ],
    },
    {
      icon: Moon,
      title: "24/7 After-Hours Coverage",
      description: "Never miss a call again",
      bullets: [
        "Handles calls nights, weekends, and holidays",
        "Books non-urgent visits for the next available slots",
        "Ensures urgent issues get routed to on-call staff instead of voicemail",
      ],
    },
  ];

  return (
    <section id="solution" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] gradient-glow opacity-30" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Solution</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            MapleLine Picks Up Every Call.{" "}
            <span className="text-gradient">Day or Night.</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            MapleLine is a voice-first AI assistant that answers your main clinic number on the first ring,
            speaks in natural, human-like language, and handles most routine calls end‑to‑end – while safely
            escalating anything urgent to your team.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-dark rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-foreground">{feature.title}</h3>
                  <p className="text-primary text-sm font-medium">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-dark text-foreground font-medium">
            <span className="text-primary">✓</span>
            No IVR trees, no 'press 1, press 2' – just natural conversation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;

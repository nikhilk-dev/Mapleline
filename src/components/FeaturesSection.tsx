import { FileText, Globe, Database, BarChart3 } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: "Call Summaries & Dashboard",
      description:
        "Every call generates a concise summary: patient name (if known), reason for call, urgency, and next step. View history and metrics like 'hours saved' and call resolution rates.",
      status: "MVP",
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description:
        "Support for Punjabi, Mandarin, and French to better serve diverse Canadian communities.",
      status: "Roadmap",
    },
    {
      icon: Database,
      title: "EMR-Friendly Stack",
      description:
        "Connectors for popular EMRs like OSCAR and Accuro planned to streamline documentation and bookings.",
      status: "Roadmap",
    },
    {
      icon: BarChart3,
      title: "Analytics & No-Show Prevention",
      description:
        "Track no-show risk and send proactive reminders to reduce missed appointments.",
      status: "Roadmap",
    },
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Built for <span className="text-gradient">Real Clinic Workflows</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group glass-dark rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    feature.status === "MVP"
                      ? "bg-primary/20 text-primary"
                      : "bg-secondary/20 text-secondary"
                  }`}
                >
                  {feature.status}
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

import { Users, Building2 } from "lucide-react";

const ProblemSection = () => {
  const patientPains = [
    "7+ failed calls before giving up",
    "After-hours = no human, just voicemail",
    "Can't reach anyone for simple questions or refills",
    "Urgent concerns stuck in phone queues",
  ];

  const clinicPains = [
    "80–120 calls per day, per clinic",
    "15–20 staff hours/week spent just managing phones",
    "30–40% of calls missed during peak times",
    "Burned-out MOAs, rising complaints, bad reviews",
  ];

  return (
    <section id="problem" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-foreground">
            Your Front Desk Is in Crisis,{" "}
            <span className="text-gradient">Even If It Looks 'Fine'</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Patients Column */}
          <div className="bg-card rounded-2xl p-8 border border-destructive/20 hover:border-destructive/40 transition-colors shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Users className="w-7 h-7 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Patients Experience</h3>
                <p className="text-muted-foreground text-sm">Frustration at every turn</p>
              </div>
            </div>

            <ul className="space-y-4">
              {patientPains.map((pain, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm font-bold">✕</span>
                  </span>
                  <span className="text-foreground">{pain}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Clinics Column */}
          <div className="bg-card rounded-2xl p-8 border border-destructive/20 hover:border-destructive/40 transition-colors shadow-lg">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center">
                <Building2 className="w-7 h-7 text-destructive" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Clinics Experience</h3>
                <p className="text-muted-foreground text-sm">Overwhelmed and understaffed</p>
              </div>
            </div>

            <ul className="space-y-4">
              {clinicPains.map((pain, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-destructive text-sm font-bold">✕</span>
                  </span>
                  <span className="text-foreground">{pain}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Context Paragraph */}
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-muted-foreground leading-relaxed">
            Across Canada, patient access complaints are rising. Family practices are overwhelmed,
            walk-in clinics are stretched thin, and millions of Canadians remain unattached to primary care.
            The front desk can't keep up—and patients are paying the price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
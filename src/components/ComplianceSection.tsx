import { Shield, Server, Lock, Eye, Trash2, FileCheck } from "lucide-react";

const ComplianceSection = () => {
  const compliancePoints = [
    {
      icon: Server,
      text: "Data hosted on Canadian infrastructure (e.g., AWS Canada, Supabase in Canada)",
    },
    {
      icon: FileCheck,
      text: "PIPEDA/PHIPA aligned handling of personal health information",
    },
    {
      icon: Lock,
      text: "No call recording without explicit consent",
    },
    {
      icon: Eye,
      text: "Audit trails and encryption for sensitive data",
    },
    {
      icon: Trash2,
      text: "Patient data can be removed on request",
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Compliance</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              Canadian Compliance{" "}
              <span className="text-gradient">from Day One</span>
            </h2>

            <ul className="space-y-5 mb-8">
              {compliancePoints.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground pt-2">{point.text}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-sm leading-relaxed border-l-2 border-primary pl-4">
              MapleLine is designed in collaboration with Canadian legal guidance to respect
              provincial health privacy laws.
            </p>
          </div>

          <div className="relative">
            <div className="glass-dark rounded-3xl p-10 border border-primary/20">
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 rounded-2xl gradient-primary flex items-center justify-center shadow-glow">
                  <Shield className="w-12 h-12 text-primary-foreground" />
                </div>
              </div>

              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-foreground">PIPEDA & PHIPA Compliant</h3>
                <p className="text-muted-foreground">
                  Your patients' data is protected with enterprise-grade security and Canadian privacy standards.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border/50">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gradient">🇨🇦</p>
                    <p className="text-xs text-muted-foreground mt-1">Canadian Data</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gradient">🔒</p>
                    <p className="text-xs text-muted-foreground mt-1">Encrypted</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gradient">✓</p>
                    <p className="text-xs text-muted-foreground mt-1">Auditable</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceSection;

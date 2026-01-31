import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  const plans = [
    {
      name: "Starter",
      description: "Best for smaller clinics",
      features: [
        "Core voice receptionist",
        "Smart booking & rescheduling",
        "Basic triage & escalation",
        "~500 calls/month included",
        "Email support",
      ],
      highlighted: false,
    },
    {
      name: "Growth",
      description: "For busier clinics and groups",
      features: [
        "Everything in Starter",
        "Higher call volume limits",
        "Multi-location support",
        "Advanced reporting",
        "Priority phone support",
      ],
      highlighted: true,
    },
    {
      name: "Enterprise",
      description: "For large groups or custom setups",
      features: [
        "Everything in Growth",
        "Custom call flows",
        "Deeper integrations",
        "Dedicated success manager",
        "SLA guarantees",
      ],
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] gradient-glow opacity-20" />

      <div className="section-container relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Pricing</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Simple, <span className="text-gradient">Clinic-Friendly Pricing</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                plan.highlighted
                  ? "glass-dark border-primary shadow-glow scale-105"
                  : "glass-dark border-border/50 hover:border-primary/50"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-primary text-primary-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "hero" : "outline"}
                size="lg"
                className="w-full"
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Not sure which plan is right for you?
          </p>
          <Button variant="hero-outline" size="lg">
            Talk to us about a free 30‑day pilot
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

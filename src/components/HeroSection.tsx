import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/contexts/WaitlistContext";

const HeroSection = () => {
  const { openWaitlist } = useWaitlist();
  const benefits = [
    "Automate 60–70% of routine calls",
    "Save 15–20 staff hours per week",
    'No more "voicemail full, call back Monday"',
    "Built for BC clinics, compliant in Canada",
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] gradient-glow opacity-50" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">24/7 AI Phone Coverage</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
              Always-On Phone Access{" "}
              <span className="text-gradient">for Your Clinic</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
              MapleLine is a 24/7 voice AI receptionist for Canadian clinics that answers every call,
              books appointments, and escalates urgent cases – without IVR menus, and fully PIPEDA/PHIPA compliant.
            </p>

            {/* Benefits List */}
            <ul className="space-y-3">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl" asChild>
                <a href="https://cal.com/nikhil-kanda-iscd12/15min" target="_blank" rel="noopener noreferrer">
                  Book a Call
                </a>
              </Button>
              <Button variant="outline" size="xl" onClick={openWaitlist}>
                Join the Waitlist
              </Button>
            </div>
          </div>

          {/* Hero Visual - Image */}
          <div className="relative flex items-center justify-center min-h-[400px]">
            <img
              src={`${import.meta.env.BASE_URL || "/"}hero_image.png`}
              alt="MapleLine - System Health dashboard and AI call interface"
              className="max-w-full h-auto animate-fade-in object-contain"
              style={{ maxHeight: "500px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
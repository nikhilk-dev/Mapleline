import { Phone, Calendar, Clock, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark border border-primary/20">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">24/7 AI Phone Coverage</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
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
              <Button variant="hero" size="xl">
                Book a Free 30-Day Pilot
              </Button>
              <Button variant="hero-outline" size="xl">
                See How It Works
              </Button>
            </div>

            {/* Trust Line */}
            <p className="text-sm text-muted-foreground pt-4 border-t border-border/50 max-w-lg">
              Designed by <span className="text-foreground font-medium">Nikhil Kanda (Nix)</span> – Canadian founder,
              design leader, and new father who experienced the pain of unreachable clinics first-hand.
            </p>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden lg:block">
            <div className="relative animate-float">
              {/* Phone Mockup */}
              <div className="relative mx-auto w-72 h-[580px] bg-card rounded-[3rem] border-4 border-border/50 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-background rounded-b-2xl" />
                <div className="p-4 pt-10 space-y-4">
                  {/* Call UI */}
                  <div className="text-center py-8">
                    <div className="w-20 h-20 mx-auto rounded-full gradient-primary flex items-center justify-center mb-4">
                      <Phone className="w-8 h-8 text-primary-foreground" />
                    </div>
                    <p className="text-foreground font-semibold text-lg">MapleLine Health</p>
                    <p className="text-primary text-sm">Connected • Speaking</p>
                  </div>

                  {/* Conversation Preview */}
                  <div className="space-y-3">
                    <div className="bg-muted/50 rounded-2xl rounded-tl-sm p-3">
                      <p className="text-sm text-muted-foreground">
                        "Hi, I'd like to book an appointment for next week..."
                      </p>
                    </div>
                    <div className="bg-primary/20 rounded-2xl rounded-tr-sm p-3 ml-8">
                      <p className="text-sm text-foreground">
                        "I'd be happy to help! I see Dr. Chen has availability on Tuesday at 2pm or Thursday at 10am."
                      </p>
                    </div>
                  </div>

                  {/* Status Cards */}
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <div className="bg-muted/30 rounded-xl p-3 text-center">
                      <Calendar className="w-5 h-5 text-primary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">Booking</p>
                    </div>
                    <div className="bg-muted/30 rounded-xl p-3 text-center">
                      <Clock className="w-5 h-5 text-secondary mx-auto mb-1" />
                      <p className="text-xs text-muted-foreground">24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 glass-dark rounded-xl p-3 shadow-lg animate-pulse-glow">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <span className="text-sm font-medium text-foreground">Call Answered</span>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-dark rounded-xl p-3 shadow-lg">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Appointment Booked</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

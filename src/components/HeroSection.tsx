import { Phone, Calendar, Clock, CheckCircle, Users, TrendingUp } from "lucide-react";
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

          {/* Hero Visual - UI Elements Only (Laptop Dashboard + Phone UI) */}
          <div className="relative hidden lg:flex items-end justify-center gap-6">
            {/* Laptop Mockup - Dashboard UI */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative w-80 h-52 bg-card rounded-t-xl border border-border shadow-2xl overflow-hidden">
                <div className="p-4 h-full bg-background">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xs font-semibold text-foreground">System Health</h4>
                    <span className="flex items-center gap-1 text-[10px] text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      Live
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-3">
                    <div className="bg-card rounded-lg p-2 border border-border">
                      <div className="flex items-center gap-1 mb-1">
                        <Phone className="w-3 h-3 text-primary" />
                        <span className="text-[10px] text-muted-foreground">Calls</span>
                      </div>
                      <p className="text-sm font-bold text-foreground">247</p>
                      <p className="text-[9px] text-primary">+12% today</p>
                    </div>
                    <div className="bg-card rounded-lg p-2 border border-border">
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="w-3 h-3 text-primary" />
                        <span className="text-[10px] text-muted-foreground">Booked</span>
                      </div>
                      <p className="text-sm font-bold text-foreground">89</p>
                      <p className="text-[9px] text-primary">36% rate</p>
                    </div>
                    <div className="bg-card rounded-lg p-2 border border-border">
                      <div className="flex items-center gap-1 mb-1">
                        <Clock className="w-3 h-3 text-primary" />
                        <span className="text-[10px] text-muted-foreground">Saved</span>
                      </div>
                      <p className="text-sm font-bold text-foreground">18h</p>
                      <p className="text-[9px] text-primary">this week</p>
                    </div>
                  </div>
                  <div className="bg-card rounded-lg p-2 border border-border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] text-muted-foreground">Call Volume</span>
                      <TrendingUp className="w-3 h-3 text-primary" />
                    </div>
                    <div className="flex items-end gap-1 h-8">
                      {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 95, 80].map((h, i) => (
                        <div key={i} className="flex-1 bg-primary/30 rounded-sm" style={{ height: `${h}%` }}>
                          <div className="w-full bg-primary rounded-sm" style={{ height: `${Math.min(h + 10, 100)}%` }} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-96 h-3 bg-muted rounded-b-lg mx-auto border-x border-b border-border" />
              <div className="w-24 h-1 bg-muted-foreground/30 rounded-b-lg mx-auto" />
            </div>

            {/* Phone Mockup - Call UI */}
            <div className="relative animate-float -ml-8 z-10">
              <div className="relative w-48 h-[380px] bg-card rounded-[2rem] border-4 border-border shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-background rounded-b-xl" />
                <div className="p-3 pt-8 space-y-3">
                  <div className="text-center py-4">
                    <div className="w-14 h-14 mx-auto rounded-full gradient-primary flex items-center justify-center mb-2">
                      <Phone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="text-foreground font-semibold text-sm">MapleLine</p>
                    <p className="text-primary text-xs">Connected</p>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-muted rounded-xl rounded-tl-sm p-2">
                      <p className="text-xs text-muted-foreground">"I'd like to book for next week..."</p>
                    </div>
                    <div className="bg-primary/20 rounded-xl rounded-tr-sm p-2 ml-4">
                      <p className="text-xs text-foreground">"Dr. Chen has Tuesday at 2pm or Thursday at 10am."</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <div className="bg-muted rounded-lg p-2 text-center">
                      <Calendar className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-[10px] text-muted-foreground">Booking</p>
                    </div>
                    <div className="bg-muted rounded-lg p-2 text-center">
                      <Clock className="w-4 h-4 text-primary mx-auto mb-1" />
                      <p className="text-[10px] text-muted-foreground">24/7</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 bg-card rounded-lg p-2 shadow-lg border border-border animate-pulse-glow">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-xs font-medium text-foreground">Call Answered</span>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-3 bg-card rounded-lg p-2 shadow-lg border border-border">
                <div className="flex items-center gap-1.5">
                  <CheckCircle className="w-3 h-3 text-primary" />
                  <span className="text-xs font-medium text-foreground">Booked</span>
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
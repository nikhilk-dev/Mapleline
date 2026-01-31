import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/contexts/WaitlistContext";

const CTASection = () => {
  const { openWaitlist } = useWaitlist();
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] gradient-glow opacity-40" />

      <div className="section-container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">Get Started</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Want to See MapleLine{" "}
              <span className="text-gradient">in Action?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              MapleLine isn't a slide deck—it's a live system we're piloting with clinics like yours.
              If your front desk is overwhelmed or patients struggle to reach you, we'd love to show you
              what a 24/7 AI receptionist can do.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
        </div>
      </div>
    </section>
  );
};

export default CTASection;
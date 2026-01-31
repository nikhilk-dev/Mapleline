import { useState } from "react";
import { Send, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const CTASection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    clinicName: "",
    role: "",
    email: "",
    callVolume: "",
    painPoint: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch within 24 hours to schedule your pilot call.",
    });
    setFormData({
      clinicName: "",
      role: "",
      email: "",
      callVolume: "",
      painPoint: "",
    });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] gradient-glow opacity-40" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="xl">
                Book a Free Pilot Call
              </Button>
              <Button variant="hero-outline" size="lg" className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Get the Product Overview PDF
              </Button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-dark rounded-3xl p-8 border border-border/50">
            <h3 className="text-xl font-bold text-foreground mb-6">Request a Demo</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  placeholder="Clinic Name"
                  value={formData.clinicName}
                  onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  placeholder="Your Role (e.g., Clinic Manager, MOA, Physician)"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                  required
                />
              </div>

              <div>
                <Input
                  placeholder="Approximate Call Volume (e.g., 80-100/day)"
                  value={formData.callVolume}
                  onChange={(e) => setFormData({ ...formData, callVolume: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary"
                />
              </div>

              <div>
                <Textarea
                  placeholder="What's most painful about your current phone setup?"
                  value={formData.painPoint}
                  onChange={(e) => setFormData({ ...formData, painPoint: e.target.value })}
                  className="bg-muted/50 border-border/50 focus:border-primary min-h-[100px]"
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-4 h-4" />
                Submit Request
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

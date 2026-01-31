import { createContext, useContext, useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

type WaitlistContextType = {
  openWaitlist: () => void;
  closeWaitlist: () => void;
};

const WaitlistContext = createContext<WaitlistContextType | null>(null);

export const useWaitlist = () => {
  const context = useContext(WaitlistContext);
  if (!context) {
    throw new Error("useWaitlist must be used within WaitlistProvider");
  }
  return context;
};

export const WaitlistProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    clinicName: "",
    role: "",
    email: "",
    callVolume: "",
    painPoint: "",
  });

  const openWaitlist = () => setIsOpen(true);
  const closeWaitlist = () => setIsOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const GOOGLE_SCRIPT_URL =
        import.meta.env.VITE_GOOGLE_SCRIPT_URL ||
        "https://script.google.com/macros/s/AKfycbz5se1T0oFXG1n6rMMHwQKEnwxlOqzaSJjSt58_RQ_AIYZTjAN43U14o6l6Etv7ruND/exec";

      const payload = JSON.stringify({
        clinicName: formData.clinicName,
        role: formData.role,
        email: formData.email,
        callVolume: formData.callVolume,
        painPoint: formData.painPoint,
        timestamp: new Date().toISOString(),
        source: "waitlist",
      });

      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=UTF-8" },
        body: payload,
      });

      toast({
        title: "You're on the list!",
        description: "We'll be in touch soon with next steps.",
      });

      setFormData({
        clinicName: "",
        role: "",
        email: "",
        callVolume: "",
        painPoint: "",
      });
      closeWaitlist();
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Thank you!",
        description: "We've received your request and will be in touch soon.",
      });
      setFormData({
        clinicName: "",
        role: "",
        email: "",
        callVolume: "",
        painPoint: "",
      });
      closeWaitlist();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <WaitlistContext.Provider value={{ openWaitlist, closeWaitlist }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Join the Waitlist</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Input
                placeholder="Clinic Name"
                value={formData.clinicName}
                onChange={(e) =>
                  setFormData({ ...formData, clinicName: e.target.value })
                }
                className="bg-background border-border focus:border-primary"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                placeholder="Your Role (e.g., Clinic Manager, MOA, Physician)"
                value={formData.role}
                onChange={(e) =>
                  setFormData({ ...formData, role: e.target.value })
                }
                className="bg-background border-border focus:border-primary"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="bg-background border-border focus:border-primary"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Input
                placeholder="Approximate Call Volume (e.g., 80-100/day)"
                value={formData.callVolume}
                onChange={(e) =>
                  setFormData({ ...formData, callVolume: e.target.value })
                }
                className="bg-background border-border focus:border-primary"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <Textarea
                placeholder="What's most painful about your current phone setup?"
                value={formData.painPoint}
                onChange={(e) =>
                  setFormData({ ...formData, painPoint: e.target.value })
                }
                className="bg-background border-border focus:border-primary min-h-[100px]"
                disabled={isSubmitting}
              />
            </div>
            <Button
              type="submit"
              variant="hero"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Join the Waitlist
                </>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  );
};

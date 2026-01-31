import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useWaitlist } from "@/contexts/WaitlistContext";

const Header = () => {
  const { openWaitlist } = useWaitlist();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#problem", label: "The Problem" },
    { href: "#solution", label: "Solution" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? "bg-background/95 backdrop-blur-lg border-b border-border py-3"
          : "py-5"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between">
          <a href={import.meta.env.BASE_URL || "/"} className="flex items-center gap-2">
            <img src={`${import.meta.env.BASE_URL || "/"}favicon.svg`} alt="MapleLine" className="w-8 h-8 rounded-lg" />
            <span className="text-xl font-bold text-foreground lowercase">mapleline</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="hero" size="sm" className="hidden sm:inline-flex" asChild>
              <a href="https://cal.com/nikhil-kanda-iscd12/15min" target="_blank" rel="noopener noreferrer">
                Book a Call
              </a>
            </Button>
            <Button variant="outline" size="sm" className="hidden sm:inline-flex" onClick={openWaitlist}>
              Join the Waitlist
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4 bg-background">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-2">
                <Button variant="hero" size="sm" className="w-full" asChild>
                  <a href="https://cal.com/nikhil-kanda-iscd12/15min" target="_blank" rel="noopener noreferrer">
                    Book a Call
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    openWaitlist();
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
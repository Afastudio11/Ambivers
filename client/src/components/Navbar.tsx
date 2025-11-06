import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-background/95 backdrop-blur-md border-b shadow-sm" : "bg-background/80 backdrop-blur-md border-b"
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 hover-elevate rounded-md p-2 -ml-2"
            data-testid="button-logo"
          >
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl">Ambivers</span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("program")}
              className="text-foreground hover:text-primary transition-colors" 
              data-testid="link-program"
            >
              Program
            </button>
            <button 
              onClick={() => scrollToSection("tentang-kami")}
              className="text-foreground hover:text-primary transition-colors" 
              data-testid="link-tentang"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => scrollToSection("testimoni")}
              className="text-foreground hover:text-primary transition-colors" 
              data-testid="link-testimoni"
            >
              Testimoni
            </button>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" data-testid="button-masuk">
              Masuk
            </Button>
            <Button data-testid="button-daftar">
              Daftar
            </Button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t bg-background" data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("program")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="link-program-mobile"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection("tentang-kami")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="link-tentang-mobile"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className="block w-full text-left text-foreground hover:text-primary transition-colors py-2"
              data-testid="link-testimoni-mobile"
            >
              Testimoni
            </button>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className="w-full" data-testid="button-masuk-mobile">
                Masuk
              </Button>
              <Button className="w-full" data-testid="button-daftar-mobile">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

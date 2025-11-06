import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">A</span>
            </div>
            <span className="font-bold text-xl">Ambivers</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#program" className="text-foreground hover:text-primary transition-colors" data-testid="link-program">
              Program
            </a>
            <a href="#tentang-kami" className="text-foreground hover:text-primary transition-colors" data-testid="link-tentang">
              Tentang Kami
            </a>
            <a href="#insight" className="text-foreground hover:text-primary transition-colors" data-testid="link-insight">
              Insight & Blog
            </a>
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
            <a
              href="#program"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-program-mobile"
            >
              Program
            </a>
            <a
              href="#tentang-kami"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-tentang-mobile"
            >
              Tentang Kami
            </a>
            <a
              href="#insight"
              className="block text-foreground hover:text-primary transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
              data-testid="link-insight-mobile"
            >
              Insight & Blog
            </a>
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

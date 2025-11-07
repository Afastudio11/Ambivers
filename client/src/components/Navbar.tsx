import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/logo-ambivers.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = () => {
    if (location === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  const scrollToSection = (id: string) => {
    if (location !== "/") {
      navigate("/");
      setTimeout(() => {
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
      }, 100);
    } else {
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
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-sm" : "bg-white border-b border-gray-200"
    }`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button 
            onClick={handleLogoClick}
            className="flex items-center hover-elevate rounded-md p-2 -ml-2"
            data-testid="button-logo"
          >
            <img 
              src={logoImage} 
              alt="Ambivers" 
              className="h-10 w-auto object-contain"
            />
          </button>

          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection("program")}
              className={`${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors font-medium`}
              data-testid="link-program"
            >
              Program
            </button>
            <button 
              onClick={() => scrollToSection("tentang-kami")}
              className={`${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors font-medium`}
              data-testid="link-tentang"
            >
              Tentang Kami
            </button>
            <button 
              onClick={() => scrollToSection("testimoni")}
              className={`${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors font-medium`}
              data-testid="link-testimoni"
            >
              Testimoni
            </button>
            <Link 
              href="/blog"
              className={`${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors font-medium`}
              data-testid="link-blog"
            >
              Insight & Blog
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" className={`${scrolled ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-gray-100"} hover:text-[#FFC700]`} data-testid="button-masuk">
              Masuk
            </Button>
            <Button className="bg-[#FFC700] text-black hover:bg-[#FFD700]" data-testid="button-daftar">
              Daftar
            </Button>
          </div>

          <button
            className={`md:hidden p-2 ${scrolled ? "text-white" : "text-gray-900"}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-menu-toggle"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`md:hidden border-t ${scrolled ? "border-white/10 bg-black/90" : "border-gray-200 bg-white"} backdrop-blur-md`} data-testid="mobile-menu">
          <div className="px-4 py-6 space-y-4">
            <button
              onClick={() => scrollToSection("program")}
              className={`block w-full text-left ${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors py-2 font-medium`}
              data-testid="link-program-mobile"
            >
              Program
            </button>
            <button
              onClick={() => scrollToSection("tentang-kami")}
              className={`block w-full text-left ${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors py-2 font-medium`}
              data-testid="link-tentang-mobile"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("testimoni")}
              className={`block w-full text-left ${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors py-2 font-medium`}
              data-testid="link-testimoni-mobile"
            >
              Testimoni
            </button>
            <Link
              href="/blog"
              className={`block w-full text-left ${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors py-2 font-medium`}
              data-testid="link-blog-mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insight & Blog
            </Link>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" className={`w-full ${scrolled ? "text-white hover:bg-white/10" : "text-gray-900 hover:bg-gray-100"} hover:text-[#FFC700]`} data-testid="button-masuk-mobile">
                Masuk
              </Button>
              <Button className="w-full bg-[#FFC700] text-black hover:bg-[#FFD700]" data-testid="button-daftar-mobile">
                Daftar
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

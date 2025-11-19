import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "wouter";
import logoImage from "@assets/logo-ambivers.png";

interface DropdownItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [programDropdownOpen, setProgramDropdownOpen] = useState(false);
  const [tentangDropdownOpen, setTentangDropdownOpen] = useState(false);
  const [location, navigate] = useLocation();
  
  const programTimeoutRef = useRef<NodeJS.Timeout>();
  const tentangTimeoutRef = useRef<NodeJS.Timeout>();

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

  const handleProgramMouseEnter = () => {
    if (programTimeoutRef.current) {
      clearTimeout(programTimeoutRef.current);
    }
    setProgramDropdownOpen(true);
  };

  const handleProgramMouseLeave = () => {
    programTimeoutRef.current = setTimeout(() => {
      setProgramDropdownOpen(false);
    }, 150);
  };

  const handleTentangMouseEnter = () => {
    if (tentangTimeoutRef.current) {
      clearTimeout(tentangTimeoutRef.current);
    }
    setTentangDropdownOpen(true);
  };

  const handleTentangMouseLeave = () => {
    tentangTimeoutRef.current = setTimeout(() => {
      setTentangDropdownOpen(false);
    }, 150);
  };

  const programItems: DropdownItem[] = [
    { label: "Ambivers Foundation", href: "/ambivers-foundation" },
    { label: "Ambivers Summer Youth Program", href: "/asyp" },
    { label: "Student Ambassador", href: "/student-ambassador" },
    { label: "Bimbel UTBK", href: "/bimbel-utbk" },
    { label: "Study Abroad", href: "/coming-soon" },
    { label: "Workshop", href: "/coming-soon" },
  ];

  const tentangItems: DropdownItem[] = [
    { label: "Tentang Kami", href: "/tentang-kami" },
    { label: "Ambivers in number", onClick: () => scrollToSection("statistics") },
    { label: "What we do?", href: "/what-we-do" },
    { label: "Testimoni", onClick: () => scrollToSection("testimoni") },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-black/30 backdrop-blur-md border-b border-white/10 shadow-sm" : "bg-white border-b border-gray-200"
    }`}>
      <div className="w-full mx-auto px-4 lg:px-8">
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
            {/* Program Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleProgramMouseEnter}
              onMouseLeave={handleProgramMouseLeave}
            >
              <button 
                className={`${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors font-medium flex items-center gap-1 nav-link`}
                data-testid="link-program"
              >
                Program
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 origin-top ${
                programDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
              }`}>
                {programItems.map((item, index) => (
                  item.href ? (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-3 text-gray-900 hover:bg-[#FFC700]/10 hover:text-[#FFC700] transition-colors text-sm"
                      data-testid={`dropdown-program-${index}`}
                    >
                      {item.label}
                    </Link>
                  ) : item.onClick ? (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="w-full text-left px-4 py-3 text-gray-900 hover:bg-[#FFC700]/10 hover:text-[#FFC700] transition-colors text-sm"
                      data-testid={`dropdown-program-${index}`}
                    >
                      {item.label}
                    </button>
                  ) : null
                ))}
              </div>
            </div>

            {/* Tentang Kami Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleTentangMouseEnter}
              onMouseLeave={handleTentangMouseLeave}
            >
              <button 
                className={`${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors font-medium flex items-center gap-1 nav-link`}
                data-testid="link-tentang"
              >
                Tentang Kami
              </button>
              
              <div className={`absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden transition-all duration-200 origin-top ${
                tentangDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
              }`}>
                {tentangItems.map((item, index) => (
                  item.href ? (
                    <Link
                      key={index}
                      href={item.href}
                      className="block px-4 py-3 text-gray-900 hover:bg-[#FFC700]/10 hover:text-[#FFC700] transition-colors text-sm"
                      data-testid={`dropdown-tentang-${index}`}
                    >
                      {item.label}
                    </Link>
                  ) : item.onClick ? (
                    <button
                      key={index}
                      onClick={item.onClick}
                      className="w-full text-left px-4 py-3 text-gray-900 hover:bg-[#FFC700]/10 hover:text-[#FFC700] transition-colors text-sm"
                      data-testid={`dropdown-tentang-${index}`}
                    >
                      {item.label}
                    </button>
                  ) : null
                ))}
              </div>
            </div>

            <Link 
              href="/blog"
              className={`${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors font-medium nav-link`}
              data-testid="link-blog"
            >
              Insight & Blog
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link href="/coming-soon">
              <button 
                className="rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                style={{
                  backgroundColor: 'rgba(232, 232, 232, 0.9)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                  color: '#4d4d4d',
                  borderColor: 'rgb(206, 206, 206)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                }}
                data-testid="button-masuk"
              >
                Masuk
              </button>
            </Link>
            <Link href="/coming-soon">
              <button 
                className="rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                style={{
                  backgroundColor: 'rgba(255, 199, 0, 0.9)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  boxShadow: 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d',
                  color: '#1a1a1a',
                  borderColor: '#FFD700',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #d9a700, inset -2px -2px 5px #ffe14d, 2px 2px 5px #d9a700, -2px -2px 5px #ffe14d';
                  e.currentTarget.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
                onFocus={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #d9a700, inset -2px -2px 5px #ffe14d, 2px 2px 5px #d9a700, -2px -2px 5px #ffe14d';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d';
                }}
                data-testid="button-daftar"
              >
                Daftar
              </button>
            </Link>
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
            {/* Mobile Program Dropdown */}
            <div>
              <button
                onClick={() => setProgramDropdownOpen(!programDropdownOpen)}
                className={`flex items-center justify-between w-full text-left ${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors py-2 font-medium`}
                data-testid="link-program-mobile"
              >
                Program
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${programDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {programDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {programItems.map((item, index) => (
                    item.href ? (
                      <Link
                        key={index}
                        href={item.href}
                        className={`block ${scrolled ? "text-white/80" : "text-gray-700"} hover:text-[#FFC700] transition-colors py-1.5 text-sm`}
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`dropdown-program-mobile-${index}`}
                      >
                        {item.label}
                      </Link>
                    ) : item.onClick ? (
                      <button
                        key={index}
                        onClick={() => {
                          item.onClick?.();
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left ${scrolled ? "text-white/80" : "text-gray-700"} hover:text-[#FFC700] transition-colors py-1.5 text-sm`}
                        data-testid={`dropdown-program-mobile-${index}`}
                      >
                        {item.label}
                      </button>
                    ) : null
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Tentang Kami Dropdown */}
            <div>
              <button
                onClick={() => setTentangDropdownOpen(!tentangDropdownOpen)}
                className={`flex items-center justify-between w-full text-left ${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors py-2 font-medium`}
                data-testid="link-tentang-mobile"
              >
                Tentang Kami
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${tentangDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {tentangDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {tentangItems.map((item, index) => (
                    item.href ? (
                      <Link
                        key={index}
                        href={item.href}
                        className={`block ${scrolled ? "text-white/80" : "text-gray-700"} hover:text-[#FFC700] transition-colors py-1.5 text-sm`}
                        onClick={() => setMobileMenuOpen(false)}
                        data-testid={`dropdown-tentang-mobile-${index}`}
                      >
                        {item.label}
                      </Link>
                    ) : item.onClick ? (
                      <button
                        key={index}
                        onClick={() => {
                          item.onClick?.();
                          setMobileMenuOpen(false);
                        }}
                        className={`block w-full text-left ${scrolled ? "text-white/80" : "text-gray-700"} hover:text-[#FFC700] transition-colors py-1.5 text-sm`}
                        data-testid={`dropdown-tentang-mobile-${index}`}
                      >
                        {item.label}
                      </button>
                    ) : null
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className={`block w-full text-left ${scrolled ? "text-white" : "text-gray-900"} hover:text-[#FFC700] transition-colors py-2 font-medium`}
              data-testid="link-blog-mobile"
              onClick={() => setMobileMenuOpen(false)}
            >
              Insight & Blog
            </Link>
            
            <div className="flex flex-col gap-2 pt-4">
              <Link href="/coming-soon" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <button 
                  className="w-full rounded-full px-8 py-3 text-base font-medium cursor-pointer transition-all duration-200 border-2"
                  style={{
                    backgroundColor: 'rgba(232, 232, 232, 0.9)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                    color: '#4d4d4d',
                    borderColor: 'rgb(206, 206, 206)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                  }}
                  data-testid="button-masuk-mobile"
                >
                  Masuk
                </button>
              </Link>
              <Link href="/coming-soon" className="w-full" onClick={() => setMobileMenuOpen(false)}>
                <button 
                  className="w-full rounded-full px-8 py-3 text-base font-medium cursor-pointer transition-all duration-200 border-2"
                  style={{
                    backgroundColor: 'rgba(255, 199, 0, 0.9)',
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d',
                    color: '#1a1a1a',
                    borderColor: '#FFD700',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #d9a700, inset -2px -2px 5px #ffe14d, 2px 2px 5px #d9a700, -2px -2px 5px #ffe14d';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d';
                  }}
                  data-testid="button-daftar-mobile"
                >
                  Daftar
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

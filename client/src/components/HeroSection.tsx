import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import photo1 from "@assets/hero-program.png";
import photo2 from "@assets/hero-workshop.jpg";
import photo3 from "@assets/hero-community.jpg";
import photo4 from "@assets/hero-online-session.jpg";

export default function HeroSection() {
  const [activeCard, setActiveCard] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev % 5) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const scrollToProgram = () => {
    const element = document.getElementById("program");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const activityCards = [
    {
      id: 1,
      tag: "Ambivers Program",
      bgColor: "bg-purple-600",
      rotation: "-rotate-6",
      zIndex: "z-10",
      image: photo1
    },
    {
      id: 2,
      tag: "Workshop",
      bgColor: "bg-yellow-500",
      rotation: "-rotate-3",
      zIndex: "z-20",
      image: photo2
    },
    {
      id: 3,
      tag: "Community",
      bgColor: "bg-red-600",
      rotation: "rotate-2",
      zIndex: "z-30",
      image: photo3
    },
    {
      id: 4,
      tag: "Online Session",
      bgColor: "bg-blue-600",
      rotation: "-rotate-2",
      zIndex: "z-20",
      image: photo4
    },
    {
      id: 5,
      tag: "Activities",
      bgColor: "bg-green-600",
      rotation: "rotate-6",
      zIndex: "z-10",
      image: photo2
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFC700]">
      <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <rect x="0" y="0" width="120" height="120" fill="none" stroke="#000" strokeWidth="1" rx="12" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 lg:pt-40 pb-12 sm:pb-20">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="font-bold mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="text-hero-headline">
            <span className="text-gray-900 block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Bantu Raih Impianmu</span>
            <span className="text-gray-900 block mt-2 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Jadi Nyata!</span>
          </h1>
          
          <p className="sm:text-base md:text-lg lg:text-xl text-gray-800 max-w-4xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 leading-relaxed" data-testid="text-hero-description">
            Ambivers telah memberikan dampak positif bagi <strong>50.000+ pelajar</strong> di seluruh Indonesia. Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
          </p>
        </div>

        <div className="relative mb-8 sm:mb-12">
          {/* Mobile: Single row with 3 overlapping cards with animation */}
          <div className="md:hidden flex justify-center items-center relative h-48 sm:h-56 mb-8">
            {activityCards.slice(0, 3).map((card, index) => {
              const isActive = card.id === activeCard;
              const baseRotation = (index - 1) * 8;
              
              return (
                <div
                  key={card.id}
                  className="absolute w-32 sm:w-40 h-44 sm:h-52 rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden transition-all duration-700 ease-in-out"
                  style={{
                    transform: `translateX(${(index - 1) * 50}px) rotate(${baseRotation}deg) scale(${isActive ? 1.05 : 1})`,
                    zIndex: isActive ? 40 : index === 1 ? 30 : index === 2 ? 20 : 10,
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={`Ambivers ${card.tag}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent transition-all duration-700 ${isActive ? 'to-black/20' : 'to-black/40'}`} />
                </div>
              );
            })}
          </div>

          {/* Desktop: Horizontal overlap with animation */}
          <div className="hidden md:block relative h-[400px] mb-12">
            <div className="flex items-center justify-center -space-x-24">
              {activityCards.map((card) => {
                const isActive = card.id === activeCard;
                
                return (
                  <div
                    key={card.id}
                    className={`relative w-64 h-80 rounded-2xl shadow-2xl transform transition-all duration-700 ease-in-out hover:scale-110 hover:-translate-y-4 hover:z-50 cursor-pointer overflow-hidden ${card.rotation}`}
                    style={{
                      transformStyle: 'preserve-3d',
                      transform: isActive 
                        ? `${card.rotation.includes('-') ? 'rotate(-' : 'rotate('}${Math.abs(parseInt(card.rotation.match(/-?\d+/)?.[0] || '0'))}deg) scale(1.08) translateY(-8px)`
                        : undefined,
                      zIndex: isActive ? 50 : card.zIndex === 'z-30' ? 30 : card.zIndex === 'z-20' ? 20 : 10,
                    }}
                  >
                    <img 
                      src={card.image} 
                      alt={`Ambivers ${card.tag}`}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-transparent transition-all duration-700 ${isActive ? 'to-black/20' : 'to-black/40'}`} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <button 
            onClick={scrollToProgram}
            className="group relative flex items-center justify-center gap-3 rounded-full font-semibold cursor-pointer transition-all duration-300 px-6 py-4 sm:px-8 sm:py-4 border-2"
            style={{
              minWidth: '240px',
              backgroundColor: 'rgba(26, 26, 26, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              boxShadow: 'inset 4px 4px 12px rgba(0, 0, 0, 0.3), inset -4px -4px 12px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2)',
              color: '#ffffff',
              borderColor: 'rgba(255, 255, 255, 0.2)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = 'inset 2px 2px 6px rgba(0, 0, 0, 0.3), inset -2px -2px 6px rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.3)';
              e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = 'inset 4px 4px 12px rgba(0, 0, 0, 0.3), inset -4px -4px 12px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
            }}
            onFocus={(e) => {
              e.currentTarget.style.boxShadow = 'inset 2px 2px 6px rgba(0, 0, 0, 0.3), inset -2px -2px 6px rgba(255, 255, 255, 0.1), 0 4px 16px rgba(0, 0, 0, 0.3)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.boxShadow = 'inset 4px 4px 12px rgba(0, 0, 0, 0.3), inset -4px -4px 12px rgba(255, 255, 255, 0.1), 0 8px 32px rgba(0, 0, 0, 0.2)';
            }}
            data-testid="button-jelajahi"
          >
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-1000 group-hover:rotate-[360deg]" />
            <span className="text-base sm:text-lg">Jelajahi program kami</span>
          </button>
        </div>
      </div>
    </section>
  );
}

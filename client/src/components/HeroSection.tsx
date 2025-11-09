import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import photo1 from "@assets/ambivers-photo-1.jpg";
import photo2 from "@assets/ambivers-photo-2.jpg";
import photo3 from "@assets/ambivers-photo-3.jpg";

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
      tag: "@ambivers.foundation",
      bgColor: "bg-purple-600",
      rotation: "-rotate-6",
      zIndex: "z-10",
      image: photo3
    },
    {
      id: 2,
      tag: "@studyabroad",
      bgColor: "bg-yellow-500",
      rotation: "-rotate-3",
      zIndex: "z-20",
      image: photo1
    },
    {
      id: 3,
      tag: "@asyp",
      bgColor: "bg-red-600",
      rotation: "rotate-2",
      zIndex: "z-30",
      image: photo2
    },
    {
      id: 4,
      tag: "@bimbel.utbk",
      bgColor: "bg-blue-600",
      rotation: "-rotate-2",
      zIndex: "z-20",
      image: photo3
    },
    {
      id: 5,
      tag: "@ambassador",
      bgColor: "bg-green-600",
      rotation: "rotate-6",
      zIndex: "z-10",
      image: photo1
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
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="text-hero-headline">
            <span className="text-gray-900 block">Tempat Untuk</span>
            <span className="text-gray-900 block">Menampilkan.</span>
            <span className="italic font-serif text-gray-900 block">Karya Terbaikmu.</span>
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-800 max-w-3xl mx-auto mb-8 sm:mb-12 md:mb-16 px-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150 leading-relaxed" data-testid="text-hero-description">
            Ambivers Memberikan Ruang Bagi Pelajar Untuk Menampilkan Karya Dan Pencapaian Mereka,
            Serta Membuka Kesempatan Lebih Luas Untuk Berkembang.
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
                  <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
                    <span className="text-white text-[9px] sm:text-[10px] font-medium whitespace-nowrap">{card.tag}</span>
                  </div>
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
                    <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
                      <span className="text-white text-xs font-medium">{card.tag}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <button 
            onClick={scrollToProgram}
            className="group relative flex items-center justify-center gap-3 bg-gray-900 text-white font-semibold rounded-full border-none cursor-pointer transition-all duration-500 shadow-lg hover:bg-gray-800 active:scale-95 px-4 py-3 sm:px-6 sm:py-4"
            style={{
              minWidth: '200px',
              boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)',
            }}
            data-testid="button-jelajahi"
          >
            <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-1000 group-hover:rotate-[360deg]" />
            <span className="text-base sm:text-lg">Jelajahi Program Kami</span>
          </button>
        </div>
      </div>
    </section>
  );
}

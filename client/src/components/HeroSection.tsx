import { Button } from "@/components/ui/button";
import photo1 from "@assets/ambivers-photo-1.jpg";
import photo2 from "@assets/ambivers-photo-2.jpg";
import photo3 from "@assets/ambivers-photo-3.jpg";

export default function HeroSection() {
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

      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-black/20 rounded-2xl" />
      <div className="absolute bottom-20 left-32 w-24 h-24 border-2 border-black/20 rounded-2xl" />
      <div className="absolute bottom-40 right-20 w-40 h-40 border-2 border-black/20 rounded-2xl" />
      <div className="absolute top-32 right-32 w-28 h-28 border-2 border-black/20 rounded-2xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8 pt-32 lg:pt-40 pb-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="text-hero-headline">
            <span className="text-gray-900">Tempat untuk menampilkan.</span>
            <br />
            <span className="italic font-serif text-gray-900">karya terbaikmu.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150" data-testid="text-hero-description">
            Ambivers memberikan ruang bagi pelajar untuk menampilkan karya dan pencapaian mereka,
            serta membuka kesempatan lebih luas untuk berkembang.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-10 top-1/2 -translate-y-1/2 bg-yellow-600/80 backdrop-blur-sm p-6 rounded-2xl max-w-[200px] shadow-lg">
            <div className="text-xs text-gray-900 mb-2 uppercase tracking-wide font-semibold">Tahun</div>
            <div className="text-4xl font-bold text-gray-900 mb-2">2020</div>
            <div className="text-sm text-gray-900">Berdiri Sejak</div>
          </div>

          <div className="relative h-[300px] md:h-[400px] mb-12 flex items-center justify-center">
            <div className="flex items-center justify-center -space-x-12 md:-space-x-16">
              {activityCards.map((card) => (
                <div
                  key={card.id}
                  className={`relative w-44 h-56 md:w-56 md:h-72 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 hover:z-50 cursor-pointer overflow-hidden ${card.rotation} ${card.zIndex}`}
                  style={{
                    transformStyle: 'preserve-3d',
                  }}
                >
                  <img 
                    src={card.image} 
                    alt={`Ambivers ${card.tag}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30" />
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full z-10">
                    <span className="text-white text-xs font-medium">{card.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 md:right-10 top-1/2 -translate-y-1/2 bg-yellow-600/80 backdrop-blur-sm p-6 rounded-2xl max-w-[220px] shadow-lg">
            <div className="flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full mb-4">
              <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <div className="text-sm text-gray-900 font-semibold">Pengembangan Pelajar Indonesia</div>
          </div>
        </div>

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button 
            size="lg" 
            onClick={scrollToProgram}
            className="text-lg font-bold px-8 py-6 bg-gray-900 text-white hover:bg-gray-800"
            data-testid="button-jelajahi"
          >
            Jelajahi Program Kami
          </Button>
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";

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
      rotation: "-rotate-12 -translate-x-32 -translate-y-8",
      zIndex: "z-10"
    },
    {
      id: 2,
      tag: "@studyabroad",
      bgColor: "bg-yellow-500",
      rotation: "-rotate-6 -translate-x-16 translate-y-4",
      zIndex: "z-20"
    },
    {
      id: 3,
      tag: "@asyp",
      bgColor: "bg-red-600",
      rotation: "rotate-3 translate-y-2",
      zIndex: "z-30"
    },
    {
      id: 4,
      tag: "@bimbel.utbk",
      bgColor: "bg-blue-600",
      rotation: "rotate-6 translate-x-16 -translate-y-6",
      zIndex: "z-20"
    },
    {
      id: 5,
      tag: "@ambassador",
      bgColor: "bg-green-600",
      rotation: "rotate-12 translate-x-32 translate-y-8",
      zIndex: "z-10"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="text-hero-headline">
            <span className="text-white">Tempat untuk menampilkan</span>
            <br />
            <span className="text-[#FFC700]">karya terbaikmu.</span>
          </h1>
        </div>

        <div className="relative h-[400px] md:h-[500px] mb-16 flex items-center justify-center perspective-1000">
          {activityCards.map((card) => (
            <div
              key={card.id}
              className={`absolute w-64 h-80 md:w-80 md:h-96 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:z-50 cursor-pointer ${card.bgColor} ${card.rotation} ${card.zIndex}`}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-6">
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                  <span className="text-white text-sm font-medium">{card.tag}</span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center text-white/30 text-6xl font-bold">
                  PHOTO
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto" data-testid="text-hero-description">
            Ambivers memberikan ruang bagi pelajar untuk menampilkan karya dan pencapaian mereka,
            serta membuka kesempatan lebih luas untuk berkembang.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 bg-black text-white border-2 border-white hover:bg-white hover:text-black transition-colors"
              data-testid="button-mulai"
            >
              Mulai dari Rp99.99/bln
            </Button>
            <Button 
              size="lg" 
              onClick={scrollToProgram}
              variant="ghost"
              className="text-lg px-8 py-6 text-white hover:text-[#FFC700] hover:bg-white/10"
              data-testid="button-selengkapnya"
            >
              Selengkapnya
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

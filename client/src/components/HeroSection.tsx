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
      rotation: "-rotate-6",
      position: "left-0"
    },
    {
      id: 2,
      tag: "@studyabroad",
      bgColor: "bg-yellow-500",
      rotation: "-rotate-3",
      position: "left-1/4 -translate-x-1/2"
    },
    {
      id: 3,
      tag: "@asyp",
      bgColor: "bg-red-600",
      rotation: "rotate-2",
      position: "left-1/2 -translate-x-1/2"
    },
    {
      id: 4,
      tag: "@bimbel.utbk",
      bgColor: "bg-blue-600",
      rotation: "-rotate-2",
      position: "left-3/4 -translate-x-1/2"
    },
    {
      id: 5,
      tag: "@ambassador",
      bgColor: "bg-green-600",
      rotation: "rotate-6",
      position: "right-0"
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

        <div className="relative h-[300px] md:h-[350px] mb-16 flex items-center justify-center">
          <div className="flex gap-4 md:gap-6 items-center justify-center flex-wrap max-w-5xl mx-auto px-4">
            {activityCards.map((card) => (
              <div
                key={card.id}
                className={`w-44 h-56 md:w-56 md:h-72 rounded-2xl shadow-2xl transform transition-all duration-500 hover:scale-110 hover:-translate-y-4 cursor-pointer ${card.bgColor} ${card.rotation}`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-transparent p-4">
                  <div className="absolute top-3 right-3 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    <span className="text-white text-xs font-medium">{card.tag}</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-white/30 text-5xl md:text-6xl font-bold">
                    PHOTO
                  </div>
                </div>
              </div>
            ))}
          </div>
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

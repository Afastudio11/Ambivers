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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="text-hero-headline">
            <span className="text-white">Tempat untuk menampilkan</span>
            <br />
            <span className="text-[#FFC700]">karya terbaikmu.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150" data-testid="text-hero-description">
            Ambivers memberikan ruang bagi pelajar untuk menampilkan karya dan pencapaian mereka,
            serta membuka kesempatan lebih luas untuk berkembang.
          </p>
        </div>

        <div className="relative h-[300px] md:h-[400px] mb-12 flex items-center justify-center">
          <div className="flex items-center justify-center -space-x-12 md:-space-x-16">
            {activityCards.map((card, index) => (
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

        <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button 
            size="lg" 
            onClick={scrollToProgram}
            className="text-lg px-8 py-6 bg-[#FFC700] text-black hover:bg-[#FFD700]"
            data-testid="button-jelajahi"
          >
            Jelajahi Program Kami
          </Button>
        </div>
      </div>
    </section>
  );
}

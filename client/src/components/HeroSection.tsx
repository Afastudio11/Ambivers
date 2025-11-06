import { Button } from "@/components/ui/button";
import heroBackground from "@assets/generated_images/Hero_section_background_students_8badd074.png";

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" data-testid="text-hero-headline">
          Bantu Raih Impianmu Jadi Nyata!
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150" data-testid="text-hero-description">
          Ambivers telah memberikan dampak positif bagi 50.000+ pelajar di seluruh Indonesia. 
          Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus 
          membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
        </p>

        <Button 
          size="lg" 
          onClick={scrollToProgram}
          className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300"
          data-testid="button-jelajahi"
        >
          Jelajahi Program Kami
        </Button>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import heroIllustration from "@assets/generated_images/students_achieving_educational_dreams.png";

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
    <section className="relative min-h-screen flex items-center bg-[#FFC700] dark:bg-[#FFC700]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-900 leading-tight" data-testid="text-hero-headline">
              Bantu Raih Impianmu Jadi Nyata!
            </h1>
            <p className="text-base lg:text-lg text-gray-800 dark:text-gray-800 leading-relaxed" data-testid="text-hero-description">
              Ambivers telah memberikan dampak positif bagi <strong>50.000+ pelajar</strong> di seluruh Indonesia. Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
            </p>
            <div className="flex flex-wrap gap-4">
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

          <div className="order-first lg:order-last flex items-center justify-center">
            <img 
              src={heroIllustration} 
              alt="Students achieving their educational dreams"
              className="w-full h-auto"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

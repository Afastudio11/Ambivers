import { ArrowRight } from "lucide-react";
import clipboardIcon from "@assets/generated_images/clipboard_checklist_icon.png";
import bookIcon from "@assets/generated_images/open_book_illustration.png";
import pencilIcon from "@assets/generated_images/pencil_writing_tool.png";

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#FFC700] dark:bg-[#FFC700]">
      {/* Decorative illustrations */}
      <div className="absolute left-4 bottom-20 lg:left-20 lg:bottom-32 w-32 lg:w-48 opacity-90 animate-float">
        <img src={clipboardIcon} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute right-8 top-32 lg:right-24 lg:top-40 w-24 lg:w-40 opacity-90 animate-float-delayed">
        <img src={pencilIcon} alt="" className="w-full h-auto" />
      </div>
      <div className="absolute right-4 bottom-24 lg:right-16 lg:bottom-36 w-28 lg:w-44 opacity-90 animate-float">
        <img src={bookIcon} alt="" className="w-full h-auto" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" data-testid="text-hero-headline">
            <span className="italic font-normal text-gray-900 dark:text-gray-900">Bantu Raih </span>
            <span className="font-bold text-gray-900 dark:text-gray-900">IMPIANMU</span>
            <br />
            <span className="font-bold text-gray-900 dark:text-gray-900">JADI NYATA</span>
            <span className="inline-block w-4 h-4 lg:w-6 lg:h-6 rounded-full bg-red-500 ml-2 mb-2 lg:mb-4"></span>
            <br />
            <span className="italic font-normal text-gray-900 dark:text-gray-900">bersama Ambivers</span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-800 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-description">
            Ambivers telah memberikan dampak positif bagi <strong>50.000+ pelajar</strong> di seluruh Indonesia. Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
          </p>

          <div className="flex justify-center pt-4">
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
      </div>
    </section>
  );
}

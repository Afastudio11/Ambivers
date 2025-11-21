import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import clipboardIcon from "@assets/generated_images/clipboard_checklist_icon.png";
import bookIcon from "@assets/generated_images/open_book_illustration.png";
import pencilIcon from "@assets/generated_images/pencil_writing_tool.png";

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    rotate: [-3, 3, -3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatingVariants2 = {
  animate: {
    y: [0, -15, 0],
    rotate: [2, -2, 2],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.5
    }
  }
};

const floatingVariants3 = {
  animate: {
    y: [0, -25, 0],
    rotate: [-2, 4, -2],
    transition: {
      duration: 3.5,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 1
    }
  }
};

const floatingVariants4 = {
  animate: {
    y: [0, -18, 0],
    rotate: [3, -3, 3],
    transition: {
      duration: 2.8,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 0.3
    }
  }
};

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
      {/* Top Left - Laptop Illustration */}
      <motion.div 
        className="absolute left-4 top-24 lg:left-16 lg:top-28 w-28 lg:w-40 opacity-90 z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <img src={clipboardIcon} alt="" className="w-full h-auto" />
      </motion.div>

      {/* Top Left - Decorative Arrow */}
      <svg className="absolute left-32 top-40 lg:left-56 lg:top-52 w-16 lg:w-24 opacity-60 z-0" viewBox="0 0 100 100">
        <path d="M 10 50 Q 30 20, 60 40" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Top Right - Books Stack */}
      <motion.div 
        className="absolute right-4 top-16 lg:right-20 lg:top-20 w-32 lg:w-48 opacity-90 z-10"
        variants={floatingVariants2}
        animate="animate"
      >
        <img src={bookIcon} alt="" className="w-full h-auto" />
      </motion.div>

      {/* Top Right - Decorative Arrow */}
      <svg className="absolute right-32 top-32 lg:right-64 lg:top-40 w-20 lg:w-28 opacity-60 z-0" viewBox="0 0 120 80">
        <path d="M 10 10 Q 50 5, 80 30 T 110 50" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 100 45 L 110 50 L 105 55" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      {/* Bottom Left - Backpack */}
      <motion.div 
        className="absolute left-4 bottom-32 lg:left-12 lg:bottom-40 w-28 lg:w-40 opacity-90 z-10"
        variants={floatingVariants3}
        animate="animate"
      >
        <img src={pencilIcon} alt="" className="w-full h-auto" />
      </motion.div>

      {/* Bottom Left - Decorative Arrow */}
      <svg className="absolute left-28 bottom-48 lg:left-48 lg:bottom-56 w-20 lg:w-32 opacity-60 z-0" viewBox="0 0 120 100">
        <path d="M 10 80 Q 40 40, 80 50 T 110 30" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      {/* Bottom Right - Building Illustration */}
      <motion.div 
        className="absolute right-4 bottom-28 lg:right-16 lg:bottom-36 w-32 lg:w-48 opacity-90 z-10"
        variants={floatingVariants4}
        animate="animate"
      >
        <img src={bookIcon} alt="" className="w-full h-auto" />
      </motion.div>

      {/* Bottom Right - Decorative Arrow */}
      <svg className="absolute right-32 bottom-52 lg:right-60 lg:bottom-64 w-20 lg:w-28 opacity-60 z-0" viewBox="0 0 100 120">
        <path d="M 80 20 Q 50 60, 30 100" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight" data-testid="text-hero-headline">
            <span className="italic font-normal text-gray-900 dark:text-gray-900">Bantu Raih </span>
            <span className="font-bold text-gray-900 dark:text-gray-900">Impian</span>
          </h1>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-800 dark:text-gray-800 leading-relaxed max-w-3xl mx-auto" data-testid="text-hero-description">
            Ambivers telah memberikan dampak positif bagi <strong>50.000+</strong> pelajar di seluruh Indonesia.<br />
            Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus<br className="hidden lg:block" />
            membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
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

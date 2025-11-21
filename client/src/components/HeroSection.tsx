import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import laptopBooksIcon from "@assets/1 (3)_1763697804794.png";
import backpackIcon from "@assets/1 (4)_1763697804794.png";
import stackBooksIcon from "@assets/1 (1)_1763697804795.png";
import schoolBuildingIcon from "@assets/1 (2)_1763697804795.png";

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
      {/* Top Left - Laptop with Books */}
      <motion.div 
        className="absolute left-8 top-32 lg:left-32 lg:top-40 w-40 lg:w-56 opacity-90 z-10"
        variants={floatingVariants}
        animate="animate"
      >
        <img src={laptopBooksIcon} alt="" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Top Right - Stack of Books */}
      <motion.div 
        className="absolute right-8 top-24 lg:right-32 lg:top-32 w-44 lg:w-64 opacity-90 z-10"
        variants={floatingVariants2}
        animate="animate"
      >
        <img src={stackBooksIcon} alt="" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Bottom Left - Backpack */}
      <motion.div 
        className="absolute left-8 bottom-40 lg:left-32 lg:bottom-48 w-40 lg:w-56 opacity-90 z-10"
        variants={floatingVariants3}
        animate="animate"
      >
        <img src={backpackIcon} alt="" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      {/* Bottom Right - School Building */}
      <motion.div 
        className="absolute right-8 bottom-36 lg:right-32 lg:bottom-44 w-44 lg:w-64 opacity-90 z-10"
        variants={floatingVariants4}
        animate="animate"
      >
        <img src={schoolBuildingIcon} alt="" className="w-full h-auto drop-shadow-lg" />
      </motion.div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-8 text-center">
        <div className="space-y-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-gray-900 dark:text-gray-900" data-testid="text-hero-headline">
            Bantu Raih Impianmu Jadi Nyata!
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

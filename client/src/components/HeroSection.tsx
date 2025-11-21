import { Star, Users, Building2, School, ArrowRight } from 'lucide-react';
import { StatCard } from './StatCard';
import ridhaPhoto from "@assets/Ridha Alfinanianty_1763550478826.png";
import margarethPhoto from "@assets/Margareth Angelin Chatarina_1763550478825.png";
import workshopPhoto from "@assets/IMG_1980_1763700220618.JPG";

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

  const stats = [
    {
      icon: <Building2 className="w-5 h-5 text-yellow-800" />,
      value: "100+",
      label: "Corporate partners",
      position: "md:absolute -top-6 -left-6 animate-float"
    },
    {
      icon: <School className="w-5 h-5 text-yellow-800" />,
      value: "40+",
      label: "School partners",
      position: "md:absolute -top-6 -right-6 animate-float",
      delay: 1000
    },
    {
      icon: <Users className="w-5 h-5 text-yellow-800" />,
      value: "50.000+",
      label: "Beneficiaries",
      position: "md:absolute -bottom-6 -right-6 animate-float",
      delay: 2000
    }
  ];

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-20 flex items-center justify-center bg-[#FFC107] dark:bg-[#FFC107]">
      
      <div className="flex flex-col lg:flex-col xl:flex-row items-start justify-between gap-0 lg:gap-2 w-full px-0">
        {/* Left Content Column */}
        <div className="flex-0 w-full xl:w-[35%] z-10 flex flex-col gap-6 lg:gap-8 items-center xl:items-start pt-4 xl:pt-0">
          
          <div className="space-y-1 w-full">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-gray-900" style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 700 }}>
              Bantu Raih Impianmu
            </h1>
             <h1 className="text-6xl md:text-7xl lg:text-7xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-gray-900" style={{ fontFamily: '"EB Garamond", serif', fontWeight: 900 }}>
              <span className="relative inline-block">
                Jadi Nyata!
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-gray-900 dark:text-gray-900 opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
              </span>
            </h1>
          </div>

          <p className="text-gray-800 dark:text-gray-800 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
            Ambivers telah memberikan dampak bagi <span className="font-black text-2xl md:text-3xl text-black">50.000+</span> pelajar di seluruh Indonesia. Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
          </p>

          <div className="flex flex-col gap-6 items-start pt-6">
            {/* Review Badge */}
            <div className="flex items-center gap-4 bg-white/70 dark:bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
              <div className="flex -space-x-3">
                {[ridhaPhoto, margarethPhoto].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt="Student" 
                    className="w-10 h-10 rounded-full border-2 border-yellow-400 object-cover" 
                  />
                ))}
                <div className="w-10 h-10 rounded-full bg-black dark:bg-white border-2 border-yellow-400 flex flex-col items-center justify-center text-white dark:text-black">
                  <span className="text-xs font-bold flex items-center">4.8 <Star className="w-2 h-2 text-yellow-400 ml-0.5 fill-yellow-400"/></span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-gray-900 dark:text-gray-900 text-sm font-bold">Student Review</span>
                <span className="text-gray-700 dark:text-gray-700 text-xs">Based on 10k+ feedbacks</span>
              </div>
            </div>

            <button 
              onClick={scrollToProgram}
              className="rounded-full px-10 py-4 text-lg md:text-xl font-semibold cursor-pointer transition-all duration-200 border-2 flex items-center justify-center gap-3 w-full sm:w-auto"
              style={{
                backgroundColor: 'rgba(26, 26, 26, 0.9)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                boxShadow: 'inset 4px 4px 10px #000000, inset -4px -4px 10px #4d4d4d',
                color: '#ffffff',
                borderColor: '#333333',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #000000, inset -2px -2px 5px #4d4d4d, 2px 2px 5px #000000, -2px -2px 5px #4d4d4d';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #000000, inset -4px -4px 10px #4d4d4d';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
              onFocus={(e) => {
                e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #000000, inset -2px -2px 5px #4d4d4d, 2px 2px 5px #000000, -2px -2px 5px #4d4d4d';
              }}
              onBlur={(e) => {
                e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #000000, inset -4px -4px 10px #4d4d4d';
              }}
              data-testid="button-jelajahi"
            >
              <ArrowRight className="w-6 h-6" />
              <span>Jelajahi Program Kami</span>
            </button>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex-1 w-full xl:w-[65%] relative flex justify-center lg:justify-end items-start mt-8 lg:mt-0 min-h-fit">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-yellow-200/30 dark:bg-yellow-900/20 blur-[80px] rounded-full -z-10"></div>

          {/* Main Image Container - Group Photo 900x650 */}
          <div className="relative w-full max-w-[900px] h-[650px]">
            <img 
              src={workshopPhoto}
              alt="Workshop Team" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 relative z-10"
            />

          </div>
        </div>
      </div>


    </section>
  );
}

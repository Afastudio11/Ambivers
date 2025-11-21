import { Star, Users, Building2, School, ArrowRight } from 'lucide-react';
import { StatCard } from './StatCard';

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
    <section className="min-h-screen px-6 md:px-12 lg:px-20 flex items-center justify-center bg-white dark:bg-gray-950">
      
      <div className="flex flex-col lg:flex-col xl:flex-row items-center gap-12 lg:gap-20 w-full">
        {/* Left Content Column */}
        <div className="flex-1 w-full xl:max-w-[45%] z-10 flex flex-col gap-6 lg:gap-8">
          
          <div className="space-y-1">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              Bantu Raih Impianmu
            </h1>
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white">
              <span className="relative inline-block">
                Jadi Nyata!
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-gray-900 dark:text-white opacity-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="5" fill="none" />
                </svg>
              </span>
            </h1>
          </div>

          <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
            Ambivers telah memberikan dampak positif bagi <span className="font-bold">50.000+</span> pelajar di seluruh Indonesia. Kami membantu lebih banyak pelajar selangkah lebih dekat menuju mimpinya, sekaligus membuka kesempatan yang lebih luas untuk melanjutkan pendidikan tinggi.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center pt-4">
            <button 
              onClick={scrollToProgram}
              className="group relative flex items-center justify-center gap-3 rounded-full font-semibold cursor-pointer transition-all duration-300 px-6 py-4 sm:px-8 sm:py-4 border-2 bg-black hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-200 text-white dark:text-black text-base sm:text-lg"
              data-testid="button-jelajahi"
            >
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-1000 group-hover:rotate-[360deg]" />
              <span>Jelajahi Program</span>
            </button>

            {/* Review Badge */}
            <div className="flex items-center gap-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-3 rounded-2xl border border-black/5 dark:border-white/10 shadow-sm">
              <div className="flex -space-x-3">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64&q=80",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64&q=80"
                ].map((src, i) => (
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
                <span className="text-gray-900 dark:text-white text-sm font-bold">Student Review</span>
                <span className="text-gray-600 dark:text-gray-400 text-xs">Based on 10k+ feedbacks</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Column */}
        <div className="flex-1 w-full relative flex justify-center lg:justify-end mt-8 lg:mt-0">
          
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-yellow-200/30 dark:bg-yellow-900/20 blur-[80px] rounded-full -z-10"></div>

          {/* Main Image Container - Group Photo 4:3 aspect ratio */}
          <div className="relative w-full max-w-[800px] aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1000&auto=format&fit=crop"
              alt="Workshop Team" 
              className="w-full h-full object-cover rounded-3xl shadow-2xl ring-1 ring-black/5 dark:ring-white/10 relative z-10"
            />

            {/* Floating Stats - Desktop: Absolute, Mobile: Hidden */}
            <div className="hidden md:block">
               {stats.map((stat, index) => (
                <StatCard 
                  key={index}
                  {...stat}
                  positionClass={`${stat.position} z-20`}
                />
               ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Stats Grid (Visible only on small screens) */}
      <div className="grid grid-cols-2 gap-4 md:hidden">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            {...stat}
            positionClass={`relative w-full ${index === stats.length - 1 ? 'col-span-2' : ''}`}
          />
        ))}
      </div>

    </section>
  );
}

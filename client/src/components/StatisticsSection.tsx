import { useState, useEffect, useRef } from "react";
import { Building2, School, Users, MapPin, Star } from "lucide-react";

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.floor(increment * currentStep));
      } else {
        setCount(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={counterRef}>
      {count.toLocaleString()}{suffix}
    </div>
  );
}

export default function StatisticsSection() {
  const stats = [
    { value: 100, suffix: "+", label: "Corporate partners", icon: Building2 },
    { value: 40, suffix: "+", label: "School partners", icon: School },
    { value: 50000, suffix: "+", label: "Beneficiaries", icon: Users },
    { value: 34, suffix: "", label: "Covered regions", icon: MapPin },
    { value: 90, suffix: "%", label: "Satisfaction of users", icon: Star }
  ];

  return (
    <section id="statistics" className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <svg viewBox="0 0 1000 1000" className="w-full h-full">
          <path
            d="M500,100 L600,300 L800,350 L650,500 L700,700 L500,600 L300,700 L350,500 L200,350 L400,300 Z"
            fill="#FFC700"
            opacity="0.3"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4 text-white" data-testid="text-stats-title">
          Ambivers in number
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          Ambivers telah memberikan dampak kepada <span className="text-[#FFC700] font-bold">50.000+ pelajar</span> di seluruh Indonesia
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="flex flex-col items-center" data-testid={`stat-card-${index}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-[#FFC700]/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-[#FFC700]" />
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold text-[#FFC700]" data-testid={`stat-number-${index}`}>
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                </div>
                <div className="text-sm lg:text-base text-gray-300 text-center" data-testid={`stat-label-${index}`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

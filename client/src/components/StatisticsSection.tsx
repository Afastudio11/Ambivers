import { useState, useEffect, useRef } from "react";

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
    { value: 100, suffix: "+", label: "Corporate Partners" },
    { value: 40, suffix: "+", label: "School Partners" },
    { value: 50000, suffix: "+", label: "Beneficiaries" },
    { value: 34, suffix: "", label: "Covered Regions" },
    { value: 90, suffix: "%", label: "Satisfaction of Users" }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full mx-auto px-8 lg:px-20 xl:px-32">
        <h2 className="text-3xl lg:text-5xl font-bold text-center mb-16 text-white" data-testid="text-stats-title">
          Ambivers In Number
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-card-${index}`}>
              <div className="text-4xl lg:text-6xl font-bold text-[#FFC700] mb-2" data-testid={`stat-number-${index}`}>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm lg:text-base text-gray-300" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

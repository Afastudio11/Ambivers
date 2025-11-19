import { Button } from "@/components/ui/button";
import ornamentImg from "@assets/generated_images/Educational_ornaments_decoration_0a19884d.png";

interface ProgramHeroProps {
  title: string;
  description: string;
  imageUrl?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function ProgramHero({
  title,
  description,
  imageUrl,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  onPrimaryClick,
  onSecondaryClick,
}: ProgramHeroProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-[#FFC700] overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src={ornamentImg} 
          alt="Educational ornaments" 
          className="absolute top-10 right-10 w-64 h-auto transform rotate-12"
        />
        <img 
          src={ornamentImg} 
          alt="Educational ornaments" 
          className="absolute bottom-10 left-10 w-64 h-auto transform -rotate-12"
        />
        <img 
          src={ornamentImg} 
          alt="Educational ornaments" 
          className="absolute top-1/2 left-1/2 w-96 h-auto transform -translate-x-1/2 -translate-y-1/2 opacity-30"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-6 z-10 relative">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900" data-testid="text-program-hero-title">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-gray-700 leading-relaxed" data-testid="text-program-hero-description">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              {primaryButtonText && (
                primaryButtonLink ? (
                  <a href={primaryButtonLink} target="_blank" rel="noopener noreferrer">
                    <button 
                      className="rounded-full px-8 py-3 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                      style={{
                        backgroundColor: 'rgba(255, 199, 0, 0.9)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d',
                        color: '#1a1a1a',
                        borderColor: '#FFD700',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #d9a700, inset -2px -2px 5px #ffe14d, 2px 2px 5px #d9a700, -2px -2px 5px #ffe14d';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      data-testid="button-program-hero-primary"
                    >
                      {primaryButtonText}
                    </button>
                  </a>
                ) : (
                  <button 
                    className="rounded-full px-8 py-3 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                    style={{
                      backgroundColor: 'rgba(255, 199, 0, 0.9)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      boxShadow: 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d',
                      color: '#1a1a1a',
                      borderColor: '#FFD700',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #d9a700, inset -2px -2px 5px #ffe14d, 2px 2px 5px #d9a700, -2px -2px 5px #ffe14d';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onClick={onPrimaryClick}
                    data-testid="button-program-hero-primary"
                  >
                    {primaryButtonText}
                  </button>
                )
              )}
              {secondaryButtonText && (
                secondaryButtonLink ? (
                  <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer">
                    <button 
                      className="rounded-full px-8 py-3 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                      style={{
                        backgroundColor: 'rgba(232, 232, 232, 0.9)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                        color: '#4d4d4d',
                        borderColor: 'rgb(206, 206, 206)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      data-testid="button-program-hero-secondary"
                    >
                      {secondaryButtonText}
                    </button>
                  </a>
                ) : (
                  <button 
                    className="rounded-full px-8 py-3 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                    style={{
                      backgroundColor: 'rgba(232, 232, 232, 0.9)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      boxShadow: 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
                      color: '#4d4d4d',
                      borderColor: 'rgb(206, 206, 206)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onClick={onSecondaryClick}
                    data-testid="button-program-hero-secondary"
                  >
                    {secondaryButtonText}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

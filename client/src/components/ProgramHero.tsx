import { Button } from "@/components/ui/button";

interface ProgramHeroProps {
  title: string;
  description: string;
  imageUrl: string;
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
    <section className="relative py-20 lg:py-32 overflow-hidden bg-[#FFC700] dark:bg-[#FFC700]">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px),
                           repeating-linear-gradient(90deg, transparent, transparent 50px, rgba(0,0,0,0.05) 50px, rgba(0,0,0,0.05) 51px)`
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 z-10">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground dark:text-gray-900" data-testid="text-program-hero-title">
              {title}
            </h1>
            <p className="text-lg lg:text-xl text-foreground/80 dark:text-gray-800 leading-relaxed" data-testid="text-program-hero-description">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
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

          <div className="relative z-10">
            <div className="relative rounded-md overflow-hidden shadow-2xl">
              <img
                src={imageUrl}
                alt={title}
                className="w-full h-auto object-cover"
                data-testid="img-program-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

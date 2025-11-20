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
    <section className="py-16 lg:py-24 bg-background dark:bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground dark:text-foreground" data-testid="text-program-hero-title">
              {title}
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed" data-testid="text-program-hero-description">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && (
                primaryButtonLink ? (
                  <a href={primaryButtonLink} target="_blank" rel="noopener noreferrer">
                    <button 
                      className="rounded-md px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 bg-[#FFC700] dark:bg-[#FFC700] text-gray-900 dark:text-gray-900 hover-elevate active-elevate-2"
                      data-testid="button-program-hero-primary"
                    >
                      {primaryButtonText}
                    </button>
                  </a>
                ) : (
                  <button 
                    className="rounded-md px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 bg-[#FFC700] dark:bg-[#FFC700] text-gray-900 dark:text-gray-900 hover-elevate active-elevate-2"
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
                      className="rounded-md px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground hover-elevate active-elevate-2"
                      data-testid="button-program-hero-secondary"
                    >
                      {secondaryButtonText}
                    </button>
                  </a>
                ) : (
                  <button 
                    className="rounded-md px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 bg-secondary dark:bg-secondary text-secondary-foreground dark:text-secondary-foreground hover-elevate active-elevate-2"
                    onClick={onSecondaryClick}
                    data-testid="button-program-hero-secondary"
                  >
                    {secondaryButtonText}
                  </button>
                )
              )}
            </div>
          </div>

          {imageUrl && (
            <div className="order-first lg:order-last">
              <img 
                src={imageUrl} 
                alt={title}
                className="w-full h-auto rounded-lg"
                data-testid="img-program-hero"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

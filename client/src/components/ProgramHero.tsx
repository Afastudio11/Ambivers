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
            <p className="text-base lg:text-lg text-muted-foreground dark:text-muted-foreground leading-relaxed max-w-sm" data-testid="text-program-hero-description">
              {description}
            </p>
            <div className="flex flex-wrap gap-4">
              {primaryButtonText && (
                primaryButtonLink ? (
                  <a href={primaryButtonLink} target="_blank" rel="noopener noreferrer">
                    <button 
                      className="rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
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
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #d9a700, inset -2px -2px 5px #ffe14d, 2px 2px 5px #d9a700, -2px -2px 5px #ffe14d';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d';
                      }}
                      data-testid="button-program-hero-primary"
                    >
                      {primaryButtonText}
                    </button>
                  </a>
                ) : (
                  <button 
                    className="rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
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
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #d9a700, inset -2px -2px 5px #ffe14d, 2px 2px 5px #d9a700, -2px -2px 5px #ffe14d';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #d9a700, inset -4px -4px 10px #ffe14d';
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
                      className="rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                      style={{
                        backgroundColor: 'rgba(91, 155, 213, 0.9)',
                        backdropFilter: 'blur(12px)',
                        WebkitBackdropFilter: 'blur(12px)',
                        boxShadow: 'inset 4px 4px 10px #3a6b9e, inset -4px -4px 10px #7cb3ff',
                        color: '#ffffff',
                        borderColor: '#4a8fd9',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #3a6b9e, inset -2px -2px 5px #7cb3ff, 2px 2px 5px #3a6b9e, -2px -2px 5px #7cb3ff';
                        e.currentTarget.style.transform = 'translateY(-1px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #3a6b9e, inset -4px -4px 10px #7cb3ff';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #3a6b9e, inset -2px -2px 5px #7cb3ff, 2px 2px 5px #3a6b9e, -2px -2px 5px #7cb3ff';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #3a6b9e, inset -4px -4px 10px #7cb3ff';
                      }}
                      data-testid="button-program-hero-secondary"
                    >
                      {secondaryButtonText}
                    </button>
                  </a>
                ) : (
                  <button 
                    className="rounded-full px-6 py-2.5 text-sm font-medium cursor-pointer transition-all duration-200 border-2"
                    style={{
                      backgroundColor: 'rgba(91, 155, 213, 0.9)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      boxShadow: 'inset 4px 4px 10px #3a6b9e, inset -4px -4px 10px #7cb3ff',
                      color: '#ffffff',
                      borderColor: '#4a8fd9',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #3a6b9e, inset -2px -2px 5px #7cb3ff, 2px 2px 5px #3a6b9e, -2px -2px 5px #7cb3ff';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #3a6b9e, inset -4px -4px 10px #7cb3ff';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 2px 2px 5px #3a6b9e, inset -2px -2px 5px #7cb3ff, 2px 2px 5px #3a6b9e, -2px -2px 5px #7cb3ff';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.boxShadow = 'inset 4px 4px 10px #3a6b9e, inset -4px -4px 10px #7cb3ff';
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

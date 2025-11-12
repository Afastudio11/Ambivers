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
                    <Button
                      size="lg"
                      variant="default"
                      data-testid="button-program-hero-primary"
                    >
                      {primaryButtonText}
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="lg"
                    variant="default"
                    onClick={onPrimaryClick}
                    data-testid="button-program-hero-primary"
                  >
                    {primaryButtonText}
                  </Button>
                )
              )}
              {secondaryButtonText && (
                secondaryButtonLink ? (
                  <a href={secondaryButtonLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant="outline"
                      data-testid="button-program-hero-secondary"
                    >
                      {secondaryButtonText}
                    </Button>
                  </a>
                ) : (
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={onSecondaryClick}
                    data-testid="button-program-hero-secondary"
                  >
                    {secondaryButtonText}
                  </Button>
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

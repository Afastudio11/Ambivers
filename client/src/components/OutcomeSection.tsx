import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface OutcomeSectionProps {
  title?: string;
  description?: string;
  outcomes?: Array<{
    title: string;
    description: string;
    icon?: LucideIcon;
  }>;
  singleColumn?: boolean;
}

export default function OutcomeSection({
  title = "Outcome of the programs",
  description,
  outcomes,
  singleColumn = false,
}: OutcomeSectionProps) {
  if (description && !outcomes) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8" data-testid="text-outcome-title">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed text-center" data-testid="text-outcome-description">
            {description}
          </p>
        </div>
      </section>
    );
  }

  if (outcomes) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-outcome-title">
            {title}
          </h2>
          <div className={`grid ${singleColumn ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-2'} gap-6`}>
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <Card key={index} className="hover-elevate" data-testid={`card-outcome-${index}`}>
                  <CardHeader>
                    {Icon && (
                      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-md bg-[#FFC700]">
                        <Icon className="w-6 h-6 text-black" data-testid={`icon-outcome-${index}`} />
                      </div>
                    )}
                    <CardTitle className="text-xl" data-testid={`text-outcome-title-${index}`}>
                      {outcome.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed" data-testid={`text-outcome-description-${index}`}>
                      {outcome.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return null;
}

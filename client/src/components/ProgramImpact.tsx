import { Sparkles } from "lucide-react";

interface ProgramImpactProps {
  title?: string;
  impacts: string[];
}

export default function ProgramImpact({
  title = "Impact",
  impacts,
}: ProgramImpactProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-center gap-3 mb-8">
          <Sparkles className="w-8 h-8 text-[#FFC700] dark:text-[#FFC700]" />
          <h2 className="text-3xl lg:text-4xl font-bold text-center" data-testid="text-impact-title">
            {title}
          </h2>
          <Sparkles className="w-8 h-8 text-[#FFC700] dark:text-[#FFC700]" />
        </div>
        <div className="space-y-4">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="flex gap-4 items-start bg-card p-6 rounded-md hover-elevate"
              data-testid={`card-impact-${index}`}
            >
              <div className="w-2 h-2 rounded-full mt-2.5 bg-[#FFC700] dark:bg-[#FFC700]" />
              <p className="text-lg leading-relaxed flex-1" data-testid={`text-impact-${index}`}>
                {impact}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

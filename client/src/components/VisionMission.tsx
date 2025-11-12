import { Target, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

interface VisionMissionProps {
  vision: string;
  missions: string[];
}

export default function VisionMission({ vision, missions }: VisionMissionProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 hover-elevate" data-testid="card-vision">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-md bg-[#FFC700] dark:bg-[#FFC700]">
                <Target className="w-6 h-6 text-gray-900 dark:text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold">Visi</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed" data-testid="text-vision">
              {vision}
            </p>
          </Card>

          <Card className="p-8 hover-elevate" data-testid="card-mission">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-md bg-[#FFC700] dark:bg-[#FFC700]">
                <Rocket className="w-6 h-6 text-gray-900 dark:text-gray-900" />
              </div>
              <h3 className="text-2xl font-bold">Misi</h3>
            </div>
            <ul className="space-y-3">
              {missions.map((mission, index) => (
                <li key={index} className="flex gap-3" data-testid={`text-mission-${index}`}>
                  <span className="text-[#FFC700] dark:text-[#FFC700] mt-1.5">•</span>
                  <span className="text-muted-foreground leading-relaxed">{mission}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

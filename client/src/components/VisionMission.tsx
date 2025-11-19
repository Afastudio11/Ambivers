import { CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface VisionMissionProps {
  vision: string;
  missions: string[];
}

export default function VisionMission({ vision, missions }: VisionMissionProps) {
  return (
    <section className="py-20 bg-[#FFC700]">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Visi Section */}
          <div data-testid="card-vision">
            <Badge variant="secondary" className="mb-6 bg-white text-gray-900 hover:bg-white">
              Visi
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Our <span className="text-gray-900">Vision</span>
            </h3>
            <p className="text-gray-900 leading-relaxed text-lg" data-testid="text-vision">
              {vision}
            </p>
          </div>

          {/* Misi Section */}
          <div data-testid="card-mission">
            <Badge variant="secondary" className="mb-6 bg-white text-gray-900 hover:bg-white">
              Misi
            </Badge>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Our <span className="text-gray-900">Mission</span>
            </h3>
            <ul className="space-y-4">
              {missions.map((mission, index) => (
                <li key={index} className="flex items-start gap-3" data-testid={`text-mission-${index}`}>
                  <CheckCircle className="w-6 h-6 text-gray-900 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-900 leading-relaxed text-lg">{mission}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

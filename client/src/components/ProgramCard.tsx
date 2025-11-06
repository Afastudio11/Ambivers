import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  comingSoon?: boolean;
  testId?: string;
}

export default function ProgramCard({ title, description, image, comingSoon, testId }: ProgramCardProps) {
  return (
    <Card className="overflow-hidden hover-elevate transition-transform duration-300 hover:scale-105" data-testid={testId}>
      <div className="aspect-square relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" data-testid={`${testId}-img`} />
        {comingSoon && (
          <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
            <Badge variant="secondary" className="text-lg px-6 py-2">Coming Soon</Badge>
          </div>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-xl" data-testid={`${testId}-title`}>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base" data-testid={`${testId}-description`}>
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}

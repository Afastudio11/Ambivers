import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  institution: string;
  text: string;
  photo: string;
  testId?: string;
}

export default function TestimonialCard({ name, institution, text, photo, testId }: TestimonialCardProps) {
  return (
    <Card className="h-full" data-testid={testId}>
      <CardContent className="p-8">
        <div className="flex items-start gap-4 mb-4">
          <Avatar className="w-16 h-16">
            <AvatarImage src={photo} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-bold text-lg" data-testid={`${testId}-name`}>{name}</h4>
            <p className="text-sm text-chart-2" data-testid={`${testId}-institution`}>{institution}</p>
          </div>
        </div>
        <p className="text-muted-foreground line-clamp-6" data-testid={`${testId}-text`}>
          {text}
        </p>
      </CardContent>
    </Card>
  );
}

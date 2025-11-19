import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";

interface Program {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

interface ProgramsGridProps {
  title: string;
  programs: Program[];
}

export default function ProgramsGrid({ title, programs }: ProgramsGridProps) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-programs-grid-title">
          {title}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => (
            <Link key={index} href={program.link} data-testid={`link-program-${index}`}>
              <Card className="overflow-hidden hover-elevate cursor-pointer transition-all h-full" data-testid={`card-program-${index}`}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={program.imageUrl}
                    alt={program.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                    data-testid={`img-program-${index}`}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl" data-testid={`text-program-title-${index}`}>
                    {program.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-justify" data-testid={`text-program-description-${index}`}>
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

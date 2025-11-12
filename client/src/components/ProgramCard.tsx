import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

interface ProgramCardProps {
  title: string;
  description: string;
  image: string;
  href?: string;
  comingSoon?: boolean;
  testId?: string;
}

export default function ProgramCard({ title, description, image, href, comingSoon, testId }: ProgramCardProps) {
  const CardContent = () => (
    <>
      {/* Glassmorphism glow effect */}
      <div className="absolute w-full h-64 bg-gradient-to-br from-yellow-300/40 via-orange-300/40 to-amber-300/40 blur-[80px] -left-1/4 -top-1/4 pointer-events-none"></div>
      
      {/* Glass content container */}
      <div className="relative flex flex-col backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl overflow-hidden z-[1] h-full">
        {/* Image section */}
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
            data-testid={`${testId}-img`} 
          />
          {comingSoon && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30">
                Coming soon
              </Badge>
            </div>
          )}
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        {/* Content section with glass effect */}
        <div className="p-6 bg-gradient-to-b from-white/10 to-transparent">
          <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100" data-testid={`${testId}-title`}>
            {title}
          </h3>
          <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed" data-testid={`${testId}-description`}>
            {description}
          </p>
        </div>
      </div>
    </>
  );

  const containerClasses = "group relative drop-shadow-xl w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#FFC700] to-[#FFD700] transition-all duration-300 hover:scale-105 hover:shadow-2xl";

  if (href && !comingSoon) {
    return (
      <Link href={href}>
        <div className={`${containerClasses} cursor-pointer`} data-testid={testId}>
          <CardContent />
        </div>
      </Link>
    );
  }

  return (
    <div className={containerClasses} data-testid={testId}>
      <CardContent />
    </div>
  );
}

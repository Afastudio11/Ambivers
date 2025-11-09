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
    <div 
      className="relative drop-shadow-xl w-full overflow-hidden rounded-xl bg-gradient-to-br from-[#FFC700] to-[#FFD700] transition-transform duration-300 hover:scale-105"
      data-testid={testId}
    >
      {/* Glassmorphism glow effect */}
      <div className="absolute w-full h-64 bg-gradient-to-br from-yellow-300/40 via-orange-300/40 to-amber-300/40 blur-[80px] -left-1/4 -top-1/4 pointer-events-none"></div>
      
      {/* Glass content container */}
      <div className="relative flex flex-col backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl overflow-hidden z-[1]">
        {/* Image section */}
        <div className="aspect-square relative overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
            data-testid={`${testId}-img`} 
          />
          {comingSoon && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <Badge variant="secondary" className="text-lg px-6 py-2 bg-white/20 backdrop-blur-md border border-white/30">
                Coming Soon
              </Badge>
            </div>
          )}
          {/* Gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
        </div>
        
        {/* Content section with glass effect */}
        <div className="p-6 bg-gradient-to-b from-white/10 to-transparent">
          <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-gray-100" data-testid={`${testId}-title`}>
            {title}
          </h3>
          <p className="text-sm text-gray-800 dark:text-gray-300 leading-relaxed" data-testid={`${testId}-description`}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

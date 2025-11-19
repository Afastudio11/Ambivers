import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  name: string;
  institution?: string;
  photo?: string;
  text: string;
  rating?: number;
}

interface TestimonialCarouselProps {
  title?: string;
  testimonials: Testimonial[];
  autoplayInterval?: number;
}

export default function TestimonialCarousel({
  title = "From Our Participants",
  testimonials,
  autoplayInterval = 5000,
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, autoplayInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoplayInterval]);

  const itemsPerView = 3;
  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-black" data-testid="text-testimonials-title">
            {title}
          </h2>
        )}

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{ 
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` 
              }}
            >
              {testimonials.map((testimonial, index) => (
                <Card 
                  key={index}
                  className="flex-shrink-0 bg-white dark:bg-white border-gray-200 dark:border-gray-200"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                  data-testid={`card-testimonial-${index}`}
                >
                  <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-base font-bold text-black" data-testid={`text-testimonial-institution-${index}`}>
                        {testimonial.institution || "Universitas"}
                      </h3>
                      <div className="flex items-center gap-1">
                        <span className="text-black font-bold">{testimonial.rating || 4.9}</span>
                        <Star className="w-4 h-4 fill-green-500 text-green-500" />
                      </div>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-700 leading-relaxed mb-6 flex-grow" data-testid={`text-testimonial-content-${index}`}>
                      {testimonial.text}
                    </p>

                    <div className="mt-auto">
                      <h4 className="text-base font-bold text-black" data-testid={`text-testimonial-name-${index}`}>
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-[#FFC700] font-medium" data-testid={`text-testimonial-major-${index}`}>
                        {testimonial.institution || ""}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              disabled={currentIndex === 0}
              className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              data-testid="button-testimonials-prev"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              disabled={currentIndex >= maxIndex}
              className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
              data-testid="button-testimonials-next"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  name: string;
  institution?: string;
  photo?: string;
  text: string;
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

  return (
    <section className="py-20 bg-white dark:bg-white">
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
                  className="flex-shrink-0 bg-black dark:bg-black border-gray-800 dark:border-gray-800"
                  style={{ width: `calc(${100 / itemsPerView}% - ${(itemsPerView - 1) * 24 / itemsPerView}px)` }}
                  data-testid={`card-testimonial-${index}`}
                >
                  <CardContent className="p-6 lg:p-8 h-full flex flex-row items-start gap-4">
                    <Avatar className="w-12 h-12 flex-shrink-0" data-testid={`avatar-testimonial-${index}`}>
                      <AvatarImage src={testimonial.photo} alt={testimonial.name} />
                      <AvatarFallback className="bg-[#FFC700] text-gray-900 text-lg font-bold">
                        {testimonial.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col flex-1 min-w-0">
                      <div className="mb-4">
                        <h3 className="text-base font-bold text-[#FFC700]" data-testid={`text-testimonial-name-${index}`}>
                          {testimonial.name}
                        </h3>
                        {testimonial.institution && (
                          <p className="text-sm text-gray-400 dark:text-gray-400" data-testid={`text-testimonial-institution-${index}`}>
                            {testimonial.institution}
                          </p>
                        )}
                      </div>
                      <p className="text-gray-300 dark:text-gray-300 leading-relaxed" data-testid={`text-testimonial-content-${index}`}>
                        "{testimonial.text}"
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex gap-2 justify-center items-center pt-8">
            {Array.from({ length: Math.ceil(testimonials.length / itemsPerView) }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex / itemsPerView) === index
                    ? 'bg-blue-500 w-8'
                    : 'bg-gray-600'
                }`}
                data-testid={`button-testimonial-dot-${index}`}
                aria-label={`Go to testimonial group ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

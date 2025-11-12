import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  title = "Apa kata mereka tentang belajar bersama Ambivers?",
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

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        {title && (
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12" data-testid="text-testimonials-title">
            {title}
          </h2>
        )}

        <Card className="relative" data-testid="card-testimonial">
          <CardContent className="p-8 lg:p-12">
            <div className="flex flex-col items-center text-center space-y-6">
              <Avatar className="w-24 h-24" data-testid="avatar-testimonial">
                <AvatarImage src={currentTestimonial.photo} alt={currentTestimonial.name} />
                <AvatarFallback className="bg-[#FFC700] text-gray-900 text-3xl font-bold">
                  {currentTestimonial.name.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="text-xl font-bold mb-1" data-testid="text-testimonial-name">
                  {currentTestimonial.name}
                </h3>
                {currentTestimonial.institution && (
                  <p className="text-sm text-muted-foreground" data-testid="text-testimonial-institution">
                    {currentTestimonial.institution}
                  </p>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed max-w-2xl" data-testid="text-testimonial-content">
                "{currentTestimonial.text}"
              </p>

              <div className="flex gap-2 items-center pt-4">
                <Button
                  size="icon"
                  variant="outline"
                  onClick={goToPrevious}
                  data-testid="button-testimonial-prev"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentIndex
                          ? 'bg-[#FFC700] w-8'
                          : 'bg-muted-foreground/30'
                      }`}
                      data-testid={`button-testimonial-dot-${index}`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <Button
                  size="icon"
                  variant="outline"
                  onClick={goToNext}
                  data-testid="button-testimonial-next"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

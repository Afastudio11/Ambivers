import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
  const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);
  
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      slidesToScroll: 1,
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: autoplayInterval, stopOnInteraction: false, stopOnMouseEnter: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
        {title && (
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4" data-testid="text-testimonials-title">
            {title}
          </h2>
        )}
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedTestimonial(testimonial)}
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                data-testid={`testimonial-card-${idx}`}
              >
                <div className="flex items-start justify-between mb-4">
                  {testimonial.institution && (
                    <div className="font-bold text-lg text-gray-900 dark:text-gray-100">
                      {testimonial.institution}
                    </div>
                  )}
                  <div className={`flex items-center gap-1 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 px-2 py-1 rounded-lg ${!testimonial.institution ? 'ml-auto' : ''}`}>
                    <span className="font-semibold text-sm">{testimonial.rating || 4.9}</span>
                    <Star className="w-4 h-4 fill-green-500 text-green-500" />
                  </div>
                </div>
                
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-6 line-clamp-4" data-testid={`text-testimonial-content-${idx}`}>
                  {testimonial.text}
                </p>
                
                <div>
                  <div className="font-bold text-gray-900 dark:text-gray-100 mb-1" data-testid={`text-testimonial-name-${idx}`}>
                    {testimonial.name}
                  </div>
                  {testimonial.institution && (
                    <div className="text-sm text-primary" data-testid={`text-testimonial-institution-${idx}`}>
                      {testimonial.institution}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows - Centered */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            data-testid="button-testimonials-prev"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="h-12 w-12 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700"
            data-testid="button-testimonials-next"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>

      <Dialog open={!!selectedTestimonial} onOpenChange={() => setSelectedTestimonial(null)}>
        <DialogContent className="max-w-2xl" data-testid="dialog-testimonial">
          {selectedTestimonial && (
            <>
              <DialogHeader>
                <DialogTitle className="flex items-start justify-between gap-4">
                  {selectedTestimonial.institution ? (
                    <span className="text-xl font-bold">{selectedTestimonial.institution}</span>
                  ) : (
                    <span className="text-xl font-bold">{selectedTestimonial.name}</span>
                  )}
                  <div className="flex items-center gap-1 bg-white border border-gray-200 px-2 py-1 rounded-lg">
                    <span className="font-semibold text-sm">{selectedTestimonial.rating || 4.9}</span>
                    <Star className="w-4 h-4 fill-green-500 text-green-500" />
                  </div>
                </DialogTitle>
              </DialogHeader>
              <div className="mt-4">
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {selectedTestimonial.text}
                </p>
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900 mb-1">
                    {selectedTestimonial.name}
                  </div>
                  {selectedTestimonial.institution && (
                    <div className="text-sm text-primary">
                      {selectedTestimonial.institution}
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

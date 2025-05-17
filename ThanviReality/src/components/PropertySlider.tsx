import { useEffect, useState, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyImage {
  url: string;
  title: string;
  description: string;
}

interface PropertySliderProps {
  images: PropertyImage[];
  autoplayInterval?: number;
}

const PropertySlider = ({
  images,
  autoplayInterval = 5000,
}: PropertySliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(goToNext, autoplayInterval);
    return () => clearInterval(interval);
  }, [goToNext, autoplayInterval]);

  return (
    <div className="relative w-full h-[60vh] md:h-[89vh] overflow-hidden">
      {/* Slides */}
      {images.map((image, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-0">
            <img
              src={image.url}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            {/* Optional: Gradient overlay on top of image */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
          </div>

          {/* Text overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-8">
            <div className="max-w-3xl text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                {image.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in opacity-90">
                {image.description}
              </p>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors duration-300"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentIndex
                ? "bg-white w-6"
                : "bg-white/50 hover:bg-white/80"
            )}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default PropertySlider;

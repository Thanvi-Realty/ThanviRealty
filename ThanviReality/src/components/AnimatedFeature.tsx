
import { Check } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedFeatureProps {
  text: string;
  delay?: number;
  className?: string;
}

const AnimatedFeature = ({ text, delay = 0, className }: AnimatedFeatureProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const featureRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entries[0].target);
        }
      },
      { threshold: 0.1 }
    );

    if (featureRef.current) {
      observer.observe(featureRef.current);
    }

    return () => {
      if (featureRef.current) {
        observer.unobserve(featureRef.current);
      }
    };
  }, [delay]);

  return (
    <div
      ref={featureRef}
      className={cn(
        "flex items-center mb-4 transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0",
        className
      )}
    >
      <div className="flex-shrink-0 mr-3 bg-realEstate-secondary rounded-full p-1">
        <Check className="h-4 w-4 text-white" />
      </div>
      <span className="text-gray-700">{text}</span>
    </div>
  );
};

export default AnimatedFeature;

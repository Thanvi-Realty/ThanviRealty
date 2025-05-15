
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

const ProcessStep = ({
  number,
  title,
  description,
  isLast = false,
}: ProcessStepProps) => {
  return (
    <div className="relative flex">
      {/* The connecting line */}
      {!isLast && (
        <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-realEstate-primary/20"></div>
      )}
      
      {/* Step number and content */}
      <div className="flex flex-col items-start">
        <div className="z-10 flex items-center justify-center w-12 h-12 rounded-full bg-realEstate-primary text-white font-bold text-lg">
          {number}
        </div>
        <div className={cn("ml-4 pt-2", isLast ? "" : "pb-8")}>
          <h3 className="font-poppins font-bold text-xl text-realEstate-primary">
            {title}
          </h3>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProcessStep;

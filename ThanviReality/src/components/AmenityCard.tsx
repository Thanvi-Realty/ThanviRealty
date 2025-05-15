
import React from "react";
import { cn } from "@/lib/utils";

interface AmenityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const AmenityCard = ({
  icon,
  title,
  description,
  className,
}: AmenityCardProps) => {
  return (
    <div
      className={cn(
        "bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group",
        className
      )}
    >
      <div className="text-realEstate-primary group-hover:text-realEstate-secondary transition-colors duration-300 mb-4">
        {icon}
      </div>
      <h3 className="font-poppins font-bold text-lg mb-2 text-realEstate-primary">
        {title}
      </h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
};

export default AmenityCard;

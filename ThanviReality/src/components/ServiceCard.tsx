
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  className?: string;
}

const ServiceCard = ({
  title,
  description,
  image,
  link,
  className,
}: ServiceCardProps) => {
  return (
    <div
      className={cn(
        "bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
        className
      )}
    >
      <div className="image-zoom-container h-60">
        <img
          src={image}
          alt={title}
          className="image-zoom"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-realEstate-primary mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="inline-flex items-center text-realEstate-cta hover:text-realEstate-primary font-montserrat font-medium transition-colors duration-300"
        >
          Learn More
          <svg
            className="w-4 h-4 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;

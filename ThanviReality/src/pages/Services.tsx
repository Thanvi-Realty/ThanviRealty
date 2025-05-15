
import React from "react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Plot & Land Sales",
      description:
        "Prime locations for building your dream home or for investment purposes. We offer plots with clear titles and ready-to-build infrastructure.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      link: "/contact",
      features: [
        "HMDA/DTCP approved plots",
        "Clear title and legal documentation",
        "Developed infrastructure with roads and utilities",
        "Prime locations with excellent connectivity",
      ],
    },
    {
      title: "Villas & Apartment Sales",
      description:
        "Luxurious villas and modern apartments with premium amenities, designed for comfort and elegance in prime neighborhoods.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      link: "/contact",
      features: [
        "Contemporary designs with premium finishes",
        "Spacious layouts with ample natural light",
        "Smart home features and energy-efficient systems",
        "Exclusive communities with world-class amenities",
      ],
    },
    {
      title: "Home Loan Assistance",
      description:
        "Expert guidance on home loan options, paperwork assistance, and partnerships with leading financial institutions for best rates.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
      link: "/contact",
      features: [
        "Partnerships with major banks and financial institutions",
        "Competitive interest rates and flexible repayment options",
        "Assistance with documentation and application process",
        "Quick approval and disbursement support",
      ],
    },
    {
      title: "Legal Support",
      description:
        "Comprehensive legal services ensuring transparent transactions, clear documentation, and protection of your investment.",
      image: "https://images.unsplash.com/photo-1581704906775-891dd5207444",
      link: "/contact",
      features: [
        "Property title verification and due diligence",
        "Documentation review and preparation",
        "Regulatory compliance and approvals",
        "Registration and transfer of ownership assistance",
      ],
    },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-realEstate-primary mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="image-zoom-container h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="image-zoom"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-realEstate-primary mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  
                  <h4 className="font-montserrat font-semibold text-realEstate-secondary mb-3">Key Features:</h4>
                  <ul className="mb-6 space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg
                          className="h-5 w-5 text-realEstate-secondary mt-0.5 mr-2 flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button asChild className="w-full bg-realEstate-cta hover:bg-realEstate-cta/90">
                    <Link to={service.link}>Enquire Now</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-realEstate-primary mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6">
              We understand that every client has unique requirements. Our team is
              ready to create tailored solutions to meet your specific needs.
            </p>
            <Button asChild className="bg-realEstate-cta hover:bg-realEstate-cta/90">
              <Link to="/contact">Contact Us for Custom Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

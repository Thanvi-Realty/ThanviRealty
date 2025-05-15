
import React from "react";
import Layout from "@/components/Layout";
import ProcessStep from "@/components/ProcessStep";
import AmenityCard from "@/components/AmenityCard";
import FaqAccordion from "@/components/FaqAccordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const processes = [
    {
      number: 1,
      title: "Initial Consultation",
      description:
        "We start by understanding your requirements, preferences, and budget constraints to tailor our recommendations.",
    },
    {
      number: 2,
      title: "Property Shortlisting",
      description:
        "Based on your criteria, we prepare a curated selection of properties that align with your needs.",
    },
    {
      number: 3,
      title: "Site Visits & Selection",
      description:
        "We arrange visits to shortlisted properties and provide guidance to help you make an informed decision.",
    },
    {
      number: 4,
      title: "Documentation & Closing",
      description:
        "Our team handles all paperwork and legal processes to ensure a smooth and hassle-free transaction.",
    },
  ];

  const amenities = [
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      title: "Gated Community",
      description: "Secure living with controlled access and 24/7 security surveillance.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
          />
        </svg>
      ),
      title: "Central Location",
      description: "Prime locations with excellent connectivity to major points of interest.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
          />
        </svg>
      ),
      title: "Premium Landscaping",
      description: "Beautifully designed outdoor spaces with premium landscaping and gardens.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Recreational Facilities",
      description: "Clubhouse, swimming pool, gym, and sports facilities for an active lifestyle.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      title: "Power Backup",
      description: "Uninterrupted power supply with 100% backup for essential areas.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Water Supply",
      description: "24/7 water supply with purification systems and rainwater harvesting.",
    },
    {
      icon: (
        <svg
          className="h-10 w-10"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
      title: "Security Systems",
      description: "Advanced security with CCTV, intercom, and professional guards.",
    },
  ];

  const faqs = [
    {
      question: "What types of properties do you offer?",
      answer:
        "We offer a wide range of properties including residential plots, villas, apartments, and open lands for commercial development. Our portfolio caters to various budget ranges and location preferences.",
    },
    {
      question: "How do you ensure legal clearance of properties?",
      answer:
        "All our properties undergo a rigorous legal verification process. We check for clear titles, NOCs, approvals from relevant authorities, and ensure that all documentation is in place before listing any property.",
    },
    {
      question: "What financing options are available?",
      answer:
        "We have partnerships with leading financial institutions to provide competitive home loan options. Our finance experts can help you choose the right loan product, assist with paperwork, and expedite the approval process.",
    },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-realEstate-primary mb-4">
              Building Iconic Properties in Prime Locations
            </h1>
            <p className="text-xl text-gray-600">
              [REPLACE WITH YOUR UNIQUE VALUE PROPOSITION] Creating spaces that
              redefine luxury living with unmatched quality and attention to
              detail.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                  alt="Company History"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="section-heading">Our Story</h2>
              <div className="prose max-w-none text-gray-600">
                <p className="mb-4">
                  [REPLACE WITH ACTUAL CONTENT] Founded in 2005, our real estate
                  company has grown from a small team of passionate
                  professionals to a leading name in the industry. Our journey
                  began with a simple vision: to create exceptional living spaces
                  that enrich lives and build communities.
                </p>
                <p className="mb-4">
                  Over the years, we've successfully developed numerous
                  residential and commercial projects, earning the trust of
                  thousands of satisfied customers. Our commitment to quality,
                  innovation, and customer satisfaction has been the cornerstone
                  of our success.
                </p>
                <p>
                  Today, we continue to push boundaries in real estate
                  development, incorporating sustainable practices and
                  cutting-edge design principles to create properties that stand
                  the test of time. Our team of experts brings decades of
                  combined experience and a passion for excellence to every
                  project we undertake.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-heading">Our Process</h2>
            <p className="text-gray-600">
              We've streamlined our approach to ensure a smooth and transparent
              experience for every client.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {processes.map((process, index) => (
              <ProcessStep
                key={index}
                number={process.number}
                title={process.title}
                description={process.description}
                isLast={index === processes.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-heading">Our Amenities</h2>
            <p className="text-gray-600">
              We provide world-class amenities in all our properties for
              comfortable and luxurious living.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <AmenityCard
                key={index}
                icon={amenity.icon}
                title={amenity.title}
                description={amenity.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">Frequently Asked Questions</h2>
              <p className="text-gray-600">
                Find answers to common questions about our properties and
                services.
              </p>
            </div>

            <FaqAccordion faqs={faqs} />

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">
                Still have questions? We're here to help.
              </p>
              <Button asChild className="bg-realEstate-cta hover:bg-realEstate-cta/90">
                <Link to="/contact">Contact Our Team</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

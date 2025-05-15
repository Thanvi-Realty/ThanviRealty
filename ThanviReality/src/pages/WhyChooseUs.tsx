
import React from "react";
import Layout from "@/components/Layout";
import AnimatedFeature from "@/components/AnimatedFeature";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const features = [
    "15+ years of industry experience with proven track record",
    "100% legal clearance on all properties with transparent documentation",
    "Premium locations with excellent connectivity and appreciation potential",
    "Partnerships with top financial institutions for hassle-free home loans",
    "Dedicated after-sales service and support team",
    "Transparent dealings with no hidden costs or charges",
    "Expert advisory on property investment decisions",
  ];

  const testimonials = [
    {
      content:
        "Working with this real estate company was a breeze. Their professional approach, transparent process, and expert guidance helped me find my dream home without any hassles.",
      author: "John D.",
      position: "Homeowner",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      content:
        "The team went above and beyond to understand our requirements and presented options that perfectly matched our needs. Their after-sales service has been exceptional.",
      author: "Sarah M.",
      position: "Property Investor",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      content:
        "As a first-time homebuyer, I was nervous about the process. Their step-by-step guidance, transparent communication, and patience made the journey smooth and enjoyable.",
      author: "Robert K.",
      position: "First-time Buyer",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
    },
  ];

  return (
    <Layout>
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-realEstate-primary mb-4">
              Why Clients Trust Us
            </h1>
            <p className="text-xl text-gray-600">
              Delivering Value through Every Square Foot
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
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c"
                  alt="Why Choose Us"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="section-heading">
                What Sets Us Apart
              </h2>
              <p className="text-gray-600 mb-6">
                [REPLACE WITH ACTUAL CONTENT] Our commitment to excellence,
                integrity, and customer satisfaction has made us a trusted name
                in the real estate industry. We strive to exceed expectations in
                every aspect of our service.
              </p>
              
              <div className="space-y-3">
                {features.map((feature, index) => (
                  <AnimatedFeature
                    key={index}
                    text={feature}
                    delay={index * 100}
                  />
                ))}
              </div>
              
              <div className="mt-8">
                <Button asChild className="bg-realEstate-cta hover:bg-realEstate-cta/90">
                  <Link to="/contact">Discuss Your Requirements</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="section-heading">Client Testimonials</h2>
            <p className="text-gray-600">
              Don't just take our word for it. Hear what our clients have to say.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-realEstate-primary">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-realEstate-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Find Your Dream Property?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our team of experts is ready to guide you through every step of
              your real estate journey.
            </p>
            <Button asChild className="bg-realEstate-secondary hover:bg-realEstate-secondary/90 text-white">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WhyChooseUs;

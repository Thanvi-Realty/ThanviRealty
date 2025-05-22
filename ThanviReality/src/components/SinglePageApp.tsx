import React, { useState, useEffect, useRef } from "react";
import Layout from "./Layout";
import { useInView } from "react-intersection-observer";
import PropertySlider from "./PropertySlider";
import ContactForm from "./ContactForm";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedFeature from "./AnimatedFeature";
import {
  Check,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import BankLogosCarousel from "./BankLogosCarousel";

// Images for property slider
const sliderImages = [
  {
    url: "/propertyimages/PLOT.jpg",
    title: "Premium Plots",
    description: "Exclusive plots in prime locations ready for your dream home",
  },
  {
    url: "/propertyimages/VILLA.jpg",
    title: "Luxury Villas",
    description: "Meticulously designed villas with premium amenities",
  },
  {
    url: "/propertyimages/APARTMENTS.jpg",
    title: "Modern Apartments",
    description: "Contemporary living spaces in strategic locations",
  },
  {
    url: "/propertyimages/LAND.jpg",
    title: "Lands for Investment",
    description: "Ideal locations for business growth and development",
  },
  {
    url: "/propertyimages/FARM-1.jpg",
    title: "Farms",
    description: "Peaceful retreats away from the city bustle",
  },
  {
    url: "/propertyimages/HYDRABAD.png",
    title: "Hyderabad Exclusive Project",
    description: "Discover Premium, Exclusive Real Estate Projects in the Heart of Hyderabad.",
  },
];

// Services data
const services = [
  {
    title: "Plot Development",
    image: "/ourservices/PLOT DEVELOPMENT NEW.jpg",
    description:
      "Thanvi Realty offers professionally managed plot development services, turning raw land into fully planned, ready-to-construct plots. With a focus on quality infrastructure, legal compliance, and thoughtful layout design, we ensure each plot is equipped with essential amenities and is investment-ready.",
  },
  {
    title: "Land Acquisition",
    image: "/ourservices/LAND ACQUISITION NEW.jpg",
    description:
      "Thanvi Realty offers expert land acquisition services to help clients identify, evaluate, and secure prime land parcels for residential, commercial, or investment purposes. We handle every step - from legal due diligence and negotiations to documentation - ensuring a transparent and hassle-free process. Our in-depth market knowledge allows us to acquire strategically located lands with strong growth potential.",
  },
  {
    title: "Construction",
    image: "/ourservices/CONSTRUCTION NEW 2.jpg",
    description:
      "Thanvi Realty provides end-to-end construction services, transforming your vision into reality with structural integrity and aesthetic excellence. We specialize in building residential and commercial spaces with a focus on quality materials, modern techniques, and timely delivery. Our experienced team ensures that every project meets high standards of safety, functionality, and durability, making your investment future-ready.",
  },
  {
    title: "Investment Guidance",
    image: "/ourservices/INVESTMENT GUIDANCE NEW.jpg",
    description:
      "Thanvi Realty offers expert investment guidance to help you choose the right property based on your goals and budget. Whether you're looking for long-term returns or immediate value, our team provides insights on location potential, market trends, and legal clarity to ensure smart and profitable decisions.",
  },
];

// Amenities data
const amenities = [
  "Gated Communities: Enjoy peace of mind with secure, gated environments.",
  "24/7 Security: Always feel safe with round-the-clock security monitoring.",
  "Green Spaces: Relax and unwind in beautifully landscaped parks and open areas.",
  "Clubhouses: Modern clubhouses equipped with recreational facilities for all age groups.",
  "Fitness Centers: Stay fit with fully equipped gyms designed to meet your wellness needs.",
  "Children's Play Areas: Safe and vibrant spaces for your little ones to play and explore.",
  "Walking Trails: Scenic paths for a peaceful walk, jog, or cycle ride within the community.",
];

// Process steps
const processSteps = [
  {
    title: "Initial Consultation",
    description: "Speak with our experts to discuss your needs and budget.",
  },
  {
    title: "Site Visit",
    description:
      "Schedule a visit to explore the properties and choose the one that suits you best.",
  },
  {
    title: "Finalizing the Deal",
    description:
      "Get assistance with paperwork and finalizing the deal for your selected property.",
  },
  {
    title: "Move-In or Investment",
    description:
      "Either move into your new home or enjoy a valuable investment in real estate.",
  },
];

// Benefits/Why Choose Us
const benefits = [
  "15+ Years of Experience in real estate across Bangalore, Hyderabad & Vizag",
  "RERA-Approved Projects ensuring legal compliance and trust",
  "Strategic Locations near IT hubs, highways, and key landmarks",
  "Transparent Transactions with clear documentation and zero hidden charges",
  "Premium Amenities including gated communities, green spaces, and 24/7 security",
  "Dedicated Customer Support from site visits to post-sale service",
  "High Investment Potential with projects designed for long-term value",
];

// FAQs
const faqs = [
  {
    question: "Are your properties RERA approved?",
    answer:
      "Yes, all our properties are RERA-approved, ensuring compliance with the latest real estate regulations and offering peace of mind to our customers.",
  },
  {
    question: "What payment options do you offer?",
    answer:
      "We offer flexible payment plans, including bank transfers, cheques, and easy EMIs (subject to approval). Please contact us for more details on payment structures.",
  },
  {
    question: "Are there any hidden charges in the property transactions?",
    answer:
      "No, we are committed to transparency. All costs and charges are clearly communicated during the initial discussions, ensuring no hidden fees.",
  },
];

const SinglePageApp: React.FC = () => {
  const [activeSection, setActiveSection] = useState("home");
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    why: useRef(null),
    contact: useRef(null),
  };

  // Intersection observers for each section
  const [homeRef, homeInView] = useInView({ threshold: 0.5 });
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2 });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2 });
  const [whyRef, whyInView] = useInView({ threshold: 0.2 });
  const [contactRef, contactInView] = useInView({ threshold: 0.2 });

  // Update active section based on scroll position
  useEffect(() => {
    if (homeInView) setActiveSection("home");
    else if (aboutInView) setActiveSection("about");
    else if (servicesInView) setActiveSection("services");
    else if (whyInView) setActiveSection("why");
    else if (contactInView) setActiveSection("contact");
  }, [homeInView, aboutInView, servicesInView, whyInView, contactInView]);

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = sectionRefs[sectionId].current;
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <Layout activeSection={activeSection} onNavClick={scrollToSection}>
      {/* Home Section */}
      <section
        ref={(el) => {
          sectionRefs.home.current = el;
          homeRef(el);
        }}
        className="min-h-screen pt-16"
        id="home"
      >
        <PropertySlider images={sliderImages} />
        <div className="container py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-realEstate-primary mb-6">
            Your Trusted Path to Prime Properties
          </h1>
          <p className="text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Discover exceptional real estate opportunities in Bangalore,
            Hyderabad & Vizag with Thanvi Realty - your gateway to premium
            living spaces.
          </p>
          <Button
            onClick={() => scrollToSection("contact")}
            className="bg-realEstate-cta hover:bg-realEstate-cta/90 text-xl py-6 px-8"
          >
            Contact Us
          </Button>
        </div>
      </section>

      {/* About Us Section */}
      <section
        ref={(el) => {
          sectionRefs.about.current = el;
          aboutRef(el);
        }}
        className="py-20 bg-gray-50"
        id="about"
      >
        <div className="container">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-realEstate-primary mb-3">
              Building Iconic Properties in Bangalore, Hyderabad & Vizag
            </h2>
            <p className="text-xl text-gray-600">
              Building Premium Living Spaces That Blend Elegance and
              Functionality
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <p className="text-gray-700 leading-relaxed">
              Thanvi Realty is a leading name in real estate in Bangalore,
              Hyderabad and Vizag specializing in premium villa plots, luxury
              residential layouts, and commercial properties. With over 15 years
              of experience, we focus on quality construction, modern amenities,
              and strategic locations near IT hubs and key landmarks. Our
              projects offer excellent investment potential and a superior
              lifestyle, featuring gated communities, 24/7 security, and green
              spaces. We are committed to transparent transactions and customer
              satisfaction, making your dream home a reality. Choose Thanvi
              Realty for trusted real estate solutions across South India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Our Process */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-realEstate-primary mb-4">
                Our Process
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {processSteps.map((step, index) => (
                  <AccordionItem value={`step-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-medium">
                      Step {index + 1}: {step.title}
                    </AccordionTrigger>
                    <AccordionContent>{step.description}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Amenities */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-realEstate-primary mb-4">
                Amenities
              </h3>
              <p className="text-gray-600 mb-4">
                At Thanvi Realty, we offer a range of thoughtfully designed
                amenities that elevate your lifestyle. Our properties feature:
              </p>
              <div className="space-y-3">
                {amenities.map((amenity, index) => (
                  <AnimatedFeature
                    key={index}
                    text={amenity}
                    delay={index * 100}
                  />
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-realEstate-primary mb-4">
                FAQs
              </h3>
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem value={`faq-${index}`} key={index}>
                    <AccordionTrigger className="text-left font-medium">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <p className="font-medium">Have More Questions?</p>
                <Button
                  onClick={() => scrollToSection("contact")}
                  variant="link"
                  className="p-0 text-realEstate-secondary"
                >
                  Contact Us
                </Button>{" "}
                for personalized assistance or further inquiries.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section
        ref={(el) => {
          sectionRefs.services.current = el;
          servicesRef(el);
        }}
        className="py-20 bg-white"
        id="services"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-realEstate-primary mb-3">
              Our Services
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive real estate solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-realEstate-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section
        ref={(el) => {
          sectionRefs.why.current = el;
          whyRef(el);
        }}
        className="py-20 bg-gray-50"
        id="why"
      >
        <div className="container ">
          {/* Header Section with Shady Background */}
          <div className="w-full mx-auto text-center mb-12 p-8  bg-emerald-100 shadow-md rounded-lime">
            <h2 className="text-3xl md:text-4xl font-bold text-realEstate-primary mb-3">
              Why Clients Trust Us
            </h2>
            <p className="text-xl text-gray-700">
              Delivering Value through Every Square Foot
            </p>
          </div>

          {/* Benefit Points Inside Card */}
          <div className="max-w-3xl mx-auto pl-4">
            <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
              <div className="space-y-4 text-center">
                {benefits.map((benefit, index) => (
                  <AnimatedFeature
                    key={index}
                    text={benefit}
                    delay={index * 150}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <BankLogosCarousel />

      {/* Contact Section */}
      <section
        ref={(el) => {
          sectionRefs.contact.current = el;
          contactRef(el);
        }}
        className="py-20 bg-white"
        id="contact"
      >
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-realEstate-primary mb-3">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              We're here to answer your questions. Let's talk.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-[400px] md:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.041387239469!2d77.59605837367384!3d13.096563612129062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae190669eb46f3%3A0x7db9b0b47db24c40!2sTHANVI%20BUILD%20TECH%20AND%20VENTURES!5e0!3m2!1sen!2sin!4v1747380739182!5m2!1sen!2sin"
                title="Google Map Location"
                className="w-full h-full border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="p-8">
              <ContactForm displayMap={false} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SinglePageApp;

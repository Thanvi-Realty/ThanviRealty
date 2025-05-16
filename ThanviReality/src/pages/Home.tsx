
import Layout from "@/components/Layout";
import PropertySlider from "@/components/PropertySlider";
import ServiceCard from "@/components/ServiceCard";
import ContactForm from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  const propertyImages = [
    {
      url: "/propertyimages/VILLAS.jpg",
      title: "Luxury Villas With Premium Amenities",
      description:
        "Discover our exclusive collection of high-end properties in prime locations.",
    },
    {
      url: "/propertyimages/PLOTS.jpg",
      title: "Prime Plot Locations",
      description:
        "Secure your ideal plot in rapidly developing neighborhoods with excellent connectivity.",
    },
    {
      url: "/propertyimages/APARTMENTS.jpg",
      title: "Modern Apartment Complexes",
      description:
        "Contemporary living spaces with state-of-the-art facilities and security.",
    },
    {
      url: "/propertyimages/LANDS.jpg",
      title: "Open Land Investment Opportunities",
      description:
        "Strategic land parcels perfect for commercial development and long-term investment.",
    },
    {
      url: "/propertyimages/FARMS.jpg",
      title: "Resort-Style Living",
      description:
        "Enjoy resort amenities at home with our selection of premium properties.",
    },
  ];

  const services = [
    {
      title: "Plot & Land Sales",
      description:
        "Prime locations for building your dream home or for investment purposes. We offer plots with clear titles and ready-to-build infrastructure.",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
      link: "/services",
    },
    {
      title: "Villas & Apartment Sales",
      description:
        "Luxurious villas and modern apartments with premium amenities, designed for comfort and elegance in prime neighborhoods.",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      link: "/services",
    },
    {
      title: "Home Loan Assistance",
      description:
        "Expert guidance on home loan options, paperwork assistance, and partnerships with leading financial institutions for best rates.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07",
      link: "/services",
    },
    {
      title: "Legal Support",
      description:
        "Comprehensive legal services ensuring transparent transactions, clear documentation, and protection of your investment.",
      image: "https://images.unsplash.com/photo-1581704906775-891dd5207444",
      link: "/services",
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Property Slider */}
      <section className="relative">
        <PropertySlider images={propertyImages} autoplayInterval={3000} />
      </section>

      {/* Featured Properties Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <h2 className="section-heading text-center">
            Premium Real Estate Solutions
          </h2>
          <p className="section-subheading text-center">
            Discover our extensive portfolio of properties and services
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                link={service.link}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button asChild className="bg-realEstate-cta hover:bg-realEstate-cta/90">
              <Link to="/services">View All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="section-heading">
                Building Iconic Properties in Prime Locations
              </h2>
              <p className="text-gray-600 mb-6">
                [REPLACE WITH ACTUAL CONTENT] With over 15 years in the real
                estate industry, we've developed a reputation for quality,
                reliability, and exceptional customer service. Our team of
                experts is dedicated to finding you the perfect property that
                meets your needs and exceeds your expectations.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you're looking for a plot to build your dream home, a
                luxurious villa for your family, or an investment opportunity
                with great returns, we have the expertise and portfolio to help
                you make the right choice.
              </p>
              <Button asChild className="bg-realEstate-cta hover:bg-realEstate-cta/90">
                <Link to="/about">Learn More About Us</Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154526-990dced4db0d"
                  alt="Luxury Property"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Teaser */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                  alt="Property Expert"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="section-heading">Why Clients Trust Us</h2>
              <p className="text-gray-600 mb-6">
                [REPLACE WITH ACTUAL CONTENT] Our commitment to excellence and
                customer satisfaction has made us a trusted name in the real
                estate industry. We believe in building lasting relationships
                with our clients based on trust, integrity, and results.
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3 bg-realEstate-secondary rounded-full p-1">
                    <svg
                      className="h-4 w-4 text-white"
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
                  </div>
                  <span className="text-gray-700">Premium locations with excellent connectivity</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3 bg-realEstate-secondary rounded-full p-1">
                    <svg
                      className="h-4 w-4 text-white"
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
                  </div>
                  <span className="text-gray-700">Transparent dealings with no hidden costs</span>
                </div>
                <div className="flex items-center">
                  <div className="flex-shrink-0 mr-3 bg-realEstate-secondary rounded-full p-1">
                    <svg
                      className="h-4 w-4 text-white"
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
                  </div>
                  <span className="text-gray-700">Expert advisory on property investment decisions</span>
                </div>
              </div>
              <Button asChild className="bg-realEstate-cta hover:bg-realEstate-cta/90">
                <Link to="/why-choose-us">See All Benefits</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />
    </Layout>
  );
};

export default Home;

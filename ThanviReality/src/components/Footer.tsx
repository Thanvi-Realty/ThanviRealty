
import { Facebook, Instagram, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const handleNavClick = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-realEstate-primary text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">
            <span className="text-realEstate-secondary">THANVI</span> REALTY
          </h3>
          <p className="text-gray-300 max-w-xs">
            Premium real estate solutions for plots, villas, apartments, and open lands. 
            Building your dream homes since 2009 across South India.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-realEstate-secondary transition-colors duration-300"
              aria-label="Facebook"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-realEstate-secondary transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-montserrat font-semibold text-lg">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#home"
                onClick={() => handleNavClick('home')}
                className="text-gray-300 hover:text-realEstate-secondary transition-colors duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => handleNavClick('about')}
                className="text-gray-300 hover:text-realEstate-secondary transition-colors duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={() => handleNavClick('services')}
                className="text-gray-300 hover:text-realEstate-secondary transition-colors duration-300"
              >
                Our Services
              </a>
            </li>
            <li>
              <a
                href="#why"
                onClick={() => handleNavClick('why')}
                className="text-gray-300 hover:text-realEstate-secondary transition-colors duration-300"
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => handleNavClick('contact')}
                className="text-gray-300 hover:text-realEstate-secondary transition-colors duration-300"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-montserrat font-semibold text-lg">Our Services</h4>
          <ul className="space-y-2">
            <li className="text-gray-300">Plot Development</li>
            <li className="text-gray-300">Site Visit Assistance</li>
            <li className="text-gray-300">Legal Verification</li>
            <li className="text-gray-300">Investment Guidance</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-montserrat font-semibold text-lg">Contact Us</h4>
          <div className="space-y-3">
            <div className="flex items-center">
              <Phone size={18} className="mr-2 text-realEstate-secondary" />
              <span className="text-gray-300">+91 9876543210</span>
            </div>
            <div className="flex items-center">
              <Mail size={18} className="mr-2 text-realEstate-secondary" />
              <span className="text-gray-300">info@thanvirealty.com</span>
            </div>
            <p className="text-gray-300">
              123 Thanvi Realty Avenue,<br />
              Bangalore, Karnataka 560001
            </p>
          </div>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-gray-700">
        <p className="text-center text-gray-400">
          © {currentYear} Thanvi Realty. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

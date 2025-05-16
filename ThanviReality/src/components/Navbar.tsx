
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  activeSection?: string;
  onNavClick?: (sectionId: string) => void;
}

const Navbar = ({ activeSection = "home", onNavClick }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (sectionId: string) => {
    if (onNavClick) {
      onNavClick(sectionId);
      if (isOpen) setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="container flex justify-between items-center">
        <a href="#home" onClick={() => handleNavClick('home')} className="flex items-center">
          <img src="/THANVI REALTY LOGO.png" alt="Thanvi realty" className="h-10 w-auto"/>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-realEstate-primary"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#home"
            onClick={() => handleNavClick('home')} 
            className={cn(
              "nav-link transition-colors duration-300",
              activeSection === 'home' 
                ? "text-realEstate-secondary font-medium" 
                : "text-realEstate-primary hover:text-realEstate-secondary"
            )}
          >
            Home
          </a>
          <a 
            href="#about"
            onClick={() => handleNavClick('about')} 
            className={cn(
              "nav-link transition-colors duration-300",
              activeSection === 'about' 
                ? "text-realEstate-secondary font-medium" 
                : "text-realEstate-primary hover:text-realEstate-secondary"
            )}
          >
            About Us
          </a>
          <a 
            href="#services"
            onClick={() => handleNavClick('services')} 
            className={cn(
              "nav-link transition-colors duration-300",
              activeSection === 'services' 
                ? "text-realEstate-secondary font-medium" 
                : "text-realEstate-primary hover:text-realEstate-secondary"
            )}
          >
            Our Services
          </a>
          <a 
            href="#why"
            onClick={() => handleNavClick('why')} 
            className={cn(
              "nav-link transition-colors duration-300",
              activeSection === 'why' 
                ? "text-realEstate-secondary font-medium" 
                : "text-realEstate-primary hover:text-realEstate-secondary"
            )}
          >
            Why Choose Us
          </a>
          <Button 
            onClick={() => handleNavClick('contact')} 
            className={cn(
              "bg-realEstate-cta hover:bg-realEstate-cta/90",
              activeSection === 'contact' && "ring-2 ring-realEstate-secondary"
            )}
          >
            Contact Us
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-xl p-4 transform transition-transform ease-in-out duration-300 md:hidden",
            isOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex justify-end">
            <button
              onClick={toggleMenu}
              className="text-realEstate-primary"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6 mt-8">
            <a
              href="#home"
              className={cn(
                "nav-link transition-colors duration-300",
                activeSection === 'home' 
                  ? "text-realEstate-secondary font-medium" 
                  : "text-realEstate-primary hover:text-realEstate-secondary"
              )}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
            <a
              href="#about"
              className={cn(
                "nav-link transition-colors duration-300",
                activeSection === 'about' 
                  ? "text-realEstate-secondary font-medium" 
                  : "text-realEstate-primary hover:text-realEstate-secondary"
              )}
              onClick={() => handleNavClick('about')}
            >
              About Us
            </a>
            <a
              href="#services"
              className={cn(
                "nav-link transition-colors duration-300",
                activeSection === 'services' 
                  ? "text-realEstate-secondary font-medium" 
                  : "text-realEstate-primary hover:text-realEstate-secondary"
              )}
              onClick={() => handleNavClick('services')}
            >
              Our Services
            </a>
            <a
              href="#why"
              className={cn(
                "nav-link transition-colors duration-300",
                activeSection === 'why' 
                  ? "text-realEstate-secondary font-medium" 
                  : "text-realEstate-primary hover:text-realEstate-secondary"
              )}
              onClick={() => handleNavClick('why')}
            >
              Why Choose Us
            </a>
            <Button 
              onClick={() => handleNavClick('contact')}
              className={cn(
                "bg-realEstate-cta hover:bg-realEstate-cta/90 w-full",
                activeSection === 'contact' && "ring-2 ring-realEstate-secondary"
              )}
            >
              Contact Us
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

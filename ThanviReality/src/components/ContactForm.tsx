
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Facebook, Instagram, Phone } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

interface ContactFormProps {
  displayMap?: boolean;
}

const ContactForm = ({ displayMap = true }: ContactFormProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^[0-9+\s()-]{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Phone number is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    } else if (formData.message.length < 20) {
      newErrors.message = "Message should be at least 20 characters";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitting(false);
      
      // Show success notification
      toast.success("Your message has been sent! We'll contact you soon.", {
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <section className="bg-white py-16">
      <div className="container">
        <h2 className="section-heading text-center">Contact Us</h2>
        <p className="section-subheading text-center">
          Get in touch with our expert team today
        </p>

        <div className={`mt-12 ${displayMap ? "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" : ""}`}>
          {displayMap && (
            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] md:h-[500px]">
              <iframe
                title="Google Map Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986652425023!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1620253834875!5m2!1sen!2suk"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="bg-white rounded-lg shadow-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="johndoe@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="e.g., +1 234 567 8900"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`min-h-[120px] ${errors.message ? "border-red-500" : ""}`}
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-realEstate-cta hover:bg-realEstate-cta/90"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <h4 className="font-montserrat font-bold text-lg">Contact Information</h4>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 text-realEstate-primary" />
                  <span>[REPLACE WITH ACTUAL PHONE]</span>
                </div>
                <p className="text-gray-700">
                  [REPLACE WITH ACTUAL ADDRESS]
                  <br />
                  123 Real Estate Avenue
                  <br />
                  City, State 12345
                </p>
                <div className="flex space-x-4 pt-2">
                  <a
                    href="#"
                    className="text-realEstate-primary hover:text-realEstate-secondary transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="#"
                    className="text-realEstate-primary hover:text-realEstate-secondary transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

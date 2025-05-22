import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_dw3imiw",
        "template_xtgznnn",
        formData as unknown as Record<string, unknown>,
        "TKoQRr83GCsBZMmj7"
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Show success
      toast.success("Message sent successfully!", { duration: 5000 });
    } catch (error) {
      toast.error("Failed to send. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-4 md:py-8 pt-0">
      <div className="container px-3 sm:px-4">
        <h1 className="section-subheading text-center text-lg md:text-xl mb-4 md:mb-6">
          Get in touch with our expert team today
        </h1>

        <div
          className={`mt-8 md:mt-12 ${
            displayMap
              ? "grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-start"
              : ""
          }`}
        >
          {displayMap && (
            <div className="rounded-lg overflow-hidden shadow-lg h-[280px] sm:h-[320px] md:h-[380px] lg:h-[450px] order-1 lg:order-none">
              <iframe
                title="Google Map Location"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986652425023!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2suk!4v1620253834875!5m2!1sen!2suk"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          )}

          <div className="w-full bg-white rounded-lg shadow-lg p-3 sm:p-5 md:p-6 order-2 lg:order-none">
            <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? "border-red-500" : ""}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="e.g., +91 9988776655"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? "border-red-500" : ""}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="How can we help you today?"
                  value={formData.message}
                  onChange={handleChange}
                  className={`min-h-[100px] md:min-h-[120px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
                />
                {errors.message && (
                  <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full bg-realEstate-cta hover:bg-realEstate-cta/90 py-2 md:py-2.5"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>

            <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-200">
              <div className="flex flex-col space-y-3 md:space-y-4">
                <h4 className="font-montserrat font-bold text-base md:text-lg">
                  Contact Information
                </h4>
                <div className="flex items-start">
                  <Phone size={16} className="mt-0.5 mr-2 text-realEstate-primary" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+917411091999"
                      className="text-black-300 hover:underline text-sm md:text-base"
                    >
                      +91 7411091999
                    </a>
                    <a
                      href="tel:+917676729548"
                      className="text-black-300 hover:underline text-sm md:text-base"
                    >
                      +91 7676729548
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail size={16} className="mt-0.5 mr-2 text-realEstate-secondary" />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=thanvirealty@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-300 hover:underline text-sm md:text-base"
                    aria-label="Email"
                  >
                    thanvirealty@gmail.com
                  </a>
                </div>
                <p className="text-gray-700 text-sm md:text-base">
                  #32, 2nd floor MIG2B, 6th Cross,KHB Colony,
                  <br />
                  Gandhinagar International, Airport Road, <br />
                  Yelahanka, Bengaluru, Karnataka 560064
                </p>
                <div className="flex space-x-3 pt-1 md:pt-2">
                  <a
                    href="https://www.facebook.com/thanvibuildtechventures/"
                    className="text-realEstate-primary hover:text-realEstate-secondary transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={18} className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/thanvi.buildtech/#"
                    className="text-realEstate-primary hover:text-realEstate-secondary transition-colors duration-300"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} className="w-5 h-5" />
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
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
        "YOUR_SERVICE_ID", // From EmailJS dashboard
        "YOUR_TEMPLATE_ID", // Your template ID
        formData as unknown as Record<string, unknown>,
        "YOUR_PUBLIC_KEY" // From EmailJS
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
    <section className="bg-white py-16 pt-0">
      <div className="container">
        {/* <h2 className="section-heading text-center">Contact Us</h2> */}
        <h2 className="section-subheading text-center ">
          Get in touch with our expert team today
        </h2>

        <div
          className={`mt-12 ${
            displayMap
              ? "grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
              : ""
          }`}
        >
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
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
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
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
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
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
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
                  className={`min-h-[120px] ${
                    errors.message ? "border-red-500" : ""
                  }`}
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
                <h4 className="font-montserrat font-bold text-lg">
                  Contact Information
                </h4>
                <div className="flex items-center">
                  <Phone size={18} className="mr-2 text-realEstate-primary" />
                  <div className="flex flex-col">
                    <a
                      href="tel:+917411091999"
                      className="text-black-300 hover:underline"
                    >
                      +91 7411091999
                    </a>
                    <a
                      href="tel:+917676729548"
                      className="text-black-300 hover:underline"
                    >
                      +91 7676729548
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail size={18} className="mr-2 text-realEstate-secondary " />
                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=thanvirealty@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black-300 hover:underline"
                    aria-label="Facebook"
                  >
                    thanvirealty@gmail.com
                  </a>
                </div>
                <p className="text-gray-700">
                  #32, 2nd floor MIG2B, 6th Cross,KHB Colony,
                  <br />
                  Gandhinagar International, Airport Road, <br />
                  Yelahanka, Bengaluru, Karnataka 560064
                </p>
                <div className="flex space-x-4 pt-2">
                  <a
                    href="https://www.facebook.com/thanvibuildtechventures/"
                    className="text-realEstate-primary hover:text-realEstate-secondary transition-colors duration-300"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/thanvi.buildtech/#"
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

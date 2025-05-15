
import React from "react";
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-24 pb-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-realEstate-primary mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              Get in touch with our expert team for any queries
            </p>
          </div>
        </div>
      </section>

      <ContactForm />
    </Layout>
  );
};

export default Contact;

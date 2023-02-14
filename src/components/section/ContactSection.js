import React from "react";
import style from "./ContactSection.module.css";
import ContactInfo from "../contact/ContactInfo";
import ContactForm from "../contact/ContactForm";

const ContactSection = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title text-center mb-4">
          <h3>
            <span className={style["contactUs-Title"]}>Contact Us</span>
          </h3>
        </div>

        {/* address, email us */}
        <ContactInfo />
      </div>
      <ContactForm />
    </section>
  );
};

export default ContactSection;

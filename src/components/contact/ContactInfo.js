import React from "react";

import style from "./ContactInfo.module.css";
import LocationLogo from "../../assets/Icons/Location";
import Envelope from "../../assets/Icons/Envelope";
import Phone from "../../assets/Icons/Phone";

const ContactInfo = () => {
  return (
    <div className="row " data-aos="fade-up" data-aos-delay="100">
      <div className="col-lg-6">
        <div className={`${style["info-box"]} mb-4`}>
          <LocationLogo className={`${style["contact-logo"]} ${style.path}`} />

          <i className="px-3 fa fa-location-dot"></i>
          <h3>Our Address</h3>
          <p>143 Paghanapin St. Di Makita City</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className={`${style["info-box"]} mb-4`}>
          <Envelope className={`${style["contact-logo"]} ${style.path}`} />
          <h3>Email Us</h3>
          <p>contact@linkcoop.com</p>
        </div>
      </div>

      <div className="col-lg-3 col-md-6">
        <div className={`${style["info-box"]} mb-4`}>
          <Phone className={`${style["contact-logo"]} ${style.path}`} />
          <h3>Call Us</h3>
          <p>+63 9876 543 210</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

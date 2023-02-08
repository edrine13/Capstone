import React from "react";
import style from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className="offset-md-3 col-md-6">
      <form className={`${style["php-email-form"]}`}>
        <div className="row my-4 ">
          <div className="col form-group ">
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="Your Name"
              required=""
            />
          </div>
          <div className="col form-group">
            <input
              type="email"
              className="form-control"
              name="email"
              id="email"
              placeholder="Your Email"
              required=""
            />
          </div>
        </div>
        <div className="form-group mb-4">
          <input
            type="text"
            className="form-control"
            name="subject"
            id="subject"
            placeholder="Subject"
            required=""
          />
        </div>
        <div className="form-group">
          <textarea
            className="form-control"
            name="message"
            rows="5"
            placeholder="Message"
            required=""
          ></textarea>
        </div>
        {/* <div className="my-3">
          <div className="loading">Loading</div>
          <div className="error-message"></div>
          <div className="sent-message">
            Your message has been sent. Thank you!
          </div>
        </div> */}
        <div className="text-center mt-4">
          <button type="submit" className={style.contactBtn}>
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;

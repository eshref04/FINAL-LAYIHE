import React from "react";
import "./ContactFormSection.scss";

const ContactFormSection = () => {
  return (
    <section className="contact__form__section">
      <div className="contact__form__section__wrapper container">
        <div className="contact__form__section__wrapper__heading">
          <h3>Leave us your info</h3>
          <span>and we will get back to you.</span>
        </div>

        <form className="contact__form__section__wrapper__form" action="#">
          <input type="text" placeholder="Full Name*" />
          <input type="email" placeholder="Email*" />
          <input type="text" placeholder="Subject*" />
          <textarea name="msg" id="msg" placeholder="Message*"></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;

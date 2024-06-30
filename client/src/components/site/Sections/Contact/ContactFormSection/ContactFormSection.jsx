import React, { useEffect, useRef } from "react";
import "./ContactFormSection.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from '@emailjs/browser';

const ContactFormSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ux90l7b', 'template_12dewf1', form.current, {
        publicKey: '4U6GLVH8_kF52vvgp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset()
  };

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="contact__form__section">
      <div data-aos="fade-up"
     data-aos-duration="5000" className="contact__form__section__wrapper container">
        <div className="contact__form__section__wrapper__heading">
          <h3>Leave us your info</h3>
          <span>and we will get back to you.</span>
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact__form__section__wrapper__form" action="#">
          <input type="text" placeholder="Full Name*" name="user_name" />
          <input type="email" placeholder="Email*" name="user_email" />
          <input type="text" placeholder="Subject*" />
          <textarea name="message" id="msg" placeholder="Message*"></textarea>
          <button type="submit">Submit Now</button>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;

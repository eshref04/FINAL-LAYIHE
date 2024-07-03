import React, { useEffect } from "react";
import "./IconSection.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const IconSection = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className="icon__section">
      <div  className="icon__section__wrapper container">
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-skype"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </section>
  );
};

export default IconSection;

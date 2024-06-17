import React from "react";
import "./IconSection.scss";

const IconSection = () => {
  return (
    <section className="icon__section">
      <div className="icon__section__wrapper container">
        <i class="fa-solid fa-envelope"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-skype"></i>
        <i class="fa-brands fa-twitter"></i>
      </div>
    </section>
  );
};

export default IconSection;

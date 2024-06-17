import React from "react";
import "./MapSection.scss";

const MapSection = () => {
  return (
    <section className="map__section">
      <iframe
        allowFullScreen
        height="500"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3028.9419163685825!2d49.657413276537454!3d40.60910514390762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030966372b42227%3A0x8e5dbe43f349cbb2!2zWMmZesmZciBCYcSfbGFyxLE!5e0!3m2!1sen!2saz!4v1718568950312!5m2!1sen!2saz"
        style={{
          border: "0",
        }}
        width="100%"
      />
    </section>
  );
};

export default MapSection;

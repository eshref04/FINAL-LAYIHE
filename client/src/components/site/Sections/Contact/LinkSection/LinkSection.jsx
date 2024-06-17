import React from "react";
import "./LinkSection.scss";
import { Link } from "react-router-dom";

const LinkSection = () => {
  return (
    <section className="link__section">
      <div className="link__section__wrapper container">
        <div className="link__section__wrapper__crd">
          <i class="fa-solid fa-phone"></i>
          <h3>Phone</h3>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these.
          </p>
          <Link>+1-2345-2345</Link>
        </div>

        <div className="link__section__wrapper__crd">
          <i class="fa-regular fa-envelope"></i>
          <h3>Email</h3>
          <p>
            A wonderful serenity has taken possession of my entire soul, like
            these.
          </p>
          <Link>Contact@goodlayers.com</Link>
        </div>

        <div className="link__section__wrapper__crd">
          <i class="fa-solid fa-location-arrow"></i>
          <h3>Location</h3>
          <p>4 apt. Flawing Street. The Grand Avenue. Liverpool, UK 33342</p>
          <Link>View On Google Map</Link>
        </div>
      </div>
    </section>
  );
};

export default LinkSection;

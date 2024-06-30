import React, { useContext, useEffect } from "react";
import "./AttorneyCardsSection.scss";
import MainContext from "../../../../../context/Context";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AttorneyCardsSection = () => {
  const { attorney } = useContext(MainContext);

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="attorney__cards__section">
      <div
        data-aos="fade-up"
        data-aos-duration="3500"
        className="attorney__cards__section__wrapper container"
      >
        <div className="attorney__cards__section__wrapper__heading">
          <h3>Partners at Attorna</h3>
        </div>

        <div className="attorney__cards__section__wrapper__cards">
          {attorney && attorney.map((item, index) => (
            <div key={index} className="attorney__cards__section__wrapper__cards__crd">
              <div className="attorney__cards__section__wrapper__cards__crd__img">
                <div className="attorney__cards__section__wrapper__cards__crd__img__bg"></div>
                <img src={item.image} alt={item.name} />
              </div>
              <div className="attorney__cards__section__wrapper__cards__crd__body">
                <h3>
                  <Link to={`/attorneydetail/${item._id}`}>{item.name}</Link>
                </h3>
                <span>{item.status}</span>
                <div className="attorney__cards__section__wrapper__cards__crd__body__icons">
                  <i className="fa-brands fa-facebook-f"></i>
                  <i className="fa-brands fa-linkedin-in"></i>
                  <i className="fa-brands fa-pinterest-p"></i>
                  <i className="fa-brands fa-twitter"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AttorneyCardsSection;

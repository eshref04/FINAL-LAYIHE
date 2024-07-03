import React, { useContext, useEffect } from "react";
import Slider from "react-slick";
import "./AboutCardsSection.scss"
import { Link } from 'react-router-dom';
import MainContext from "../../../../../context/Context";

const AboutCardsSection = () => {
  const { attorney } = useContext(MainContext);
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section className='about__cards__section'>
    <div  className='about__cards__section__wrapper container'>
      <div className="about__cards__section__wrapper__heading">
        <h3>Partners at Attorna</h3>
        <Link to="#"><span>View All People</span><i className="fa-solid fa-arrow-right-long"></i></Link>
      </div>

      <div className="about__cards__section__wrapper__slider slider-container">
        <Slider {...settings}>
          {attorney && attorney.map((person, index) => (
            <div key={index} className="about__cards__section__wrapper__slider__crd">
              <div className="about__cards__section__wrapper__slider__crd__img">
                <div className="about__cards__section__wrapper__slider__crd__img__bg"></div>
                <img src={person.image} alt={person.name} />
              </div>
              <div className="about__cards__section__wrapper__slider__crd__body">
                <h3><Link to={`/attorneydetail/${person._id}`}>{person.name}</Link></h3>
                <span>{person.status}</span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  </section>
  )
}

export default AboutCardsSection

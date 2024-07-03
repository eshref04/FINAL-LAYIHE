import React, { useEffect, useContext } from "react";
import Slider from "react-slick";
import "./CardsSection.scss";
import MainContext from "../../../../../context/Context";
import { Link } from 'react-router-dom';

const CardsSection = () => {
  const { attorney } = useContext(MainContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1363,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  useEffect(() => {
    const handleScroll = () => {
      const cardsSection = document.querySelector('.cards__section');
      const scrollPosition = window.scrollY + window.innerHeight;
      const sectionPosition = cardsSection.offsetTop + cardsSection.offsetHeight / 2;

      if (scrollPosition >= sectionPosition) {
        cardsSection.classList.add('animate');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='cards__section'>
      <div className='cards__section__wrapper container'>
        <div className="cards__section__wrapper__heading">
          <h3>Partners at Attorna</h3>
          <Link to="/attorney"><span>View All People</span><i className="fa-solid fa-arrow-right-long"></i></Link>
        </div>

        <div className="cards__section__wrapper__slider slider-container">
          <Slider {...settings}>
            {attorney && attorney.map((person, index) => (
              <div key={index} className="cards__section__wrapper__slider__crd">
                <div className="cards__section__wrapper__slider__crd__img">
                  <div className="cards__section__wrapper__slider__crd__img__bg"></div>
                  <img src={person.image} alt={person.name} />
                </div>
                <div className="cards__section__wrapper__slider__crd__body">
                  <h3><Link to={`/attorneydetail/${person._id}`}>{person.name}</Link></h3>
                  <span>{person.status}</span>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CardsSection;

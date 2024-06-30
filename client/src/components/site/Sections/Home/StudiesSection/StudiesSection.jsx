import React, { useContext } from "react";
import Slider from "react-slick";
import "./StudiesSection.scss";

import { Link } from 'react-router-dom';
import MainContext from "../../../../../context/Context";

const StudiesSection = () => {
   const { study } = useContext(MainContext);

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

   return (
      <section className='studies__section'>
         <div className='studies__section__wrapper container'>
            <div className="studies__section__wrapper__heading">
               <span>OUR WORKS</span>
               <h3>Case Studies</h3>
            </div>
            <div className="studies__section__wrapper__slider slider-container">
               <Slider {...settings}>
                  {study && study.map((item, index) => (
                     <div key={index} className="studies__section__wrapper__slider__crd">
                        <div className="studies__section__wrapper__slider__crd__img">
                           <div className="studies__section__wrapper__slider__crd__img__bg"></div>
                           <img src={item.image} alt={item.title} />
                        </div>
                        <div className="studies__section__wrapper__slider__crd__body">
                           <h3><Link to={`/studydetail/${item._id}`}>{item.title}</Link></h3>
                           <span>{item.category}</span>
                        </div>
                     </div>
                  ))}
               </Slider>
            </div>
         </div>
      </section>
   );
}

export default StudiesSection;


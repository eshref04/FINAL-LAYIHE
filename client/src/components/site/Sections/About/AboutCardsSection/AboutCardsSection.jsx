import React from "react";
import Slider from "react-slick";
import "./AboutCardsSection.scss"
import James from "../../../../../assets/James.jpg"
import Emma from "../../../../../assets/Emma.jpg"
import Melania from "../../../../../assets/Melanie.jpg"
import Nathaniel from "../../../../../assets/Nathaniel.jpg"
import Jodan from "../../../../../assets/Jodan.jpg"
import Joel from "../../../../../assets/Joel.jpg"
import { Link } from 'react-router-dom';

const AboutCardsSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <section className='about__cards__section'>
    <div className='about__cards__section__wrapper container'>
    <div className="about__cards__section__wrapper__heading">
    <h3>Partners at Attorna</h3>
    <Link><span>View All People</span><i class="fa-solid fa-arrow-right-long"></i></Link>
    </div>
   
   <div className="about__cards__section__wrapper__slider slider-container">
      <Slider {...settings}>
        <div className="about__cards__section__wrapper__slider__crd">
        <div className="about__cards__section__wrapper__slider__crd__img">
        <div className="about__cards__section__wrapper__slider__crd__img__bg"> </div>
        <img  src={James} alt="James" />
        </div>
       <div className="about__cards__section__wrapper__slider__crd__body">
       <h3><Link>James Milner</Link></h3>
       <span>Partner</span>
       
       </div>
      
         
        </div>

        <div className="about__cards__section__wrapper__slider__crd">
        <div className="about__cards__section__wrapper__slider__crd__img">
        <div className="about__cards__section__wrapper__slider__crd__img__bg"> </div>
        <img  src={Emma} alt="Emma" />
        </div>
        <div className="about__cards__section__wrapper__slider__crd__body">
        <h3><Link>Emma Bunton</Link></h3>
        <span>Partner</span>
        </div>
         
        </div>

        <div className="about__cards__section__wrapper__slider__crd">
        <div className="about__cards__section__wrapper__slider__crd__img">
        <div className="about__cards__section__wrapper__slider__crd__img__bg"> </div>
        <img  src={Melania} alt="Melanie" />
        </div>
        <div className="about__cards__section__wrapper__slider__crd__body">
        <h3><Link>Melanie Brown</Link></h3>
        <span>Partner</span>
        </div>
          
        </div>

        <div className="about__cards__section__wrapper__slider__crd">
        <div className="about__cards__section__wrapper__slider__crd__img">
        <div className="about__cards__section__wrapper__slider__crd__img__bg"> </div>
        <img  src={Nathaniel} alt="Nathaniel" />
        </div>
        <div className="about__cards__section__wrapper__slider__crd__body">
        <h3><Link>Nathaniel Phillips</Link></h3>
        <span>Partner</span>
        </div>
         
        </div>

        <div className="about__cards__section__wrapper__slider__crd">
        <div className="about__cards__section__wrapper__slider__crd__img">
        <div className="about__cards__section__wrapper__slider__crd__img__bg"> </div>
        <img  src={Jodan} alt="Jodan" />
        </div>
        <div className="about__cards__section__wrapper__slider__crd__body">
        <h3><Link>Jodan Henderson</Link></h3>
        <span>Partner</span>
        </div>
          
        </div>

        <div className="about__cards__section__wrapper__slider__crd">
        <div className="about__cards__section__wrapper__slider__crd__img">
        <div className="about__cards__section__wrapper__slider__crd__img__bg"> </div>
        <img  src={Joel} alt="Joel" />
        </div>
        <div className="about__cards__section__wrapper__slider__crd__body">
        <h3><Link>Joel Matip</Link></h3>
        <span>Partner</span>
        </div>
         
        </div>
      
      </Slider>
    </div>
    </div>



    </section>
  )
}

export default AboutCardsSection

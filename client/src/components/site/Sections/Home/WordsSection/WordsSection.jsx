import React, { useEffect } from 'react'
import "./WordsSection.scss"
import Slider from "react-slick";


const WordsSection = () => {
  
    const settings = {
      dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
    };
    return (
      <section className='words__section'>
      <div  className='words__section__wrapper container'>
      <div className="words__section__wrapper__heading">
      <span>TESTIMONIAL</span>
     <h3>Words From Clients</h3>
      </div>
     
     <div className="words__section__wrapper__slider slider-container">
        <Slider {...settings}>
          <div className="words__section__wrapper__slider__crd">
          
          
          <i class="fa-solid fa-quote-left"></i>
          
         <div className="words__section__wrapper__slider__crd__body">
         <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
         <h3>Jamie Calter</h3>
             <span>CEO Of FB</span>
         
         </div>
        
           
          </div>

          <div className="words__section__wrapper__slider__crd">
          
          
          <i class="fa-solid fa-quote-left"></i>
          
         <div className="words__section__wrapper__slider__crd__body">
         <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
         <h3>Jenny Chen</h3>
             <span>CFO, Apple</span>
         
         </div>
        
           
          </div>

          <div className="words__section__wrapper__slider__crd">
          
          
          <i class="fa-solid fa-quote-left"></i>
          
         <div className="words__section__wrapper__slider__crd__body">
         <p>I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary,</p>
         <h3>Paul Newman
         </h3>
             <span>Attorney</span>
         
         </div>
        
           
          </div>
  
         
  
         
        
        </Slider>
      </div>
      </div>
  
  
  
      </section>
    )
  }
  
  export default WordsSection

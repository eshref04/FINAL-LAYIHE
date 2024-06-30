import React, { useEffect } from 'react'
import "./ChooseSection.scss"
import { Link } from 'react-router-dom';
import ChooseImg from "../../../../../assets/choose-img1.png"


const ChooseSection = () => {
  
  return (
    <section className='choose__section'>
      <div  className="choose__section__wrapper container">
       <div className='choose__section__wrapper__left'>
        <div className='choose__section__wrapper__left__img'> 
        <img src={ChooseImg} alt="" />
        </div> 
       </div>

       <div className='choose__section__wrapper__right'>
       <div className='choose__section__wrapper__right__head'>
        <span>WHAT WE ARE EXPERT AT</span>
        <h3>Why Clients Choose Us</h3>
       </div>

       <div className='choose__section__wrapper__right__content'>
        <p className='choose__section__wrapper__right__content__first'>We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
        <p className='choose__section__wrapper__right__content__last'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</p>

        <Link><span>LEARN MORE</span><i class="fa-solid fa-arrow-right-long"></i></Link>
       </div>
       </div>
      </div>
    </section>
  )
}

export default ChooseSection

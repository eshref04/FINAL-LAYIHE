import React, { useEffect } from 'react'
import "./AttorneyContactSection.scss"
import { Link } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

const AttorneyContactSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='attorney__contact__section'>
       <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className='attorney__contact__section__wrapper container'>
      <h3>WE ARE LOOKING FOR NEW PARTNERS</h3>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <Link to={"/contact"}><span>Contact Us</span><i class="fa-solid fa-arrow-right-long"></i></Link>
       </div>
    </section>
  )
}

export default AttorneyContactSection

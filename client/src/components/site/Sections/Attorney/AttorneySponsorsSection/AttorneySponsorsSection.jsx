import React, { useEffect } from 'react'
import "./AttorneySponsorsSection.scss"
import Sponsor1 from "../../../../../assets/attorney-sponsor1.png"
import Sponsor2 from "../../../../../assets/attorney-sponsor2.png"
import Sponsor3 from "../../../../../assets/attorney-sponsor3.png"
import Sponsor4 from "../../../../../assets/attorney-sponsor4.png"
import Sponsor5 from "../../../../../assets/attorney-sponsor5.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const AttorneySponsorsSection = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <section className='attorney__sponsors__section'>
       <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="4500" className="attorney__sponsors__section__wrapper container">
         <img src={Sponsor1} alt="" />
         <img src={Sponsor2} alt="" />
         <img src={Sponsor3} alt="" />
         <img src={Sponsor4} alt="" />
         <img src={Sponsor5} alt="" />
       </div>
    </section>
  )
}

export default AttorneySponsorsSection

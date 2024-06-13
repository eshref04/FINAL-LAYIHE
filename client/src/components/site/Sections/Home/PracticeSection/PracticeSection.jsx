import React from 'react'
import "./PracticeSection.scss"
import { Link } from 'react-router-dom';
import PracticeIcon1 from "../../../../../assets/practice-icon1.png"
import PracticeIcon2 from "../../../../../assets/practice-icon2.png"
import PracticeIcon3 from "../../../../../assets/practice-icon3.png"
import PracticeIcon4 from "../../../../../assets/practice-icon4.png"
import PracticeIcon5 from "../../../../../assets/practice-icon5.png"
import PracticeIcon6 from "../../../../../assets/practice-icon6.png"


const PracticeSection = () => {
  return (
    <section className='practice__section'>
      <div className="container">
      <div className='practice__section__heading'>
      <span>WHAT WE ARE EXPERT AT</span>
      <h3>Legal Practices Area</h3>
      </div>


      <div className='practice__section__areas'>
       <div className='practice__section__areas__card'>
       <img width={"57px"} height={"56px"}  src={PracticeIcon1} alt="" />
       <h3>Coporate & Securities</h3>
       <p>We can provide corporate governance, helping clients manage the responsi bilities of running a corporation in financial field.</p>
       <Link class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </Link>
       </div>

       <div className='practice__section__areas__card'>
       <img width={"57px"} height={"56px"}  src={PracticeIcon2} alt="" />
       <h3>Real Estate Law</h3>
       <p>We can provide corporate governance, helping clients manage the responsi bilities of running a corporation in financial field.</p>
       {/* <Link>Learn More <i class="fa-solid fa-arrow-right-long"></i></Link> */}
       <Link class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </Link>
       </div>

       <div className='practice__section__areas__card'>
       <img width={"57px"} height={"56px"}  src={PracticeIcon3} alt="" />
       <h3>Health Care Law</h3>
       <p>We can provide corporate governance, helping clients manage the responsi bilities of running a corporation in financial field.</p>
       <Link class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </Link>
       </div>

       <div className='practice__section__areas__card'>
       <img width={"57px"} height={"56px"}  src={PracticeIcon4} alt="" />
       <h3>Insurance Law</h3>
       <p>We can provide corporate governance, helping clients manage the responsi bilities of running a corporation in financial field.</p>
       <Link class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </Link>
       </div>

       <div className='practice__section__areas__card'>
       <img width={"57px"} height={"56px"}  src={PracticeIcon5} alt="" />
       <h3>Construction & Engineering</h3>
       <p>We can provide corporate governance, helping clients manage the responsi bilities of running a corporation in financial field.</p>
       <Link class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </Link>
       </div>

       <div className='practice__section__areas__card'>
       <img width={"57px"} height={"56px"}  src={PracticeIcon6} alt="" />
       <h3>Ecommerce Law</h3>
       <p>We can provide corporate governance, helping clients manage the responsi bilities of running a corporation in financial field.</p>
       <Link  class="learn-more">
    <span class="circle" aria-hidden="true">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">Learn More</span>
  </Link>
       </div>

       
      </div>
        
      </div>
    </section>
  )
}

export default PracticeSection

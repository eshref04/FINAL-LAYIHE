import React, { useEffect } from 'react'
import "./AttorneyContactSection.scss"
import { Link } from 'react-router-dom'


const AttorneyContactSection = () => {

  return (
    <section className='attorney__contact__section'>
       <div className='attorney__contact__section__wrapper container'>
      <h3>WE ARE LOOKING FOR NEW PARTNERS</h3>
      <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
      <Link to={"/contact"}><span>Contact Us</span><i class="fa-solid fa-arrow-right-long"></i></Link>
       </div>
    </section>
  )
}

export default AttorneyContactSection

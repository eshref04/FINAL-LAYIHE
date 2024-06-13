import React from 'react'
import "./FormSection.scss"

const FormSection = () => {
  return (
    <section className='form__section'>
    <div className='form__section__border'>
   
 <div className='form__section__border__heading'>
    <h3>Free Consultation</h3>
    <p>Law is complicate matter. It can cause you a big problem
    if you ignore it. Let us help you!</p>
 </div>

 <form className='form__section__border__form' action="#">
    <div className='form__section__border__form__above'>
    <input type="text" placeholder='Name*' required />
    <input type="tel" placeholder='Phone*' required />
    </div>

    <div className='form__section__border__form__down'>
       <select name="select" id="choose">
        <option value="corporate">Corporate Law</option>
        <option value="criminal">Criminal Law</option>
        <option value="personal">Personal Injury</option>
       </select>
       <input type="email" placeholder='Email*' required /> 
       
    </div>

    <textarea name="message" id="msg" placeholder='Message*' required></textarea>
    <button type='submit'>Submit Now</button>
 </form>

    </div>
       
    </section>
  )
}

export default FormSection

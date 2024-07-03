import React, { useEffect, useRef } from 'react'
import "./FormSection.scss"

import emailjs from '@emailjs/browser';

const FormSection = () => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_ux90l7b', 'template_41ii3jp', form.current, {
          publicKey: '4U6GLVH8_kF52vvgp',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
        e.target.reset()
    };

   
  return (
    <section className='form__section'>
    <div className='form__section__border'>
   
 <div className=' form__section__border__heading'>
    <h3>Free Consultation</h3>
    <p>Law is complicate matter. It can cause you a big problem
    if you ignore it. Let us help you!</p>
 </div>

 <form ref={form} onSubmit={sendEmail}  className='form__section__border__form' action="#">
    <div className='form__section__border__form__above'>
    <input type="text" placeholder='Name*' required  name='user_name' />
    <input type="tel" placeholder='Phone*' required name='user_phone' />
    </div>

    <div className='form__section__border__form__down'>
       <select name="user_tag" id="choose">
        <option value="Corporate">Corporate Law</option>
        <option value="Criminal">Criminal Law</option>
        <option value="Personal">Personal Injury</option>
       </select>
       <input type="email" placeholder='Email*' required name='user_email' /> 
       
    </div>

    <textarea name="message" id="msg" placeholder='Message*' required></textarea>
    <button type='submit'>Submit Now</button>
 </form>

    </div>
       
    </section>
  )
}

export default FormSection

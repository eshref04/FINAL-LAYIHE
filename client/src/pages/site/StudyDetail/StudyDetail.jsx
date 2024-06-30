import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';
import "./StudyDetail.scss"
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../ScrollToTop';

const StudyDetail = () => {
  const {id}=useParams()
    const [caseStudy,setCaseStudy]=useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/studys/${id}`)
        .then((res) => {
          setCaseStudy(res.data.data);
          
  
        })
        
    }, [id]);
  return (
    <div className='study__detail__wrapper container d-flex'>
    <ScrollToTop/>
    <Helmet>
      <title>
        {caseStudy.title}
      </title>
    </Helmet>
    <div className='study__detail__wrapper__left'>
    <div className='study__detail__wrapper__above'>
       <img src={caseStudy.image} alt="" />
       <div className='study__detail__wrapper__above__right'>
         <h3>About This Case</h3>
         <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they liveriver named Duden flows by their place.</span>
         <div className='study__detail__wrapper__above__right__end'>
          <p><span>Criminal Law</span>{caseStudy.tag}</p>
          <p><span>Time Frame</span>{caseStudy.time}</p>
          <p><span>Lawyer</span>{caseStudy.lawyer}</p>
         </div>
       </div>
      </div>

    <div className='study__detail__wrapper__desc'>
   <p>{caseStudy.description}</p>
    </div>

    </div>

    <div className='study__detail__wrapper__right'>
    <div className='study__detail__wrapper__right__bg'>
    <div>
    <h3>Let us help you!</h3>
    <p>If you need any helps, please feel free to contact us. We will get back to you with 1 business day. Or if in hurry, just call us now.</p>
    <span>Call : (1)2345-2345-54</span>
    <ul>
      <li><i class="fa-regular fa-envelope-open"></i>Contact@Attornasite.co</li>
      <li><i class="fa-regular fa-clock"></i>Mon – Fri 09:00-17:00</li>
    </ul>
    </div>
   
    </div>

    <button><i class="fa-regular fa-file-lines"></i>Firm’s Presentation</button>
    </div>
     

      
    </div>
  )
}

export default StudyDetail

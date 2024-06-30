import React, { useEffect, useState } from 'react'
import "./AttorneyDetail.scss"
import { useParams } from 'react-router'
import axios from 'axios'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const AttorneyDetail = () => {
    const {id}=useParams()
    const [person,setPerson]=useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/attorneys/${id}`)
        .then((res) => {
          setPerson(res.data.data);
          
  
        })
        
    }, [id]);
   

  return (
    
    <div className='container attorney__detail__wrapper'>
    <ScrollToTop/>
    <Helmet>
        <title>
       {person.name}
        </title>
    </Helmet>
      <div className='attorney__detail__wrapper__left'>
       <img src={person.image} alt="" />
       <div className='attorney__detail__wrapper__left__person'>
        <h3>{person.name}</h3>
        <span>{person.status}</span>
       </div>

       <div className='attorney__detail__wrapper__left__contact'>
       <p><span>Email</span>{person.email}</p>
       <p><span>Phone</span>{person.phone}</p>
       </div>

       <div className='attorney__detail__wrapper__left__icons'>
       <i class="fa-brands fa-facebook-f"></i>
       <i class="fa-brands fa-linkedin-in"></i>
       <i class="fa-brands fa-pinterest-p"></i>
       <i class="fa-brands fa-twitter"></i>
       <i class="fa-brands fa-instagram"></i>
       </div>
      </div>

      <div className='attorney__detail__wrapper__right'>
      <h2>BIOGRAPHY</h2>
      <p>{person.biography}</p>
      </div>
    </div>
  )
}

export default AttorneyDetail

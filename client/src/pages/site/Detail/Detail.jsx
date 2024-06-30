import React, { useEffect, useState } from 'react'
import "./Detail.scss"
import axios from 'axios'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet-async'
import ScrollToTop from '../../../ScrollToTop'

const Detail = () => {
  const {id}=useParams()
    const [product,setProduct]=useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/products/${id}`)
        .then((res) => {
          setProduct(res.data.data);
          
  
        })
        
    }, [id]);
  return (
    <div className='detail__wrapper container'>
    <ScrollToTop/>
    <Helmet>
    <title>{product.title}</title>
    </Helmet>
      <img src={product.image} alt="" />
      <div className='detail__wrapper__right'>
      <div className='detail__wrapper__right__content'>
      <h1>{product.title}</h1>
       <span>${product.price}</span>
       <p>{product.description}</p>
      </div>
      <div className='detail__wrapper__right__icons'>
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-pinterest-p"></i>
      <i class="fa-brands fa-twitter"></i>
      </div>
      
      </div>
    </div>
  )
}

export default Detail


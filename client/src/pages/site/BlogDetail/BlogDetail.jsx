import React, { useEffect, useState } from 'react'
import "./BlogDetail.scss"
import axios from 'axios'
import { useParams } from 'react-router'
import { Helmet } from 'react-helmet-async';
import Img1 from "../../../assets/blog-img1.jpg";
import Img2 from "../../../assets/blog-img2.jpg";
import Img3 from "../../../assets/blog-img3.jpg";
import ScrollToTop from '../../../ScrollToTop';

const BlogDetail = () => {
  const {id}=useParams()
    const [item,setItem]=useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/api/blogs/${id}`)
        .then((res) => {
          setItem(res.data.data);
          
  
        })
        
    }, [id]);
  return (
    <div className='container blog__detail__wrapper'>
    <ScrollToTop/>
     <Helmet>
        <title>
       {item.title}
        </title>
    </Helmet>
        <div className='blog__detail__wrapper__left'>
       <img src={item.image} alt="" />
       <div className='blog__detail__wrapper__left__content'>
        <h4>I neglect my talents</h4>
        <p>{item.description}</p>
       </div>
        </div>

        
        <div className="blog__detail__wrapper__right">
          <div className="blog__detail__wrapper__right__heading">
            <h3>Recent Articles</h3>
          </div>
          <div className="blog__detail__wrapper__right__cards">
            <div className="blog__detail__wrapper__right__cards__crd">
              <img width={80} height={80} src={Img1} alt="" />
              <div className="blog__detail__wrapper__right__cards__crd__content">
                <h3>Domestic Violence in California – How a Lawyer Can Help</h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>FEBRUARY 28, 2019</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-newspaper"></i>
                    <span>JOHN SMITH</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="blog__detail__wrapper__right__cards__crd">
              <img width={80} height={80} src={Img2} alt="" />
              <div className="blog__detail__wrapper__right__cards__crd__content">
                <h3>Filing a Claim against a Cruise Ship Contractual Limitations</h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>FEBRUARY 28, 2019</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-newspaper"></i>
                    <span>JOHN SMITH</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="blog__detail__wrapper__right__cards__crd">
              <img width={80} height={80} src={Img3} alt="" />
              <div className="blog__detail__wrapper__right__cards__crd__content">
                <h3>Day Care Responsibility to Protect Children</h3>
                <ul>
                  <li>
                    <i className="fa-regular fa-clock"></i>
                    <span>FEBRUARY 28, 2019</span>
                  </li>
                  <li>
                    <i className="fa-regular fa-newspaper"></i>
                    <span>JOHN SMITH</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="blog__detail__wrapper__right__text">
            <h3>Text Widget</h3>
            <p>Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Nulla vitae elit libero, a pharetra augue. Donec sed odio dui. Etiam porta sem malesuada.</p>
          </div>
        </div>
        
    </div>
  )
}

export default BlogDetail


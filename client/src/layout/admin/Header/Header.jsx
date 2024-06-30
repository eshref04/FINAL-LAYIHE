import React, { useEffect } from 'react';
import $ from 'jquery';
import "./Header.scss";

import { Link } from 'react-router-dom';
import EsrefImg from "../../../assets/esref.jpg"

const Header = () => {
  useEffect(() => {
    $(".menu > ul > li").click(function (e) {
      $(this).siblings().removeClass("active");
      $(this).toggleClass("active");
      $(this).find("ul").slideToggle();
      $(this).siblings().find("ul").slideUp();
      $(this).siblings().find("ul").find("li").removeClass("active");
    });

    $(".menu-btn").click(function () {
      $(".sidebar").toggleClass("active");
    });
  }, []);

  return (
    <div className="sidebar-container">
      <div className="sidebar">
        <div className="menu-btn">
          <i className="ph-bold ph-caret-left"></i>
        </div>
        <div className="head">
          <div className="user-img">
            <img src={EsrefImg} alt="" />
          </div>
          <div className="user-details">
            <p className="title">web developer</p>
            <p className="name">Ashraf Shafi</p>
          </div>
        </div>
        <div className="nav">
          <div className="menu">
            <p className="title">Main</p>
            <ul style={{paddingLeft:"0px"}}>
             
              <li>
                <Link to="">
                  <i className="icon ph-bold ph-user"></i>
                  <span className="text">Attorney</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                 
                  <li>
                    <Link to="/admin/addattorney">
                      <span className="text">Add Attorney</span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/admin/blog">
                <i className="icon ph-bold ph-file-text"></i>
                  <span className="text">Blog</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                  
                  <li>
                    <Link to="/admin/addblog">
                      <span className="text">Add Blog</span>
                    </Link>
                  </li>
                </ul>
              </li>
             
             
              <li>
                <Link to="/admin/study">
                <i class="fa-solid fa-graduation-cap"></i>
                  <span className="text">Case Study</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                 
                  <li>
                    <Link to="/admin/addstudy">
                      <span className="text">Add Study</span>
                    </Link>
                  </li>
                 
               
                </ul>
              </li>

              <li>
                <Link to="/admin/book">
                <i style={{marginLeft:"1px"}} class="fa-solid fa-book"></i>
                  <span style={{marginLeft:"5px"}} className="text">Book</span>
                  <i className="arrow ph-bold ph-caret-down"></i>
                </Link>
                <ul className="sub-menu">
                 
                  <li>
                    <Link to="/admin/addbook">
                      <span className="text">Add Book</span>
                    </Link>
                  </li>
                 
               
                </ul>
              </li>
            </ul>
          </div>
          <div className="menu">
            <p className="title">Settings</p>
            <ul style={{paddingLeft:"0px"}}>
              <li>
                <Link to="">
                  <i className="icon ph-bold ph-gear"></i>
                  <span className="text">Settings</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="menu">
          <p className="title">Account</p>
          <ul style={{paddingLeft:"0px"}}>
            <li>
              <Link to="">
                <i className="icon ph-bold ph-info"></i>
                <span className="text">Help</span>
              </Link>
            </li>
            <li>
              <Link to="">
                <i className="icon ph-bold ph-sign-out"></i>
                <span className="text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      
    </div>
  );
}

export default Header;

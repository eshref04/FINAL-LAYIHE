import React, { useEffect } from "react";
import "./ContactSection.scss";
import Img1 from "../../../../../assets/contact-img1.jpg";
import Img2 from "../../../../../assets/contact-img2.jpg";
import Img3 from "../../../../../assets/contact-img3.jpg";
import { Link } from "react-router-dom";


const ContactSection = () => {
  
  
  return (
    <section className="contact__section">
      <div  className="contact__section__left">
        <div className="contact__section__left__heading">
          <h3>Contact Info</h3>
          <p>Call Now : (1)2345-2345-54</p>
        </div>

        <ul className="contact__section__left__list">
          <li>
            <i class="fa-regular fa-envelope"></i>
            <span>Contact@Attornasite.co</span>
          </li>
          <li>
            <i class="fa-regular fa-clock"></i>
            <span>Mon - Fri 09:00-17:00</span>
          </li>
          <li>
            <i class="fa-solid fa-location-arrow"></i>
            <span>12th Wall Street NY CV564 Unites States</span>
          </li>
        </ul>

        <p className="contact__section__left__content">
          {" "}
          Far far away, behind the word mountains, far from thte countries
          Vokalia{" "}
        </p>
        <form action="#">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Address"
          />
          <button type="submit">Subscribe</button>
        </form>
        {/* <div></div> */}
      </div>

      <div  className="contact__section__right">
        <div className="contact__section__right__heading">
          <h3>Recent Articles</h3>
        </div>
        <div className="contact__section__right__cards">
          <div className="contact__section__right__cards__crd">
            <img width={93} height={93} src={Img1} alt="" />
            <div className="contact__section__right__cards__crd__content">
              <h3>Domestic Violence in California – How a Lawyer Can Help</h3>
              <ul>
                <li>
                  <i class="fa-regular fa-clock"></i>
                  <span>FEBRUARY 28, 2019</span>
                </li>
                <li>
                  <i class="fa-regular fa-newspaper"></i>
                  <span>JOHN SMITH</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__section__right__cards__crd">
            <img width={93} height={93} src={Img2} alt="" />
            <div className="contact__section__right__cards__crd__content">
              <h3>
                Filing a Claim against a Cruise Ship Contractual Limitations
              </h3>
              <ul>
                <li>
                  <i class="fa-regular fa-clock"></i>
                  <span>FEBRUARY 28, 2019</span>
                </li>
                <li>
                  <i class="fa-regular fa-newspaper"></i>
                  <span>JOHN SMITH</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="contact__section__right__cards__crd">
            <img width={93} height={93} src={Img3} alt="" />
            <div className="contact__section__right__cards__crd__content">
              <h3>Day Care Responsibility to Protect Children</h3>
              <ul>
                <li>
                  <i class="fa-regular fa-clock"></i>
                  <span>FEBRUARY 28, 2019</span>
                </li>
                <li>
                  <i class="fa-regular fa-newspaper"></i>
                  <span>JOHN SMITH</span>
                </li>
              </ul>
            </div>
          </div>
          <Link to={"/blog"}>
            <span> Read More News</span>
            <i class="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

import React, { useEffect } from "react";
import "./HeroSection.scss";
import { Link } from "react-router-dom";
import FirstSlide from "../../../assets/first-slide.jpg";
import SecondSlide from "../../../assets/second-slide.jpg";
import SignatureImg from "../../../assets/signature-img.png"


const HeroSection = () => {
  useEffect(() => {
    const carouselItems = document.querySelectorAll(".carousel-item");
    carouselItems.forEach((item) => {
      item.addEventListener("slide.bs.carousel", () => {
        const textElements = item.querySelectorAll("h1, p, a");
        textElements.forEach((el) => {
          el.style.opacity = 0;
          void el.offsetWidth; 
          el.style.animation = el.style.animation; 
        });
      });
    });

    return () => {
      carouselItems.forEach((item) => {
        item.removeEventListener("slide.bs.carousel", () => {});
      });
    };
  }, []);

  return (
    <section className="hero__section">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img height={"750px"} className="d-block w-100" src={FirstSlide} />
            <div className="carousel-item__text container carousel-item__first">
              <h1>Professional Law Firm</h1>
              <p>
                We are a leading law firm in financial & business industry.With
                more than 20 years of experience
              </p>
              <Link to="/contact">
                CONTACT NOW <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img height={"750px"} className="d-block w-100" src={SecondSlide} />
            <div className="carousel-item__text container carousel-item__second">
              <h1>Attorna Law Firm</h1>
              <p>
                We are a leading law firm in financial & business industry.With
                more than 20 years of experience
              </p>
              <Link to="/contact">
                CONTACT NOW <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
       <div className="container hero__section__bg__image">
        <h3>Story About Attorna</h3>
        <p>We can provide corporate governance, helping clients manage the responsibilities of running a corporation in financial field.</p>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows.</p>
        <img width={"254px"} height={"47px"} src={SignatureImg} alt="" />
        <span >CEO, ATTORNA LAW FIRM</span>
       </div>
      
    </section>
  );
};

export default HeroSection;

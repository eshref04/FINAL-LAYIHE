import React, { useEffect } from "react";
import "./AboutSubsSection.scss";


const AboutSubsSection = () => {

 
  return (
    <section className="about__subs__section">
      <div
        className="about__subs__section__border "
        style={{
          padding: "160px 0px 110px 0px",
        }}
      >
        <div className="about__subs__section__border__wrapper container">
          <div className="about__subs__section__border__wrapper__heading">
            <span
              style={{
                color: "#ffffff",
                fontSize: "18px",
                fontStyle: "normal",
                fontWeight: "700",
                letterSpacing: "4px",
                textTransform: "uppercase",
              }}
            >
              Are you looking for someone to help?
            </span>

            <h3
              style={{
                color: "#b1976b",
                fontSize: "26px",
                fontWeight: "400",
                letterSpacing: "0px",
                textTransform: "none",
              }}
            >
              Let us help you! Call Now : (1)2345-2345-54
            </h3>
          </div>

          <div
            className="about__subs__section__border__wrapper__contact"
            style={{
              color: "#ffffff",
              textTransform: "none",
            }}
          >
            <div
              className="about__subs__section__border__wrapper__contact__left"
              style={{
                display: "inline",
                marginLeft: "12px",
                marginRight: "0px",
              }}
            >
              <i
                className="fa-regular fa-envelope-open"
                style={{
                  color: "#b1976b",
                  fontSize: "14px",
                  marginRight: "10px",
                }}
              />
              Contact@Attornasite.co
            </div>

            <div
              className="about__subs__section__border__wrapper__contact__right"
              style={{
                marginLeft: "35px",
                marginRight: "13px",
              }}
            >
                
              <i
                className="fa-regular fa-clock"
                style={{
                  color: "#b1976b",
                  fontSize: "15px",
                  marginRight: "10px",
                }}
              />
              Mon – Fri 09:00-17:00
            </div>
          </div>

          <div className="about__subs__section__border__wrapper__end">
            <h3
              style={{
                color: "#ffffff",
                fontSize: "28px",
                fontWeight: "700",
                textTransform: "none",
              }}
            >
              Subscribe To Newsletter
            </h3>

            <form
              action="#"
              className="about__subs__section__border__wrapper__end__form"
            >
              <input
                name="email"
                placeholder="Your Email Address"
                required
                size="30"
                type="email"
              />

              <button>Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSubsSection;

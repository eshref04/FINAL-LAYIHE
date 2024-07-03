import React from "react";
import "./Footer.scss";
import FooterLogo from "../../../assets/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer__start">
        <div className="container">
          <div className="footer__start__left">
            <img width="210px" height="37px" src={FooterLogo} alt="" />
            <p>
              One morning, when Gregor Samsa woke from troubled dreams, he found
              himself transformed in his bed into.
            </p>
            <ul className="footer__start__left__icons">
              <li>
                <Link>
                  <i class="fa-brands fa-facebook-f"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-linkedin-in"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-pinterest-p"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-twitter"></i>
                </Link>
              </li>
              <li>
                <Link>
                  <i class="fa-brands fa-instagram"></i>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__start__contact">
            <h3>Contact Info</h3>
            <p>
              Box 3233 <br />
              1810 Kings Way <br />
              King Street, 5th Avenue, New York
            </p>
            <p className="footer__start__contact__down">
              <span className="footer__start__contact__down__tel">
                +1-2355-3345-5
              </span>
              <br />
              <span className="footer__start__contact__down__mail">
                Contact@Attornasite.co
              </span>
            </p>
          </div>

          <div className="footer__start__practice">
            <h3>Practice Areas</h3>
            <ul>
              <div className="footer__start__practice__first">
                <li>
                  <Link>Family Violence</Link>
                </li>
                <li>
                  <Link>Car Accident Insurance</Link>
                </li>
                <li>
                  <Link>Public Company Fraud</Link>
                </li>
                <li>
                  <Link>Privacy Matter</Link>
                </li>
                <li>
                  <Link>Failure of Apple Acquisition</Link>
                </li>
              </div>

              <div className="footer__start__practice__last">
                <li>
                  <Link>Giving Million Air Its Wings</Link>
                </li>
                <li>
                  <Link>Making Sure It’s Closed</Link>
                </li>
                <li>
                  <Link>Nighmare on Wall Street</Link>
                </li>
                <li>
                  <Link>MaTix Tax Invation</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </footer>

      <footer className="footer__end">
        <div className="container">
          <div className="footer__end__left">
            Copyright 2019 Attorna, All Right Reserved
          </div>

          <div className="footer__end__menu">
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Cases</Link>
              </li>
              <li>
                <Link>About</Link>
              </li>
              <li>
                <Link>Legal</Link>
              </li>
              <li>
                <Link>Privacy & Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

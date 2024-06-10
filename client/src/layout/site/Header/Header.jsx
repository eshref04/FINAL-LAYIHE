import React from "react";
import "./Header.scss";
import HeaderLogo from "../../../assets/header-logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header className="header__start">
        <div className="container">
          <div className="header__start__logo">
            <img width="120px" height="58px" src={HeaderLogo} alt="" />
          </div>

          <div className="header__start__right">
            <div className="header__start__right__div">
              <i class="fa-solid fa-phone"></i>
              <div className="header__start__right__div__text">
                <div className="header__start__right__div__text__title">
                  Phone
                </div>
                <div className="header__start__right__div__text__sub">
                  +1-2344-2345-23
                </div>
              </div>
            </div>

            <div className="header__start__right__div">
              <i class="fa-solid fa-envelope"></i>
              <div className="header__start__right__div__text">
                <div className="header__start__right__div__text__title">
                  Contact Email
                </div>
                <div className="header__start__right__div__text__sub">
                  contact@attfirm.co
                </div>
              </div>
            </div>

            <div className="header__start__right__div">
              <i class="fa-regular fa-clock"></i>
              <div className="header__start__right__div__text">
                <div className="header__start__right__div__text__title">
                  Working Hours
                </div>
                <div className="header__start__right__div__text__sub">
                  Mon - Fri : 09:00-17:00
                </div>
              </div>
            </div>

            <Link className="header__start__right__btn">
              <i class="fa-regular fa-comment"></i>
              <p>Free consultant</p>
            </Link>
          </div>
        </div>
      </header>

      <header className="header__end">
        <div className="container">
          <nav className="header__end__menu">
            <ul>
              <li className="home">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="header__end__menu__pages">
                <Link>
                  Pages <i class="fa-solid fa-angle-down"></i>
                </Link>
                <div className="header__end__menu__pages__dropdown header__end__menu__dropdown">
                  <Link to={"/about"}>About Us</Link>
                  <Link to={"/contact"}>Contact</Link>
                </div>
              </li>
              <li>
                <Link to={"/attorney"}>Attorney</Link>
              </li>
              <li>
                <Link to={"/casestudy"}>Case Study</Link>
              </li>
              <li>
                <Link to={"/blog"}>Blog</Link>
              </li>
              <li className="header__end__menu__shop">
                <Link to={"/shop"}>
                  Shop <i class="fa-solid fa-angle-down"></i>
                </Link>
                <div className="header__end__menu__shop__dropdown header__end__menu__dropdown">
                  <Link to={"/about"}>Shop</Link>
                  <Link to={"/contact"}>Cart</Link>
                </div>
              </li>
            </ul>
          </nav>

          <div className="header__end__right">
            <i class="fa-solid fa-magnifying-glass search__icon"></i>
            <i class="fa-solid fa-cart-shopping shop__icon"></i>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

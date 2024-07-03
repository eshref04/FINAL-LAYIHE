import React, { useContext, useEffect, useState } from 'react';
import './Header.scss';
import HeaderLogo from '../../../assets/header-logo.png';
import { Link } from 'react-router-dom';
import MainContext from '../../../context/Context';
import controller from '../../../services/api/requests';
import { endpoints } from '../../../services/api/constants';

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Header = () => {
  const { user, logout, cart } = useContext(MainContext);
  const [userInfo, setUserInfo] = useState({});

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function getUser() {
      const response = await controller.getOne(endpoints.users, user.id);
      setUserInfo(response.data);
    }
    getUser();
  }, [user]);

  return (
    <>
      <header className="header__start">
        <div className="container">
          <div className="header__start__logo">
            <img width="120px" height="58px" src={HeaderLogo} alt="" />
          </div>
          <div className="header__start__right">
            <div className="header__start__right__div">
              <i className="fa-solid fa-phone"></i>
              <div className="header__start__right__div__text">
                <div className="header__start__right__div__text__title">Phone</div>
                <div className="header__start__right__div__text__sub">+1-2344-2345-23</div>
              </div>
            </div>
            <div className="header__start__right__div">
              <i className="fa-solid fa-envelope"></i>
              <div className="header__start__right__div__text">
                <div className="header__start__right__div__text__title">Contact Email</div>
                <div className="header__start__right__div__text__sub">contact@attfirm.co</div>
              </div>
            </div>
            <div className="header__start__right__div">
              <i className="fa-regular fa-clock"></i>
              <div className="header__start__right__div__text">
                <div className="header__start__right__div__text__title">Working Hours</div>
                <div className="header__start__right__div__text__sub">Mon - Fri : 09:00-17:00</div>
              </div>
            </div>
            <Link className="header__start__right__btn" to="/contact">
              <i className="fa-regular fa-comment"></i>
              <p>Free consultant</p>
            </Link>
          </div>
        </div>
      </header>
      <header className="header__end">
        <div className="container">
        
        <Button style={{backgroundColor:"white",border:"none"}} className='mb-3 d-flex align-items-center gap-2 ' variant="primary" onClick={handleShow}>
      <i style={{color:"#B6A188",fontSize:"22px",fontWeight:"600"}} class="fa-solid fa-bars"></i> 
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton style={{fontFamily:"Poppins"}}>
          <Offcanvas.Title style={{fontSize:"30px"}}>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body style={{fontFamily:"Poppins"}}>
          <ul className='canvas__menu'>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/about"}>About</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/attorney"}>Attorney</Link></li>
            <li><Link to={"/casestudy"}>Case Study</Link></li>
            <li><Link to={"/blog"}>Blog</Link></li>
            <li><Link to={"/shop"}>Shop</Link></li>
            <li><Link to={"/cart"}>Cart</Link></li>
            <li><Link to={"/wishlist"}>Wishlist</Link></li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
          <nav className="header__end__menu">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="header__end__menu__pages">
                <Link to="#">
                  Pages <i className="fa-solid fa-angle-down"></i>
                </Link>
                <div className="header__end__menu__pages__dropdown header__end__menu__dropdown">
                  <Link to="/about">About Us</Link>
                  <Link to="/contact">Contact</Link>
                </div>
              </li>
              <li>
                <Link to="/attorney">Attorney</Link>
              </li>
              <li>
                <Link to="/casestudy">Case Study</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li className="header__end__menu__shop">
                <Link to="/shop">Shop</Link>
              </li>
              <li className="header__end__menu__shop">
                <Link to="/cart">Cart</Link>
              </li>
              <li className="header__end__menu__shop">
                <Link to="/wishlist">Wishlist</Link>
              </li>
            </ul>
          </nav>
          <div className="header__end__right">
            {
              user.id != null ? (
                <div className='user__id d-flex align-items-center mx-5'>
                  <img
                    width={"25px"}
                    style={{
                      objectFit: "cover",
                      borderRadius: "50%",
                      marginRight: "10px",
                      objectPosition: "center",
                    }}
                    height={"25px"}
                    src={userInfo && userInfo.src}
                    alt=""
                  />
                  {userInfo && userInfo.username}
                </div>
              ) : ""
            }
            
            {
              user.id ? (
                <Link   onClick={logout} to="/login" className="bton" >
                  Log Out
                </Link>
              ) : (
                <Link  to="/login" className="bton">
                  My Account
                </Link>
              )
            }
            <Link to="/cart" className="shop__icon">
              <i className="fa-solid fa-cart-shopping"></i>
              <span className="shop__icon__span">{Object.keys(cart).length}</span>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;








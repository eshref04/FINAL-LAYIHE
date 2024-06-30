import React, { useContext, useState, useEffect } from 'react';
import './ShopCards.scss';
import MainContext from '../../../../../context/Context';
import { Link, useNavigate } from 'react-router-dom';

const ShopCards = ({ product }) => {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(MainContext);
  const [inCart, setInCart] = useState(cart[product._id] ? true : false);
  const [buttonText, setButtonText] = useState(inCart ? "View Cart" : "Add to Cart");
  const [inWishlist, setInWishlist] = useState(false); // Added state for wishlist

  useEffect(() => {
    const wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];
    setInWishlist(wishlistItems.some(item => item._id === product._id));
  }, []);

  const handleAddToCart = () => {
    if (!inCart) {
      setCart((prevCart) => ({
        ...prevCart,
        [product._id]: 1,
      }));
      setInCart(true);
      setButtonText("View Cart");
    } else {
      navigate('/cart');
    }
  };

  const handleToggleWishlist = () => {
    let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

    if (!inWishlist) {
      wishlistItems.push(product);
    } else {
      wishlistItems = wishlistItems.filter(item => item._id !== product._id);
    }

    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
    setInWishlist(!inWishlist);
  };

  return (
    <div className="shop__section__wrapper__card" key={product._id}>
      <div className="shop__section__wrapper__card__img">
        <img src={product.image} alt={product.title} />
        <div className="overlay">
          <i className={`fa ${inCart ? 'fa-eye' : 'fa-shopping-cart'}`}></i>
          <span onClick={handleAddToCart}>
            {buttonText}
          </span>
          <i className={`fa ${inWishlist ? 'fa-solid fa-heart' : 'fa-regular fa-heart'}`} onClick={handleToggleWishlist}></i>
        </div>
      </div>
      <div className="shop__section__wrapper__card__body">
        <Link to={`/detail/${product._id}`}>{product.title}</Link>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default ShopCards;


import React, { useState, useEffect, useContext } from 'react';
import './Wishlist.scss';
import { Helmet } from 'react-helmet-async';
import MainContext from '../../../context/Context';
import ScrollToTop from '../../../ScrollToTop';

const Wishlist = () => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const { data } = useContext(MainContext);

  useEffect(() => {
    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlistItems(JSON.parse(storedWishlist));
    }
  }, []);

  const removeFromWishlist = (id) => {
    const updatedWishlist = wishlistItems.filter(item => item._id !== id);
    setWishlistItems(updatedWishlist);
    localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  };

  return (
    <>
    <ScrollToTop/>
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <section className="wishlist__hero__section">
        <div className="wishlist__hero__section__overlay"></div>
        <div className="wishlist__hero__section__heading container">
          <h1 style={{ textAlign: 'center' }}>Wishlist</h1>
        </div>
      </section>
      <div className="wishlist container">
        <h2>My Wishlist</h2>
        {wishlistItems.length === 0 ? (
          <p style={{fontSize:"22px"}}>Your wishlist is empty.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems && wishlistItems.map((item) => (
                <tr key={item._id}>
                  <td><img src={item.image} alt={item.title} /></td>
                  <td>{item.title}</td>
                  <td>${item.price}</td>
                  <td>
                    <button onClick={() => removeFromWishlist(item._id)}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default Wishlist;

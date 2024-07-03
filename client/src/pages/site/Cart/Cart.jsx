import React, { useContext } from 'react';
import './Cart.scss';
import MainContext from '../../../context/Context';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../../../ScrollToTop';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, setCart, data } = useContext(MainContext);

  if (!cart || Object.keys(cart).length === 0) {
    return (
      <div style={{padding:"70px 0px"}} className="container">
        <p style={{fontSize:"30px"}}>Your cart is empty.</p>
      </div>
    );
  }

  const handleIncrement = (id) => {
    setCart((prevCart) => ({
      ...prevCart,
      [id]: prevCart[id] + 1,
    }));
  };

  const handleDecrement = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] === 1) {
        delete updatedCart[id];
      } else {
        updatedCart[id] -= 1;
      }
      return updatedCart;
    });
  };

  const handleRemove = (id) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      delete updatedCart[id];
      return updatedCart;
    });
  };

  const totalPrice = Object.keys(cart).reduce((acc, curr) => {
    const product = data.find((item) => item._id === curr);
    return acc + (product ? product.price * cart[curr] : 0);
  }, 0);

  return (
    <>
      <ScrollToTop/>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <section className="cart__hero__section">
        <div className="cart__hero__section__overlay"></div>
        <div className="cart__hero__section__heading container">
          <h1 style={{ textAlign: 'center' }}>CART</h1>
        </div>
      </section>
      <section className="cart__section">
        <div className="cart__section__wrapper container">
          <table className="cart__section__wrapper__table table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Image</th>
                <th scope="col">Product</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(cart).map((id) => {
                const product = data.find((item) => item._id === id);
                if (!product) {
                  return null;
                }
                return (
                  <tr key={id}>
                    <td scope="row">
                      <i
                        style={{ cursor: 'pointer' }}
                        className="fa-solid fa-trash"
                        onClick={() => handleRemove(id)}
                      ></i>
                    </td>
                    <td>
                      <img src={product.image} alt={product.title} width="50px" />
                    </td>
                    <td>{product.title}</td>
                    <td>${product.price}</td>
                    <td>
                      <div className="quantity-control d-flex gap-3">
                        <button onClick={() => handleDecrement(id)}>-</button>
                        <span>{cart[id]}</span>
                        <button onClick={() => handleIncrement(id)}>+</button>
                      </div>
                    </td>
                    <td>${product.price * cart[id]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="cart__section__wrapper__end">
            <h2>Card totals</h2>
            <div className="d-flex align-items-center cart__section__wrapper__end__total">
              <h3>Total:</h3>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className="cart__section__wrapper__end__btn">
              <Link to={"/checkout"}>Proceed to checkout</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;

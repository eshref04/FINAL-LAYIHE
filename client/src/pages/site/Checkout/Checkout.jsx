import React, { useContext, useState } from 'react';
import './Checkout.scss';
import MainContext from '../../../context/Context';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import ScrollToTop from '../../../ScrollToTop';

const stripePromise = loadStripe('YOUR_PUBLIC_STRIPE_API_KEY');

const CheckoutForm = () => {
  const { cart, data } = useContext(MainContext);
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const totalPrice = Object.keys(cart).reduce((acc, curr) => {
    const product = data.find((item) => item._id === curr);
    return acc + (product ? product.price * cart[curr] : 0);
  }, 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsProcessing(true);

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: form.name,
        email: form.email,
        address: {
          line1: form.address,
          city: form.city,
          postal_code: form.postalCode,
          country: form.country,
        },
      },
    });

    if (error) {
      console.error(error);
      setIsProcessing(false);
      return;
    }

    
    const response = await fetch('', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: totalPrice * 100, 
        paymentMethodId: paymentMethod.id,
      }),
    });

    if (response.ok) {
      navigate('/');
    } else {
      console.error('Ödənişdə problem oldu');
      setIsProcessing(false);
    }

   
    console.log('Ödəniş uğurlu oldu:', paymentMethod);
    navigate('/');
    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout__form">
      <h2 style={{color:"#B1976B"}} className='mb-5'>Billing Details</h2>
      <div className="checkout__form__group">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="checkout__form__group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="checkout__form__group">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="checkout__form__group">
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={form.city}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="checkout__form__group">
        <label htmlFor="postalCode">Postal Code</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={form.postalCode}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="checkout__form__group">
        <label htmlFor="country">Country</label>
        <input
          type="text"
          id="country"
          name="country"
          value={form.country}
          onChange={handleInputChange}
          required
        />
      </div>
      <h2 style={{color:"#B1976B"}} className='mt-5'>Payment Details</h2>
      <div className="checkout__form__group pb-5">
        <CardElement />
      </div>
      <h2 style={{color:"#B1976B"}}>Order Summary</h2>
      <div className="checkout__order__summary">
        {Object.keys(cart).map((id) => {
          const product = data.find((item) => item._id === id);
          return product ? (
            <div key={id} className="checkout__order__item">
              <span>{product.title} x {cart[id]}</span>
              <span>${(product.price * cart[id]).toFixed(2)}</span>
            </div>
          ) : null;
        })}
        <div className="checkout__order__total">
          <span>Total:</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
      </div>
      <button type="submit" className="checkout__btn" disabled={isProcessing}>
        {isProcessing ? 'Processing...' : 'Place Order'}
      </button>
    </form>
  );
};

const Checkout = () => {
  return (
    <>
      <ScrollToTop/>
      <Helmet>
        <title>Cart</title>
      </Helmet>
      <section className="checkout__hero__section">
        <div className="checkout__hero__section__overlay"></div>
        <div className="checkout__hero__section__heading container">
          <h1 style={{ textAlign: 'center' }}>CHECKOUT</h1>
        </div>
      </section>
      <div className="container checkout__wrapper">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </>
  );
};

export default Checkout;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './BookingSummary.css';
import { assets } from '../../assets/assets';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51PhE6zFl2PQpTpjKYiLqbbVbxDnBFlaHEg9BKsRFY8OiEWK72HrF8KMyY8ATNbtVtcVMzRc5NKlvNvQeWSHq3wiC00wk4TZ7Uq'); // Publishable key for frontend

const BookingSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { product, days, name, phone, checkInDate } = state || {};

  if (!state) {
    return <h2>No booking details found</h2>;
  }

  const price = product.price * days;
  const totalPrice = price + 10;

  const handleBack = () => {
    const confirmBack = window.confirm(
      'Are you sure you want to go back? You will lose the current booking details.'
    );
    if (confirmBack) {
      navigate('/');
    }
  };

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;

      const response = await fetch('http://localhost:4000/api/user/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount: totalPrice * 100 }), // Amount in cents
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const session = await response.json();

      const result = await stripe.redirectToCheckout({
        sessionId: session.id,
      });

      if (result.error) {
        console.error('Stripe error:', result.error.message);
      }
    } catch (error) {
      console.error('Error during payment:', error);
    }
  };

  return (
    <div className="booking-summary">
      <h2>Booking Summary</h2>
      <div className="book">
        <div className="price">
          <p><strong>Product:</strong> {product.name}</p>
          <p><strong>Price per Night:</strong> ${product.price}</p>
          <p><strong>Days:</strong> {days}</p>
          <p><strong>Convenience Charge:</strong> $10</p>
          <p><strong>Total Price:</strong> ${totalPrice}</p>
        </div>
        <div className="name">
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>Check-in Date:</strong> {checkInDate}</p>
        </div>
      </div>
      <img src={assets.book_img} alt="" className="pic" />
      <div className="btn">
        <button onClick={handlePayment}>Proceed to Payment</button>
        <button onClick={handleBack}>Go Back</button>
      </div>
    </div>
  );
};

export default BookingSummary;

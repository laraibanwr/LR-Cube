import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const { product_list } = useContext(StoreContext);
  const product = product_list.find(p => p._id === id);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [days, setDays] = useState('');
  const [checkInDate, setCheckInDate] = useState('');

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      if (name || phone || days || checkInDate) {
        e.preventDefault();
        e.returnValue = ''; // For older browsers
        return '';
      }
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [name, phone, days, checkInDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/booking-summary', { 
      state: { product, days, name, phone, checkInDate } 
    });
  };

  const handleLeave = () => {
    const confirmLeave = window.confirm(
      'You have unsaved changes. Are you sure you want to leave?'
    );
    if (confirmLeave) {
      navigate('/'); // Or any other route you'd like
    }
  };

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
<div className="product-details">
  <img src={product.image} alt={product.name} />
  <div className="name-rating">
    <div className="name-price">
      <h1>{product.name}</h1>
      <p className='price'>Price: ${product.price}<span className="price-unit">/Night</span></p>
    </div>
    <div className='num-rating'>
      <p><span>4/5</span>(777 Ratings)</p>
    </div>
  </div>
  <div className="date">
    <p className='desc'>{product.description}</p>
    <form onSubmit={handleSubmit}>
      <p className='title'>Enter your details</p>
      <input 
        type="text" 
        placeholder='Enter your Name' 
        required 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input 
        type="number" 
        placeholder='Enter your Phone No.' 
        required 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input 
        type="number" 
        placeholder='Enter Days to Stay' 
        required 
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />
      <input 
        type="text" 
        placeholder='Check-in Date: DD/MM/YY' 
        required 
        value={checkInDate}
        onChange={(e) => setCheckInDate(e.target.value)}
      />
      <div className="btn">
        <button onClick={handleLeave}>Go to Home</button>
        <button type="submit">Book your Stay</button>
      </div>
    </form>
  </div>
  <div className="about">
    <h3>More Details:</h3>
    <br />
    <p><strong>Comfortable Accommodations:</strong> Well-furnished rooms with quality linens and modern amenities for relaxation.</p>
    <p><strong>Prime Location: </strong>Easily accessible to attractions, dining, and scenic views.</p>
    <p><strong>Exceptional Service: </strong>Professional staff ensuring a pleasant and personalized experience.</p>
    <p><strong>On-site Facilities: </strong>Includes facilities like a restaurant, gym, pool, or spa.</p>
    <p><strong>Customizable Experience: </strong>Tailor your stay with various room choices, packages, and services.</p>
  </div>
</div>

  );
};

export default ProductDetails;
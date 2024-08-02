import React, { useState, useEffect } from 'react';
import './Checkout.css';
import Navbar from './Nav/Navbar';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const [shipping, setShipping] = useState('standard');
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    card: '',
    mmyy: '',
    cvc: '',
    zip2: '',
  });

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);

    const cartTotal = savedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(cartTotal);
  }, []);

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const registerUser = async (newUser) => {
    const response = await fetch('http://localhost:3001/card', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    return response.json();
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = {
        ...formData,
      };
      const response = await registerUser(userData);
      console.log(userData);
      console.log('Info saved:', response);
      alert('Information successfully saved!');
      navigate('/');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed. Please try again.');
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <form className="checkout-container" onSubmit={handleSubmit}>
        <div className="address-section">
          <h3>Address</h3>
          <div className="input-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            type="text"
            name="street"
            placeholder="Street Name"
            className="full-width"
            value={formData.street}
            onChange={handleInputChange}
          />
          <div className="input-group">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="zip"
              placeholder="Zipcode"
              value={formData.zip}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="shipping-section">
          <h3>Shipping</h3>
          <div className="radio-group">
            <label>
              <input
                type="radio"
                value="standard"
                checked={shipping === 'standard'}
                onChange={handleShippingChange}
              />
              Standard Ground (4-7 Business Days) $10.05
            </label>
            <label>
              <input
                type="radio"
                value="expedited"
                checked={shipping === 'expedited'}
                onChange={handleShippingChange}
              />
              Secured Expedited Shipping (2 Business Days) $13.75
            </label>
          </div>
        </div>

        <div className="card-section">
          <h3>Card</h3>
          <input
            type="text"
            name="card"
            placeholder="Card number"
            value={formData.card}
            onChange={handleInputChange}
          />
          <div className="input-group">
            <input
              type="text"
              name="mmyy"
              placeholder="MM/YY"
              value={formData.mmyy}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="cvc"
              placeholder="CVC"
              value={formData.cvc}
              onChange={handleInputChange}
            />
          </div>
          <div className="input-group">
            <input
              type="text"
              name="country"
              placeholder="Country"
              value="United States"
              readOnly
            />
            <input
              type="text"
              name="zip2"
              placeholder="Zipcode"
              value={formData.zip2}
              onChange={handleInputChange}
            />
          </div>
        </div>

        <div className="summary-section">
          <h3>Product Summary</h3>
          {cart.length === 0 ? (
            <div>Your cart is empty</div>
          ) : (
            cart.map((item, index) => (
              <div key={index} className="product">
                <img src={item.image} alt={item.title} className="product-image" />
                <div className="product-details">
                  <span>{item.title}</span>
                  <span>${item.price.toFixed(2)}</span>
                </div>
              </div>
            ))
          )}
          <div className="total-summary">
            <div className="total-item">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="total-item">
              <span>Shipping</span>
              <span>{shipping === 'standard' ? '$10.05' : '$13.75'}</span>
            </div>
            <div className="total-item">
              <span>Tax</span>
              <span>$4.00</span>
            </div>
            <div className="total-item">
              <span>Total</span>
              <span>${(total + (shipping === 'standard' ? 10.05 : 13.75) + 4).toFixed(2)}</span>
            </div>
          </div>
          <button type="submit" className="checkout-button">Check out</button>
        </div>
      </form>
    </div>
  );
}

export default Checkout;

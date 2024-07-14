import React, { useState } from 'react';
import './Checkout.css';
import Navbar from './Nav/Navbar';

const Checkout = () => {
  const [shipping, setShipping] = useState('standard');

  const handleShippingChange = (event) => {
    setShipping(event.target.value);
  };

  return (
    <div>
        <div> 
            <Navbar/>
        </div>
        <div className="checkout-container">
      <div className="address-section">
        <h3>Address</h3>
        <div className="input-group">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <input type="text" placeholder="Street Name" className="full-width" />
        <div className="input-group">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Zipcode" />
          <input type="text" placeholder="Country" />
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
        <input type="text" placeholder="Card number" />
        <div className="input-group">
          <input type="text" placeholder="MM/YY" />
          <input type="text" placeholder="CVC" />
        </div>
        <div className="input-group">
          <input type="text" placeholder="Country" value="United States" readOnly />
          <input type="text" placeholder="Zipcode" />
        </div>
      </div>

      <div className="summary-section">
        <h3>Product</h3>
        <div className="product">
          {/* <div className="product-details">
            <span>Stickers</span>
            <span>$12.00</span>
          </div>
          <div className="quantity">
            <span>Quantity</span>
            <input type="number" value="1" readOnly />
            <button>Remove</button>
          </div>
          <div className="total">
            <div className="total-item">
              <span>Stickers</span>
              <span>$12.00</span>
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
              <span>${shipping === 'standard' ? '26.05' : '29.75'}</span>
            </div>
          </div> */}
          <button className="checkout-button">Check out</button>
        </div>
      </div>
    </div>
    </div>
    
  );
}

export default Checkout;

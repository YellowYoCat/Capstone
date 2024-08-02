

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(savedCart);

    const cartTotal = savedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(cartTotal);
  }, []);

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.dataId !== itemToRemove.dataId);
    setCart(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const cartTotal = updatedCart.reduce((acc, item) => acc + item.price, 0);
    setTotal(cartTotal);
  };

  return (
    <div>
      <Navbar />
      <h1 className='header'>CART</h1>
      {cart.length === 0 ? (
        <div>Cart is empty</div>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="cart-item-content">
              <p>{item.title}</p>
              <p><strong>${item.price}</strong></p>
              <button className="remove-btn" onClick={() => removeFromCart(item)}>Remove</button>
            </div>
          </div>
        ))
      )}
      <div>
        <strong>Total: ${total.toFixed(2)}</strong>
      </div>
      <Link to="/checkout">
        <button className="btn">Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;

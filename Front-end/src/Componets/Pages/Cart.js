import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Nav/Navbar';
import { useCookies } from 'react-cookie';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [cookies] = useCookies(['username']);

  useEffect(() => {
    if (cookies.username) {
      const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
      setCart(savedCart);

     
      const cartTotal = savedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(cartTotal);
    } else {
      setCart([]);
      setTotal(0);
    }
  }, [cookies]);

  const updateQuantity = (itemToUpdate, change) => {
    const updatedCart = cart.map(item => {
      if (item.id === itemToUpdate.id) {
        const newQuantity = item.quantity + change;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
      }
      return item;
    }).filter(item => item.quantity > 0); 

    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const cartTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotal(cartTotal);
  };

  const removeFromCart = (itemToRemove) => {
    const updatedCart = cart.filter(item => item.dataId !== itemToRemove.dataId);
    setCart(updatedCart);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const cartTotal = updatedCart.reduce((acc, item) => acc + item.price * item.quantity, 0);
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
              <div className="quantity-control">
                <button onClick={() => updateQuantity(item, -1)}>-</button>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => updateQuantity(item, 1)}>+</button>
              </div>
              <p><strong>${(item.price * item.quantity).toFixed(2)}</strong></p>
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

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Nav/Navbar';
import './Cart.css';

const Cart = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)


  return (
    <div>
      <div>
        <Navbar />

      </div>
      <div>
      <h1 className='header'>CART</h1>
      {cart.length === 0 ? (<div>Cart is empty</div>) : cart.map((p, index) => (<div>{p.name}</div>))}
      <Link to={"/checkout"}>
      <button className="btn">Checkout</button>
      </Link>
      
    </div>

    </div>
  );
};

export default Cart;

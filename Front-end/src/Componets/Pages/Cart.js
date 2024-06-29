import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Nav/Navbar';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 15 },
    { id: 3, name: 'Item 3', price: 20 }
  ]);

  console.log("does this show up?")

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <div>
        <Navbar />

      </div>
      <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal()}</h3>
      </div>
      
    </div>
  );
};

export default Cart;
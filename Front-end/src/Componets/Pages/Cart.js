import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Nav/Navbar';

const Cart = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState(0)

  
  return (
    <div>
      <div>
        <Navbar />

      </div>
      
    </div>
  );
};

export default Cart;
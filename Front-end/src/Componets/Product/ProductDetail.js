import React from 'react'
import './ProductDetail.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const ProductDetail = ({ product, closeClicked}) => { // addToCartClicked 
  const [cartItems, setCartItems] = useState([]);


  function addToCartClicked(item) {
    setCartItems(prev => [...prev, item]);
  }

  return (
    <div className='container'>
      <div className="product-item">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button onClick={() => (closeClicked())}>Close</button>
        <Link to="/cart">
        <button className="addToCart" onClick={() => addToCartClicked(product.id)}> Add to Cart</button>

        </Link>
        
      </div>

    </div>

  )
}

export default ProductDetail;


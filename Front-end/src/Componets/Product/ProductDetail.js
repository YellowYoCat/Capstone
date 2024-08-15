import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ product, closeClicked }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1); 

  function handleQuantityChange(e) {
    const value = Math.max(1, e.target.value); 
    setQuantity(value);
  }

  function addToCartClicked() {
    setIsLoading(true);
    setError(null);

    try {
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];

     
      const productInCart = existingCart.find(item => item.dataId === product.dataId);

      if (productInCart) {
        
        productInCart.quantity += quantity;
      } else {
        
        existingCart.push({ ...product, quantity });
      }

      localStorage.setItem('cart', JSON.stringify(existingCart));
    } catch (err) {
      setError('Failed to add item to cart');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className='container'>
      <div className="product-item">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <div className="quantity-container">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={quantity}
            onChange={handleQuantityChange}
            min="1"
          />
        </div>
        <button onClick={() => closeClicked()}>Close</button>
        <Link to="/cart">
          <button
            className="addToCart"
            onClick={addToCartClicked}
            disabled={isLoading}
          >
            {isLoading ? 'Adding...' : 'Add to Cart'}
          </button>
        </Link>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default ProductDetail;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.css';

const ProductDetail = ({ product, closeClicked }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  function addToCartClicked() {
    setIsLoading(true);
    setError(null);

    try {
      
      const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    
      const updatedCart = [...existingCart, product];
      
      localStorage.setItem('cart', JSON.stringify(updatedCart));
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


// import React from 'react'
import { useState, useEffect } from "react";
import './ProductList.css';

const ProductList = ({productData, productClicked}) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('http://localhost:3001/products'); //  https://fakestoreapi.com/products
          const data = await response.json();
          setProducts(data);
          setLoading(false);
        } catch (error) {
          console.error('Error fetching products', error);
          setLoading(false);
        }
      };
  
      fetchProducts();
    }, []);
  
    if (loading) {
      return <div>Loading...</div>;
    }

    return (
        <div className='product-list'>
          {products.map((product) => (
            <div key={product.id} className='pBox' onClick={() => productClicked(product)}>
              <img src={product.image} alt={product.title} className='pImg' />
              <h2 className='pTitle'>{product.title}</h2>
              <p className='pPrice'>${product.price}</p>
            </div>
          ))}
        </div>
      );
    };
  
  
  export default ProductList;

import React, { useState, useEffect } from 'react';
import Navbar from './Nav/Navbar';
import './Shop.css';
import ProductDetail from '../Product/ProductDetail';
import ProductList from '../Product/ProductList';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productData, setProductData] = useState(null);

  const productClicked = (products) => {
    setSelectedProduct(products);
  };

  const closeClicked = () => {
    setSelectedProduct(null);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => setProducts(json))
        .catch(error => console.error('Error fetching data:', error));
}, []);


  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='banner'>
        <h1 className='AP'>ALL PRODUCTS</h1>
      </div>
      <div>
        {selectedProduct ? (
          <ProductDetail product={selectedProduct} closeClicked={closeClicked} />
        ) : (
          <ProductList products={products} productClicked={productClicked} />
        )}
      </div>
    </div>
  );
};

export default Shop;

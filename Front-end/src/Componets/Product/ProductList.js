// import React from 'react'
import { useState, useEffect } from "react";
import ProductDetail from "./ProductDetail";

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
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
      <div className="product-list">
        {products.map(product => (
          <ProductDetail key={product.id} product={product} />
        ))}
      </div>
    );
  };
  
  export default ProductList;

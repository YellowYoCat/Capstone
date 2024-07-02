// import React from 'react'
// import Navbar from './Nav/Navbar';
// import { useState, useEffect } from 'react';
// import './Shop.css'
// import ProductDetail from '../Product/ProductDetail';
// import { ProductList } from '../Product/ProductList';

// const Shop = () => {

//   const [products, setProducts] = useState([]);
//   const [selectedProduct, SetSelectedProduct] = useState(null);

//   let productClicked = function (item){
//     SetSelectedProduct(item)
//   }

//   let closeClicked = function () {
//     SetSelectedProduct(undefined)
//   }



// useEffect(() => {
//   fetch('https://fakestoreapi.com/products')
//   .then(r => r.json())
//   .then(data => {
//     setProducts(data)
//   });
  
// }, []);



//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div className='banner'>
//         <h1 className='AP'>ALL PRODUCTS</h1>


//       </div>
//       {
//           selectedProduct ?
//           <ProductDetail products={selectedProduct} closeClicked={closeClicked}/> :
//           <ProductList  productClicked={productClicked}/> 
//         }

//     </div>

//   )
// }

// export default Shop

import React, { useState, useEffect } from 'react';
import Navbar from './Nav/Navbar';
import './Shop.css';
import ProductDetail from '../Product/ProductDetail';
import ProductList from '../Product/ProductList';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

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

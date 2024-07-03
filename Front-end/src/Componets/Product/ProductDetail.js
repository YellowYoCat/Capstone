// import React from 'react'
// import './ProductDetail.css';

// const ProductDetail = ({product,  closeClicked}) => {
//     return (
//         <div className="product-item">
//         <img src={product.image} alt={product.title} />
//         <h2>{product.title}</h2>
//         <p>{product.description}</p>
//         <p><strong>${product.price}</strong></p>
//         <button onClick={() => (closeClicked())}>close</button>
//       </div>
//     )
// }

// export default ProductDetail

import React from 'react'
import './ProductDetail.css';


const ProductDetail = ({ product, closeClicked, addToCartClicked }) => {
  return (
    <div className='container'>
      <div className="product-item">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
        <button onClick={() => (closeClicked())}>Close</button>
        <button className="add-to-cart" onClick={() => (addToCartClicked(product))}>Add to Cart</button>
      </div>

    </div>

  )
}

export default ProductDetail;

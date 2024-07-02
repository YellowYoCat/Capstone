import React from 'react'


const ProductDetail = ({product}) => {
    return (
        <div className="product-item">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p><strong>${product.price}</strong></p>
      </div>
    )
}

export default ProductDetail
import React from 'react'

const ProductDetail = ({products, closeClicked}) => {
  return (
    <div className='detail'>
        <button onClick={() => (closeClicked())}>Close</button>
        <img src={products.image} alt={products.title}/>
        <h2>{products.title}</h2>
        <p>{products.price}</p>
        <p>{products.description}</p>
        <p>{products.category}</p>
    </div>
  )
}

export default ProductDetail
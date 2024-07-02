// import React from 'react'

// export const ProductList = ({productData, productClicked}) => {
//   return (
//     <div className='list'>
//         {productData.map((product) => (
//             <div key={product.image} className='pImg' onClick={() => productClicked(product)}> 
//             <img src={product.image} alt={product.title} />
//             <p>{product.title}</p>
//             <p>{product.price}</p>
//             <p>{product.description}</p>
//             </div>
//         ))}
        
//     </div>
//   )
// }

// export default ProductList


import React from 'react'

export const ProductList = ({productData, productClicked}) => {
  // Guard clause to handle undefined productData
  if (!productData || !Array.isArray(productData) || productData.length === 0) {
    return <div className='list'>No products available</div>;
  }

  return (
    <div className='list'>
        {productData.map((product) => (
            <div key={product.image} className='pImg' onClick={() => productClicked(product)}> 
              <img src={product.image} alt={product.title} />
              <p>{product.title}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
        ))}
    </div>
  )
}

export default ProductList;

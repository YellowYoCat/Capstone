import React from 'react'
import Navbar from './Nav/Navbar';
import Commerce from '@chec/commerce.js'
import { commerce } from '@chec/commerce.js'
import { useState, useEffect } from 'react';
import './Shop.css'

const Shop = () => {
  const commerce = new Commerce('pk_576186827786196c6606cd0287e2ae43938873da51144')
  const [products, setProducts] = useState([])

    useEffect(() => {
        commerce.products.list()
          .then(res => {
            setProducts(res.data)
          })
          .catch(err => console.log(err))
    },[])
    
    const fetchProducts = () => {
      commerce.products.list().then((products) => {
        setProducts(products.data);
      }).catch((error) => {
        console.log('There was an error fetching the products', error)
      });
    }

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='banner'>
        <h1 className='AP'>ALL PRODUCTS</h1>

      
      </div>
      <div>
        
      
      </div>
    </div>

  )
}

export default Shop
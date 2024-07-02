import React from 'react'
import Navbar from './Nav/Navbar';
import './Home.css'

const Home = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className='Banner'>
        <img src='banner.png' />
        <div className="Dokimerch">
          DOKIMERCH
        </div>
      </div>
      <div className='call'>
        <h4 className='cta'>
          Discover exclusive Dokibird merch that
          brings your favorite moments to life!
          From adorable plushies to stylish apparel,
          each item is crafted with love and creativity.
          Dive into the Dokibird universe and
          find something special to cherish.
          Shop now and make every day
          more magical with Dokibird!
        </h4>
      </div>

    </div>

  )
}

export default Home
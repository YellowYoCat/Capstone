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
        <img src='fakestore.png' />
        <div className="fakestore">
          FAKESTORE
        </div>
      </div>
      <div className='call'>
        <h4 className='cta'>
        Discover exclusive apparel that adds style and comfort to your everyday look. 
        From trendy tees to cozy hoodies, each piece is crafted with quality and flair. 
        Dive into our clothing collection and find something special to refresh your wardrobe. 
        Shop now and make every outfit stand out with Fake Store!
        </h4>
      </div>

    </div>

  )
}

export default Home
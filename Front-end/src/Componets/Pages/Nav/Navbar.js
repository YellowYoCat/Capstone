import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/shop">SHOP</Link>
          </li>
          <li>
            <Link to="/social">SOCIAL</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/cart">CART</Link>
          </li>
          <li>
            <Link to="/login">PROFILE</Link>
          </li>
        </ul>
      </nav>
  )
}




export default Navbar
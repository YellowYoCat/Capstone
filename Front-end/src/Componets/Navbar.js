import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/social">Social</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
  )
}

// function CustomLink({to, children,...props }){
//     const res = useResolvedPath(to)
//     return(
//         <li className={path === to ? "active" : ""}>
//             <Link to={to} {...props}>{children}</Link>
//         </li>
//     )
    
// }



export default Navbar
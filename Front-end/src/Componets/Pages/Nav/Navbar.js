import React from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import './Navbar.css';

const Navbar = () => {
  const [cookies] = useCookies(['username']);

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
        {cookies.username ? (
          <>
            <li>
              <Link to="/cart">CART</Link>
            </li>
            <li>
              <Link to="/profile">PROFILE</Link>
            </li>
          </>
        ) : (
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

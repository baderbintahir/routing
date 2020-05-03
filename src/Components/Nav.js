import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {

  const navStyle = {
    color: 'white',
    textDecoration: 'none'
  }

  return (
    <div>
      <nav>
        <Link style={navStyle} to="/">
          <h3 id="logo">Logo</h3>
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to="/about">
            <li>About</li>
          </Link>
          <Link style={navStyle} to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
import React from 'react';
import './App.css';

function Nav() {
  return (
    <div>
      <nav>
          <h3 id="logo">Logo</h3>
          <ul className="nav-links">
              <li>About</li>
              <li>Shop</li>
          </ul>
      </nav>
    </div>
  );
}

export default Nav;
import React from 'react';

const Navbar = () => {
  return (
    <nav className="container">
      <img src="/images/brand_logo.png" alt="brand_logo" />
      <ul>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;

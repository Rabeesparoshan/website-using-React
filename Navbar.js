import React from 'react';
import './Styles.css'



const Navbar = () => {
  return (
    <nav className="navbar">
  
      <div className="logo"> SQUARESPACE</div>
      <ul className="nav-links">
        <li>Domains</li>
        <li>Websites</li>
        <li>Online Stores</li>
        <li>Log In</li>
        <li className="btn-get-started">Get Started</li>
      </ul>
    </nav>
  );
};
export default Navbar
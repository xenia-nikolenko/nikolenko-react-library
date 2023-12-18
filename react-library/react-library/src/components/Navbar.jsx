import React from 'react';
import '../styles/Navbar.css'
import AuthDetails from './auth/AuthDetails';
import Profile from '../pages/Profile';


/* eslint-disable react/prop-types */
function Navbar({ authUser, setAuthUser }) {

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="/" className="navbar-brand">Book Catalog</a>
        <ul className="navbar-links">
          <li><a href="/">Home</a></li>
          <li><a href="/profile">Profile</a></li>
          <li><AuthDetails  authUser={authUser} setAuthUser={setAuthUser} /></li>
        </ul>
      </div>
    </nav>
    
  );
}

export default Navbar;

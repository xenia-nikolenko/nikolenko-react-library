import React from 'react';
import '../styles/Footer.css'; 


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: x.nikolenko@gmail.com</p>
          <p>LinkenDn: https://www.linkedin.com/in/xenia-nikolenko/ </p>
          
        </div>
        <div className="footer-section">
          <h3>Useful Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">Log in</a></li>
           
          </ul>
        </div>
      
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Comit. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

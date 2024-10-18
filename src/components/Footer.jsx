import React from 'react';
import '../styles/header.css';


const Footer = () => {
  return (
    <div>
      <div className="main-footer">
        <p>&copy; 2024 Bitooqoh by Barnaamaj. All rights reserved</p>
        <ul className="footer-listing">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
        </ul>
        <ul className="social">
        <a href="#" class="fa fa-facebook"></a>  
        <a href="#" class="fa fa-twitter"></a>  
        <a href="#" class="fa fa-linkedin"></a>  
        <a href="#" class="fa fa-instagram"></a>  
        </ul>
      </div>
    </div>
  );
}

export default Footer;

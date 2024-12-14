// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      
      <nav>
        <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/help">Help</a></li>   
        </ul>
        <p>© 2024 FunQuiz. All Rights Reserved.</p>
      </nav>
    </footer>
  );
};

export default Footer;

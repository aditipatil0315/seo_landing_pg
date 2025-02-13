import React, { useState } from 'react';
import './Section1.css';
import img2 from '../../assets/img2.png';

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='section1'>
      <div className="navbar">
        <div className="logo">
          logo <br />text
        </div>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>

        <div className={`links ${menuOpen ? "open" : ""}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
        </div>
      </div>

      <div className="content_section">
        
        <div className="left">
          <h1>Dominate Search Results with Expert SEO Services
Boost Your Online Visibility and Attract High-Quality Leads!
</h1>
          <h3>Helping Indian Manufacturers and IT Companies Rank Higher, Convert More, and Grow Faster</h3>
        </div>
        <div className="right">
          <img src={img2} alt="Business Solutions" />
        </div>
      </div>
    </div>
  );
};

export default Section1;

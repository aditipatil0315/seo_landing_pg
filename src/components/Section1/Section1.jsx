import React, { useState } from 'react';
import './Section1.css';
import img2 from '../../assets/img1.png';

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
          <h1>Dominate Search Results with Expert SEO Services Boost Your Online Visibility and Attract High-Quality Leads!</h1>
          <h3>Helping Indian Manufacturers and IT Companies Rank Higher, Convert More, and Grow Faster</h3>
        </div>
        <div className="right">
          <img src={img2} alt="Business Solutions" />
        </div>
      </div>

      <div className="problem_box">
        <div className="left_box">
        <h2>Are You Struggling with These SEO Challenges?</h2>
          <ul>
            <li>Your website isn’t appearing on the first page of search results.</li>
            <li>Potential customers are finding your competitors instead of you.</li>
            <li>You’re getting traffic, but no leads or conversions.</li>
            <li>You’re unsure how to optimize your website for better rankings.</li>
          </ul>
        </div>
        <div className="right_box">
          <h2>If this sounds familiar, you’re losing valuable business every day!</h2>
        </div>
      </div>
    </div>
  );
};

export default Section1;

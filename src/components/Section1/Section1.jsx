import React, { useState, useEffect, useRef } from 'react';
import './Section1.css';
import gsap from "gsap";

import step_digital_nobg from '../../assets/step_digital_nobg.png'

import img1 from "../../assets/1.jpeg";
import img2 from "../../assets/2.jpeg";
import img3 from "../../assets/3.jpeg";
import img4 from "../../assets/4.jpeg";
import img5 from "../../assets/5.jpeg";
import img6 from "../../assets/6.jpeg";
import img7 from "../../assets/7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Section1 = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const resultsRef = useRef(null);

  useEffect(() => {
    const container = resultsRef.current;

    if (container) {
      const tl = gsap.timeline({ repeat: -1, ease: "none" });

      tl.to(container, {
        xPercent: -50, 
        duration: 20, 
        ease: "linear",
      });

      return () => {
        tl.kill(); 
      };
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);


  


  const phoneNumber = "+919682122579";

  return (
    <div className='section1'>
      <div className="navbar">
        <div className="logo">
          <img src= {step_digital_nobg} alt="step-digital-logo" />
        </div>

        <div 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <div ref={menuRef} className={`links ${menuOpen ? "open" : ""}`}>
        <a 
    href="#" 
    onClick={(e) => {
      e.preventDefault();  
      setMenuOpen(false);  
      window.location.reload(); 
    }}
  >
    Home
  </a>          <a onClick={() => setMenuOpen(false)} href="#about">About</a>
          <a onClick={() => setMenuOpen(false)} href="#products">Products</a>
          <a onClick={() => setMenuOpen(false)} href="#contact">Contact</a>
        </div>
      </div>

      <div className="content_section">
        <h1>SEO That Attracts, Engages & Converts High-Ticket Clients.</h1>
        <h2><span>Dominate Search Results</span> with <span>Expert SEO Services</span></h2>
        <h2>Boost Your Online Visibility and Attract High-Quality Leads!</h2>
        <br />
        <br />
        <h3><span>Helping Indian Manufacturers and IT Companies Rank Higher, Convert More, and Grow Faster</span></h3>
        <p>Schedule a free consultation to unlock your growth potential.</p>
        <br /> 
        <button className='book_slot'  onClick={() => window.open('https://calendly.com/enquire-stepconsultancy/seo-landing-page', '_blank')}>Book My Free Consultation</button>
      </div>

      <div className="problem_box">
        <h2>Over the years We Have Generated - </h2> 
        <div className="box">
          <div className="left_sec1">
            <span>20 Million+ Revenue</span>
            <h3>for our clients</h3>
          </div>
          <div className="right_sec1">
            <span>1000+ International leads</span>
            <h3>for our clients</h3>
          </div>
        </div>
      </div>
<br />

      <h2 className='results_text'><span>Our Results</span></h2>
      <br />
      
      <div className="our_results_wrapper">
        <div className="our_results" ref={resultsRef}>
          {[...images, ...images].map((img, index) => (
            <div className="result" key={index}>
              <img src={img} alt={`SEO result ${index}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="floating-buttons">
        <a href={`https://wa.me/${phoneNumber}`} target="_blank" rel="noopener noreferrer" className="whatsapp-button">
        <i className="fa-brands fa-whatsapp"></i>
        </a>
        <a href={`tel:${phoneNumber}`} className="call-button">
        <i className="fa-solid fa-phone"></i>
        </a>
      </div>

      
    </div>
  );
};

export default Section1;

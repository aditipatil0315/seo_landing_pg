import React, { useEffect, useRef } from "react";
import "./Section2.css";


const Section2 = () => {
  

  return (
    <div className="section2" id="contact">      

      <div className="special_offer">
        <h3>Limited-Time Offer:</h3>
        <p><b>Get a Free Website Audit + 20% Discount on Your First Month!</b></p>
        <br />
        <button
          className='book_slot'
          onClick={() => window.open('https://calendly.com/enquire-stepconsultancy/seo-landing-page', '_blank')}
        >
          Claim Your Offer Now
        </button>
      </div>

      <h2>What We Offer is The Solution</h2>
      <p className="section2-intro">
        Here’s what we do to help you <span>rank higher</span> and <span>grow faster</span>:
      </p>

      <h2>Our SEO Services Deliver Tangible Results</h2>
    </div>
  );
};

export default Section2;

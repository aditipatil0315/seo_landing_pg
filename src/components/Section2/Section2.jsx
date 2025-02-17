import React from 'react';
import './Section2.css';

const Section2 = () => {
  const services = [
    { title: "On-Page Optimization", description: "We refine your website to improve its relevance and user experience." },
    { title: "Off-Page SEO", description: "Build authority with strategic backlinking and partnerships." },
    { title: "Local SEO", description: "Get found by customers in your target region with optimized local search strategies." },
    { title: "Keyword Research", description: "Target the right keywords that your customers are searching for." },
    { title: "Competitor Analysis", description: "Stay ahead by learning what your competitors are doing right." },
    { title: "Monthly Reporting", description: "Transparent updates on your website’s performance and growth metrics." }
  ];

  return (
    <div className="section2" id='products'>
      <div className="special_offer">
        <h3>Limited-Time Offer:</h3>
        <p><b>Get a Free Website Audit + 20% Discount on Your First Month!</b></p>
        <button className="offer_button"> Claim Your Offer Now</button>
      </div>
      <br />
      <br />
      <h2> What We Offer is The Solution</h2>
      <p className="section2-intro">Here’s what we do to help you <span>rank higher</span> and <span>grow faster</span>:</p>

      <div className="cards-wrapper">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h4>{service.title}</h4>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      <h2>Our SEO Services Deliver Tangible Results</h2>

      

    </div>
  );
};

export default Section2;

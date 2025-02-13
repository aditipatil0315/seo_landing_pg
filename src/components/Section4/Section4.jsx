import React from "react";
import "./Section4.css";

const Section4 = () => {
  return (
    <section className="section4">
      <h2>How It Works</h2>
      <p>We’ve Simplified the Process for You:</p>
      
      <div className="content_sec4">
        <div className="left_sec4">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Book a Free Appointment</h3>
            <p>Click the button and pick a time that works for you.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Get a Free Website Audit</h3>
            <p>We’ll analyze your website and identify areas for improvement.</p>
          </div>
        </div>
        <div className="right_sec4">
          <div className="step">
            <span className="step-number">3</span>
            <h3>Receive a Custom SEO Plan</h3>
            <p>Our team will create a strategy designed to achieve your business goals.</p>
          </div>
          <div className="step">
            <span className="step-number">4</span>
            <h3>Watch Your Traffic and Leads Grow</h3>
            <p>Enjoy consistent updates and measurable results.</p>
          </div>
        </div>
      </div>
      <br /><br />

      {/* Testimonial Section */}
      <div className="testimonial_section">
        <h2>What Our Clients Are Saying</h2>
        <div className="testimonial_cards">
          <div className="testimonial_card">
            <p className="stars">⭐️⭐️⭐️⭐️⭐️</p>
            <p>"Within 3 months, our website traffic doubled, and we started getting inquiries from new clients every day. Their SEO strategy works!"</p>
            <h4>— Rajog Enterprises, Manufacturer</h4>
          </div>
          <div className="testimonial_card">
            <p className="stars">⭐️⭐️⭐️⭐️</p>
            <p>"As an IT services company, it’s critical to rank high in competitive keywords. This team delivered beyond our expectations."</p>
            <h4>— Refux, IT Solutions Provider</h4>
          </div>
          <div className="testimonial_card">
            <p className="stars">⭐️⭐️⭐️⭐️⭐️</p>
            <p>"I was struggling to get international leads, it became easy with them onboard."</p>
            <h4>— Chemiplant Engineering Company, Manufacturer</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;

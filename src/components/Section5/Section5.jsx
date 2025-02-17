import React, { useState } from "react";
import "./Section5.css";

const Section5 = () => {
  // State to track open FAQs
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data
  const faqs = [
    {
      question: "How long does it take to see results?",
      answer: "SEO is a long-term strategy, but you’ll start noticing improvements within 1-3 months.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We specialize in SEO for manufacturers, IT companies, and other service providers in India.",
    },
    {
      question: "Can you optimize my website if it’s built on [Platform]?",
      answer: "Yes, we can work with platforms like WordPress, Shopify, Wix, and coding languages like Java, React, Node.js, Angular.",
    },
    {
      question: "Is there a consultation fee?",
      answer: "No, the consultation and website audit are completely free of charge!",
    },
  ];

  return (
    <section className="section5" id="contact">
      {/* FAQ Section */}
      <div className="faq_section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq_list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq_item">
              <button 
                className={`faq_question ${openIndex === index ? "active" : ""}`} 
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && <p className="faq_answer">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
      {/* Special Offer */}
      {/* <div className="special_offer">
        <h3>Limited-Time Offer:</h3>
        <p>Get a Free Website Audit + 20% Discount on Your First Month!</p>
        <button className="offer_button"> Claim Your Offer Now</button>
      </div> */}
      <br />

      {/* Call to Action */}
      <div className="cta_section">
        <h2>Take the First Step Toward SEO Success Today!</h2>
        <p>Let’s optimize your website and grow your business together.</p>
        <button className="cta_button"
         onClick={() => window.open('https://calendly.com/enquire-stepconsultancy/seo-landing-page', '_blank')}
        >Book Your Free SEO Consultation </button>
      </div>

      
    </section>
  );
};

export default Section5;

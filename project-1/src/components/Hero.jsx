import React from 'react';

const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn">
          <button>Shop Now</button>
          <button className="sec-btn">Category</button>
        </div>
        <div className="hero-avail">
          <p>Also Available On</p>
          <div className="hero-avail-logo">
            <img src="/images/flipkart.png" alt="flipkart" />
            <img src="/images/amazon.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-logo">
        <img src="/images/shoe_image.png" alt="shoe_image.png" />
      </div>
    </main>
  );
};

export default HeroSection;


import React, { useEffect } from 'react';
import '../Style/AboutUS.css';
import aboutImage from '../assest/aboutUS.jpg'; // replace with your image path

const AboutUs = () => {
     useEffect(() => {
                window.scrollTo(0, 0);
            }, []);
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <div className="about-us-image">
          <img src={aboutImage} alt="Our Bakery Story" />
        </div>
        <div className="about-us-text">
          <h2>Our Story</h2>
          <p>
            At <strong>Whisk & Smile</strong>, our journey began in a tiny kitchen filled with the
            sweet aroma of freshly baked cookies and the laughter of family gatherings. What started
            as weekend baking therapy turned into a passionate dream — to spread happiness, one
            bite at a time.
          </p>
          <p>
            We believe every celebration, big or small, deserves a sweet memory. From whimsical
            birthday cakes to cozy cookie boxes, each treat is crafted with care, love, and a
            sprinkle of joy.
          </p>
          <p>
            Whether you’re cheering someone up, marking a milestone, or simply treating yourself —
            we’re here to make life a little sweeter. 💛
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

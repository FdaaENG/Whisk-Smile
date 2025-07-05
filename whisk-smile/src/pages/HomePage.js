import ImageSlider from '../components/ImageSlider';
import '../Style/HomePage.css';
import React, { useEffect } from 'react';
import FanFavorites from '../components/FanFavorites';

function HomePage() {
      useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
  return (
    <div className="home-page">

      {/* Hero Section (top half) */}
      <div className="hero-section">
        
      </div>

      {/* Bottom Section */}
      <div className="bottom-section">
   
          <h1>Welcome to Whisk & Smile</h1>
          <p className='quote'>" Freshly baked cakes & cookies, made with love "</p>
        
        {/* You can add cards, sliders, etc. here */}
      </div>
        <FanFavorites />

    </div>
  );
}

export default HomePage;
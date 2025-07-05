import React from 'react';
import Slider from 'react-slick';
import '../Style/ImageSlider.css'; // optional custom styles
import photo1 from '../assest/Photo1.jpg';
import photo2 from '../assest/Photo2.jpg';
import photo3 from '../assest/Photo3.jpg';
import photo4 from '../assest/Photo4.jpg';
const ImageSlider = () => {
  const images = [
   photo1,
   photo2,
   photo3,
   photo4
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`slide-${index}`} className="slide-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;

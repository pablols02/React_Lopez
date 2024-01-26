import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Foto1 from '../assets/foto1.jpg';
import Foto2 from '../assets/foto2.jpg';
import Foto3 from '../assets/foto3.jpg';
import Foto4 from '../assets/foto4.jpg';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div>
        <img src={Foto1} alt="Slide 1" />
      </div>
      <div>
        <img src={Foto2} alt="Slide 2" />
      </div>
      <div>
        <img src={Foto3} alt="Slide 3" />
      </div>
      <div>
        <img src={Foto4} alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default Carousel;
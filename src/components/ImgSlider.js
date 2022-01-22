import React from "react";
import "./ImgSlider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = (props) => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Slider className="imgSlider" {...settings}>
        <div className="imgSlider__container">
          <a>
            <img src="/images/slider-badging.jpg" alt="" />
          </a>
        </div>

        <div className="imgSlider__container">
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </div>

        <div className="imgSlider__container">
          <a>
            <img src="/images/slider-badag.jpg" alt="" />
          </a>
        </div>

        <div className="imgSlider__container">
          <a>
            <img src="/images/slider-scales.jpg" alt="" />
          </a>
        </div>
    </Slider>
  );
};

export default ImgSlider;

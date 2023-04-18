import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="h-screen overflow-hidden ">
      <Slider {...settings}>
        <div>
          <img
            src="./assets/banner1.jpg"
            alt="game1"
            className="h-[600px] w-full object-cover object-top"
          />
        </div>
        <div>
          <img
            src="./assets/banner2.jpg"
            alt="game2"
            className=" h-[600px] w-full object-cover object-top"
          />
        </div>
        <div>
          <img
            src="./assets/banner3.jpg"
            alt="game3"
            className="h-[600px] w-full object-cover object-top"
          />
        </div>
        <div>
          <img
            src="./assets/banner4.jpg"
            alt="game4"
            className="h-[600px] w-full object-cover object-top"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Banner;

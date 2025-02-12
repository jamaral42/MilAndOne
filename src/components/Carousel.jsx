import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export default function Carousel({ items }) {
  
  const settings = {
    dots: true,
    dotsClass: "slick-dots bottom-0",
    customPaging: () => (
      <div className="rounded-full size-2 transition-colors duration-300 bg-gray-300"> {/* Smaller, simpler dots */}
      </div>
    ),
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1, 
    autoplay: true, // Optional: Autoplay the carousel
    autoplaySpeed: 3000, // Optional: Autoplay speed in milliseconds
  };

  return (
    <div className="relative bg-secondary md:pb-7 border-t border-black">
      <Slider {...settings}>
        {items.map((item) => (
          <div key={item.id} className="relative">
            <img src={item.img} alt={item.title} className="w-full h-[600px] object-cover" />
            <div className="absolute inset-0 flexBetween flex-col items-center bg-black/50 text-white p-4">
              <h3 className="font-bold text-5xl md:text-6xl text-center relative md:mr-30 mt-45 ">{item.title}</h3>
              <p className="text-xl md:text-3xl text-center relative md:ml-30 mb-60">{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

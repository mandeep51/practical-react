import React, { Component, useRef } from "react";
import Slider from "react-slick";
import {HiArrowSmallLeft} from 'react-icons/hi'
import {HiArrowSmallRight} from 'react-icons/hi'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
    const sliderRef = useRef(null);

    // Function to go to the next slide
    const nextSlide = () => {
      sliderRef.current.slickNext();
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      sliderRef.current.slickPrev();
    };
  
  var settings = {
    pauseOnHover : true,
    dots: true,
    infinite: true,
    autoplaySpeed :2000,
    speed: 200,
    autoplay:true,
    slidesToShow: 2,
    slickPlay : true,
    slidesToScroll: 1,
    
    nextArrow: (
        <button
          onClick={() => {
            // Call slickNext method directly
            slickNext();
          }}
        >
          Next
        </button>
      ), 
      prevArrow: (
        <button
          onClick={() => {
            // Call slickNext method directly
           slickPrev();
          }}
        >
          Next
        </button>
      ), // Custo
  };
  return (
    <>
    <h2> Responsive </h2>
        <Slider {...settings} ref={sliderRef}>
          <div>
            <img src="https://images.unsplash.com/photo-1505968409348-bd000797c92e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" height="500px"></img>
          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80" height="500px"></img>
          </div>
          <div>
          <img src="https://images.unsplash.com/photo-1574172368358-4898a80133c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1501&q=80" height="500px"></img>
          </div>
          <div>
          <img src="https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" height="500px"></img>
          </div>
          
        </Slider>

        <button onClick={prevSlide}>Previous</button>
      <button onClick={nextSlide}>Next</button>
    </>
 
  );
}


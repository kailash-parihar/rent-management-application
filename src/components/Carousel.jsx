import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/Carousel.css"; // Create this file for custom styles

const Carousel = () => {
  // Settings for the carousel
  const settings = {
    dots: true, // Hide dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 2, // Number of slides to scroll
    autoplay: true, // Auto-play
    autoplaySpeed: 3000, // Auto-play interval
    arrows: true, // Show arrows
    nextArrow: <NextArrow />, // Custom next arrow
    prevArrow: <PrevArrow />, // Custom previous arrow
  };

  // Data for carousel items
  const carouselItems = [
    { icon: "🛏️", text: "Rooms" },
    { icon: "🏢", text: "Flats" },
    { icon: "👥", text: "PGs (Co-Living Spaces)" },
    { icon: "🎓", text: "University Campuses" },
    { icon: "🛍️", text: "Shops" },
    { icon: "🏝️", text: "Farmhouses" },
    { icon: "💍", text: "Marriage Gardens" },
    { icon: "🏢", text: "Corporate Offices" },
    { icon: "🏭", text: "Commercial Warehouses" },
    { icon: "🏖️", text: "Vacation Rentals" },
    { icon: "🛏️", text: "Hostels" },
  ];

  return (
    <div className="carousel-container">
      <h2 className="carousel-heading">Whether you own or manage</h2>
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-slide">
            <span className="carousel-icon">{item.icon}</span>
            <p className="carousel-text">{item.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-next" onClick={onClick}></div>;
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return <div className="slick-arrow slick-prev" onClick={onClick}></div>;
};

export default Carousel;

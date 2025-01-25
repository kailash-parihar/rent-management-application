import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/carousel.css";

const testimonials = [
  { alt: "Rooms" },
  { alt: "Flats" },
  { alt: "PGs (Co-Living Spaces)" },
  { alt: "University Campuses" },
  { alt: "Farmhouses" },
  { alt: "Marriage Gardens" },
  { alt: "Corporate Offices" },
  { alt: "Commercial Warehouses" },
  { alt: "Vacation Rentals" },
  { alt: "Hostels" },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <div className="slick-arrow slick-next"></div>,
    prevArrow: <div className="slick-arrow slick-prev"></div>,
  };

  return (
    <div className="testimonials-section">
      <h1 className="testimonials-title">Whether you own or manage</h1>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div className="logo" key={index}>
            <span className="testimonial-text">{testimonial.alt}</span>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;

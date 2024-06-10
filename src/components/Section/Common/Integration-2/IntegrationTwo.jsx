/* eslint-disable react/no-unescaped-entities */

"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed (3 seconds)
  };

  return (
    <div
      className="zubuz-testimonial-slider-section zubuz-section-padding2 flex items-center justify-center"
      style={{ backgroundImage: "url(/images/v2/cta-bg.png)" }}
    >
      <div className="container">
        <Slider {...settings} className="zubuz-testimonial-slider">
          <div className="zubuz-testimonial-slider-item">
            <div className="zubuz-testimonial-slider-data">
              <div className="zubuz-testimonial-slider-rating">
                <ul>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <img
                        src="/images/v2/rating2.png"
                        alt="Rating star"
                        style={{ height: "20px" }} // Set image height
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-col flex">
                <span className="text-xl text-white font-bold text-center ">"A Game Changer for Our Business"</span>

                
              <span className="text-sm lg:text-xl leading-loose text-white open-sans">
                Our experience with 3GIS has been fantastic, they offer dynamic, practical and tailored-to-need services to meet clients' unique demands and peculiarities.
                We strongly recommend them for your IT and Web Management requirements.
              </span>
            </div></div>
            <div className="zubuz-testimonial-slider-author">
              <div className="zubuz-testimonial-slider-author-data">
                <span className="text-sm">MD, Seaeagle Marine Services</span>
              </div>
            </div>
          </div>

          <div className="zubuz-testimonial-slider-item">
            <div className="zubuz-testimonial-slider-data">
              <div className="zubuz-testimonial-slider-rating">
                <ul>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <img
                        src="/images/v2/rating2.png"
                        alt="Rating star"
                        style={{ height: "20px" }} // Set image height
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-col flex">
                <span className="text-xl text-white font-bold text-center ">"A Game Changer for Our Business"</span>

                
              <span className="text-sm lg:text-xl leading-loose text-white open-sans">
                Our experience with 3GIS has been fantastic, they offer dynamic, practical and tailored-to-need services to meet clients' unique demands and peculiarities.
                We strongly recommend them for your IT and Web Management requirements.
              </span>
            </div>
            </div>
            <div className="zubuz-testimonial-slider-author">
             
              <div className="zubuz-testimonial-slider-author-data">
                <span>Jonas Aly</span>
                <p>Founder @ Company</p>
              </div>
            </div>
          </div>

          <div className="zubuz-testimonial-slider-item">
            <div className="zubuz-testimonial-slider-data">
              <div className="zubuz-testimonial-slider-rating">
                <ul>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <li key={index}>
                      <img
                        src="/images/v2/rating2.png"
                        alt="Rating star"
                        style={{ height: "20px" }} // Set image height
                      />
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-col flex">
                <span className="text-xl text-white font-bold text-center ">"A Game Changer for Our Business"</span>

                
              <span className="text-sm lg:text-xl leading-loose text-white open-sans">
                Our experience with 3GIS has been fantastic, they offer dynamic, practical and tailored-to-need services to meet clients' unique demands and peculiarities.
                We strongly recommend them for your IT and Web Management requirements.
              </span>
            </div>
            </div>
            <div className="zubuz-testimonial-slider-author">
             
              <div className="zubuz-testimonial-slider-author-data">
                <span>Jonas Aly</span>
                <p>Founder @ Company</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSection;

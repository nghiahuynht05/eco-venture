import React, { useContext } from "react";
import Slider from "react-slick";
import { LanguageContext } from "../context/languageContext";
import background from "../data/backgroup";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.slider.css";
import "./custom.slick.css";

function CustomServices({ translations }) {
  const servicesSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <section
      className="sec sec-selling-trip bg-img-dot"
      style={{ "background-image": `url(${background[0].imgURL})` }}>
      <div className="sec-container container">
        <div className="sec-header">
          <h2 className="heading heading-primary text-center">
            ECOVENTURE'S PRICE OF SERVICES
          </h2>
        </div>
        <div className="sec-content">
          <div className="slider-cover slider-shadow">
            <div className="owl-carousel owl-theme slider-selling-trip">
              <Slider {...servicesSetting}>
                {translations.map((translations) => (
                  <div className="item">
                    <div className="card card-type-1">
                      <div className="card-img">
                        <a href={translations.link}>
                          <img
                            style={{ maxHeight: "250px" }}
                            key="0"
                            src={translations.image}
                            alt="0"
                          />
                          <h3 className="card-title">
                            <span className="title">{translations.title}</span>
                          </h3>
                        </a>
                      </div>
                      <div className="card-info">
                        <div className="classify-selling-trip ">
                          <span className="date">{translations.duration}</span>
                          <span>|</span>
                          <span className="price">{translations.price}</span>
                        </div>
                        <div className="card-synop mt-8">
                          <div className="card-description">
                            <span>
                              <div
                                style={{
                                  maxHeight: "20px",
                                  overflow: "hidden",
                                }}>
                                {translations.description}
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomServices;

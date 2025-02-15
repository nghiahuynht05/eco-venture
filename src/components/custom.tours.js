import React, { useContext, useEffect, useState } from "react";
import Slider from "react-slick";
import { LanguageContext } from "../context/languageContext";
import background from "../data/backgroup";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./custom.slider.css";
import "./custom.slick.css";

function CustomTours({ children }) {
  const { translations } = useContext(LanguageContext);
  const [setContent] = useState({});

  useEffect(() => {
    import(`../locales/${translations}.json`)
      .then((module) => {
        setContent(module.default);
      })
      .catch((error) => console.error("Error loading language file:", error));
  }, [translations]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const toursData = translations.home?.tours || [];
  return (
    <section
      className="sec sec-selling-trip bg-img-dot"
      style={{ "background-image": `url(${background[0].imgURL})` }}>
      <div className="sec-container container">
        <div className="sec-header">
          <h2 className="heading heading-primary text-center">
            {toursData.title}
          </h2>
          <div className="heading sub-heading">
            <p style={{ textAlign: "center" }}>
              <span id="docs-internal-guid-2678d0d8-7fff-665e-e92e-8766e130d4dd">
                <span>{toursData.description}</span>
              </span>
            </p>
          </div>
        </div>
        <div className="sec-content">
          <div className="slider-cover slider-shadow">
            <div className="owl-carousel owl-theme slider-selling-trip">
              <Slider {...settings}>
                {children.map((tour) => (
                  <div className="item">
                    <div className="card card-type-1">
                      <div className="card-img">
                        <a href="/vi/trekking-kham-pha-rung-lim-co-thu-3-ngay.html">
                          {tour}
                          <h3 className="card-title">
                            <span className="title">{tour.props.title}</span>
                          </h3>
                        </a>
                      </div>
                      <div className="card-info">
                        <div className="classify-selling-trip ">
                          <span className="date">
                            {tour.props.translations.duration}
                          </span>
                          <span>|</span>
                          <span className="price">
                            {tour.props.translations.price}
                          </span>
                        </div>
                        <div className="card-synop mt-8">
                          <div className="card-description">
                            <span>
                              <div dir="auto">
                                {tour.props.translations.description}
                              </div>
                              {/* <div dir="auto">
                                Tuyến trek rừng Lim bắt đầu từ thôn Tary, xã
                                Lăng, men theo dòng suối Lăng để đến sông Lăng
                                rồi tiến đến hồ thủy điện sông Bung 4 thuộc địa
                                phận Nam Giang. Tuyến trek này sẽ đi qua cánh
                                rừng lim xanh cổ thụ với những cây lim nhiều
                                tuổi nhất lên đến 200 năm. Dọc tuyến trek này
                                còn gặp rất nhiều cây chua khổng lồ mà gốc phải
                                đến hơn chục người ôm mới hết.
                              </div>
                              <p>
                                <span>&nbsp;</span>
                              </p> */}
                            </span>
                          </div>
                          <div className="tag-selling mt-8">
                            <div className="item">
                              <img
                                src={background[1].imgURL}
                                alt=""
                              />
                              <span>Trekking</span>
                            </div>
                          </div>
                          <a
                            href={tour.props.translations.link}
                            className="btn brd-black radius-4 width-100 mt-24">{toursData.detail}
                          </a>
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

export default CustomTours;

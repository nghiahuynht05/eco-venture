import React from "react";
import Slider from "react-slick";

import "./custom.about.css";

function CustomAbout({ content }) {
  var imageSetings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const list = content.list;
  return (
    <div className="main-content">
      <div className="page about-us-page">
        <div className="page-container">
          <div className="page-inner">
            <section className="sec-img-about-us">
              <div className="banner">
                <div className="banner-container">
                  <div className="main-slider">
                    {/* slider */}
                    <div className="img-banner">
                      <img
                        src=""
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="sec sec-content-about-us bg-img-fingerprint-white">
              <div className="sec-container container">
                <div className="sec-content-about-us-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="content-about-us">
                        <h2 className="heading heading-secondary mb-24 pl-24 pr-24">
                          {list[0].title}
                        </h2>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span> {list[0].description}</span>
                          </span>
                        </p>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              <Slider {...imageSetings}>
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                      <img
                                        src=""
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="sec sec-content-about-us sec-reverse">
              <div className="sec-container container">
                <div className="sec-content-about-us-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="content-about-us">
                        <h2 className="heading heading-secondary mb-24 pl-24 pr-24">
                          {list[1].title}
                        </h2>
                        <p dir="ltr">
                          <span>{list[1].description}</span>
                        </p>
                        <p dir="ltr">
                          <strong>{list[1].sub}</strong>
                        </p>
                        {list[1].investment.map((item, index) => (
                          <div>
                            <p dir="ltr">
                              <strong>
                                {index + 1}. {item.fields}
                              </strong>
                            </p>
                            {item.list.map((l) => (
                              <div>
                                <ul>
                                  <li dir="ltr">
                                    <strong>{l.title}</strong>
                                  </li>
                                </ul>
                                {l.items.map((f) => (
                                  <p style={{ marginLeft: "30px" }} dir="ltr">
                                    <span>{f}</span>
                                  </p>
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              <Slider {...imageSetings}>
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                      <img
                                        src=""
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="sec sec-content-about-us bg-img-fingerprint-white">
              <div className="sec-container container">
                <div className="sec-content-about-us-inner">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="content-about-us">
                        <h2 className="heading heading-secondary mb-24 pl-24 pr-24">
                          {list[2].title}
                        </h2>
                        <p style={{ textAlign: "justify" }}>
                          <span> {list[2].description}</span>
                        </p>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              <Slider {...imageSetings}>
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                      <img
                                        src=""
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </Slider>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CustomAbout;

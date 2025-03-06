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
            <section className="sec sec-img-about-us">
              <div className="sec-container container">
                <div className="sec-header">
                  <h2 className="heading heading-secondary text-center">
                    {content.title}
                  </h2>
                  <div className="heading sub-heading text-center text-center">
                    <p style={{ textAlign: "center" }}>
                      <span id="">
                        <span> {content.description}</span>{" "}
                      </span>
                    </p>{" "}
                  </div>
                </div>
                <div className="sec-content">
                  <div className="img-about-us-top">
                    <img
                      src="https://klangadventure.com/sites/default/files/styles/style_1140x314/public/file/image/rectangle_3464070_10.png?itok=IBqPO0HF"
                      alt=""
                    />
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
                                        src="https://klangadventure.com/sites/default/files/styles/style_555x448/public/file/image/img-about-us-5_0.png?itok=jZWFwKIr"
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
                                        src="https://klangadventure.com/sites/default/files/styles/style_555x448/public/file/image/our_core_value_-_about_us_page_0.png?itok=c9ODI2gu"
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
                                        src="https://klangadventure.com/sites/default/files/styles/style_555x448/public/file/image/our_mission_-_about_us_-_page_0.png?itok=Q_7zQJtb"
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
            {/* commitment */}
            <section className="sec sec-commitment">
              <div className="sec-container container">
                <div className="sec-header">
                  <h2 className="heading heading-primary text-center">
                    Our Commitment to Sustainability{" "}
                  </h2>
                  <div className="heading sub-heading">
                    <p style={{ textAlign: "center" }}>
                      <span>
                        This season – as the first blossoms of spring spark
                        feelings of joy and renewal - we celebrate the{" "}
                      </span>
                    </p>
                    <p style={{ textAlign: "center" }}>
                      <span>
                        exceptional natural environments across the globe that
                        K’Lang Adventure calls home.
                      </span>
                    </p>{" "}
                  </div>
                </div>
                <div className="sec-content">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="box-full-img">
                        <div className="box-img">
                          <a href="/en/environment.html">
                            <img
                              src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/moi_truong_0.png?itok=yrxkflXi"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="box-info box-full-img-center">
                          <div className="info">
                            <img
                              src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png"
                              alt=""
                            />
                            <h3 className="title">Environment</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="box-full-img">
                        <div className="box-img">
                          <a href="/en/government.html">
                            <img
                              src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/quan_tri_0.png?itok=VL6rJu9V"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="box-info box-full-img-center">
                          <div className="info">
                            <img
                              src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png"
                              alt=""
                            />
                            <h3 className="title">Government</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="box-full-img">
                        <div className="box-img">
                          <a href="/en/social.html">
                            <img
                              src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/xa_hoi_0.png?itok=P_PDOaCT"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="box-info box-full-img-center">
                          <div className="info">
                            <img
                              src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png"
                              alt=""
                            />
                            <h3 className="title">Social</h3>
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

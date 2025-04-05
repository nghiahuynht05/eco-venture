import React from "react";
import Slider from "react-slick";

function Press({ content }) {
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
              <div className="sec sec-intro-sustainability bg-gray">
                <div className="banner-container">
                  <div className="sec-header">
                    <h2 className="heading heading-secondary text-center">
                      {content.title}
                    </h2>
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
                            <span style={{ fontWeight: "bold" }}>
                              {list[0].description.content}:{" "}
                            </span>
                            <span>{list[0].description.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[0].application.content}:{" "}
                            </span>
                            <span>{list[0].application.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[0].benefits.content}:{" "}
                            </span>
                            <span>{list[0].benefits.text}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              {/* <Slider {...imageSetings}> */}
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                      <img src="../gallery/676a07d82c9e6cb4a56ff09c.jpg" alt="" />
                                    </div>
                                  </div>
                                </div>
                              {/* </Slider> */}
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
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[1].description.content}:{" "}
                            </span>
                            <span>{list[1].description.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[1].application.content}:{" "}
                            </span>
                            <span>{list[1].application.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[1].benefits.content}:{" "}
                            </span>
                            <span>{list[1].benefits.text}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              {/* <Slider {...imageSetings}> */}
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                    <img src="../gallery/da502_dulich1.jpg" alt="" />
                                    </div>
                                  </div>
                                </div>
                              {/* </Slider> */}
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
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[2].description.content}:{" "}
                            </span>
                            <span>{list[2].description.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[2].benefits.content}:{" "}
                            </span>
                            <span>{list[2].benefits.text}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              {/* <Slider {...imageSetings}> */}
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                    <img src="../gallery/det_tho_cam-1692519403870.jpg" alt="" />
                                    </div>
                                  </div>
                                </div>
                              {/* </Slider> */}
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
                          {list[3].title}
                        </h2>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[3].description.content}:{" "}
                            </span>
                            <span>{list[3].description.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[3].application.content}:{" "}
                            </span>
                            <span>{list[3].application.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[3].benefits.content}:{" "}
                            </span>
                            <span>{list[3].benefits.text}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              {/* <Slider {...imageSetings}> */}
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                    <img src="../gallery/ddaidiendoinhagai1.jpg" alt="" />
                                    </div>
                                  </div>
                                </div>
                              {/* </Slider> */}
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
                          {list[4].title}
                        </h2>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[4].description.content}:{" "}
                            </span>
                            <span>{list[4].description.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[4].benefits.content}:{" "}
                            </span>
                            <span>{list[4].benefits.text}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              {/* <Slider {...imageSetings}> */}
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                    <img src="../gallery/1-5-hoa-bac-4.webp" alt="" />
                                    </div>
                                  </div>
                                </div>
                              {/* </Slider> */}
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
                          {list[5].title}
                        </h2>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[5].description.content}:{" "}
                            </span>
                            <span>{list[5].description.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[5].application.content}:{" "}
                            </span>
                            <span>{list[5].application.text}</span>
                          </span>
                        </p>
                        <p style={{ textAlign: "justify" }} dir="ltr">
                          <span id="">
                            <span style={{ fontWeight: "bold" }}>
                              {list[5].benefits.content}:{" "}
                            </span>
                            <span>{list[5].benefits.text}</span>
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="slider-cover">
                        <div className="owl-carousel owl-theme slider-about-us owl-loaded owl-drag">
                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              {/* <Slider {...imageSetings}> */}
                                <div className="owl-item cloned">
                                  <div className="item">
                                    <div className="img-slider-about-us">
                                    <img src="../gallery/anh-xuan-10.jpg" alt="" />
                                    </div>
                                  </div>
                                </div>
                              {/* </Slider> */}
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

export default Press;

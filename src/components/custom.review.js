import Slider from "react-slick";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../context/languageContext";

function CustomReview({ review }) {
  const { translations } = useContext(LanguageContext);
  const [setContent] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    import(`../locales/${translations}.json`)
      .then((module) => {
        setContent(module.default);
      })
      .catch((error) => console.error("Error loading language file:", error));
  }, [translations]);

  var reviewSetings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="sec sec-review">
      <div className="sec-container container">
        <div className="sec-content">
          <div className="slider-cover">
            <div className="owl-carousel owl=theme slider-single">
              <div className="item">
                <div className="box-review">
                  <Slider {...reviewSetings}>
                    {review.map((review) => (
                      <div
                        className="row"
                        style={{
                          display: "flex",
                          "flex-direction": "row",
                          "align-items": "center",
                          "flex-wrap": "nowrap",
                        }}>
                        <div className="col-md-7" style={{ width: "50%" }}>
                          <div className="img-box-review">
                            <img src={review.image} alt="" />
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div>
                            <div className="sec-header mt-24">
                              <h2 className="heading heading-primary text-center">
                                {review.title}
                              </h2>
                            </div>
                            <div className="txt-box-review">
                              <p>
                                <span>{review.comment}</span>
                              </p>{" "}
                              <b>{review.reviewer}</b>
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
        </div>
      </div>
    </section>
  );
}
export default CustomReview;

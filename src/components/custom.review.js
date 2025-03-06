import React from "react";
import Slider from "react-slick";

function CustomReview({ review }) {

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

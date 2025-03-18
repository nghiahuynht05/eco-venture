import React from "react";
import Slider from "react-slick";

// import "./custom.slider.css";

function CustomTourImages({ images }) {
  const children = images.images;
  console.log(children);

  var imageSetings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div id="images-destination" className="description-item">
      <div className="description-item-title">
        <span className="heading heading-descriptions">Images/Videos</span>
      </div>
      <div className="description-item-content">
        <Slider {...imageSetings}>
          {children.map((item, index) => (
            <div className="slider-cover">
              <div className="owl-carousel owl-theme slider-single owl-loaded owl-drag">
                <div className="owl-stage-outer">
                  <div className="owl-stage">
                    <div className="owl-item cloned">
                      <div className="item">
                        <img src={item} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomTourImages;

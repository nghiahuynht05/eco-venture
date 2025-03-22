import React, { useRef } from "react";
import Slider from "react-slick";

import "./VideoPlayer.css";
// import "./custom.slider.css";

function CustomTourImages({ images }) {
  const imagesVideos = images.images;

  var imageSetings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const videoRef = useRef(null);

  return (
    <div id="images-destination" className="description-item">
      <div className="description-item-title">
        <span className="heading heading-descriptions">Images/Videos</span>
      </div>
      <div className="description-item-content">
        <Slider {...imageSetings}>
          {imagesVideos.map((item) => (
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
              <div className="video-container">
                <iframe
                  src={item}
                  width="640"
                  height="360"
                  allow="autoplay"
                  style={{ border: "none" }}></iframe>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default CustomTourImages;

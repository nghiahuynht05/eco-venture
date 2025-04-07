import React from "react";

import "./custom.slider.css";

function CustomCarousel({ children }) {
  return (
    <div className="container__slider">
          <div className={"slider__item slider__item-active-"} key={0}>
            <video
              src="/C0684.mp4"
              autoPlay
              loop
              playsInline
              style={{ width: "-webkit-fill-available" }}></video>
            <div className="container__slider__links">
              <div className="txt-banner">
                <div className="content">
                  <div
                    className=""
                    style={{ display: "grid", "justify-content": "center" }}>
                    <span
                      style={{
                        "margin-bottom": "8px",
                        "font-family": "PlayfairDisplay-Medium",
                        "font-size": "42px",
                        "line-height": "40px",
                        "letter-spacing": "2px",
                        color: "#FFFFFF",
                      }}>
                      {children.title}
                    </span>
                    <span
                      style={{
                        "margin-bottom": "8px",
                        "font-family": "PlayfairDisplay-Medium",
                        "font-size": "32px",
                        "line-height": "40px",
                        "letter-spacing": "2px",
                        color: "#FFFFFF",
                      }}>
                      {children.description}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    </div>
  );
}

export default CustomCarousel;

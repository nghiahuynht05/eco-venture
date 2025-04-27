import React from "react";

function ToursItem({ translate, toursData }) {
  const tours = [];
  tours.push(toursData);
  return (
    <div className="block-result">
      {tours.map((item, index) => (
        <div className="item">
          <div className="destination-type-1">
            <div className="node-container d-flex">
              <div className="node-image" style={{ width: "291px" }}>
                <a href={`/tours-details/${item.id}`}>
                  <img src={item.bannerImage} alt="" />
                </a>
              </div>
              <div className="node-info">
                <div className="box-info">
                  <h3 className="card-title">
                    <a href={`/tours-details/${item.id}`}>{item.tourName}</a>
                  </h3>
                  <div className="card-synop">
                    <div className="card-description">
                      <p>{item.tourDes}</p>
                    </div>
                    <div className="tag-selling mt-8">
                      <span>
                        {translate.tourId}: <span>{item.tourId}</span>
                      </span>
                      <span>
                        {translate.tourLocation}:{" "}
                        <span>{item.tourLocation}</span>
                      </span>
                      {item.tags.map((tagName) => (
                        <div className="item">
                          <img
                            src={`../tours/tag/${tagName.icon}.png`}
                            alt=""
                          />
                          <span>{tagName.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="node-price-right">
                  <span className="date">{item.tourTime}</span>{" "}
                  <a
                    href={`/tours-details/${item.id}`}
                    className="btn brd-non bg-blue radius-4  txt-white d-flex mt-32">
                    <span>{translate.view}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ToursItem;

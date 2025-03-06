import React from "react";

function ToursItem({ translate, tours }) {
  return (
    <div className="block-result">
      {tours.list.map((item) => (
        <div className="item">
          <div className="destination-type-1">
            <div className="node-container d-flex">
              <div className="node-image">
                <a href="/en/trekking-conquering-moss-forest-and-klang-peak-in-2-days.html">
                  <img
                    src="https://klangadventure.com/sites/default/files/styles/style_290x216/public/file/image/z5227282773880_0169f159cbf4d2509d6480b6c4afc6e2_1.jpg?itok=ol980Tv4"
                    alt=""
                  />
                </a>
              </div>
              <div className="node-info">
                <div className="box-info">
                  <h3 className="card-title">
                    <a href="/en/trekking-conquering-moss-forest-and-klang-peak-in-2-days.html">
                      {item.tourName}
                    </a>
                  </h3>
                  <div className="card-synop">
                    <div className="card-description">
                      <p>{item.tourDes}</p>
                      <p>
                        <span>&nbsp;</span>
                      </p>
                    </div>
                    <div className="tag-selling mt-8">
                      <span>
                        {translate.tourId}: <span>{item.tourId}</span>
                      </span>
                      <span>
                        {translate.tourLocation}:{" "}
                        <span>{item.tourLocation}</span>
                      </span>
                      <div className="item">
                        <img
                          src="https://klangadventure.com/sites/default/files/file/image/icon-trekking_1.png"
                          alt=""
                        />
                        <span>Trekking </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="node-price-right">
                  <span className="date">{item.tourTime}</span>
                  <div className="price">FROM </div>
                  <a
                    href="/en/trekking-conquering-moss-forest-and-klang-peak-in-2-days.html"
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

import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

function ToursFilter() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  return (
    <div className="col-md-3">
      <div className="box-filter">
        <div className="close-filter-hotel-mb">
          <span>Bộ lọc</span>
          <i className="fa-regular fa-chevron-down" />
        </div>
        <div className="box-sidebar-block">
          <div className="sidebar-block open">
            <div className="sidebar-block-title">
              <h4 className="heading heading-sidebar">Departure schedule </h4>
            </div>
            <div className="sidebar-block-content">
              <div className="form-group">
                <label htmlFor>Departure day</label>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className="form-group">
                <label htmlFor>End date</label>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                />
              </div>
              {/* <div className="form-group">
                <label htmlFor>Departure by month </label>
                <select
                  name="month"
                  className="form-control"
                  onchange="this.form.submit()">
                  <option value={0} selected>
                    All{" "}
                  </option>
                  <option value={3}>Month 3 </option>
                  <option value={4}>Month 4 </option>
                  <option value={5}>Month 5 </option>
                  <option value={6}>Month 6 </option>
                  <option value={7}>Month 7 </option>
                  <option value={8}>Month 8 </option>
                  <option value={9}>Month 9 </option>
                  <option value={10}>Month 10 </option>
                  <option value={11}>Month 11 </option>
                  <option value={12}>Month 12 </option>
                </select>
              </div> */}
            </div>
          </div>
          {/* <div className="sidebar-block open">
            <div className="sidebar-block-title d-flex alg-center jtf-between mb-16">
              <h4 className="heading heading-sidebar">Promotions</h4>
              <i className="fa-light fa-chevron-down" />
            </div>
            <div className="sidebar-block-content">
              <ul className="custom-nav">
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="discount"
                      defaultValue={1}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Discount{" "}
                  </label>
                </li>
              </ul>
            </div>
          </div> */}
          {/* <div className="sidebar-block open">
            <div className="sidebar-block-title d-flex alg-center jtf-between mb-16">
              <h4 className="heading heading-sidebar">Expense</h4>
              <i className="fa-light fa-chevron-down" />
            </div>
            <div className="sidebar-block-content">
              <div className="price-filter">
                <div className="search-group">
                  <div className="search-item">
                    <div
                      id="priceRange"
                      className="mt-16 ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "0%" }}
                      />
                      <span
                        tabIndex={0}
                        className="ui-slider-handle ui-corner-all ui-state-default"
                        style={{ left: "100%" }}
                      />
                    </div>
                    <div className="d-flex mt-16">
                      <input
                        type="text"
                        name="min"
                        className="sliderValue fromPrice"
                        data-index={0}
                        data-value={0}
                        defaultValue={0}
                      />
                      - &nbsp;&nbsp;&nbsp;
                      <input
                        type="text"
                        name="max"
                        className="sliderValue toPrice"
                        data-index={1}
                        data-value={10000000}
                        defaultValue={10000000}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="sidebar-block open">
            <div className="sidebar-block-title d-flex alg-center jtf-between mb-16">
              <h4 className="heading heading-sidebar">Destinations </h4>
              <i className="fa-light fa-chevron-down" />
            </div>
            <div className="sidebar-block-content">
              <ul className="custom-nav">
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="destinations[]"
                      defaultValue={48}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Quảng Nam ( 75 )
                  </label>
                </li>
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="destinations[]"
                      defaultValue={54}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Tay Giang ( 30 )
                  </label>
                </li>
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="destinations[]"
                      defaultValue={63}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Quang Nam Province ( 45 )
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="sidebar-block open">
            <div className="sidebar-block-title d-flex alg-center jtf-between mb-16">
              <h4 className="heading heading-sidebar">Activity </h4>
              <i className="fa-light fa-chevron-down" />
            </div>
            <div className="sidebar-block-content">
              <ul className="custom-nav">
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="activitys[]"
                      defaultValue={37}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Trekking ( 75 )
                  </label>
                </li>
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="activitys[]"
                      defaultValue={53}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Trekking ( 75 )
                  </label>
                </li>
              </ul>
            </div>
          </div>
          {/*  */}
          <div className="sidebar-block open">
            <div className="sidebar-block-title d-flex alg-center jtf-between mb-16">
              <h4 className="heading heading-sidebar">Level of difficult </h4>
              <i className="fa-light fa-chevron-down" />
            </div>
            <div className="sidebar-block-content">
              <ul className="custom-nav">
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="level[]"
                      defaultValue={38}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Khám phá - 6/10 ( 75 )
                  </label>
                </li>
                <li>
                  <label className="mark-checkbox">
                    <input
                      type="checkbox"
                      name="level[]"
                      defaultValue={55}
                      onchange="this.form.submit()"
                    />
                    <span className="fake-checked" />
                    Difficulty Level (6/10) ( 75 )
                  </label>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToursFilter;

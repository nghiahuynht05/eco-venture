import React from "react";

import CustomItem from "./nav/custom.nav.item";
import CustomItinerary from "./nav/custom.journey";
import CustomQA from "./nav/custom.qa";
import TourImages from "./nav/custom.images";

import imageNav from "../../data/tour.nav";

function ToursDetail({ transation, navText, idTag }) {
  return (
    <div className="region region-content">
      <section id="block-system-main" className="block block-system clearfix">
        <main className="main" id="main">
          <div className="warpper-content">
            {/* banner */}
            <div className="banner">
              <div className="banner-container">
                <div className="main-slider">
                  <div className="owl-carousel owl-theme slider-banner owl-loaded owl-drag">
                    <div className="owl-stage-outer">
                      <div className="owl-stage" style={{}}>
                        <div
                          className="owl-item cloned"
                          style={{ width: "1905px" }}>
                          <div className="item">
                            <div className="img-banner">
                              <img
                                src="https://klangadventure.com/sites/default/files/file/image/baner_tour_ua_3_0.png"
                                alt=""
                              />
                            </div>
                            {/* txt-banner */}
                            <div className="txt-banner">
                              <div className=" container">
                                <div className="content-txt-banner">
                                  <h3 className="heading">
                                    Trekking - Conquering moss forest and K’lang
                                    Peak in 2 days
                                  </h3>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.banner */}
            {/* main-content */}
            <div className="main-content">
              <div className="page destination-detail-page">
                <div className="page-container">
                  <div className="page-inner">
                    {/* tour-introduce */}
                    <div className="destination-introduce page-introduce">
                      <div className="container">
                        <div className="page-introduce-content">
                          <div className="page-introduce-item">
                            <label htmlFor>Destinations </label>
                            <div>Quang Nam Province </div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Code tour </label>
                            <div>KL05 </div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Time </label>
                            <div>2 days 1 night </div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Activities </label>
                            <div>Trekking </div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Level of difficult </label>
                            <div>Difficulty Level (6/10) </div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Expense</label>
                            <div>0 VND</div>
                          </div>
                          <div className="page-introduce-item d-flex flex-column align-items-center">
                            <a
                              href="#schedule-destination"
                              className="btn brd-non bg-blue radius-4 d-flex alg-center gap-8 txt-white">
                              <span className="icon">
                                <i className="fa-regular fa-calendar-week" />
                              </span>
                              <span>Choose date</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* breadcrumb */}
                    <div className="breadcrumb-page">
                      <div className="container">
                        <ul className="custom-nav breadcrumb">
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <span>
                              Trekking - Conquering moss forest and K’lang Peak
                              in 2 days{" "}
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* page-content */}
                    <div className="page-content mt-16 ">
                      <div className="sec-container container">
                        <div className="destination-content-detial">
                          <div className="row">
                            {/* left */}
                            <div className="col-md-3 sticky-top">
                              <div className="img-map-destination">
                                <img
                                  src="https://klangadventure.com/sites/default/files/file/image/kl02-01_2_2.jpg"
                                  alt=""
                                />
                              </div>
                              <div className="link-destination-detail">
                                <ul className="custom-nav">
                                  {imageNav.map((url, index) => (
                                    <CustomItem
                                      imgURL={url}
                                      text={navText[index]}
                                      id={idTag[index]}
                                      ></CustomItem>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            {/* right */}
                            <div className="col-md-9">
                              <div className="descriptions content-descriptions">
                                <div
                                  id="describe-destination"
                                  className="description-item">
                                  <p>
                                    This is an abbreviated itinerary with the
                                    shortest time so that trekkers who love
                                    nature and like challenges but don't have
                                    much time can reach the top of Klang and
                                    explore the most wonderful points of this
                                    mysterious mountain.&nbsp;K'lang Peak,
                                    standing at 2000 meters in Tay Giang,
                                    vividly brings to life the scenes from the
                                    movie Avatar with its lush moss forest
                                    stretching from the height of 1500 meters to
                                    the summit. This location also boasts the
                                    largest ancient rhododendron forest in
                                    Vietnam. From March to June, the
                                    rhododendrons bloom brilliantly, creating
                                    stunning white flower streaks amidst the
                                    green forest that cannot be found anywhere
                                    else.
                                  </p>
                                  <p>
                                    <span>&nbsp;</span>
                                  </p>{" "}
                                </div>
                                <div
                                  id="summary-destination"
                                  className="description-item">
                                  <div className="description-item-title">
                                    <span className="heading heading-descriptions">
                                      Summary
                                    </span>
                                  </div>
                                  <div className="description-item-content">
                                    <div className="kl-synop">
                                      <div className="kl-synop-item">
                                        <ul className="custom-nav">
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-1.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Start point:</b>
                                              <span>Da Nang city</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-2.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Destination:</b>
                                              <span>Quang Nam Province</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-1.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Duration:</b>
                                              <span>2 days 1 night</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-3.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Activities:</b>
                                              <span>Trekking</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-4.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Min:</b>
                                              <span>5</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-5.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Ideal time:</b>
                                              <span>January - September</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-6.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Max:</b>
                                              <span>15</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="/sites/all/themes/cassiopeia_theme/img/icon/summary-destination-7.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Difficulty level:</b>
                                              <span>
                                                Difficulty Level (6/10)
                                              </span>
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <TourImages images={transation}></TourImages>
                                <CustomItinerary
                                  journey={transation}></CustomItinerary>
                                <div
                                  id="tour-destination"
                                  className="description-item">
                                  <div className="description-item-title">
                                    <span className="heading heading-descriptions">
                                      Tour information
                                    </span>
                                  </div>
                                  <div className="description-item-content">
                                    <div className="kl-tour-information">
                                      <p>
                                        <span data-cke-copybin-start={1}>
                                          ​
                                        </span>
                                      </p>
                                      <div
                                        className="cke_widget_wrapper cke_widget_block cke_widget_focused cke_widget_selected"
                                        data-cke-widget-wrapper={1}
                                        data-cke-filter="off"
                                        data-cke-display-name="div"
                                        data-cke-widget-id={0}
                                        data-mce-tabindex={-1}>
                                        <div
                                          className="btgrid cke_widget_element"
                                          data-cke-widget-data="%7B%22classes%22%3A%7B%22btgrid%22%3A1%7D%7D"
                                          data-cke-widget-upcasted={1}
                                          data-cke-widget-keep-attr={0}
                                          data-widget="btgrid">
                                          <div className="row row-1">
                                            <div className="col col-md-6">
                                              <div
                                                className="content cke_widget_editable"
                                                data-cke-widget-editable="content11"
                                                data-cke-enter-mode={1}>
                                                <p>
                                                  <strong>
                                                    Tour fees include:
                                                  </strong>
                                                </p>
                                                <ul>
                                                  <li>
                                                    <span>
                                                      Bus round trips: Tay Giang
                                                      – Abanh Village – Tay
                                                      Giang
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Camping on the mountain
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Tour guide and Porter
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Meals in the program
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Trekking equipment (refer
                                                      to the supplied equipment
                                                      from the K’lang Adventure
                                                      part)
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Drinking water every day
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Snacks for hiking days
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Welcome ceremony at the
                                                      village
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>Performance</span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Fees for environmental
                                                      protection and visit
                                                    </span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Travel Insurance
                                                    </span>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                            <div className="col col-md-6">
                                              <div
                                                className="content cke_widget_editable"
                                                data-cke-widget-editable="content12"
                                                data-cke-enter-mode={1}>
                                                <p>
                                                  <strong>
                                                    The tour fee does not
                                                    include:&nbsp;
                                                  </strong>
                                                </p>
                                                <ul>
                                                  <li>
                                                    <span>Fly ticket</span>
                                                  </li>
                                                  <li>
                                                    <span>Personal fees</span>
                                                  </li>
                                                  <li>
                                                    <span>Alcohol drinks</span>
                                                  </li>
                                                  <li>
                                                    <span>
                                                      Tip for a tour guide and a
                                                      porter
                                                    </span>
                                                    <span className="cke_reset cke_widget_drag_handler_container">
                                                      <span
                                                        data-cke-copybin-end={
                                                          1
                                                        }>
                                                        ​
                                                      </span>
                                                    </span>
                                                  </li>
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="schedule-destination"
                                  className="description-item">
                                  <div className="description-item-title">
                                    <span className="heading heading-descriptions">
                                      Schedule &amp; Price
                                    </span>
                                  </div>
                                  <div className="description-item-content">
                                    <div className="kl-start">
                                      <div className="form-select-time-start">
                                        <form
                                          action
                                          id="filter-search"
                                          className="d-flex alg-center gap-16">
                                          <p>
                                            Which was the month of their
                                            departure
                                          </p>
                                          <div className="form-group">
                                            <div className="input-group">
                                              <select
                                                name="month"
                                                className="form-control"
                                                data-id={52}
                                                onchange="this.form.submit()">
                                                <option value={0}>
                                                  Tất cả
                                                </option>
                                                <option value={3}>
                                                  Tháng 3
                                                </option>
                                                <option value={4}>
                                                  Tháng 4
                                                </option>
                                                <option value={5}>
                                                  Tháng 5
                                                </option>
                                                <option value={6}>
                                                  Tháng 6
                                                </option>
                                                <option value={7}>
                                                  Tháng 7
                                                </option>
                                                <option value={8}>
                                                  Tháng 8
                                                </option>
                                                <option value={9}>
                                                  Tháng 9
                                                </option>
                                                <option value={10}>
                                                  Tháng 10
                                                </option>
                                                <option value={11}>
                                                  Tháng 11
                                                </option>
                                                <option value={12}>
                                                  Tháng 12
                                                </option>
                                              </select>
                                            </div>
                                          </div>
                                        </form>
                                      </div>
                                      <div className="result-time-start">
                                        <div className="table-responsive">
                                          <table className="table table-bordered">
                                            <thead>
                                              <tr>
                                                <th data-title="departure-day">
                                                  Ngày khởi hành
                                                </th>
                                                <th data-title="last-day">
                                                  Ngày kết thúc
                                                </th>
                                                <th data-title>&nbsp;</th>
                                                <th data-title="cost-tour">
                                                  Chi phí chuyến đi
                                                </th>
                                                <th data-title />
                                              </tr>
                                            </thead>
                                            <tbody>
                                              <tr>
                                                <td data-title="departure-day">
                                                  08/03/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  09/03/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1989"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  15/03/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  16/03/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1990"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  22/03/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  23/03/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1991"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  29/03/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  30/03/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1992"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  05/04/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  06/04/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1993"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  12/04/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  13/04/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1994"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  19/04/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  20/04/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1995"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  26/04/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  27/04/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1996"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  03/05/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  04/05/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1997"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  10/05/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  11/05/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1998"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  17/05/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  18/05/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/1999"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  24/05/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  25/05/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2000"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  31/05/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  01/06/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2001"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  07/06/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  08/06/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2002"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  14/06/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  15/06/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2003"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  21/06/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  22/06/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2004"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  28/06/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  29/06/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2005"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  05/07/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  06/07/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2006"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  12/07/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  13/07/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2007"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  19/07/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  20/07/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2008"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  26/07/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  27/07/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2009"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  02/08/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  03/08/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2010"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  09/08/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  10/08/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2011"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  16/08/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  17/08/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2012"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  23/08/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  24/08/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2013"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  30/08/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  31/08/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2014"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  06/09/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  07/09/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2015"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  13/09/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  14/09/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2016"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  20/09/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  21/09/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2017"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                              <tr>
                                                <td data-title="departure-day">
                                                  27/09/2025{" "}
                                                </td>
                                                <td data-title="last-day">
                                                  28/09/2025{" "}
                                                </td>
                                                <td data-title="status">
                                                  <span className="clr-success">
                                                    Còn chỗ{" "}
                                                  </span>
                                                </td>
                                                <td data-title="cost-tour">
                                                  <b>0 VND</b>
                                                </td>
                                                <td>
                                                  <a
                                                    href="/en/booking/tour/52/schema/2018"
                                                    className="btn brd-none bg-blue radius-4 txt-white">
                                                    Book Now{" "}
                                                  </a>
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="equipment-destination"
                                  className="description-item">
                                  <div className="description-item-title">
                                    <span className="heading heading-descriptions">
                                      Equipment
                                    </span>
                                  </div>
                                  <div className="description-item-content">
                                    <div className="kl-tour-information">
                                      <div className="row">
                                        <p>
                                          <span data-cke-copybin-start={1}>
                                            ​
                                          </span>
                                        </p>
                                        <div
                                          className="cke_widget_wrapper cke_widget_block cke_widget_focused cke_widget_selected"
                                          data-cke-widget-wrapper={1}
                                          data-cke-filter="off"
                                          data-cke-display-name="div"
                                          data-cke-widget-id={0}>
                                          <div
                                            className="btgrid cke_widget_element"
                                            data-cke-widget-data="%7B%22classes%22%3A%7B%22btgrid%22%3A1%7D%7D"
                                            data-cke-widget-upcasted={1}
                                            data-cke-widget-keep-attr={0}
                                            data-widget="btgrid">
                                            <div className="row row-1">
                                              <div className="col col-md-4">
                                                <div
                                                  className="content cke_widget_editable"
                                                  data-cke-widget-editable="content11"
                                                  data-cke-enter-mode={1}>
                                                  <p>
                                                    <strong>
                                                      Equipment provided by
                                                      K'lang
                                                    </strong>
                                                  </p>
                                                  <ul>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Trekking Poles
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Trekking gloves
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Leech prevention
                                                        medicine
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Tents, Sleeping bags,
                                                        inflatable mattresses
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Tent’s light
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Chair, and table at the
                                                        campsite
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Bowl, plate, spoon,
                                                        fork, and cup
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        First aid bag (2 bags
                                                        are carried by tour
                                                        guides)
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="col col-md-4">
                                                <div
                                                  className="content cke_widget_editable"
                                                  data-cke-widget-editable="content12"
                                                  data-cke-enter-mode={1}>
                                                  <p>
                                                    <strong>
                                                      Personal essential stuff
                                                      that needs to be prepared:
                                                    </strong>
                                                  </p>
                                                  <ul>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Trekking backpack 10L -
                                                        20L
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Trekking, and walking
                                                        shoes
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Trekking socks
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Sweaters, and fleece
                                                        sweatshirts
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Cap or hat with a wide
                                                        brim
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Long pants
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Undergarments
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Poncho
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        ID card or Passport
                                                      </span>
                                                    </li>
                                                    <li
                                                      style={{
                                                        fontWeight: 400,
                                                      }}>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Water Bottle ( 1 liter)
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                              <div className="col col-md-4">
                                                <div
                                                  className="content cke_widget_editable"
                                                  data-cke-widget-editable="content13"
                                                  data-cke-enter-mode={1}>
                                                  <p>
                                                    <strong>Suggestion:</strong>
                                                  </p>
                                                  <ul>
                                                    <li>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Personal hygiene stuff
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Hand sanitizer
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Flashlight
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Multi-tool
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Backup batteries
                                                      </span>
                                                    </li>
                                                    <li>
                                                      <span
                                                        style={{
                                                          fontWeight: 400,
                                                        }}>
                                                        Mobile phone, camera
                                                      </span>
                                                    </li>
                                                  </ul>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                          <span className="cke_reset cke_widget_drag_handler_container">
                                            <img
                                              className="cke_reset cke_widget_drag_handler"
                                              src=""
                                              border={0}
                                              title="Nhấp chuột và kéo để di chuyển"
                                              width={15}
                                              height={15}
                                              data-cke-widget-drag-handler={1}
                                            />
                                          </span>
                                        </div>
                                        <p>
                                          <span data-cke-copybin-end={1}>
                                            ​
                                          </span>
                                        </p>{" "}
                                      </div>
                                    </div>
                                  </div>
                                  <div className="assess-note d-flex jtf-center mt-24">
                                    <a
                                      href="#"
                                      type="button"
                                      className="btn brd-none bg-blue radius-4 txt-white">
                                      <span>Tour equipment</span>
                                    </a>
                                  </div>
                                </div>
                                <div
                                  id="level-destination"
                                  className="description-item">
                                  <div className="description-item-title">
                                    <span className="heading heading-descriptions">
                                      Difficulty of operation
                                    </span>
                                  </div>
                                  <div className="description-item-content">
                                    <div className="kl-tour-information">
                                      <p>
                                        <span>
                                          <strong>
                                            Difficulty Level&nbsp;(6/10):
                                          </strong>
                                          &nbsp;Most people can participate in
                                          the tour, children from 6 years old
                                          and above also can join with parents.
                                          It will be easier and more comfortable
                                          for you to experience outdoor
                                          activities if you have good
                                          preparation for physical training
                                          before the trip. The duration of each
                                          trip is 2 days generally. With those
                                          trekking tours at this level, it might
                                          take 2 – 3 hours/day to do the trek
                                          with the quite easy terrain. At the
                                          same level, the kayaking and SUP
                                          tours, 2 – 3 hours/ days paddling with
                                          the large water surface, and plenty of
                                          times to take photos and rest as well.
                                        </span>
                                      </p>
                                      <table className="mce-item-table">
                                        <tbody>
                                          <tr>
                                            <td>
                                              <img
                                                src="http://www.umoveadventure.com/sites/default/files/modern_blur_effect_business_promotion_facebook_post_10.png"
                                                border={0}
                                                alt=""
                                                width={352}
                                                height={295}
                                              />
                                            </td>
                                            <td>
                                              <ul>
                                                <li>
                                                  <span>
                                                    Experience/ skills
                                                    requirement: Low
                                                  </span>
                                                </li>
                                                <li>
                                                  <span>
                                                    Physical requirement: Medium
                                                  </span>
                                                </li>
                                                <li>
                                                  <span>
                                                    Duration: 2 – 3 days
                                                  </span>
                                                </li>
                                                <li>
                                                  <span>
                                                    Outdoor activity duration: 4
                                                    – 6 hours/day
                                                  </span>
                                                </li>
                                                <li>
                                                  <span>
                                                    Children: From 12 years old
                                                    can participate.
                                                  </span>
                                                  &nbsp;<span>&nbsp;</span>
                                                </li>
                                              </ul>
                                              <p>&nbsp;</p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                      <p>&nbsp;</p>
                                      <p>
                                        <strong>
                                          Suggested physical training:
                                        </strong>
                                        <span>
                                          &nbsp;Practice running or kayaking/SUP
                                          1 - 2 weeks in advance. Run twice a
                                          week, each session 3 - 5km every
                                          night. Or paddling from 2- 3 times,
                                          each time is 5 km.
                                        </span>
                                      </p>{" "}
                                    </div>
                                  </div>
                                </div>
                                <div
                                  id="important-destination"
                                  className="description-item">
                                  <div className="description-item-title">
                                    <span className="heading heading-descriptions">
                                      Important Note{" "}
                                    </span>
                                  </div>
                                  <div className="description-item-content">
                                    <ol>
                                      <li>
                                        <strong>Travel insurance</strong>
                                      </li>
                                    </ol>
                                    <ul>
                                      <li>
                                        <span>
                                          K'lang Adventure uses service from Bảo
                                          Việt Insurance with a maximum
                                          insurance payout of 100 million
                                          VND/person/case.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          See the Bao Viet policy of
                                          insurance&nbsp;
                                          <a href="https://umoveadventure.com/sites/default/files/quytactvi_1.pdf">
                                            <strong>
                                              <img
                                                src="https://umove.com.vn/data/media/503/images/1-02-256.png"
                                                border={0}
                                                alt=""
                                                width={30}
                                                height={30}
                                              />
                                              Quy tắc bảo hiểm Bảo Việt.&nbsp;
                                            </strong>
                                            &nbsp;&nbsp;&nbsp;
                                          </a>
                                          &nbsp; &nbsp;&nbsp;
                                        </span>
                                      </li>
                                    </ul>
                                    <ol start={2}>
                                      <li>
                                        <strong>
                                          Refer to the postpose policy, and
                                          cancel the tour in the requirement and
                                          instructions at here
                                          <a
                                            href="https://umoveadventure.com/vi/thong-tin-huong-dan.html"
                                            data-cke-saved-href="https://umove.com.vn/huong-dan-thong-tin-poc12.html">
                                            <br />
                                          </a>
                                        </strong>
                                      </li>
                                      <li>
                                        <strong>
                                          Read and sign the exclude all
                                          liability before departing:
                                        </strong>
                                      </li>
                                    </ol>
                                    <ul>
                                      <li>
                                        <span>
                                          The customers who buy adventure tours
                                          from K'lang Adventure have enough
                                          awareness about the level of challenge
                                          as well as other physical challenges
                                          and other potential dangers during the
                                          tour. Hence the customer is asked to
                                          read and sign the Exclude all
                                          Liability form before departing. Find
                                          the form below and read it carefully.
                                        </span>
                                      </li>
                                    </ul>
                                    <p>
                                      <strong>
                                        &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp; &nbsp; &nbsp;
                                        <a href="https://umoveadventure.com/sites/default/files/quytactvi_1.pdf">
                                          <img
                                            src="https://umove.com.vn/data/media/503/images/1-02-256.png"
                                            border={0}
                                            alt=""
                                            width={30}
                                            height={30}
                                          />
                                        </a>
                                        &nbsp;&nbsp;
                                        <a href="https://umoveadventure.com/sites/default/files/phieu_mien_tru_trach_nhiem_-_umove_adventure_0.pdf">
                                          &nbsp;&nbsp;Phiếu miễn trừ trách
                                          nhiệm.&nbsp;&nbsp;
                                        </a>
                                        &nbsp;&nbsp;&nbsp; &nbsp; &nbsp; &nbsp;
                                        &nbsp;&nbsp;
                                      </strong>
                                    </p>
                                    <ol start={4}>
                                      <li>
                                        <strong>Trekking Notes.</strong>
                                      </li>
                                    </ol>
                                    <ul>
                                      <li>
                                        <span>
                                          In two days of trekking at Do Quyen
                                          Peak, every day on average, we take
                                          6-8km on the clear trail (many people
                                          use). The trekking path has a high
                                          elevation, especially a steep part of
                                          almost 1km at the mountain feet, hence
                                          for those with less physical exercise
                                          will be challenging. For those
                                          terrains, we need to have trekking
                                          shoes that have high-quality adhesion
                                          to hiking. Moreover, during the first
                                          trekking part, we had time to cross
                                          the stream. If the water level is
                                          high, we can take off our shoes to
                                          cross to avoid getting the shoes wet.
                                          We could bring sandals to cross the
                                          stream and the campsite.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          The steepness of K’lang Mountain is
                                          large, so trekking downhill will
                                          create a huge force on the knees, We
                                          should do the knees bandage to support
                                          the knees if your knees are weak.
                                        </span>
                                      </li>
                                    </ul>
                                    <ol start={5}>
                                      <li>
                                        <strong>Food and drink</strong>
                                      </li>
                                    </ol>
                                    <ul>
                                      <li>
                                        <span>
                                          All meals in the forest are quite
                                          simple; however, they are rich in
                                          nutrition and bring the unique taste
                                          of that local. All the main meals
                                          including chicken or pork grilled,
                                          pork cooked with jungle vegetables,
                                          boiled jungle vegetables or stir fry,
                                          and fried egg are eaten with bamboo
                                          rice or sticky rice. Dessert is a
                                          popular fruit like oranges and
                                          watermelon. Breakfast is often instant
                                          noodles or cassava soup cooked with
                                          jungle vegetables.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          Daily drinking water is water bottles.
                                          During the K’lang trekking trip,
                                          besides the personal water that is
                                          brought by each person (around
                                          1L/person), a porter will carry a
                                          certain amount of water to drink for
                                          the next day.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          To limit the use of single-use
                                          plastic, we recommend that you bring a
                                          water bottle (reusable type) to refill
                                          water every day.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          Hot drinks such as coffee and tea are
                                          available for breakfast at the
                                          campsite
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          We recommend each of us prepare snacks
                                          on our own (biscuits, energy bars,
                                          chocolate,...) in case you need them.
                                        </span>
                                      </li>
                                    </ul>
                                    <ol start={6}>
                                      <li>
                                        <strong>Camping</strong>
                                      </li>
                                    </ol>
                                    <ul>
                                      <li>
                                        <span>
                                          Double tents (2 people), mattresses,
                                          and personal sleep bags are given at
                                          K’lang Peak.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          Each tent is given a light to use for
                                          each tent and for dinner time.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          At the campsite in K’lang Peak, each
                                          person has 20L to shower, so we need
                                          to save and consider the amount of
                                          water that we use.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          Toilet tent at the campsite. Digging a
                                          cathole as used for toileting and
                                          covering the hole after use.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          At the campsite, chairs, and tables
                                          are used for meal time and relaxation.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          Eating utensils will be provided at
                                          meal times during trekking.
                                        </span>
                                      </li>
                                    </ul>
                                    <ol start={7}>
                                      <li>
                                        <strong>
                                          Protecting the environment together
                                        </strong>
                                      </li>
                                    </ol>
                                    <ul>
                                      <li>
                                        <span>
                                          K'lang Adventure supports and
                                          practices Leave No Trace principles in
                                          each program and outdoor activities
                                          itself. We also encourage our
                                          customers and partners to apply to
                                          Leave No Trace principles when
                                          traveling in the outdoor environment.
                                          See details about the Leave No
                                          Trace&nbsp;
                                          <a
                                            href="https://umoveadventure.com/vi/leave-no-trace.html"
                                            target="_blank"
                                            rel="noopener noreferrer">
                                            tại đây
                                          </a>
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          In order to limit the use of
                                          single-use plastic, K'lang Adventure
                                          encourages each of us to prepare for
                                          ourselves a bottle of water with a 1L
                                          capacity for daily water refilling.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          On the tour, tourists comply with the
                                          instructions and regulations on
                                          environmental protection at the
                                          destination.
                                        </span>
                                      </li>
                                    </ul>
                                    <ol start={8}>
                                      <li>
                                        <span>&nbsp;</span>
                                        <strong>Medical assisstance</strong>
                                      </li>
                                    </ol>
                                    <ul>
                                      <li>
                                        <span>
                                          We only provide first aid during the
                                          tour and do not provide any oral
                                          medications so if you have health
                                          problems that require preventive
                                          medicine, please prepare for your own.
                                        </span>
                                      </li>
                                      <li>
                                        <span>
                                          If you have cardiovascular disease or
                                          bone and joint diseases (knees,
                                          ankles, shoulder joints, etc.), you
                                          should consult your doctor before
                                          deciding to join the trip.
                                        </span>
                                      </li>
                                    </ul>{" "}
                                  </div>
                                </div>
                                <CustomQA qa={transation}></CustomQA>
                                <div
                                  id="download-destination"
                                  className="description-item">
                                  <div className="description-item-content">
                                    <p className="text-center">
                                      <b>Tải tour bằng file pdf</b>
                                    </p>
                                    <div className="download-pdf">
                                      <img
                                        src="/sites/all/themes/cassiopeia_theme/img/icon/pdf-img.png"
                                        className="img-responsive"
                                        alt=""
                                      />
                                      <a
                                        className="btn brd-none bg-blue radius-4  txt-white"
                                        href="#"
                                        data-url="pdf">
                                        <span className="icon">
                                          <i className="fa-light fa-download" />
                                        </span>
                                        Download
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* /.main-content */}
          </div>
        </main>
      </section>
    </div>
  );
}
export default ToursDetail;

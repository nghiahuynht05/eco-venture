import React from "react";

import CustomItem from "./nav/custom.nav.item";
import CustomItinerary from "./nav/custom.journey";
import CustomQA from "./nav/custom.qa";
import CustomEquipment from "./nav/custome.equiment";
import TourImages from "./nav/custom.images";

import imageNav from "../../data/tour.nav";

function ToursDetail({ dataTours, navText, idTag }) {
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
                              <img src={dataTours.bannerImage} alt="" />
                            </div>
                            {/* txt-banner */}
                            <div className="txt-banner">
                              <div className=" container">
                                <div className="content-txt-banner">
                                  <h3 className="heading">
                                    {dataTours.tourName}
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
            <div id="describe-destination" className="main-content">
              <div className="page destination-detail-page">
                <div className="page-container">
                  <div className="page-inner">
                    <div className="destination-introduce page-introduce">
                      <div className="container">
                        <div className="page-introduce-content">
                          <div className="page-introduce-item">
                            <label htmlFor>Destinations </label>
                            <div>{dataTours.tourLocation}</div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Code tour </label>
                            <div>{dataTours.tourId}</div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Time </label>
                            <div>{dataTours.tourTime}</div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Activities </label>
                            {dataTours.activities.map((item) => (
                              <div>{item}</div>
                            ))}
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Level of difficult </label>
                            <div>{dataTours.level}</div>
                          </div>
                          <div className="page-introduce-item">
                            <label htmlFor>Expense</label>
                            <div>{dataTours.price}</div>
                          </div>
                          <div className="page-introduce-item d-flex flex-column align-items-center">
                            <a
                              href="#schedule-destination"
                              className="btn brd-non bg-blue radius-4 d-flex alg-center gap-8 txt-white">
                              <span className="icon">
                                <i className="fa-regular fa-calendar-week" />
                              </span>
                              <span>Book Now</span>
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
                            <a href="/home">Home</a>
                          </li>
                          <li>
                            <span>{dataTours.tourName}</span>
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
                                      id={idTag[index]}></CustomItem>
                                  ))}
                                </ul>
                              </div>
                            </div>
                            {/* right */}
                            <div className="col-md-9">
                              <div className="descriptions content-descriptions">
                                <div
                                  className="description-item">
                                  <p>{dataTours.tourDes}</p>
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
                                                  src="../tours/svg/summary-destination-1.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Start point:</b>
                                              <span>
                                                {dataTours.startLocation}
                                              </span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="../tours/svg/summary-destination-2.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Destination:</b>
                                              <span>
                                                {dataTours.endLocation}
                                              </span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  style={{ height: "16px" }}
                                                  src="../tours/svg/time-svgrepo-com.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Duration:</b>
                                              <span>{dataTours.tourTime}</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="../tours/svg/summary-destination-3.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Activities:</b>
                                              {dataTours.activities.map(
                                                (item) => (
                                                  <span>{item}</span>
                                                )
                                              )}
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="../tours/svg/summary-destination-4.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Min:</b>
                                              <span>{dataTours.seatsMin}</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="../tours/svg/summary-destination-5.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Ideal time:</b>
                                              <span>{dataTours.schedule}</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="../tours/svg/summary-destination-6.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Max:</b>
                                              <span>{dataTours.seatsMax}</span>
                                            </p>
                                          </li>
                                          <li>
                                            <p>
                                              <span className="d-flex alg-center jtf-center">
                                                <img
                                                  src="../tours/svg/summary-destination-7.svg"
                                                  alt=""
                                                />
                                              </span>
                                              <b>Difficulty level:</b>
                                              <span>{dataTours.level}</span>
                                            </p>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <TourImages images={dataTours}></TourImages>
                                <CustomItinerary
                                  journey={dataTours}></CustomItinerary>
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
                                                  {dataTours.scheduleList.free.map(
                                                    (item) => (
                                                      <li>
                                                        <span>{item}</span>
                                                      </li>
                                                    )
                                                  )}
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
                                                  {dataTours.scheduleList.charge.map(
                                                    (item) => (
                                                      <li>
                                                        <span>{item}</span>
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <CustomEquipment
                                  equipmentData={
                                    dataTours.equipment
                                  }></CustomEquipment>
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
                                {/* <CustomNote notesData={dataTours.notes}></CustomNote> */}
                                <CustomQA qa={dataTours}></CustomQA>
                                <div
                                  id="download-destination"
                                  className="description-item">
                                  <div className="description-item-content">
                                    <p className="text-center">
                                      <b>Tải tour bằng file pdf</b>
                                    </p>
                                    <div className="download-pdf">
                                      <img
                                        src="../tours/svg/pdf-img.png"
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

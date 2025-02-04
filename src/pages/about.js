import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "../modules/system/system.base.css";
import "../sites/all/themes/cassiopeia_theme/css/style.css";
// import "./sites/all/modules/contrib/date/date_repeat_field/date_repeat_field.css";
// import "./modules/field/theme/field.css";
// import "./modules/node/node.css";
// import "./sites/all/modules/contrib/views/css/views.css";
// import "./sites/all/modules/cassiopeia/js/libs/jquery-confirm/jquery-confirm.min.css";
// import "./sites/all/modules/contrib/ctools/css/ctools.css";
// import "./modules/locale/locale.css";
// import "./sites/all/libraries/fontawesome/fontawesome6/css/all.min.css";
// import "./sites/all/themes/cassiopeia_theme/js/lib/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";
import images from "../data/images";
import CustomSlider from "../components/custom.slider";
import CustomLogo from "../components/custom.logo";
// import "./sites/all/themes/cassiopeia_theme/js/lib/lightslider-master/dist/css/lightslider.css";
// import "./sites/all/themes/cassiopeia_theme/js/lib/lightGallery-master/dist/css/lightgallery.css";
// import "./sites/all/themes/cassiopeia_theme/js/lib/rateit/rateit.css";
// import "./sites/all/themes/cassiopeia_theme/css/font-awesome/css/all.css";
import "../sites/all/themes/cassiopeia_theme/css/ultils.css";
import "../sites/all/themes/cassiopeia_theme/css/alter.css";
// import "./sites/all/themes/cassiopeia_theme/css/loading-css.css";
// import "./sites/all/themes/cassiopeia_theme/css/template.css";
// import "./sites/all/themes/cassiopeia_theme/css/responsive.css";

function Home() {
  return (
    <div>
      <div id="skip-link">
        <a href="#main-content" className="element-invisible element-focusable">
          Nhảy đến nội dung
        </a>
      </div>
      <div className="wrapper-app">
        <header className="header " id="header">
          <div className="header-container">
            <div className="header-inner">
              <div className="header-logo">
                <CustomLogo></CustomLogo>
              </div>
              <div className="header-menu">
                <ul className="custom-nav">
                  <li className="first expanded active">
                    <a href="/vi" className="active">
                      EcoVenture
                      <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </a>
                    <ul>
                      <li className="first last leaf">
                        <a href="/vi/ve-chung-toi.html">Về chúng tôi</a>
                      </li>
                    </ul>
                  </li>
                  <li className="leaf">
                    <a href="/vi/tour/list">Chương trình Tour</a>
                  </li>
                  <li className="expanded">
                    <a href="/vi/experiences">
                      Trải nghiệm{" "}
                      <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </a>
                    <ul>
                      <li className="first leaf">
                        <a href="/vi/tay-giang.html">Tây Giang</a>
                      </li>
                      <li className="leaf">
                        <a href="/vi/mao-hiem-thu-thach.html">
                          Mạo hiểm &amp; thử thách
                        </a>
                      </li>
                      <li className="leaf">
                        <a href="/vi/van-hoa-bao-ton.html">
                          Văn hóa &amp; Bảo tồn
                        </a>
                      </li>
                      <li className="last leaf">
                        <a href="/vi/su-kien.html">Sự kiện</a>
                      </li>
                    </ul>
                  </li>
                  <li className="leaf">
                    <a href="/vi/press">Tin tức</a>
                  </li>
                  <li className="leaf">
                    <a href="/vi/sustainability">Phát triển bền vững</a>
                  </li>
                  <li className="last leaf">
                    <a href="/vi/contact">Liên hệ</a>
                  </li>
                </ul>
              </div>
              <div className="header-right d-flex alg-center gap-16">
                <div className="icon-language">
                  <div className="dropdown">
                    <button
                      id="dLabel"
                      type="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false">
                      <span>VI</span>
                      <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton">
                      <li className="en first">
                        <a
                          href="./en.html"
                          className="language-link"
                          xmlLang="en">
                          English
                        </a>
                      </li>
                      <li className="vi last active">
                        <a
                          href="./index.html"
                          className="language-link active"
                          xmlLang="vi">
                          Tiếng Việt
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="icon-user">
                  <a href="/tour/list" className="btn text-uppercase radius-2">
                    Book now
                  </a>
                </div>
              </div>
              <div className="header-menu-mb open-close-el">
                <span />
              </div>
            </div>
          </div>
        </header>
        <div className="region region-content">
          <section
            id="block-system-main"
            className="block block-system clearfix">
            <main className="main" id="main">
              <div className="warpper-content">
                {/* banner */}
                <div className="banner">
                  <div className="banner-container">
                    <div className="main-slider">
                      {/* slider */}
                      <div className="img-banner">
                        <img
                          src="https://www.klangadventure.com/sites/default/files/file/image/banner_4_6.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.banner */}
                {/* main-content */}
                <div className="main-content">
                  <div className="page about-us-page">
                    <div className="page-container">
                      <div className="page-inner">
                        <section className="sec sec-img-about-us">
                          <div className="sec-container container">
                            <div className="sec-header">
                              <h2 className="heading heading-secondary text-center">
                                The story about K'Lang{" "}
                              </h2>
                              <div className="heading sub-heading text-center text-center">
                                <p style={{ textAlign: "center" }}>
                                  <span id="docs-internal-guid-085060f0-7fff-f6be-cad1-ef3e44272920">
                                    <span>
                                      K’lang Adventure founded in 2023 is a
                                      subsidiary of TAAD Group.&nbsp; We aim to
                                      become a leading travel and tourism
                                      enterprises in the Southeast Asian,
                                      developing sustainable tourism -
                                      experiential tourism.
                                    </span>{" "}
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="sec-content">
                              <div className="img-about-us-top">
                                <img
                                  src="https://www.klangadventure.com/sites/default/files/styles/style_1140x314/public/file/image/rectangle_3464070_10.png?itok=IBqPO0HF"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="sec sec-content-about-us bg-img-fingerprint-white">
                          <div className="sec-container container">
                            <div className="sec-content-about-us-inner">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="content-about-us">
                                    <h2 className="heading heading-secondary mb-24 pl-24 pr-24">
                                      Về TAAD{" "}
                                    </h2>
                                    <p
                                      style={{ textAlign: "justify" }}
                                      dir="ltr">
                                      <span id="docs-internal-guid-2c5dcc0d-7fff-30f2-9241-66839e58d30f">
                                        <span>
                                          During 13 years of establishment and
                                          development, we are headquartered in
                                          Vietnam, the US, and Mexico, with 5
                                          large textile factories and 7 member
                                          companies, TAAD Group has become a
                                          reputable partner in these fields:
                                          Fashion &amp; Garment Export, Real
                                          Estate, Transportation, Travel
                                          Services. Oriented to a strategy of
                                          sustainable development and continuous
                                          innovation, we are always confident in
                                          providing our partners and customers
                                          with the most complete and perfect
                                          products, services and experiences.
                                        </span>
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="slider-cover">
                                    <div className="owl-carousel owl-theme slider-about-us">
                                      <div className="item">
                                        <div className="img-slider-about-us">
                                          <img
                                            src="https://www.klangadventure.com/sites/default/files/styles/style_555x448/public/file/image/img-about-us-5_0.png?itok=jZWFwKIr"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="sec sec-content-about-us sec-reverse">
                          <div className="sec-container container">
                            <div className="sec-content-about-us-inner">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="content-about-us">
                                    <h2 className="heading heading-secondary mb-24 pl-24 pr-24">
                                      K'LANG{" "}
                                    </h2>
                                    <p dir="ltr">
                                      <span>
                                        Choosing Tay Giang, Quang Nam - The land
                                        of original beauty to implement a
                                        project to develop sustainable tourism
                                        and recover the cultural identity of the
                                        Cotu people, TAAD Group decided to
                                        establish Trade Investment Joint Stock
                                        Company. K'lang Adventure Tourism
                                        Development and Trade.
                                      </span>
                                    </p>
                                    <p dir="ltr">
                                      <strong>
                                        Our investment fields include:
                                      </strong>
                                    </p>
                                    <p dir="ltr">
                                      <strong>1. Hotel</strong>
                                    </p>
                                    <ul>
                                      <li dir="ltr">
                                        <strong>Accommodation:&nbsp;</strong>
                                      </li>
                                    </ul>
                                    <p style={{ marginLeft: "30px" }} dir="ltr">
                                      <span>
                                        K'lang Retreat Luxury Eco-Resort Resort
                                      </span>
                                    </p>
                                    <p style={{ marginLeft: "30px" }} dir="ltr">
                                      <span>Azaleas Glamping Resort</span>
                                    </p>
                                    <p style={{ marginLeft: "30px" }} dir="ltr">
                                      <span>Community tourism</span>
                                    </p>
                                    <ul>
                                      <li dir="ltr">
                                        <strong>Homestay</strong>
                                      </li>
                                    </ul>
                                    <p dir="ltr">
                                      <strong>2. Travel:</strong>
                                    </p>
                                    <ul>
                                      <li dir="ltr">
                                        <span>
                                          Adventure travel to explore nature
                                        </span>
                                      </li>
                                      <li dir="ltr">
                                        <span>
                                          Travel to experience cultural
                                          discovery
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="slider-cover">
                                    <div className="owl-carousel owl-theme slider-about-us">
                                      <div className="item">
                                        <div className="img-slider-about-us">
                                          <img
                                            src="https://www.klangadventure.com/sites/default/files/styles/style_555x448/public/file/image/our_core_value_-_about_us_page_0.png?itok=c9ODI2gu"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <section className="sec sec-content-about-us bg-img-fingerprint-white">
                          <div className="sec-container container">
                            <div className="sec-content-about-us-inner">
                              <div className="row">
                                <div className="col-md-6">
                                  <div className="content-about-us">
                                    <h2 className="heading heading-secondary mb-24 pl-24 pr-24">
                                      TẦM NHÌN, SỨ MỆNH{" "}
                                    </h2>
                                    <p style={{ textAlign: "justify" }}>
                                      <span>
                                        Định hướng trở thành doanh nghiệp phát
                                        triển Du lịch Bền vững – Du lịch Trải
                                        nghiệm mang tầm cỡ khu vực Tứ Giác Đông
                                        Nam Á. K’lang Adventure sẽ đồng hành
                                        trong sứ mệnh đưa Tây Giang trở thành
                                        một trong những điểm đến thu hút khách
                                        du lịch trong và ngoài nước về du lịch
                                        xanh mang đậm chất liệu văn hóa bản địa
                                        đặc sắc hàng đầu Quảng Nam.
                                      </span>
                                    </p>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="slider-cover">
                                    <div className="owl-carousel owl-theme slider-about-us">
                                      <div className="item">
                                        <div className="img-slider-about-us">
                                          <img
                                            src="https://www.klangadventure.com/sites/default/files/styles/style_555x448/public/file/image/our_mission_-_about_us_-_page_0.png?itok=Q_7zQJtb"
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* commitment */}
                        <section className="sec sec-commitment">
                          <div className="sec-container container">
                            <div className="sec-header">
                              <h2 className="heading heading-primary text-center">
                                Our Commitment to Sustainability{" "}
                              </h2>
                              <div className="heading sub-heading">
                                <p style={{ textAlign: "center" }}>
                                  <span>
                                    This season – as the first blossoms of
                                    spring spark feelings of joy and renewal -
                                    we celebrate the{" "}
                                  </span>
                                </p>
                                <p style={{ textAlign: "center" }}>
                                  <span>
                                    exceptional natural environments across the
                                    globe that K’Lang Adventure calls home.
                                  </span>
                                </p>
                              </div>
                            </div>
                            <div className="sec-content">
                              <div className="row">
                                <div className="col-md-4">
                                  <div className="box-full-img">
                                    <div className="box-img">
                                      <a href="/en/environment.html">
                                        <img
                                          src="https://www.klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/moi_truong_0.png?itok=yrxkflXi"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="box-info box-full-img-center">
                                      <div className="info">
                                        <img
                                          src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png"
                                          alt=""
                                        />
                                        <h3 className="title">Environment</h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="box-full-img">
                                    <div className="box-img">
                                      <a href="/en/government.html">
                                        <img
                                          src="https://www.klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/quan_tri_0.png?itok=VL6rJu9V"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="box-info box-full-img-center">
                                      <div className="info">
                                        <img
                                          src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png"
                                          alt=""
                                        />
                                        <h3 className="title">Government</h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-md-4">
                                  <div className="box-full-img">
                                    <div className="box-img">
                                      <a href="/en/social.html">
                                        <img
                                          src="https://www.klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/xa_hoi_0.png?itok=P_PDOaCT"
                                          alt=""
                                        />
                                      </a>
                                    </div>
                                    <div className="box-info box-full-img-center">
                                      <div className="info">
                                        <img
                                          src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png"
                                          alt=""
                                        />
                                        <h3 className="title">Social</h3>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        {/* commitment */}
                      </div>
                    </div>
                  </div>
                </div>
                {/* /.main-content */}
              </div>
            </main>
          </section>
        </div>

        <div className="popup-form-login">
          <div
            id="login"
            className="modal fade myModal"
            role="dialog"
            style={{ display: "none" }}>
            <div className="modal-dialog modal-giant">
              <div className="modal-content">
                <div className="modal-body">
                  <div className="form-login">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">
                        <i className="fa-light fa-x" />
                      </span>
                    </button>
                    <div className="box-form-login">
                      <div className="content-form-login">
                        <form
                          action="/"
                          method="post"
                          id="user-login"
                          acceptCharset="UTF-8">
                          <div>
                            <h4 className="heading">
                              Please login to access the full Agent Hub
                            </h4>
                            <div className="row">
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label htmlFor>Email *</label>
                                  <div className="form-item form-item-name form-type-textfield form-group">
                                    <input
                                      placeholder="Tên đăng nhập"
                                      className="form-control form-text required"
                                      title="Hãy điền tên đăng nhập ở K&#039;lang Adventure của bạn."
                                      data-toggle="tooltip"
                                      type="text"
                                      id="edit-name--2"
                                      name="name"
                                      defaultValue
                                      size={60}
                                      maxLength={60}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <div className="form-group">
                                  <label htmlFor>Password *</label>
                                  <div className="form-item form-item-pass form-type-password form-group">
                                    <input
                                      placeholder="Mật khẩu"
                                      className="form-control form-text required"
                                      title="Điền mật khẩu đi kèm với tên đăng nhập."
                                      data-toggle="tooltip"
                                      type="password"
                                      id="edit-pass--2"
                                      name="pass"
                                      size={60}
                                      maxLength={128}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-4">
                                <button
                                  className="btn btn-long bg-blue brd-none radius-4 txt-white mt-32 btn btn-primary form-submit"
                                  type="submit"
                                  id="edit-submit--2"
                                  name="op"
                                  value="Đăng nhập">
                                  Đăng nhập
                                </button>
                              </div>
                              <div className="col-md-12">
                                <div className="form-checkbox d-flex alg-center gap-16 mb-16">
                                  <label className="mark-checkbox">
                                    <input type="checkbox" name="discount" />
                                    <span className="fake-checked" />
                                    <span>Remember me</span>
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                width: 0,
                                height: 0,
                                overflow: "hidden",
                                opacity: 0,
                              }}>
                              <input
                                type="hidden"
                                name="form_build_id"
                                defaultValue="form-P3DawrdunF6mYqpg-F_fzbaZeWNPsChyK9Ud-Px2NHY"
                              />
                              <input
                                type="hidden"
                                name="form_id"
                                defaultValue="user_login"
                              />
                              <div
                                className="form-actions form-wrapper form-group"
                                id="edit-actions--2"
                              />
                            </div>
                          </div>
                        </form>
                        <div className="form-register">
                          <div className="title-form-register gap-16 mb-16">
                            <h4 className="heading mg-0">Not registered?</h4>
                            <span>Please complete the form below</span>
                            <span>
                              <i className="fa-regular fa-arrow-down" />
                            </span>
                          </div>
                          <form
                            className="user-info-from-cookie"
                            encType="multipart/form-data"
                            action="/"
                            method="post"
                            id="user-register-form"
                            acceptCharset="UTF-8">
                            <div>
                              <div
                                id="edit-account"
                                className="form-wrapper form-group">
                                <div className="form-item form-item-name form-type-textfield form-group">
                                  <label
                                    className="control-label"
                                    htmlFor="edit-name--3">
                                    Tên người dùng{" "}
                                    <span
                                      className="form-required"
                                      title="Trường dữ liệu này là bắt buộc.">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    className="username form-control form-text required"
                                    title="Cho phép nhập khoảng trắng; không chấp nhập các dấu câu, ngoại trừ dấu phẩy, dấu gạch ngang, dấu gạch dưới và dấu nháy."
                                    data-toggle="tooltip"
                                    type="text"
                                    id="edit-name--3"
                                    name="name"
                                    defaultValue
                                    size={60}
                                    maxLength={60}
                                  />
                                </div>
                                <div className="form-item form-item-mail form-type-textfield form-group">
                                  <label
                                    className="control-label"
                                    htmlFor="edit-mail">
                                    Địa chỉ e-mail
                                    <span
                                      className="form-required"
                                      title="Trường dữ liệu này là bắt buộc.">
                                      *
                                    </span>
                                  </label>
                                  <input
                                    className="form-control form-text required"
                                    type="text"
                                    id="edit-mail"
                                    name="mail"
                                    defaultValue
                                    size={60}
                                    maxLength={254}
                                  />
                                  <div className="help-block">
                                    Địa chỉ thư điện tử của bạn. Tất cả thư điện
                                    tử của hệ thống sẽ được gửi đến địa chỉ thư
                                    điện tử này. Địa chỉ thư điện tử sẽ không
                                    được phổ biến ra ngoài và chỉ được sử dụng
                                    nếu bạn muốn nhận mật khẩu mới, nhận tin tức
                                    hoặc thông báo qua thư điện tử.
                                  </div>
                                </div>
                                <input
                                  type="hidden"
                                  name="timezone"
                                  defaultValue="Asia/Ho_Chi_Minh"
                                />
                              </div>
                              <input
                                type="hidden"
                                name="form_build_id"
                                defaultValue="form-pYPqN0C5XlSkW8GvJSWxqylYv_Oh8l_kN2gkpU2BMPs"
                              />
                              <input
                                type="hidden"
                                name="form_id"
                                defaultValue="user_register_form"
                              />
                              <div
                                className="form-actions form-wrapper form-group"
                                id="edit-actions--3">
                                <button
                                  type="submit"
                                  id="edit-submit--3"
                                  name="op"
                                  value="Tạo tài khoản mới"
                                  className="btn btn-success form-submit">
                                  Tạo tài khoản mới
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer" id="footer">
          <div className="footer-container">
            <div className="footer-inner">
              {/* footer-top */}
              <div className="footer-top bg-gray">
                <div className="container">
                  <div className="footer-top-inner d-flex jtf-between alg-center">
                    <div className="txt-footer-top">
                      <h4>Subscribe to our newsletter!</h4>
                      <span>Stay in touch and we'll keep you up to speed!</span>
                    </div>
                    <div className="form-footer-top">
                      <form action>
                        <div className="inp-footer">
                          <input
                            type="email"
                            name="content"
                            id="content"
                            placeholder="Enter your email"
                          />
                          <button
                            type="submit"
                            className="btn brd-non bg-blue radius-4  txt-white">
                            <span>Send</span>
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* footer-main */}
              <div className="footer-main">
                <div className="container">
                  <div className="footer-main-inner">
                    {/* list-footer */}
                    <div className="list-footer">
                      <div className="item-list-footer">
                        <h3>Informations</h3>
                        <ul className="custom-nav">
                          <li className="first leaf">
                            <a href="/en/contact">Contact us</a>
                          </li>
                          <li className="last leaf">
                            <a href="/en/gallery">Gallery</a>
                          </li>
                        </ul>{" "}
                      </div>
                      <div className="item-list-footer">
                        <h3>Experience</h3>
                        <ul className="custom-nav">
                          <li className="first leaf">
                            <a href="/en/taxonomy/term/13">Văn hóa</a>
                          </li>
                          <li className="leaf">
                            <a href="/en/taxonomy/term/12">
                              Adventure &amp; Challenge
                            </a>
                          </li>
                          <li className="leaf">
                            <a href="/en/taxonomy/term/14">Sự kiện</a>
                          </li>
                          <li className="last leaf">
                            <a href="/en/taxonomy/term/46">Tay Giang</a>
                          </li>
                        </ul>{" "}
                      </div>
                      <div className="item-list-footer">
                        <h3>News</h3>
                      </div>
                      <div className="item-list-footer">
                        <h3>Contact</h3>
                        <ul className="custom-nav">
                          <li>
                            <a href="#">
                              <span>General Information:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Press relations:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Careers:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Social media &amp; Influencers:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <span>Sales:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* copy-right */}
                    <div className="copy-right d-flex alg-center jtf-between pt-24 pb-24">
                      <span>© 2023. All Rights Reserved</span>
                      <div className="icon-contact">
                        <ul className="custom-nav">
                          <li>
                            <a href="https://www.facebook.com/KlangAdventure">
                              <span>
                                <i className="fa-brands fa-facebook-f" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/klang.adventure?fbclid=IwAR36y3jjAAtqILkL7hESKoFsXceSzdJJw1mAkGsf2C3zYUHPf65jGf2d2Aw">
                              <span>
                                <i className="fa-brands fa-instagram" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href>
                              <span>
                                <i className="fa-brands fa-youtube" />
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="https://www.instagram.com/klang.adventure?fbclid=IwAR36y3jjAAtqILkL7hESKoFsXceSzdJJw1mAkGsf2C3zYUHPf65jGf2d2Aw">
                              <span>
                                <i className="fa-brands fa-linkedin-in" />
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Home;

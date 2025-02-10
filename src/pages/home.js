import React, { useContext, useEffect, useState } from "react";
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
import LanguageSelector from "../components/custom.language";
import { LanguageContext } from "../context/languageContext";

// import "../sites/all/themes/cassiopeia_theme/js/lib/lightslider-master/dist/css/lightslider.css";
// import "../sites/all/themes/cassiopeia_theme/js/lib/lightGallery-master/dist/css/lightgallery.css";
// import "../sites/all/themes/cassiopeia_theme/js/lib/rateit/rateit.css";
// import "../sites/all/themes/cassiopeia_theme/css/font-awesome/css/all.css";
import "../sites/all/themes/cassiopeia_theme/css/ultils.css";
import "../sites/all/themes/cassiopeia_theme/css/alter.css";
// import "../sites/all/themes/cassiopeia_theme/css/loading-css.css";
// import "../sites/all/themes/cassiopeia_theme/css/template.css";
import "../sites/all/themes/cassiopeia_theme/css/responsive.css";

const Home = () => {
  const { translations } = useContext(LanguageContext);
  const [setContent] = useState({});
  
  useEffect(() => {
    import(`../locales/${translations}.json`)
      .then((module) => {
        setContent(module.default);
      })
      .catch((error) => console.error("Error loading language file:", error));
  }, [translations]);
  return (
    <div>
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
                    <a href="/" className="active">
                      EcoVenture
                      <span>
                        <FontAwesomeIcon icon={faChevronDown} />
                      </span>
                    </a>
                    <ul>
                      <li className="first last leaf">
                        <a href="/about">{translations.home.header.story}</a>
                      </li>
                    </ul>
                  </li>
                  <li className="leaf">
                    <a href="/vi/tour/list">{translations.home.header.tours}</a>
                  </li>
                  <li className="expanded">
                    <a href="/vi/experiences">
                      {translations.home.header.experiences}
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
                <LanguageSelector></LanguageSelector>
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
        <main className="main" id="main">
          <div className="warpper-content">
            <div className="banner">
              <div className="banner-container">
                <div className="main-slider">
                  <CustomSlider>
                    {images.map((image, index) => {
                      const bannerData = translations.home?.banner || [];
                      return (
                        <img
                          key={index}
                          src={image.imgURL}
                          alt={image.imgAlt}
                          title={bannerData[index]?.title || ""}
                          description={bannerData[index]?.description || ""}
                        />
                      );
                    })}
                  </CustomSlider>
                </div>
              </div>
            </div>
            <div className="main-content">
              <div className="page home-page">
                <div className="page-container">
                  <div className="page-inner">
                    <section className="sec sec-introduce">
                      <div className="sec-container container">
                        <div className="box-home-introduce d-flex gap-24">
                          <div className="video-home-introduce">
                            <div className="img-video-home-introduce">
                              <img
                                src="https://klangadventure.com/sites/default/files/batdauhanhtrinh_0.png"
                                alt=""
                              />
                            </div>
                            <div className="icon-play-introduce">
                              <img
                                src="/sites/all/themes/cassiopeia_theme/img/icon/icon-play.png"
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="content-home-introduce">
                            <h2 className="heading heading-primary mb-16">
                              Bắt đầu hành trình đánh thức sự bí ẩn
                            </h2>
                            <div className="txt-home-introduce ml-48">
                              <p>
                                K'Lang Adventure là cuộc hành trình khám phá kỳ
                                quan và lưu giữ giá trị. Nơi sở hữu những khu
                                rừng nguyên sinh đồ sộ cùng hàng trăm loài sinh
                                vật quý - kho báu vô giá của mẹ thiên nhiên, nơi
                                chưa từng có dấu tích của sự “xâm lấn". Nơi khắc
                                hoạ nền văn hoá lâu đời của người Cơtu, những
                                con người chất phác, mến khách, luôn tự hào với
                                bản sắc dân tộc. <br />
                                Chào mừng bạn đến với Tây Giang!
                              </p>
                            </div>
                            <a
                              href="https://klangadventure.com/en/tay-giang.html"
                              className="btn brd-black radius-4 text-capitalize mt-16 ml-48">
                              Khám Phá Thêm
                            </a>
                          </div>
                        </div>
                      </div>
                    </section>
                    <div className="sec sec-experience bg-gray">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-primary text-center">
                            Trải nghiệm
                          </h2>
                          <div className="heading sub-heading">
                            <p style={{ textAlign: "center" }}>
                              Ngắt kết nối hoàn toàn với thế giới bên ngoài, hòa
                              mình vào thiên nhiên qua các hoạt động trekking,
                              camping trong rừng sâu. Hít trọn không khí mát
                              lành của thảm thực vật nguyên sinh, thấm nhuần nét
                              tinh tế trong văn hoá lâu đời của đồng bào Cơtu
                              với nét đẹp về ẩm thực, nghệ thuật thủ công, âm
                              nhạc và đời sống.
                            </p>
                          </div>
                        </div>
                        <div className="sec-content">
                          <div className="box-home-experience d-flex alg-center gap-32">
                            <div className="list-home-experience">
                              <ul className="custom-nav">
                                <li className="active" data-tid={46}>
                                  <div className="list-experience-item">
                                    <div className="header-experience-item d-flex alg-center gap-16">
                                      <span>01</span>
                                      <h3>Tây Giang</h3>
                                    </div>
                                    <a
                                      href="/vi/tay-giang.html"
                                      className="d-flex alg-center gap-8">
                                      <span>Khám Phá Thêm</span>
                                      <span>
                                        <i className="fa-regular fa-arrow-right" />
                                      </span>
                                    </a>
                                  </div>
                                </li>
                                <li className data-tid={12}>
                                  <div className="list-experience-item">
                                    <div className="header-experience-item d-flex alg-center gap-16">
                                      <span>02</span>
                                      <h3>Mạo hiểm &amp; thử thách</h3>
                                    </div>
                                    <a
                                      href="/vi/mao-hiem-thu-thach.html"
                                      className="d-flex alg-center gap-8">
                                      <span>Khám Phá Thêm</span>
                                      <span>
                                        <i className="fa-regular fa-arrow-right" />
                                      </span>
                                    </a>
                                  </div>
                                </li>
                                <li className data-tid={13}>
                                  <div className="list-experience-item">
                                    <div className="header-experience-item d-flex alg-center gap-16">
                                      <span>03</span>
                                      <h3>Văn hóa &amp; Bảo tồn</h3>
                                    </div>
                                    <a
                                      href="/vi/van-hoa-bao-ton.html"
                                      className="d-flex alg-center gap-8">
                                      <span>Khám Phá Thêm</span>
                                      <span>
                                        <i className="fa-regular fa-arrow-right" />
                                      </span>
                                    </a>
                                  </div>
                                </li>
                                <li className data-tid={14}>
                                  <div className="list-experience-item">
                                    <div className="header-experience-item d-flex alg-center gap-16">
                                      <span>04</span>
                                      <h3>Sự kiện</h3>
                                    </div>
                                    <a
                                      href="/vi/su-kien.html"
                                      className="d-flex alg-center gap-8">
                                      <span>Khám Phá Thêm</span>
                                      <span>
                                        <i className="fa-regular fa-arrow-right" />
                                      </span>
                                    </a>
                                  </div>
                                </li>
                              </ul>
                            </div>
                            <div className="img-home-experience">
                              <div
                                className="experience-change-image-js"
                                style={{}}
                                data-tid={46}>
                                <img
                                  src="https://klangadventure.com/sites/default/files/styles/style_777x474/public/file/image/tay_giang.png?itok=U6n-HAAN"
                                  alt=""
                                />
                              </div>
                              <div
                                className="experience-change-image-js"
                                style={{ display: "none" }}
                                data-tid={12}>
                                <img
                                  src="https://klangadventure.com/sites/default/files/styles/style_777x474/public/file/image/mao_hiem_thu_thach_0.png?itok=8cN7Pj3D"
                                  alt=""
                                />
                              </div>
                              <div
                                className="experience-change-image-js"
                                style={{ display: "none" }}
                                data-tid={13}>
                                <img
                                  src="https://klangadventure.com/sites/default/files/styles/style_777x474/public/file/image/van_hoa_bao_ton.png?itok=r5ja6ilq"
                                  alt=""
                                />
                              </div>
                              <div
                                className="experience-change-image-js"
                                style={{ display: "none" }}
                                data-tid={14}>
                                <img
                                  src="https://klangadventure.com/sites/default/files/styles/style_777x474/public/file/image/su_kien_0.png?itok=7Ri3Zg4-"
                                  alt=""
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section className="sec sec-selling-trip bg-img-dot">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-primary text-center">
                            Tours nổi bật{" "}
                          </h2>
                          <div className="heading sub-heading">
                            <p style={{ textAlign: "center" }}>
                              <span id="docs-internal-guid-2678d0d8-7fff-665e-e92e-8766e130d4dd">
                                <span>
                                  Khi mùa đẹp nhất cham ngõ, K'Lang Adventure
                                  mang đến những tour trải nghiệm độc nhất, vào
                                  nơi chưa từng được biết đến trên bản đồ du
                                  lịch thế giới - Nơi sẽ để lại trong bạn ấn
                                  tượng về vẻ đẹp thiên nhiên và văn hoá.
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="sec-content">
                          <div className="slider-cover slider-shadow">
                            <div className="owl-carousel owl-theme slider-selling-trip">
                              <div className="item">
                                <div className="card card-type-1">
                                  <div className="card-img">
                                    <a href="/vi/trekking-kham-pha-rung-lim-co-thu-3-ngay.html">
                                      <img
                                        src="https://klangadventure.com/sites/default/files/styles/style_290x216/public/file/image/anh5.jpeg?itok=HWbB-jxV"
                                        alt=""
                                      />
                                      <h3 className="card-title">
                                        <span className="title">
                                          Trekking - Khám phá rừng lim cổ thụ 3
                                          ngày
                                        </span>
                                      </h3>
                                    </a>
                                  </div>
                                  <div className="card-info">
                                    <div className="classify-selling-trip ">
                                      <span className="date">3 ngày 2 đêm</span>
                                      <span>|</span>
                                      <span className="price">
                                        5,862,000 VND
                                      </span>
                                    </div>
                                    <div className="card-synop mt-8">
                                      <div className="card-description">
                                        <span>
                                          <div dir="auto">
                                            Nếu rừng rêu và đỗ quyên trên đỉnh
                                            K'lang là thế giới Avatar siêu thực,
                                            còn rừng Pơ Mu cổ thụ là ngôi nhà
                                            linh thiêng và uy nghiêm của các
                                            đấng thần rừng ngàn năm tuổi thì
                                            rừng Lim là một khung cảnh hoang sơ
                                            đậm chất sinh tồn, thám hiểm mà ta
                                            thường thấy trong các tập phim của
                                            Bear Grylls.
                                          </div>
                                          <div dir="auto">
                                            Tuyến trek rừng Lim bắt đầu từ thôn
                                            Tary, xã Lăng, men theo dòng suối
                                            Lăng để đến sông Lăng rồi tiến đến
                                            hồ thủy điện sông Bung 4 thuộc địa
                                            phận Nam Giang. Tuyến trek này sẽ đi
                                            qua cánh rừng lim xanh cổ thụ với
                                            những cây lim nhiều tuổi nhất lên
                                            đến 200 năm. Dọc tuyến trek này còn
                                            gặp rất nhiều cây chua khổng lồ mà
                                            gốc phải đến hơn chục người ôm mới
                                            hết.
                                          </div>
                                          <p>
                                            <span>&nbsp;</span>
                                          </p>
                                        </span>
                                      </div>
                                      <div className="tag-selling mt-8">
                                        <div className="item">
                                          <img
                                            src="https://klangadventure.com/sites/default/files/file/image/icon-trekking.png"
                                            alt=""
                                          />
                                          <span>Trekking</span>
                                        </div>
                                      </div>
                                      <a
                                        href="/vi/trekking-kham-pha-rung-lim-co-thu-3-ngay.html"
                                        className="btn brd-black radius-4 width-100 mt-24">
                                        Xem chi tiết
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card card-type-1">
                                  <div className="card-img">
                                    <a href="/vi/trekking-chinh-phuc-dinh-klang-3-ngay.html">
                                      <img
                                        src="https://klangadventure.com/sites/default/files/styles/style_290x216/public/file/image/rectangle_3464064_0.png?itok=u1C404iW"
                                        alt=""
                                      />
                                      <h3 className="card-title">
                                        <span className="title">
                                          Trekking - Chinh phục đỉnh K'lang 3
                                          ngày{" "}
                                        </span>
                                      </h3>
                                    </a>
                                  </div>
                                  <div className="card-info">
                                    <div className="classify-selling-trip ">
                                      <span className="date">3 ngày 2 đêm</span>
                                      <span>|</span>
                                      <span className="price">
                                        5,484,000 VND
                                      </span>
                                    </div>
                                    <div className="card-synop mt-8">
                                      <div className="card-description">
                                        <span>
                                          <p dir="ltr">
                                            <span>
                                              Chinh phục đỉnh K'lang - Khám phá
                                              rừng rêu mê hoặc. Đỉnh K'lang cao
                                              2000m ở Tây Giang là sự tái hiện
                                              sống động những khung cảnh trong
                                              bộ phim Avatar với khu rừng rêu
                                              xanh mượt trải dài từ độ cao 1500m
                                              lên đến đỉnh. Địa điểm này còn tự
                                              hào có rừng đỗ quyên cổ thụ lớn
                                              nhất Việt Nam. Từ tháng 3 đến
                                              tháng 6, hoa đỗ quyên nở rộ rực rỡ
                                              tạo nên nhiều dải hoa trắng điểm
                                              xuyết khu rừng xanh không thể tìm
                                              thấy ở nơi nào khác.
                                            </span>
                                          </p>
                                          <p>
                                            <span>&nbsp;</span>
                                          </p>
                                        </span>
                                      </div>
                                      <div className="tag-selling mt-8">
                                        <div className="item">
                                          <img
                                            src="https://klangadventure.com/sites/default/files/file/image/icon-trekking.png"
                                            alt=""
                                          />
                                          <span>Trekking</span>
                                        </div>
                                      </div>
                                      <a
                                        href="/vi/trekking-chinh-phuc-dinh-klang-3-ngay.html"
                                        className="btn brd-black radius-4 width-100 mt-24">
                                        Xem chi tiết
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card card-type-1">
                                  <div className="card-img">
                                    <a href="/vi/trekking-chinh-phuc-dinh-klang-2-ngay.html">
                                      <img
                                        src="https://klangadventure.com/sites/default/files/styles/style_290x216/public/file/image/banner_2.png?itok=fOXyV6JI"
                                        alt=""
                                      />
                                      <h3 className="card-title">
                                        <span className="title">
                                          Trekking - Chinh phục đỉnh K'lang 2
                                          ngày
                                        </span>
                                      </h3>
                                    </a>
                                  </div>
                                  <div className="card-info">
                                    <div className="classify-selling-trip ">
                                      <span className="date">2 ngày 1 đêm</span>
                                      <span>|</span>
                                      <span className="price">
                                        4,632,000 VND
                                      </span>
                                    </div>
                                    <div className="card-synop mt-8">
                                      <div className="card-description">
                                        <span>
                                          <p dir="ltr">
                                            <span>
                                              Chinh phục đỉnh K'lang - Khám phá
                                              rừng rêu mê hoặc. Đỉnh K'lang cao
                                              2000m ở Tây Giang là sự tái hiện
                                              sống động những khung cảnh trong
                                              bộ phim Avatar với khu rừng rêu
                                              xanh mượt trải dài từ độ cao 1500m
                                              lên đến đỉnh. Địa điểm này còn tự
                                              hào có rừng đỗ quyên cổ thụ lớn
                                              nhất Việt Nam. Từ tháng 3 đến
                                              tháng 6, hoa đỗ quyên nở rộ rực rỡ
                                              tạo nên nhiều dải hoa trắng điểm
                                              xuyết khu rừng xanh không thể tìm
                                              thấy ở nơi nào khác.
                                            </span>
                                          </p>
                                          <p>
                                            <span>&nbsp;</span>
                                          </p>
                                        </span>
                                      </div>
                                      <div className="tag-selling mt-8">
                                        <div className="item">
                                          <img
                                            src="https://klangadventure.com/sites/default/files/file/image/icon-trekking.png"
                                            alt=""
                                          />
                                          <span>Trekking</span>
                                        </div>
                                      </div>
                                      <a
                                        href="/vi/trekking-chinh-phuc-dinh-klang-2-ngay.html"
                                        className="btn brd-black radius-4 width-100 mt-24">
                                        Xem chi tiết
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card card-type-1">
                                  <div className="card-img">
                                    <a href="/vi/trekking-kham-pha-rung-lim-co-thu-2-ngay.html">
                                      <img
                                        src="https://klangadventure.com/sites/default/files/styles/style_290x216/public/file/image/5.jpeg?itok=RipLLQW5"
                                        alt=""
                                      />
                                      <h3 className="card-title">
                                        <span className="title">
                                          Trekking - Khám phá rừng lim cổ thụ 2
                                          ngày
                                        </span>
                                      </h3>
                                    </a>
                                  </div>
                                  <div className="card-info">
                                    <div className="classify-selling-trip ">
                                      <span className="date">2 ngày 1 đêm</span>
                                      <span>|</span>
                                      <span className="price">
                                        4,962,000 VND
                                      </span>
                                    </div>
                                    <div className="card-synop mt-8">
                                      <div className="card-description">
                                        <span>
                                          <div dir="auto">
                                            Nếu rừng rêu và đỗ quyên trên đỉnh
                                            K'lang là thế giới Avatar siêu thực,
                                            còn rừng Pơ Mu cổ thụ là ngôi nhà
                                            linh thiêng và uy nghiêm của các
                                            đấng thần rừng ngàn năm tuổi thì
                                            rừng Lim là một khung cảnh hoang sơ
                                            đậm chất sinh tồn, thám hiểm mà ta
                                            thường thấy trong các tập phim của
                                            Bear Grylls.
                                          </div>
                                          <div dir="auto">
                                            Tuyến trek rừng Lim bắt đầu từ thôn
                                            Tary, xã Lăng, men theo dòng suối
                                            Lăng để đến sông Lăng rồi tiến đến
                                            hồ thủy điện sông Bung 4 thuộc địa
                                            phận Nam Giang. Tuyến trek này sẽ đi
                                            qua cánh rừng lim xanh cổ thụ với
                                            những cây lim nhiều tuổi nhất lên
                                            đến 200 năm. Dọc tuyến trek này còn
                                            gặp rất nhiều cây chua khổng lồ mà
                                            gốc phải đến hơn chục người ôm mới
                                            hết.
                                          </div>
                                        </span>
                                      </div>
                                      <div className="tag-selling mt-8">
                                        <div className="item">
                                          <img
                                            src="https://klangadventure.com/sites/default/files/file/image/icon-trekking.png"
                                            alt=""
                                          />
                                          <span>Trekking</span>
                                        </div>
                                      </div>
                                      <a
                                        href="/vi/trekking-kham-pha-rung-lim-co-thu-2-ngay.html"
                                        className="btn brd-black radius-4 width-100 mt-24">
                                        Xem chi tiết
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card card-type-1">
                                  <div className="card-img">
                                    <a href="/vi/trekking-kham-pha-rung-reu-va-dinh-klang-2-ngay.html">
                                      <img
                                        src="https://klangadventure.com/sites/default/files/styles/style_290x216/public/file/image/z5227282773880_0169f159cbf4d2509d6480b6c4afc6e2_1.jpg?itok=ol980Tv4"
                                        alt=""
                                      />
                                      <h3 className="card-title">
                                        <span className="title">
                                          Trekking - Khám phá rừng rêu và đỉnh
                                          K'lang 2 ngày
                                        </span>
                                      </h3>
                                    </a>
                                  </div>
                                  <div className="card-info">
                                    <div className="classify-selling-trip ">
                                      <span className="date">2 ngày 1 đêm</span>
                                      <span>|</span>
                                      <span className="price">
                                        4,962,000 VND
                                      </span>
                                    </div>
                                    <div className="card-synop mt-8">
                                      <div className="card-description">
                                        <span>
                                          <p>
                                            <span>
                                              Đây là một lịch trình rút gọn với
                                              thời gian ngắn nhất để những
                                              trekker yêu thiên nhiên và thích
                                              thử thách nhưng không có nhiều
                                              thời gian có thể chạm đỉnh Klang
                                              và khám phá những điểm nhất tuyệt
                                              vời của ngọn núi huyền bí
                                              này.&nbsp;
                                            </span>
                                            Đỉnh K'lang cao 2000m ở Tây Giang là
                                            sự tái hiện sống động những khung
                                            cảnh trong bộ phim Avatar với khu
                                            rừng rêu xanh mượt trải dài từ độ
                                            cao 1500m lên đến đỉnh. Địa điểm này
                                            còn tự hào có rừng đỗ quyên cổ thụ
                                            lớn nhất Việt Nam. Từ tháng 3 đến
                                            tháng 6, hoa đỗ quyên nở rộ rực rỡ
                                            tạo nên nhiều dải hoa trắng điểm
                                            xuyết khu rừng xanh không thể tìm
                                            thấy ở nơi nào khác.
                                          </p>
                                          <p>
                                            <span>&nbsp;</span>
                                          </p>
                                        </span>
                                      </div>
                                      <div className="tag-selling mt-8">
                                        <div className="item">
                                          <img
                                            src="https://klangadventure.com/sites/default/files/file/image/icon-trekking.png"
                                            alt=""
                                          />
                                          <span>Trekking</span>
                                        </div>
                                      </div>
                                      <a
                                        href="/vi/trekking-kham-pha-rung-reu-va-dinh-klang-2-ngay.html"
                                        className="btn brd-black radius-4 width-100 mt-24">
                                        Xem chi tiết
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="item">
                                <div className="card card-type-1">
                                  <div className="card-img">
                                    <a href="/vi/kham-pha-aur-ngoi-lang-hanh-phuc-trong-rung-truong-son.html">
                                      <img
                                        src="https://klangadventure.com/sites/default/files/styles/style_290x216/public/file/image/aur5.jpg?itok=7DderyiE"
                                        alt=""
                                      />
                                      <h3 className="card-title">
                                        <span className="title">
                                          Khám phá Aur - Ngôi làng hạnh phúc
                                          trong rừng Trường Sơn{" "}
                                        </span>
                                      </h3>
                                    </a>
                                  </div>
                                  <div className="card-info">
                                    <div className="classify-selling-trip ">
                                      <span className="date">3 ngày 2 đêm</span>
                                      <span>|</span>
                                      <span className="price">
                                        5,622,000 VND
                                      </span>
                                    </div>
                                    <div className="card-synop mt-8">
                                      <div className="card-description">
                                        <span>
                                          <p>
                                            Nằm sâu giữa đại ngàn Trường Sơn,
                                            làng Aur (xã A Vương, Tây Giang) giữ
                                            được nét bình yên, trong veo. Để vào
                                            được làng, khách phải mất vài giờ đi
                                            bộ men theo triền núi, vượt qua
                                            những đoạn đường mòn vắt vẻo giữa
                                            đồi núi quanh co, nhìn xuống là vực
                                            sâu thăm thẳm. Đường vào làng Aur
                                            thường được đánh dấu hướng đi trên
                                            các cây lớn để người mới đi dễ tìm
                                            và quay ra. Aur được gọi với nhiều
                                            cái tên như: Ngôi làng sạch như
                                            Singapore (vì nơi đây rất sạch,
                                            không có một cọng rác), Ngôi làng 4
                                            không (không điện, không điện thoại,
                                            không đường, không trạm y tế), Ngôi
                                            làng hạnh phúc,…
                                          </p>
                                        </span>
                                      </div>
                                      <div className="tag-selling mt-8">
                                        <div className="item">
                                          <img
                                            src="https://klangadventure.com/sites/default/files/file/image/icon-trekking.png"
                                            alt=""
                                          />
                                          <span>Trekking</span>
                                        </div>
                                      </div>
                                      <a
                                        href="/vi/kham-pha-aur-ngoi-lang-hanh-phuc-trong-rung-truong-son.html"
                                        className="btn brd-black radius-4 width-100 mt-24">
                                        Xem chi tiết
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="sec sec-review">
                      <div className="sec-container container">
                        <div className="sec-content">
                          <div className="slider-cover">
                            <div className="owl-carousel owl=theme slider-single">
                              <div className="item">
                                <div className="box-review">
                                  <div className="row">
                                    <div className="col-md-7">
                                      <div className="img-box-review">
                                        <img
                                          src="https://klangadventure.com/sites/default/files/styles/style_699x460/public/file/image/traveler_reviews.png?itok=7p-RafhT"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="col-md-5">
                                      <div className="sec-header mt-24">
                                        <h2 className="heading heading-primary text-center">
                                          Câu chuyện sau mỗi chuyến đi
                                        </h2>
                                      </div>
                                      <div className="txt-box-review">
                                        <p>
                                          <span>
                                            Được mệnh danh là “Sapa thu nhỏ” hay
                                            “Đà Lạt của miền Trung”, Tây Giang
                                            đã và đang là một cái tên rất hot
                                            trên bản đồ xê dịch của các tín đồ
                                            mê phượt. Đến đây, bạn không chỉ
                                            được hòa mình vào khung cảnh thiên
                                            nhiên bao la, thơ mộng; tận hưởng
                                            cảm giác lành lạnh giữ núi rừng hay
                                            ngắm những thửa ruộng bậc thang
                                            tuyệt đẹp mà còn được tận mắt chiêm
                                            ngưỡng những áng mây trắng bồng
                                            bềnh.
                                          </span>
                                        </p>{" "}
                                        <b>Kien Tran</b>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="sec sec-special pb-0">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-primary text-center">
                            Ưu đãi đặc biệt{" "}
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            Đăng ký tour vào tháng 9 tới tháng 12 để đón nhận
                            những ưu đãi đặc biệt&nbsp;
                            <span>từ K'Lang Adventure.&nbsp;</span>
                            <br />
                            K'Lang Adventure - Hành trình khám phá sự bí ẩn
                          </p>
                        </div>
                        <div className="sec-content">
                          <div className="row">
                            <div className="col-md-6">
                              <div className="card card-type-2">
                                <div className="card-img">
                                  <a href="/vi/chuong-trinh-gia-sieu-hot-chao-mua-leo-nui-2023.html">
                                    <img
                                      src="https://klangadventure.com/sites/default/files/styles/style_555x280/public/file/image/su-kien.png?itok=lq-S-8Wq"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="card-info">
                                  <h3 className="card-title">
                                    <a
                                      href="/vi/chuong-trinh-gia-sieu-hot-chao-mua-leo-nui-2023.html"
                                      className="title">
                                      Chương trình Giá - Siêu Hot - Chào mùa leo
                                      núi 2023
                                    </a>
                                  </h3>
                                  <div className="card-description">
                                    <ul>
                                      <li>
                                        <span>
                                          Mùa leo núi sắp điểm, mùa của những
                                          thử thách chạm đỉnh, “săn mây” quên
                                          lối về; ngắm view mà ở dưới xuôi người
                                          ta gọi là triệu đô; trải nghiệm sự kết
                                          hợp hoàn hảo giữa Trekking và Săn mây.
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="card card-type-2">
                                <div className="card-img">
                                  <a href="/vi/chinh-sach-giam-gia-chung-cho-tour-ghep.html">
                                    <img
                                      src="https://klangadventure.com/sites/default/files/styles/style_555x280/public/file/image/rectangle_3464056.png?itok=mm_L_Sy7"
                                      alt=""
                                    />
                                  </a>
                                </div>
                                <div className="card-info">
                                  <h3 className="card-title">
                                    <a
                                      href="/vi/chinh-sach-giam-gia-chung-cho-tour-ghep.html"
                                      className="title">
                                      Chính sách giảm giá chung cho tour ghép
                                    </a>
                                  </h3>
                                  <div className="card-description">
                                    <ul>
                                      <li>
                                        Mua tour cho&nbsp;05 người đi cùng một
                                        tour vào một ngày khởi hành:&nbsp;
                                        <strong>giảm&nbsp;5%</strong>
                                      </li>
                                      <li>
                                        Mua&nbsp;02 tour cùng một lúc:&nbsp;
                                        <strong>giảm&nbsp;5%</strong>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    <section className="sec sec-commitment">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-primary text-center">
                            Responsible tourism development{" "}
                          </h2>
                          <div className="heading sub-heading">
                            <p style={{ textAlign: "center" }}>
                              <span id="docs-internal-guid-efefe776-7fff-98de-45c4-a84eaec61428">
                                <span>
                                  Sustainable development - K'Lang Adventure's
                                  ambitions and long-term goals for experiential
                                  tourism - cultural tourism in Tay Giang, Quang
                                  Nam
                                </span>
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="sec-content">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="box-full-img">
                                <div className="box-img">
                                  <a href="/vi/moi-truong.html">
                                    <img
                                      src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/moi_truong.png?itok=gmlGw6S4"
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
                                    <h3 className="title">Môi trường</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="box-full-img">
                                <div className="box-img">
                                  <a href="/vi/quan-tri.html">
                                    <img
                                      src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/quan_tri.png?itok=0oTp0BDm"
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
                                    <h3 className="title">Quản trị</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-4">
                              <div className="box-full-img">
                                <div className="box-img">
                                  <a href="/vi/xa-hoi.html">
                                    <img
                                      src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/xa_hoi.png?itok=S2yGfecD"
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
                                    <h3 className="title">Xã hội</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
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
                            <a href="/">
                              <span>General Information:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <span>Press relations:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <span>Careers:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/">
                              <span>Social media &amp; Influencers:</span>
                              <span className="clr-gray">
                                contact@klangadventure.com
                              </span>
                            </a>
                          </li>
                          <li>
                            <a href="/">
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
};

export default Home;

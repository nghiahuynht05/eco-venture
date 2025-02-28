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
import "../sites/all/themes/cassiopeia_theme/js/lib/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";
import images from "../data/images";
import imagesTours from "../data/stick";
import imagesSubs from "../data/subs";
import imagesAds from "../data/ads";
import imagesTopic from "../data/topic";
import CustomSlider from "../components/custom.slider";
import CustomTours from "../components/custom.tours";
import CustomSubs from "../components/custom.sub";
import CustomInfo from "../components/custom.info";
import CustomReview from "../components/custom.review";
import CustomLogo from "../components/custom.logo";
import CustomAds from "../components/custom.ads";
import CustomFooter from "../components/custom.footer";
import CustomDevelopment from "../components/custom.development";
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
                    <CustomInfo
                      title={translations.home?.info.title}
                      description={translations.home?.info.description}
                      more={translations.home?.info.more}></CustomInfo>
                    <CustomSubs>
                      {imagesSubs.map((image, index) => {
                        const experiencesData =
                          translations.home?.experiences.list || [];
                        return (
                          <img
                            key={index}
                            src={image.image}
                            alt={image.title}
                            experiences={experiencesData[index]}
                          />
                        );
                      })}
                    </CustomSubs>
                    <CustomTours>
                      {imagesTours.map((image, index) => {
                        const toursData = translations.home?.tours.list || [];
                        return (
                          <img
                            key={index}
                            src={image.image}
                            alt={image.title}
                            translations={toursData[index]}
                          />
                        );
                      })}
                    </CustomTours>
                    <CustomReview
                      review={translations.home?.review.list}></CustomReview>
                    <CustomAds
                      title={translations.home?.ads.title}
                      content={translations.home?.ads.content}
                      ads={translations.home?.ads.list}
                      image={imagesAds}></CustomAds>
                    <CustomDevelopment
                      title={translations.home?.development.title}
                      content={translations.home?.development.content}
                      development={translations.home?.development.list}
                      image={imagesTopic}></CustomDevelopment>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <CustomFooter translations={translations.home?.footer}></CustomFooter>
      </div>
    </div>
  );
};

export default Home;

import React, { useContext } from "react";

import "../modules/system/system.base.css";
import "../sites/all/themes/cassiopeia_theme/css/style.css";
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
import CustomHeader from "../components/header/custom.header";
import CustomDevelopment from "../components/custom.development";
import LanguageSelector from "../components/custom.language";
import { LanguageContext } from "../context/languageContext";

import "../sites/all/themes/cassiopeia_theme/css/ultils.css";
import "../sites/all/themes/cassiopeia_theme/css/alter.css";
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
              <CustomHeader translations={translations}></CustomHeader>
              <div className="header-right d-flex alg-center gap-16">
                <LanguageSelector></LanguageSelector>
                <div className="icon-user">
                  <a href="./" className="btn text-uppercase radius-2">
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

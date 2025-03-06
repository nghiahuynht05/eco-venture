import React, { useContext } from "react";

import "../sites/all/themes/cassiopeia_theme/css/ultils.css";
import "../sites/all/themes/cassiopeia_theme/css/alter.css";
import "../sites/all/themes/cassiopeia_theme/css/responsive.css";
import "../modules/system/system.base.css";
import "../sites/all/themes/cassiopeia_theme/css/style.css";
import "../sites/all/themes/cassiopeia_theme/js/lib/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";

import images from "../data/images";
import CustomSlider from "../components/custom.slider";
import CustomLogo from "../components/custom.logo";
import CustomFooter from "../components/custom.footer";
import CustomAbout from "../components/custom.about";
import CustomHeader from "../components/header/custom.header";
import LanguageSelector from "../components/custom.language";
import { LanguageContext } from "../context/languageContext";

const About = () => {
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
                    <CustomAbout content={translations.about}></CustomAbout>
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

export default About;

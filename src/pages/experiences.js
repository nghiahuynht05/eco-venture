import React, { useContext } from "react";

import "../sites/all/themes/cassiopeia_theme/css/ultils.css";
import "../sites/all/themes/cassiopeia_theme/css/alter.css";
import "../sites/all/themes/cassiopeia_theme/css/responsive.css";
import "../modules/system/system.base.css";
import "../sites/all/themes/cassiopeia_theme/css/style.css";
import "../sites/all/themes/cassiopeia_theme/js/lib/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";

import imagesExperiences from "../data/experiences";
import CustomLogo from "../components/custom.logo";
import CustomFooter from "../components/custom.footer";
import LanguageSelector from "../components/custom.language";
import CustomHeader from "../components/header/custom.header";
import CustomExperiences from "../components/experiences/custom.experiences";
import CustomChatBot from "../components/chatbot/custom.chatbot";
import { LanguageContext } from "../context/languageContext";

const Experiences = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="wrapper-app">
      <header className="header header-f" id="header">
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
      <section className="content container cassiopeia-container">
        <div id="content" className="clearfix">
          <div className="tabs"></div>
        </div>
      </section>
      <CustomExperiences
        tabs={translations.experiences}
        images={imagesExperiences}></CustomExperiences>
      <CustomFooter translations={translations.home?.footer}></CustomFooter>
      <CustomChatBot></CustomChatBot>
    </div>
  );
};

export default Experiences;

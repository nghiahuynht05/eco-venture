import React, { useContext } from "react";
import { useParams } from "react-router-dom";

import "../sites/all/themes/cassiopeia_theme/css/ultils.css";
import "../sites/all/themes/cassiopeia_theme/css/alter.css";
import "../sites/all/themes/cassiopeia_theme/css/responsive.css";
import "../modules/system/system.base.css";
import "../sites/all/themes/cassiopeia_theme/css/style.css";
import "../sites/all/themes/cassiopeia_theme/js/lib/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";

import CustomLogo from "../components/custom.logo";
import CustomFooter from "../components/custom.footer";
import ToursDetail from "../components/tours/custom.detail";
import CustomHeader from "../components/header/custom.header";
import LanguageSelector from "../components/custom.language";
import CustomChatBot from "../components/chatbot/custom.chatbot";
import CustomMenuPopup from "../components/header/custom.menu";

import { LanguageContext } from "../context/languageContext";

const ToursDetails = () => {
  const { translations } = useContext(LanguageContext);
  const { id } = useParams();
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
                <a href="https://www.facebook.com/profile.php?id=61552275430181" className="btn text-uppercase radius-2">
                  Book now
                </a>
              </div>
            </div>
            <CustomMenuPopup translations={translations}></CustomMenuPopup>
          </div>
        </div>
      </header>
      <section className="content container cassiopeia-container">
        <div id="content" className="clearfix">
          <div className="tabs"></div>
        </div>
      </section>
      <ToursDetail
        dataTours={translations.tours.list[id].details[0]}
        navText={translations.tours.details.nav}
        idTag={translations.tours.details.idTag}></ToursDetail>
      <CustomFooter translations={translations.home?.footer}></CustomFooter>
      <CustomChatBot></CustomChatBot>

    </div>
  );
};

export default ToursDetails;

import React, { useState, useContext } from "react";

import "../sites/all/themes/cassiopeia_theme/css/ultils.css";
import "../sites/all/themes/cassiopeia_theme/css/alter.css";
import "../sites/all/themes/cassiopeia_theme/css/responsive.css";
import "../modules/system/system.base.css";
import "../sites/all/themes/cassiopeia_theme/css/style.css";
import "../sites/all/themes/cassiopeia_theme/js/lib/OwlCarousel2-2.3.4/dist/assets/owl.theme.default.css";

import CustomLogo from "../components/custom.logo";
import CustomFooter from "../components/custom.footer";
import ToursItem from "../components/tours/custom.list";
import ToursFilter from "../components/tours/custom.filter";
import CustomHeader from "../components/header/custom.header";
import LanguageSelector from "../components/custom.language";
import CustomChatBot from "../components/chatbot/custom.chatbot";
import CustomMenuPopup from "../components/header/custom.menu";

import { LanguageContext } from "../context/languageContext";

const Tours = () => {
  const { translations } = useContext(LanguageContext);
  const data = translations.tours.list;
  const [filteredData, setFilteredData] = useState(data);

  const handleFilterChange = (selectedFilters) => {
    if (selectedFilters.length === 0) {
      setFilteredData(data);
      return;
    }

    const filtered = data.filter((item) =>
      selectedFilters.every((filter) =>
        item.tags.some((tag) => tag.text === filter)
      )
    );
    setFilteredData(filtered);
  };
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
      <div className="region region-content">
        <section id="block-system-main" className="block block-system clearfix">
          <main className="main" id="main">
            <div className="warpper-content">
              <div className="main-content">
                <div className="page destination-list-page">
                  <div className="page-container">
                    <div className="page-inner">
                      <div className="breadcrumb-page">
                        <div className="container">
                          <ul className="custom-nav breadcrumb">
                            <li>
                              <a href="/">Home</a>
                            </li>
                            <li>
                              <a href="/tours">Tour</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="page-content">
                        <div className="sec-container container">
                          <div className="list-destination-top pb-8">
                            <div className="heading-destination d-flex jtf-between alg-center">
                              <h2 className="heading title-list-destination">
                                List
                                <span>( 10 active tours)</span>
                              </h2>
                            </div>
                            <div className="list-hotel-tags">
                              <div className="list-tags d-flex alg-center">
                                <ul className="custom-nav d-flex mr-8"></ul>
                              </div>
                            </div>
                          </div>
                          <div className="list-destination-content mt-32">
                            <form action method="get" id="tour-list">
                              <div className="list-hotel-filter">
                                <div className="row">
                                  <ToursFilter
                                    onFilterChange={
                                      handleFilterChange
                                    }></ToursFilter>
                                  <div className="col-md-9">
                                    <div className="block-container">
                                      {filteredData.length > 0 ? (
                                        filteredData.map((item) => (
                                          <ToursItem
                                            translate={
                                              translations.tours.translate
                                            }
                                            toursData={item}></ToursItem>
                                        ))
                                      ) : (
                                        <p>No results found</p>
                                      )}
                                    </div>
                                  </div>
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
          </main>
        </section>
      </div>
      <CustomFooter translations={translations.home?.footer}></CustomFooter>
      <CustomChatBot></CustomChatBot>
    </div>
  );
};

export default Tours;

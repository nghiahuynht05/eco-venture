import React from "react";

function Offers({ translations }) {
  return (
    <div className="region region-content">
      <section id="block-system-main" className="block block-system clearfix">
        <main className="main" id="main">
          <div className="warpper-content">
            {/* main-content */}
            <div className="main-content">
              <div className="page offers-page">
                <div className="page-container">
                  <div className="page-inner">
                    {/* intro-sustainability */}
                    <section className="sec sec-intro-sustainability bg-gray">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-secondary text-center">
                            {translations.title}
                          </h2>
                          <div style={{ textAlign: "center" }}>
                            <span>{translations.description}</span>
                          </div>{" "}
                        </div>
                        <div className="sec-content">
                          <div className="special-banner">
                            <div className="special-banner-img">
                              <img
                                src=""
                                alt=""
                              />
                            </div>
                            <div className="special-banner-content">
                              <span>Unearth new perspectives</span>
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
      </section>
    </div>
  );
}
export default Offers;

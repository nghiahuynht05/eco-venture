import React, { useState } from "react";

function CustomExperiences({ tabs, images }) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="region region-content">
      <section id="block-system-main" className="block block-system clearfix">
        <main className="main" id="main">
          <div className="warpper-content">
            <div className="main-content">
              <div className="page experiences-page">
                <div className="page-container">
                  <div className="page-inner">
                    <section className="sec sec-experiences">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-secondary text-center">
                            Blog and News
                          </h2>
                          <div className="filter-experiences">
                            <ul className="custom-nav list-filter-experiences">
                              {tabs.map((item, index) => (
                                <li
                                  className="active"
                                  onClick={() => setActiveTab(index)}>
                                  <span className="">{item.tabs}</span>{" "}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="sec-content">
                          <div
                            className="img-experiences"
                            style={{
                              display: "flex",
                              "justify-content": "center",
                            }}>
                            <div className="video-container">
                              <iframe
                                src={images[activeTab].imgURL}
                                width="640"
                                height="360"
                                allow="autoplay"
                                style={{ border: "none" }}></iframe>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* <section className="sec sec-experiences-list pt-0">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-secondary text-center">
                            {tabs[activeTab].tabs}
                          </h2>
                          <div className="heading sub-heading">
                            <p>{tabs[activeTab].name}</p>{" "}
                          </div>
                        </div>
                      </div>
                    </section> */}
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
export default CustomExperiences;

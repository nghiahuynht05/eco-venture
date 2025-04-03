import React from "react";

function Press({ translations }) {
  const press = ["",""];
  return (
    <div className="region region-content">
      <section id="block-system-main" className="block block-system clearfix">
        <main className="main" id="main">
          <div className="warpper-content">
            {/* main-content */}
            <div className="main-content">
              <div className="page press-page">
                <div className="page-container">
                  <div className="page-inner">
                    <section className="sec sec-press-list">
                      <div className="sec-container container">
                        <div className="sec-header">
                          <h2 className="heading heading-secondary text-center">
                            {translations.press.title}
                          </h2>
                          <p style={{ textAlign: "center" }}>
                            <span>{translations.press.description}</span>
                          </p>{" "}
                        </div>
                        <div className="sec-content">
                          <div className="row">
                            {press.map((item) => (
                              <div className="col-md-4">
                                <div className="card card-type-3 no-shadow mb-32">
                                  <div className="card-img">
                                    <a href="/vi/all-elephants-deserve-the-freedom-to-roam-3.html">
                                      <img
                                        src=""
                                        alt=""
                                      />
                                    </a>
                                  </div>
                                  <div className="card-info">
                                    <h3 className="card-title">
                                      <a
                                        href="/vi/all-elephants-deserve-the-freedom-to-roam-3.html"
                                        className="title">
                                        All Elephants Deserve the Freedom to
                                        Roam 3
                                      </a>
                                    </h3>
                                    <div className="card-description">
                                      <p>
                                        <span>
                                          In recognition of World Elephant Day
                                          on 12th August, we’d like to shine a
                                          spotlight on these incredible
                                          creatures.
                                        </span>
                                      </p>{" "}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ))}
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

export default Press;

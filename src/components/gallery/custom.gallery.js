import React from "react";

function MyGallery({ imagesURLs, translations }) {
  return (
    <div className="region region-content">
      <section id="block-system-main" className="block block-system clearfix">
        <main className="main" id="main">
          <div className="warpper-content">
            {/* main-content */}
            <div className="main-content">
              <div className="page gallery-page">
                <div className="page-container">
                  <div className="page-inner">
                    <section className="sec sec-gallery">
                      <div className="sec-container container">
                        <div className="sec-content mt-0">
                          <div className="box-gallery">
                            <div className="item txt-box-gallery">
                              <span>{translations.title}</span>
                              <span>{translations.description}</span>
                            </div>
                            {imagesURLs.map((url, index) => (
                              <div className="item">
                                <a data-fancybox="gallery42" href={url.imgURL}>
                                  <div className="box-full-img">
                                    <div className="box-img">
                                      <img src={url.imgURL} alt="" />
                                    </div>
                                    <div className="box-info box-full-img-bot">
                                      <div className="info">
                                        {/* <h3 className="title">
                                          {translations.list[index]}
                                        </h3> */}
                                      </div>
                                    </div>
                                  </div>
                                </a>
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
export default MyGallery;

import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

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
                            <div
                              className="item txt-box-gallery"
                              style={{ margin: "15px" }}>
                              <span>{translations.title}</span>
                              <span>{translations.description}</span>
                            </div>
                            <ResponsiveMasonry columnsCount={1} gutter="10px">
                              <Masonry>
                                {imagesURLs.map((url, index) => (
                                  <div className="item">
                                    <a
                                      data-fancybox="gallery42"
                                      href={url.imgURL}>
                                      <div className="box-full-img">
                                        <div className="box-img">
                                          <img src={url.imgURL} alt="" />
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                ))}
                              </Masonry>
                            </ResponsiveMasonry>
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

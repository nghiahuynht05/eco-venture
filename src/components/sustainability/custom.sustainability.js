import React from "react";

function SustainabilityContent({ translate, tours }) {
  return (
    <div className="region region-content">
  <section id="block-system-main" className="block block-system clearfix">
    <main className="main" id="main">
      <div className="warpper-content">
        {/* banner */}
        <div className="banner">
          <div className="banner-container">
            <div className="main-slider">
              {/* slider */}
              <div className="img-banner">
                <img src="https://klangadventure.com/sites/default/files/banner-sustainability.png" alt="" />
              </div>
              {/* txt-banner */}
              <div className="txt-banner">
                <div className=" container">
                  <div className="content-txt-banner">
                    <h3 className="heading"> The best inspirational life stories</h3>
                    <p>Unique hotels, resorts and guesthouses united by beauty, simplicity and culturally rich experiences.</p>                          </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /.banner */}
        {/* main-content */}
        <div className="main-content">
          <div className="page sustainability-page">
            <div className="page-container">
              <div className="page-inner">
                {/* intro-sustainability */}
                <section className="sec sec-intro-sustainability bg-gray">
                  <div className="sec-container container">
                    <div className="sec-header">
                      <h2 className="heading heading-secondary text-center">We care, you share</h2>
                      <p><span>Simply by staying with K’Lang, our guests contribute to supporting social and environmental efforts in the region and globally. Hotel efforts span the spectrum from passive to active support, in the hope of inspiring guests to become fully engaged in sustainability.</span><br /><span>Click on one of the below areas for more information about how your choice to stay with us, can support a wide variety of ‘for good’ initiatives:</span></p>								</div>
                  </div>
                </section>
                {/* /.intro-sustainability */}
                {/* commitment */}
                <section className="sec sec-commitment">
                  <div className="sec-container container">
                    <div className="sec-header">
                      <h2 className="heading heading-primary text-center">
                        Our Commitment to Sustainability			</h2>
                      <div className="heading sub-heading">
                        <p style={{textAlign: 'center'}}><span>This season – as the first blossoms of spring spark feelings of joy and renewal - we celebrate the </span></p><p style={{textAlign: 'center'}}><span>exceptional natural environments across the globe that K’Lang Adventure calls home.</span></p>			</div>
                    </div>
                    <div className="sec-content">
                      <div className="row">
                        <div className="col-md-4">
                          <div className="box-full-img">
                            <div className="box-img">
                              <a href="/en/environment.html">
                                <img src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/moi_truong_0.png?itok=yrxkflXi" alt="" />
                              </a>
                            </div>
                            <div className="box-info box-full-img-center">
                              <div className="info">
                                <img src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png" alt="" />
                                <h3 className="title">Environment</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="box-full-img">
                            <div className="box-img">
                              <a href="/en/government.html">
                                <img src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/quan_tri_0.png?itok=VL6rJu9V" alt="" />
                              </a>
                            </div>
                            <div className="box-info box-full-img-center">
                              <div className="info">
                                <img src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png" alt="" />
                                <h3 className="title">Government</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="box-full-img">
                            <div className="box-img">
                              <a href="/en/social.html">
                                <img src="https://klangadventure.com/sites/default/files/styles/style_360x280/public/2023-09/xa_hoi_0.png?itok=P_PDOaCT" alt="" />
                              </a>
                            </div>
                            <div className="box-info box-full-img-center">
                              <div className="info">
                                <img src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png" alt="" />
                                <h3 className="title">Social</h3>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* commitment */}
              </div>
            </div>
          </div>
        </div>
        {/* /.main-content */}
      </div>
    </main>
  </section>
</div>

  );
}

export default SustainabilityContent;

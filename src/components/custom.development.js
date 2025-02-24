import React from "react";

function CustomDevelopment({ title, content, development, image }) {
  return (
    <section className="sec sec-commitment">
      <div className="sec-container container">
        <div className="sec-header">
          <h2 className="heading heading-primary text-center">{title}</h2>
          <div className="heading sub-heading">
            <p style={{ textAlign: "center" }}>
              <span id="docs-internal-guid-efefe776-7fff-98de-45c4-a84eaec61428">
                <span>{content}</span>
              </span>
            </p>
          </div>
        </div>
        <div className="sec-content">
          <div className="row">
            {development.map((item, index) => (
              <div className="col-md-4">
                <div className="box-full-img">
                  <div className="box-img">
                    <a href="/vi/moi-truong.html">
                      <img src={image[index].imgURL} alt="" />
                    </a>
                  </div>
                  <div className="box-info box-full-img-center">
                    <div className="info">
                      <img
                        src="/sites/all/themes/cassiopeia_theme/img/icon/icon-commitment.png"
                        alt=""
                      />
                      <h3 className="title">{item.topic}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default CustomDevelopment;

import React from "react";

function CustomAds({ title, content, ads, image }) {
  return (
    <section className="sec sec-special pb-0">
      <div className="sec-container container">
        <div className="sec-header">
          <h2 className="heading heading-primary text-center">{title}</h2>
          <p style={{ textAlign: "center" }}>{content}</p>
        </div>
        <div className="sec-content">
          <div className="row">
            {ads.map((item, index) => (
              <div className="col-md-6">
                <div className="card card-type-2">
                  <div className="card-img">
                    <a href="/vi/chuong-trinh-gia-sieu-hot-chao-mua-leo-nui-2023.html">
                      <img src={image[index].imgURL} alt="" />
                    </a>
                  </div>
                  <div className="card-info">
                    <h3 className="card-title">
                      <a href={item.link} className="title">
                        {item.title}
                      </a>
                    </h3>
                    <div className="card-description">
                      <ul>
                        {item.content.map((item) => (
                          <li>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
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
export default CustomAds;

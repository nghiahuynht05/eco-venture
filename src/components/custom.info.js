import React from "react";

function CustomTours({ title, description, more }) {
  return (
    <section className="sec sec-introduce">
      <div className="sec-container container">
        <div className="box-home-introduce d-flex gap-24">
          <div className="video-home-introduce">
            <div className="img-video-home-introduce">
              <iframe
                width="100%"
                height="480"
                src={`https://www.youtube.com/embed/SNx8B_oE8IY`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Embedded youtube"
              />
            </div>
          </div>
          <div className="content-home-introduce">
            <h2 className="heading heading-primary mb-16">{title}</h2>
            <div className="txt-home-introduce ml-48">
              <p>{description}</p>
            </div>
            <a
              href="https://klangadventure.com/en/tay-giang.html"
              className="btn brd-black radius-4 text-capitalize mt-16 ml-48">
              {more}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CustomTours;

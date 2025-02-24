import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context/languageContext";

import "./custom.sub.css";

function CustomSubs({ children }) {
  const { translations } = useContext(LanguageContext);
  const [currentImage, setCurrentImage] = useState(
    children[0].props.experiences.image
  );
  const [setContent] = useState({});

  useEffect(() => {
    import(`../locales/${translations}.json`)
      .then((module) => {
        setContent(module.default);
      })
      .catch((error) => console.error("Error loading language file:", error));
  }, [translations]);

  const dataSubs = translations.home?.experiences || [];

  return (
    <div className="sec sec-experience bg-gray">
      <div className="sec-container container">
        <div className="sec-header">
          <h2 className="heading heading-primary text-center">
            {dataSubs.title}
          </h2>
          <div className="heading sub-heading">
            <p style={{ textAlign: "center" }}>{dataSubs.description}</p>
          </div>
        </div>
        <div className="sec-content">
          <div className="box-home-experience d-flex alg-center gap-32">
            <div className="list-home-experience">
              <ul className="custom-nav">
                {children.map((subs) => (
                  <li className="text-hover">
                    <div
                      className="list-experience-item"
                      onMouseEnter={() => {
                        setCurrentImage(subs.props.experiences.image);
                      }}>
                      <div className="header-experience-item d-flex alg-center gap-16">
                        <span>{subs.props.experiences.id}</span>
                        <h3>{subs.props.experiences.title}</h3>
                      </div>
                      <a
                        className="d-flex alg-center gap-8"
                        href={subs.props.experiences.link}>
                        <span>{subs.props.experiences.detail}</span>
                        <span>
                          <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="img-home-experience">
              <div
                className="experience-change-image-js"
                style={{}}
                data-tid={46}>
                <img src={currentImage} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomSubs;

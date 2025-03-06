import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function Hearder({ translations }) {
  return (
    <div className="header-menu">
      <ul className="custom-nav">
        <li className="first expanded">
          <a href="/en">
            EcoVenture
            <span>
              <FontAwesomeIcon icon={faChevronDown} />
            </span>
          </a>
          <ul>
            <li className="first last leaf">
              <a href="/about">{translations.home.header.story}</a>
            </li>
          </ul>
        </li>
        <li className="leaf">
          <a href="/tours">{translations.home.header.tours}</a>
        </li>
        <li className="expanded">
          <a href="/experiences">
            {translations.header.experiences}
          </a>
        </li>
        <li className="leaf">
          <a href="/sustainability">{translations.header.sustainability}</a>
        </li>
        <li className="leaf">
          <a href="/press">{translations.header.press}</a>
        </li>
        <li className="leaf">
          <a href="/offers">{translations.header.offers}</a>
        </li>
        <li className="last leaf">
          <a href="/gallery">{translations.header.gallery}</a>
        </li>
      </ul>
    </div>
  );
}
export default Hearder;

import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { LanguageContext } from "../context/languageContext";

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLang] = useState(
    i18n.language ? i18n.language.toUpperCase() : "EN"
  );

  const { changeLanguages } = useContext(LanguageContext);

  return (
    <div className="icon-language">
      <div className="dropdown">
        <button
          id="dLabel"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2 p-2 bg-gray-200 rounded">
          <span>{selectedLang}</span>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
        {showDropdown && (
          <ul
            className="absolute left-0 mt-1 w-16 bg-white border rounded shadow-lg text-center"
            style={{
              position: "absolute",
              "background-color": "white",
              "list-style-type": "none",
              border: "1px solid rgba(0, 0, 0, .15)",
              borderRadius: "4px",
            }}>
            <li className="" style={{}} onClick={() => changeLanguages("en")}>
              EN
            </li>
            <li className="" onClick={() => changeLanguages("vi")}>
              VI
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;

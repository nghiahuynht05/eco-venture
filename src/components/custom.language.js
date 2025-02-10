import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context/languageContext";

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const { language, changeLanguages } = useContext(LanguageContext);

  return (
    <div className="icon-language">
      <div className="dropdown">
        <button
          id="dLabel"
          type="button"
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2 p-2 bg-gray-200 rounded">
          <span>{language.toUpperCase()}</span>
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
            <li className="" onClick={() => changeLanguages("en")}>
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

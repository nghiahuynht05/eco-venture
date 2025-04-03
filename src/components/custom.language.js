import React, { useState, useContext, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { LanguageContext } from "../context/languageContext";

const LanguageSelector = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { language, changeLanguages } = useContext(LanguageContext);
  const dropdownRef = useRef(null);

  // Load ngôn ngữ từ localStorage khi component mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      changeLanguages(savedLanguage);
    }
  }, []);
  
  // Xử lý chọn ngôn ngữ và lưu vào localStorage
  const handleSelectLanguage = (lang) => {
    changeLanguages(lang);
    localStorage.setItem("language", lang);
    setShowDropdown(false);
  };

  // Đóng dropdown khi click ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="icon-language"  ref={dropdownRef}>
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
            <li className="" onClick={() => handleSelectLanguage("en")}>
              EN
            </li>
            <li className="" onClick={() => handleSelectLanguage("vi")}>
              VI
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;

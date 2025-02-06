import React, { createContext, useState, useEffect } from "react";
import en from "../locales/en.json";
import vi from "../locales/vi.json";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("lang") || "en");
  const translations = language === "en" ? en : vi;

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const changeLanguages = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, translations, changeLanguages }}>
      {children}
    </LanguageContext.Provider>
  );
};

export { LanguageContext, LanguageProvider };

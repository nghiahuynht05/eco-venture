import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext";

import Home from "./pages/home";
import About from "./pages/about";

const App = () => {
  useEffect(() => {
    localStorage.setItem("lang", "en");
  });
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;

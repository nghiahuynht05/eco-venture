import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/languageContext";

import Home from "./pages/home";
import About from "./pages/about";
import Tours from "./pages/tours";
import Experiences from "./pages/experiences";
import Sustainability from "./pages/sustainability";
import Offers from "./pages/offers";
import Gallery from "./pages/gallery";
import Press from "./pages/press";

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
          <Route path="/tours" element={<Tours />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/press" element={<Press />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;

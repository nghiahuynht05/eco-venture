import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./src/i18n";

import Home from "./src/pages/home";
import About from "./src/pages/about";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Star from "./components/Star";
import Experiance from "./components/Experiance";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Star />} />
        <Route path="/message" element={<Experiance/>} />
      </Routes>
    </Router>
  );
};
export default App;

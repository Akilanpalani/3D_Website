import React from "react";
import "./App.css";
import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Star from "./components/Star";
import Main from "./components/hoc/Main";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Star />} />
        <Route path="/message" element={<Main />} />
      </Routes>
    </Router>
  );
};
export default App;

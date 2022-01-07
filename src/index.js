import "./global.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import About from "./page/about";
import App from "./page/home";
import Music from "./components/music";
import React from "react";
import ReactDOM from "react-dom";
import Resume from "./page/resume";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Music />
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about-me" element={<About />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

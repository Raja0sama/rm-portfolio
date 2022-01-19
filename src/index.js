import "./global.css";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import About from "./page/about";
import Contact from "./page/contact";
import { Helmet } from "react-helmet";
import Home from "./page/home";
import Music from "./components/music";
import NotFound from "./page/404";
import Project from "./page/project";
import Projects from "./page/projects";
import ReactDOM from "react-dom";
import Resume from "./page/resume";
import Static from "./portfolio_static";

const App = () => {
  const controls = useAnimation();

  return (
    <React.StrictMode>
      <Music />
      <Helmet>
        <meta
          name="description"
          content="Just a developer with dreams of becoming as famous as Elon Musk."
        />
      </Helmet>
      <div onMouseMove={console.log}>
        <BrowserRouter>
          {/* <App /> */}
          <Routes>
            <Route path="/" element={<Home data={Static.home} />} />
            <Route path="/about-me" element={<About data={Static.About} />} />
            <Route path="/resume" element={<Resume data={Static.resume} />} />
            <Route
              path="/contact-me"
              element={<Contact data={Static.contact} />}
            />
            <Route
              path="/projects"
              element={<Projects data={Static.projects} />}
            />
            {Static.projects.map((e) => (
              <Route path={e.slug} element={<Project data={e} />} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </React.StrictMode>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));

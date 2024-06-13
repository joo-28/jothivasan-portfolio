import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import FooterBar from "./Components/FooterBar";
import Home from "./Components/Home";
import NavigationBar from "./Components/NavigationBar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import "./Components/animation.css";
const App = () => {
  return (
    <>
      <NavigationBar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <FooterBar />
    </>
  );
};

export default App;

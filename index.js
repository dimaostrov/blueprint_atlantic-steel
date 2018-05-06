import React from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./index.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";

const App = () => (
  <div className="App">
    <Header />
    <div className="content">
      <Intro />
      <About />
      <Gallery />
      <Contact />
      <img className="App-Logo" src={logo} alt="React Logo" />
      <h1 className="App-Title">Hello Parcel x React</h1>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));

// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}

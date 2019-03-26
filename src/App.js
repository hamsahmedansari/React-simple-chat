import React, { Component } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all";
import Home from "./component/home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;

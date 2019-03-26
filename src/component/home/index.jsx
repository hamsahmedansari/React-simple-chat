import React, { Component } from "react";
import "./style.scss";
import Chat from "../chat";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="home">
        <div className="container text-center mt-3">
          <h2>
            <i className="far fa-comments" /> Group Chat
          </h2>
        </div>
        {/* Chat */}
        <Chat />
      </div>
    );
  }
}

export default Home;

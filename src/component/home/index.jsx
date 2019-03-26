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
        <div className="container">
          <div className="row ">
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-12">
              <Chat active={true} />
            </div>
            <div className="col-12 col-xl-3 col-lg-4 col-sm-6 col-xs-12">
              <Chat />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

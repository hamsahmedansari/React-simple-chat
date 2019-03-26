import React, { Component } from "react";
import "./style.scss";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { active } = this.props;
    return (
      <div className={active ? "active chat" : "chat"}>
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src="/assets/images/1.jpeg" alt="" />
            </div>
            <div className="col-10 m-auto">name</div>
          </div>
          <div className="row">
            <div className="col-12">Body</div>
          </div>
          <div className="row">
            <div className="col-10">
              <textarea placeholder="Send Message here" />
            </div>
            <div className="col-1">
              <i className="fab fa-telegram-plane" />
            </div>
            <div className="col-1">
              <i className="far fa-smile-wink" />
              <div className="emoji">
                <i className="fas fa-laugh-squint" />
                <i className="fas fa-frown" />
                <i className="fas fa-heart" />
                <i className="fas fa-angry" />
                <i className="fas fa-smile-wink" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;

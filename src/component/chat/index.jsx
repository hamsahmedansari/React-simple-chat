import React, { Component } from "react";
import "./style.scss";
import ChatSingle from "../chatSingle";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojiClass: ""
    };
  }
  handelChangeEmoji = () => {
    const { emojiClass } = this.state;
    if (emojiClass) {
      this.setState(perState => ({
        ...perState,
        emojiClass: ""
      }));
    } else {
      this.setState(perState => ({
        ...perState,
        emojiClass: "active"
      }));
    }
  };
  render() {
    const { active } = this.props;
    const { emojiClass } = this.state;
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
            <div className="col-12">
              <ChatSingle />
              <ChatSingle />
              <ChatSingle date={true} />
            </div>
          </div>
          <div className="row">
            <div className="col-10">
              <textarea placeholder="Send Message here" />
            </div>
            <div className="col-1">
              <i className="fab fa-telegram-plane" />
            </div>
            <div className="col-1">
              <span onClick={this.handelChangeEmoji}>
                <i className="far fa-smile-wink" />
              </span>
              <div className={`emoji ${emojiClass}`}>
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

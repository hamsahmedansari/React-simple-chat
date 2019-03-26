import React, { Component } from "react";
import "./style.scss";
import PropsType from "prop-types";
import ChatSingle from "../chatSingle";

class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emojiClass: "",
      message: ""
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

  handelFocusOfTextarea = () => {
    const { changeStateOfUserFocus, user } = this.props;
    changeStateOfUserFocus(user._id);
  };

  handelAddMessage = () => {
    const { pushMessageToState, user } = this.props;
    pushMessageToState({
      _id: String(Date.now()),
      userId: user._id,
      message: this.state.message,
      date: new Date()
    });
    this.setState(perState => ({ ...perState, message: "" }));
  };

  handelAddReaction = param => {
    const { pushMessageToState, user } = this.props;
    pushMessageToState({
      _id: String(Date.now()),
      userId: user._id,
      reaction: param,
      date: new Date()
    });
    this.setState(perState => ({ ...perState, message: "" }));
    this.handelChangeEmoji();
  };

  handelChangeMessage = e => {
    const { value } = e.target;
    this.setState(perState => ({
      ...perState,
      message: value
    }));
  };

  render() {
    const { active, user, messages, allUsers } = this.props;
    const { emojiClass, message } = this.state;
    const { _id, name, image, color, fontColor } = user;

    return (
      <div className={active ? "active chat" : "chat"}>
        <div className="container" style={{ borderColor: color }}>
          <div
            className="row"
            style={{ backgroundColor: color, color: fontColor }}
          >
            <div className="col-2">
              <img src={image} alt="" />
            </div>
            <div className="col-10 m-auto">{name}</div>
          </div>
          <div className="row">
            <div className="col-12">
              {messages.map(message => {
                let cUser = allUsers.find(user => user._id === message.userId);
                return (
                  <ChatSingle
                    key={message._id}
                    isMine={cUser._id === _id ? true : false}
                    userName={cUser.name}
                    message={message.message ? message.message : false}
                    date={message.date}
                    reaction={message.reaction ? message.reaction : false}
                    image={cUser.image}
                    color={cUser.color}
                    fontColor={cUser.fontColor}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="row"
            style={{
              backgroundColor: color,
              color: fontColor,
              borderColor: color
            }}
          >
            <div className="col-10">
              <textarea
                placeholder="Send Message here"
                value={message}
                onFocus={this.handelFocusOfTextarea}
                onBlur={this.handelFocusOfTextarea}
                onChange={this.handelChangeMessage}
              />
            </div>
            <div className="col-1">
              <span onClick={this.handelAddMessage}>
                <i className="fab fa-telegram-plane" />
              </span>
            </div>
            <div className="col-1">
              <span onClick={this.handelChangeEmoji}>
                <i className="far fa-smile-wink" />
              </span>
              <div className={`emoji ${emojiClass}`}>
                <span
                  onClick={() => this.handelAddReaction("fas fa-laugh-squint")}
                >
                  <i className="fas fa-laugh-squint" />
                </span>
                <span onClick={() => this.handelAddReaction("fas fa-frown")}>
                  <i className="fas fa-frown" />
                </span>
                <span onClick={() => this.handelAddReaction("fas fa-heart")}>
                  <i className="fas fa-heart" />
                </span>
                <span onClick={() => this.handelAddReaction("fas fa-angry")}>
                  <i className="fas fa-angry" />
                </span>
                <span
                  onClick={() => this.handelAddReaction("fas fa-smile-wink")}
                >
                  <i className="fas fa-smile-wink" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Chat.propTypes = {
  user: PropsType.object.isRequired,
  active: PropsType.bool,
  messages: PropsType.array.isRequired,
  allUsers: PropsType.array.isRequired,
  changeStateOfUserFocus: PropsType.func.isRequired,
  pushMessageToState: PropsType.func.isRequired
};

export default Chat;

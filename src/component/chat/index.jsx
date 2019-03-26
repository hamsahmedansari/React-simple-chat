import React, { Component } from "react";
import "./style.scss";
import PropsType from "prop-types";
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
    const { active, user, messages, allUsers } = this.props;
    const { emojiClass } = this.state;
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

              {/* <ChatSingle
                color="#C2185B"
                userName="Wahaj"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa quia at saepe odio, sit assumenda velit, eaque modi nisi voluptates exercitationem explicabo suscipit! Quaerat accusamus ratione aut hic illo!"
                date={new Date()}
                image="/assets/images/1.jpeg"
              />
              <ChatSingle
                isMine={true}
                userName="Hams"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem ipsa quia at saepe odio, sit assumenda velit, eaque modi nisi voluptates exercitationem explicabo suscipit! Quaerat accusamus ratione aut hic illo!"
                date={new Date()}
                image="/assets/images/1.jpeg"
              />
              <ChatSingle
                isMine={true}
                userName="Hams"
                reaction="fas fa-frown"
                date={new Date()}
                image="/assets/images/1.jpeg"
              />
              <ChatSingle
                userName="Wahaj"
                color="#C2185B"
                date={new Date()}
                image="/assets/images/1.jpeg"
              /> */}
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

Chat.propTypes = {
  user: PropsType.object.isRequired,
  active: PropsType.bool,
  messages: PropsType.array.isRequired,
  allUsers: PropsType.array.isRequired
};

export default Chat;

import React, { Component } from "react";
import "./styls.scss";

class ChatSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateVisible: false
    };
  }
  handleToggleDateVisibility = () => {
    const isDateVisible = !this.state.isDateVisible;
    this.setState(perState => ({
      ...perState,
      isDateVisible
    }));
  };
  render() {
    const { isDateVisible } = this.state;
    return (
      <div className="chatSingle">
        <div className="row">
          <div className="col-2">
            <img src="/assets/images/1.jpeg" alt="" />
          </div>
          <div className="col-10">
            <p onClick={() => this.handleToggleDateVisibility()}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
              quis doloremque facilis nostrum eos possimus veniam explicabo
              temporibus maxime dolorem, dolorum, velit hic eligendi porro nulla
              assumenda tenetur, doloribus magni.
            </p>
            {isDateVisible && (
              <p className={isDateVisible ? "active" : ""}>10 min ago</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ChatSingle;

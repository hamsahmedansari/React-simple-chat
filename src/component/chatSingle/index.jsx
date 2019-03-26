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
    const { isMine, color, image, userName, message, date } = this.props;
    return (
      <div className="chatSingle">
        <div className="row">
          {isMine || (
            <React.Fragment>
              <div className="col-2 user">
                <img src={image} alt="" style={{ borderColor: color }} />
              </div>
              <div className="col-10 message">
                <p>{userName}</p>
                <p
                  onClick={() => this.handleToggleDateVisibility()}
                  style={{ background: color }}
                >
                  {message}
                </p>
                {isDateVisible && (
                  <p className={isDateVisible ? "active" : ""}>{date}</p>
                )}
              </div>
            </React.Fragment>
          )}
          {isMine && (
            <React.Fragment>
              <div className="col-10 message active">
                <p>{userName}</p>
                <p
                  onClick={() => this.handleToggleDateVisibility()}
                  style={{ background: color }}
                >
                  {message}
                </p>
                {isDateVisible && (
                  <p className={isDateVisible ? "active" : ""}>{date}</p>
                )}
              </div>
              <div className="col-2 user">
                <img src={image} alt="" style={{ borderColor: color }} />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default ChatSingle;

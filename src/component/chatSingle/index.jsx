import React, { Component } from "react";
import PropTypes from "prop-types";
import "./style.scss";

class ChatSingle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateVisible: false
    };
  }
  componentDidMount() {
    if (!this.props.isFocus) {
      this.refs.message.scrollIntoView();
    }
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
    const {
      isMine,
      color,
      image,
      userName,
      message,
      date,
      reaction,
      isFocus
    } = this.props;
    return (
      <div className="chatSingle" ref="message">
        <div className="row">
          {isMine || (
            <React.Fragment>
              <div className="col-2 user animated slideInLeft">
                <img src={image} alt="" style={{ borderColor: color }} />
              </div>
              <div className="col-10 message  animated slideInLeft">
                <p>{userName}</p>
                <p
                  onClick={() => this.handleToggleDateVisibility()}
                  style={{ background: color }}
                  className={
                    reaction
                      ? "reaction  animated lightSpeedIn"
                      : isFocus
                      ? "isMessage-box  animated lightSpeedIn"
                      : "animated lightSpeedIn"
                  }
                >
                  {reaction && <i className={reaction} />}
                  {!reaction && message}
                  {isFocus && (
                    <img
                      src="/assets/images/msg.gif"
                      className="isMessage"
                      alt=""
                    />
                  )}
                </p>
                {isDateVisible && (
                  <p className={isDateVisible ? "active" : ""}>
                    {new Date(date).toDateString()}
                  </p>
                )}
              </div>
            </React.Fragment>
          )}
          {isMine && (
            <React.Fragment>
              <div className="col-10 message active animated slideInRight">
                <p>{userName}</p>
                <p
                  onClick={() => this.handleToggleDateVisibility()}
                  style={{ background: color, marginLeft: "auto" }}
                  className={
                    reaction
                      ? "reaction  animated lightSpeedIn"
                      : isFocus
                      ? "reaction  animated lightSpeedIn"
                      : "animated lightSpeedIn"
                  }
                >
                  {reaction && <i className={reaction} />}
                  {!reaction && message}
                  {isFocus && (
                    <img
                      src="/assets/images/msg.gif"
                      className="isMessage"
                      alt=""
                    />
                  )}
                </p>
                {isDateVisible && (
                  <p className={isDateVisible ? "active" : ""}>
                    {new Date(date).toDateString()}
                  </p>
                )}
              </div>
              <div className="col-2 user   animated slideInRight">
                <img src={image} alt="" style={{ borderColor: color }} />
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

ChatSingle.propTypes = {
  isMine: PropTypes.bool,
  color: PropTypes.string,
  image: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  reaction: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  isFocus: PropTypes.bool
};

export default ChatSingle;

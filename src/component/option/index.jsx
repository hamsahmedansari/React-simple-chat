import React, { Component } from "react";
import "./style.scss";
import Chat from "../chat";

class Option extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Hams Ahmed Ansari",
      image: "/assets/images/4.jpeg",
      color: "#03A9F4",
      fontColor: "#fff"
    };
  }
  render() {
    const { color, fontColor, image, name } = this.state;
    return (
      <div className="option">
        <div className="flex-container w-100 h-100">
          <div className="item">
            <div className="chat">
              <div className="container" style={{ borderColor: color }}>
                <div
                  className="row"
                  style={{ backgroundColor: color, color: fontColor }}
                >
                  <div className="col-2">
                    <img src={image} alt="" />
                  </div>
                  <div className="col-10 m-auto pl-3">
                    {name.length > 12 ? name.slice(0, 12) + "..." : name}
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="chatSingle" ref="message">
                      <div className="row">
                        <React.Fragment>
                          <div className="col-2 user animated slideInLeft">
                            <img
                              src="/assets/images/3.jpeg"
                              alt=""
                              style={{ borderColor: "#C2185B" }}
                            />
                          </div>
                          <div className="col-10 message  animated slideInLeft">
                            <p>Jhon</p>
                            <p
                              onClick={() => this.handleToggleDateVisibility()}
                              style={{ background: "#C2185B" }}
                              className=" animated lightSpeedIn"
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                          </div>
                        </React.Fragment>
                        <React.Fragment>
                          <div className="col-10 message active animated slideInRight">
                            <p>Whick</p>
                            <p
                              onClick={() => this.handleToggleDateVisibility()}
                              style={{ background: color, marginLeft: "auto" }}
                              className="animated lightSpeedIn"
                            >
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Animi culpa consectetur reiciendis eveniet
                              labore repellat doloremque
                            </p>
                          </div>
                          <div className="col-2 user   animated slideInRight">
                            <img
                              src={image}
                              alt=""
                              style={{ borderColor: color }}
                            />
                          </div>
                        </React.Fragment>
                      </div>
                    </div>
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
                      value=""
                      disabled={true}
                    />
                  </div>
                  <div className="col-1">
                    <span>
                      <i className="fab fa-telegram-plane" />
                    </span>
                  </div>
                  <div className="col-1">
                    <span>
                      <i className="far fa-smile-wink" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">right</div>
        </div>
      </div>
    );
  }
}

export default Option;

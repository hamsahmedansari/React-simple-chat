import React, { Component } from "react";
import "./style.scss";
import PropsTypes from "prop-types";

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
  handleAvatarChange = param => {
    this.setState(perState => ({ ...perState, image: param }));
  };
  handleColorChange = param => {
    this.setState(perState => ({ ...perState, color: param }));
  };
  handleFontColorChange = param => {
    this.setState(perState => ({ ...perState, fontColor: param }));
  };
  handleUserNameChange = e => {
    const { value } = e.target;
    this.setState(perState => ({ ...perState, name: value }));
  };
  handleAddUser = () => {
    const { name, image, color, fontColor } = this.state;
    const { pushUserToState, toggleIsOptionInState } = this.props;
    if (!name) return false;
    pushUserToState({
      _id: Date.now(),
      name,
      image,
      color,
      fontColor,
      active: false,
      isFocus: false
    });
    toggleIsOptionInState();
  };
  render() {
    const { color, fontColor, image, name } = this.state;
    const { toggleIsOptionInState } = this.props;
    const images = [
      "/assets/images/1.jpeg",
      "/assets/images/2.jpeg",
      "/assets/images/3.jpeg",
      "/assets/images/4.jpeg",
      "/assets/images/5.jpeg",
      "/assets/images/6.jpeg",
      "/assets/images/7.jpeg",
      "/assets/images/8.jpeg",
      "/assets/images/9.jpeg",
      "/assets/images/10.jpeg",
      "/assets/images/11.jpeg",
      "/assets/images/12.jpeg"
    ];
    const colors = [
      "#C2185B",
      "#D32F2F",
      "#FF4081",
      "#7B1FA2",
      "#303F9F",
      "#0097A7",
      "#03A9F4",
      "#009688",
      "#388E3C",
      "#8BC34A",
      "#AFB42B",
      "#FFEB3B",
      "#FFA000",
      "#FF9800",
      "#E64A19",
      "#795548",
      "#616161",
      "#607D8B",
      "#212121",
      "#F5F5F5"
    ];
    const fontColors = ["#fff", ...colors];
    const oppositeColor = colors.filter(item => item !== color);

    return (
      <div className="option">
        <div className="flex-container w-100 h-100">
          <div className="item col-lg-6 col-md-6 col-sm-12">
            <div className="chat animated bounceIn">
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
                <div className="row" style={{ borderColor: color }}>
                  <div className="col-12">
                    <div className="chatSingle" ref="message">
                      <div className="row">
                        <React.Fragment>
                          <div className="col-2 user animated slideInLeft">
                            <img
                              src="/assets/images/3.jpeg"
                              alt=""
                              style={{ borderColor: oppositeColor[0] }}
                            />
                          </div>
                          <div className="col-10 message  animated slideInLeft">
                            <p>Jhon</p>
                            <p
                              style={{ background: oppositeColor[0] }}
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
          <div className="item col-lg-6 col-md-6 col-sm-12 form animated slideInRight">
            <div className="row text-center ">
              <div className=" form-group col-12 border-1 form-inline p-2 bg-primary text-light">
                <label
                  className="w-100"
                  style={{ marginRight: "5px", width: "100%" }}
                >
                  <input
                    type="text"
                    value={name}
                    className="form-control"
                    placeholder="User Name"
                    onChange={this.handleUserNameChange}
                  />
                  <button
                    className="btn btn-success"
                    style={{
                      marginLeft: "10px"
                    }}
                    onClick={this.handleAddUser}
                  >
                    Add
                  </button>
                  <button
                    className="btn btn-danger"
                    style={{
                      marginLeft: "10px"
                    }}
                    onClick={toggleIsOptionInState}
                  >
                    Close
                  </button>
                </label>
              </div>
              <div
                className="form-group col-12 border-1"
                style={{ overflowY: "scroll", maxHeight: "200px" }}
              >
                <p className="text-center">Avatar</p>
                {images.map(img => (
                  <div
                    key={img}
                    className={`avatar-img ${img === image ? "active" : ""}`}
                    onClick={() => this.handleAvatarChange(img)}
                  >
                    <img src={img} alt="" />
                  </div>
                ))}
              </div>
              <div
                className="form-group col-12 border-1"
                style={{ overflowY: "scroll", maxHeight: "200px" }}
              >
                <p className="text-center">Color</p>
                {colors.map(item => (
                  <div
                    key={item}
                    className={`color-img ${item === color ? "active" : ""}`}
                    onClick={() => this.handleColorChange(item)}
                    style={{
                      background: item
                    }}
                  />
                ))}
              </div>
              <div
                className="form-group col-12 border-1"
                style={{ overflowY: "scroll", maxHeight: "200px" }}
              >
                <p className="text-center">Font Color</p>
                {fontColors.map(item => (
                  <div
                    key={item}
                    className={`color-img ${
                      item === fontColor ? "active" : ""
                    }`}
                    onClick={() => this.handleFontColorChange(item)}
                    style={{
                      background: item
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Option.propTypes = {
  toggleIsOptionInState: PropsTypes.func.isRequired,
  pushUserToState: PropsTypes.func.isRequired
};

export default Option;

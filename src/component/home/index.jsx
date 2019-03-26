import React, { Component } from "react";
import "./style.scss";
import Chat from "../chat";
import Option from "../option";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          _id: "1",
          name: "Hams Ahmed Ansari",
          image: "/assets/images/4.jpeg",
          color: "#03A9F4",
          fontColor: "#fff",
          active: false
        },
        {
          _id: "2",
          name: "Wahaj Ahmed Iqbal",
          image: "/assets/images/1.jpeg",
          color: "#C2185B",
          fontColor: "#fff",
          active: false
        },
        {
          _id: "3",
          name: "Fasial Hanif",
          image: "/assets/images/3.jpeg",
          color: "#7B1FA2",
          fontColor: "#fff",
          active: false
        }
      ],
      messages: [
        {
          _id: "1",
          userId: "1",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas voluptatibus, autem dolorem quidem in exercitationem, harum illo atque aperiam earum molestias quos doloribus consequuntur asperiores possimus rerum sed ad?",
          date: "Tue Mar 26 2019"
        },
        {
          _id: "2",
          userId: "2",
          message:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptas voluptatibus,?",
          date: "Tue Mar 26 2019"
        },
        {
          _id: "3",
          userId: "3",
          reaction: "fas fa-frown",
          date: "Tue Mar 26 2019"
        },
        {
          _id: "4",
          userId: "2",
          message: " voluptas voluptatibus,?",
          date: "Tue Mar 26 2019"
        }
      ]
    };
  }

  changeStateOfUserFocus = userID => {
    const { users } = this.state;
    const updateUser = users.map(user => {
      if (user._id === userID) user.active = !user.active;
      else user.active = false;
      return user;
    });
    this.setState(preState => ({
      ...preState,
      users: updateUser
    }));
  };

  pushMessageToState = message => {
    const { messages } = { ...this.state };
    messages.push(message);
    console.log(messages);

    this.setState(preState => ({
      ...preState,
      messages
    }));
  };

  render() {
    return (
      // <div className="home">
      //   <div className="container">
      //     <div className="row ">
      //       {this.state.users.map(user => (
      //         <div
      //           className="col-12 col-xl-4 col-lg-4 col-sm-6 col-xs-12 mb-5"
      //           key={user._id}
      //         >
      //           <Chat
      //             user={user}
      //             active={user.active}
      //             messages={this.state.messages}
      //             allUsers={this.state.users}
      //             changeStateOfUserFocus={this.changeStateOfUserFocus}
      //             pushMessageToState={this.pushMessageToState}
      //           />
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </div>
      <Option />
    );
  }
}

export default Home;

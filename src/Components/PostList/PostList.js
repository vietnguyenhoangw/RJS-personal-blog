import React, { Component } from "react";
import "./PostList.css";
import PropTypes from "prop-types";

// components
import { PostCard } from "../../Components"

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Hello", "Haha", "Hihi", "Hello", "Haha", "Hihi", "Hello", "Haha", "Hihi"],
    };
  }

  displayList() {
    return this.state.list.map((item) => (
      <PostCard />
    ));
  };

  displayHeader() {
    return (
      <div style={{height: "20vh",  width: "100%", backgroundColor: 'red', marginBottom: 15}}>
        <p>Hello</p>
      </div>
    )
  };

  render() {
    return (
      <nav
        class="w3-animate-right main-wrapper row"
        id="mySidebar"
        style={{ backgroundColor: 'white', overflow: "auto", paddingLeft: 15, paddingRight: 15 }}
      >
        {this.displayHeader()}
        {this.displayList()}
      </nav>
    );
  }
}

export default PostList;

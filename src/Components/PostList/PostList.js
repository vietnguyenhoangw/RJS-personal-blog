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

  render() {
    return (
      <nav
        class="w3-animate-right main-wrapper row ml-2 p-4"
        id="mySidebar"
        style={{ backgroundColor: 'white', overflow: "auto" }}
      >
        {this.displayList()}
      </nav>
    );
  }
}

export default PostList;

import React, { Component } from "react";
import "./PostList.css";
import PropTypes from "prop-types";

// components
import { PostCard } from "../../Components" 

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: ["Hello", "Haha", "Hihi"],
    };
  }

  displayList (){
    return this.state.list.map((item) => (
      <div>
        <PostCard />
      </div>
    ));
  };

  render() {
    return (
        <nav
          class="w3-animate-right main-wrapper" 
          styles="z-index:3;width:500px"
          id="mySidebar"
          style={{backgroundColor: 'white'}}
        >
          {this.displayList()}
        </nav>
    );
  }
}

export default PostList;

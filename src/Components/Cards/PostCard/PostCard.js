import React, { Component } from "react";
import "./PostCard.css";
import PropTypes from "prop-types";

class PostCard extends Component {
  render() {
    return (
      <nav
        style={{ backgroundColor: '#e3e3e3', width: 200, height: 500, display: "flex", flexDirection: "row" }}
      >
        <h2>Hello world</h2>
      </nav>
    );
  }
}

export default PostCard;

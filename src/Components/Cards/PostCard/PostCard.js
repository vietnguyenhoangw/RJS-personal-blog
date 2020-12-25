import React, { Component } from "react";
import "./PostCard.css";
import PropTypes from "prop-types";

class PostCard extends Component {
  render() {
    return (
      <div
        className="mb-4 col-md-4 col-sm-6"
        style={{ backgroundColor: 'green', display: "flex", flexDirection: "row", height: "50vh" }}
      >
        <div style={{ backgroundColor: 'red', flex: 1 }}>
          <h2>Hello world</h2>
        </div>
      </div>
    );
  }
}

export default PostCard;

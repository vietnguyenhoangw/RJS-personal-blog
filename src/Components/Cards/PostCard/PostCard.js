import React, { Component } from "react";
import "./PostCard.css";
import PropTypes from "prop-types";

class PostCard extends Component {
  render() {
    return (
      <div
        className="mb-4 col-md-4 col-sm-6 pr-0"
        style={{ display: "flex", flexDirection: "row", width: "100vh" }}
      >
        <div style={{background:"rgb(241, 241, 241)"}}>
          <img width="100%" height="210px" src="https://www.guillenphoto.com/data/blog/2016/005-chronique-pourquoi-choisir-un-point-de-vue/images/why-choosing-a-good-point-of-view-in-nature-photography-amar-guillen-photographer.jpg" class="w3-hover-opacity"></img>
          <div class="p-2">
            <p style={{marginBottom: 0}}><b>Lorem Ipsum</b></p>
            <p>Praesent porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;

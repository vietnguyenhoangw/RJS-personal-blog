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
        <div style={{ background: "rgb(241, 241, 241)", borderRadius: 5 }}>
          <img
            width="100%"
            height="230px"
            src="https://www.guillenphoto.com/data/blog/2016/005-chronique-pourquoi-choisir-un-point-de-vue/images/why-choosing-a-good-point-of-view-in-nature-photography-amar-guillen-photographer.jpg"
            class="w3-hover-opacity"
          />
          <div class="p-2">
            <h5 style={{ marginBottom: 0 }}>
              <b>Lorem Ipsum</b>
            </h5>
            <p style={{fontSize: 15}}>
              Praesent porta lectus vitae, ultricies congue gravida diam non
              fringilla.
            </p>
            <img
              style={{float: "right", marginBottom: 10}}
              width="35"
              height="35"
              src="https://i.pinimg.com/originals/cc/e9/a9/cce9a9a4a3d74bfce45f8b568d8c6e6d.png"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default PostCard;

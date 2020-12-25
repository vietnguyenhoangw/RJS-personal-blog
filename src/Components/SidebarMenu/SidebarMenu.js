import React, { Component } from "react";
import "./SidebarMenu.css";
import PropTypes from "prop-types";

class SidebarMenu extends Component {
  render() {
    return (
        <nav
          class="w3-animate-left main-wrapper" 
          id="mySidebar"
          style={{backgroundColor: 'white', width: "100vh", height: "100vh"}}
        >
          <br />
          <div class="w3-container">
            <img
              src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
              class="w3-round"
              alt="Lamp" width="200" height="200"
            />
            <br />
            <br />
            <h4>
              <b>User name</b>
            </h4>
            <small class="w3-text-grey">Nickname</small>
          </div>
          <div class="w3-bar-block mt-3">
            <a
              href="#portfolio"
              class="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i class="fa fa-th-large fa-fw w3-margin-right"></i>PORTFOLIO
            </a>
            <a
              href="#about"
              class="w3-bar-item w3-button w3-padding"
            >
              <i class="fa fa-user fa-fw w3-margin-right"></i>ABOUT
            </a>
            <a
              href="#contact"
              class="w3-bar-item w3-button w3-padding"
            >
              <i class="fa fa-envelope fa-fw w3-margin-right"></i>CONTACT
            </a>
          </div>
          <div class="w3-panel w3-large">
            <i class="fa fa-facebook-official w3-hover-opacity"></i>
            <i class="fa fa-instagram w3-hover-opacity ml-2"></i>
            <i class="fa fa-linkedin w3-hover-opacity ml-2"></i>
          </div>
        </nav>
    );
  }
}

export default SidebarMenu;

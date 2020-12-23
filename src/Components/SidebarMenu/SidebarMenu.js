import React, { Component } from "react";
import "./SidebarMenu.css";
import PropTypes from "prop-types";

class SidebarMenu extends Component {
  render() {
    return (
        <nav
          class="w3-animate-left main-wrapper" 
          styles="z-index:3;width:500px"
          id="mySidebar"
          style={{backgroundColor: 'white'}}
        >
          <br />
          <div class="w3-container">
            <img
              src="https://instagram.fvca1-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/122418970_211955720281628_255286849937744536_n.jpg?_nc_ht=instagram.fvca1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=fyeMD2IY9ZEAX9C4RJf&tp=1&oh=6c6a17ef4df461a887df619df3ce43f1&oe=600E535B"
              class="w3-round"
              alt="Lamp" width="200" height="200"
            />
            <br />
            <br />
            <h4>
              <b>Nguyen Hoang Viet</b>
            </h4>
            <small class="w3-text-grey">vietnguyenhoangw</small>
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
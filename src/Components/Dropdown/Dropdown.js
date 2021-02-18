import React, { Component } from "react";
import "./Dropdown.css";
import PropTypes from "prop-types";

// themes
import { Images } from "../../Themes";

class Dropdown extends Component {
  displayList() {
    if (this.props.data) {
      return this.props.data.map((item) => (
        <a href="#">
          <img src={item.image} width="25" height="25" />
          <p>{item.title}</p>
        </a>
      ));
    } else {
      return <></>;
    }
  }

  render() {
    return (
      <div class="language-drop">
        <a href="#" style={{ fontSize: 16 }}>
          <p>{this.props.title}</p>
          <img src={Images.drop_down_arrow.default} width="15" height="15" />
        </a>
        <div class="language-menu-content">
          <div class="language-menu">{this.displayList()}</div>
        </div>
      </div>
    );
  }
}

Dropdown.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
};

export default Dropdown;

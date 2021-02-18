import React, { Component } from "react";
import "./Text.css";
import PropTypes from "prop-types";

class Text extends Component {
  render() {
    return <p class={this.props.class}>{this.props.text}</p>;
  }
}

Text.propTypes = {
  text: PropTypes.string,
  class: PropTypes.string,
};

export default Text;

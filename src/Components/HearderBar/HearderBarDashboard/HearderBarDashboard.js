import React, { Component } from "react";
import "./HearderBarDashboard.css";
import PropTypes from "prop-types";

// components
import { Dropdown, Text } from "../../../Components";

class HearderBarDashboard extends Component {
  render() {
    const { title, dropdownTitle, dropdownData } = this.props;

    return (
      <nav class="navbar navbar-expand-lg fixed-top">
        <a
          class="navbar-brand"
          href="#"
          style={{ fontSize: 24, fontWeight: "bold", color: "#000" }}
        >
          <Text text={title} />
        </a>
        <div style={{ flex: 1 }} />
        <div class="select-language">
          <Dropdown data={dropdownData} title={dropdownTitle} />
        </div>
      </nav>
    );
  }
}

HearderBarDashboard.propTypes = {
  title: PropTypes.string,
  dropdownTitle: PropTypes.string,
  dropdownData: PropTypes.array,
};

export default HearderBarDashboard;

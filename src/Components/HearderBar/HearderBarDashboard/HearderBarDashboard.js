import React, { Component } from "react";
import "./HearderBarDashboard.css";
import PropTypes from "prop-types";

// themes
import { Images } from "../../../Themes"

class HearderBarDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ "title": "Tiếng Việt", "image": Images.vi_flag.default }, { "title": "English", "image": Images.eng_flag.default }],
    };
  }

  displayList() {
    return this.state.list.map((item) => (
      <a href="#">
        <img src={item.image} width="25" height="25" />
        <p>{item.title}</p>
      </a>
    ));
  };

  render() {
    const { title, children } = this.props;

    return (
      <nav class="navbar navbar-expand-lg fixed-top">
        <a class="navbar-brand" href="#" style={{ fontSize: 24, fontWeight: 'bold' }}>VocabEnglish</a>
        <div style={{ flex: 1 }} />
        <div class="select-language">
          <div class="language-drop" >
            <a href="#" style={{ fontSize: 16 }}>
              <p>Ngôn ngữ bạn chọn</p>
              <img src={Images.drop_down_arrow.default} width="15" height="15" />
            </a>
            <div class="language-menu-content">
              <div class="language-menu">
                {this.displayList()}
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

HearderBarDashboard.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default HearderBarDashboard;

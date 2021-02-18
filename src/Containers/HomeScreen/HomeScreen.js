import React from "react";
import "./Styles/HomeScreen.css";

// styles
import Styles from "./Styles/HomeScreenStyle";

// components
import { HearderBarDashboard, Text } from "../../Components";

// themes
import { Images } from "../../Themes";

// constants
import * as Constants from "../../Constants";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        style={{
          backgroundImage: "url(" + Images.ocean_backround.default + ")",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          padding: "unset",
        }}
      >
        <HearderBarDashboard
          title={"VocabEnglish"}
          dropdownTitle={"Chọn ngôn ngữ"}
          dropdownData={Constants.LanguageList}
        />
        <div class="container">
          <div class="contain_container">
            <div class="left_content">
              <img class="image_content" src={Images.background1.default} />
            </div>
            <div class="right_content">
              <div class="text_content">
                <Text
                  text="Học từ vựng tiếng anh thật dễ dàng và 'Hoàn toàn miễn phí' với"
                  class="description"
                />
                <Text text="VocabEnglish" class="title" />
                <div class="btn_container">
                  <button class="button button1">
                    {"Trải nghiệm thử ngay"}
                  </button>
                  <button class="button button2">{"Đăng nhập"}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav
          class="navbar navbar-expand-lg fixed-bottom"
          style={Styles.bottomBar}
        >
          <a class="bottom_btn" href="#">
            <p style={Styles.bottomBtnTitle}>Tìm hiểu thêm về chúng tôi</p>
            <img class="bottom_icon" src={Images.tap.default} />
          </a>
        </nav>
      </div>
    );
  }
}

export default HomeScreen;

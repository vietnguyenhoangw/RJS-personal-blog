import React from "react";

// styles
import "./Styles/HomeScreen.css";
// import Styles from "./Styles/HomeScreen";

// components
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";
import PostList from "../../Components/PostList/PostList";

// constant
import { backgroundImage } from "../../Constants/ConstantData";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        class="container-fluid main-wrapper"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        <div class="row">
          <div class="col-3 .bg-success">
            <div
              style={{
                alignSelf: "center",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <SidebarMenu />
            </div>
          </div>
          <div class="col-9 .bg-secondary pl-0" style={{
            overflow: "auto"
          }}>
            <PostList />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeScreen;

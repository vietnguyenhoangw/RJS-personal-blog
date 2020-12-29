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
        style={{ backgroundColor: "white" }}
      >
        <div class="row">
          <div class="col-1" />
          <div>
            {/* Top navigation bar */}
            <div
              class="col-10"
              style={{
                height: 70,
                width: "100%",
                backgroundColor: "white",
                marginBottom: 15,
                position: "absolute",
                zIndex: 100,
                boxShadow:"0px 4px 2px #FAFAFA"
              }}
            >
              <div
                style={{
                  width: "17%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                <b style={{ alignSelf: "center", margin: 0 }}>
                  <h3 style={{ margin: 0 }}>Personal Blog</h3>
                </b>
              </div>
              <div />
            </div>
          </div>
          <div class="col-2 .bg-success" style={{paddingRight: 10}}>
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
          <div
            class="col-8 .bg-secondary pl-0"
            style={{
              overflow: "auto",
            }}
          >
            <PostList />
          </div>
          <div class="col-1" />
        </div>
      </div>
    );
  }
}

export default HomeScreen;

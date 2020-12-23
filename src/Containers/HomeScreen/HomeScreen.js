import React from "react";

// styles
import "./Styles/HomeScreen.css";
// import Styles from "./Styles/HomeScreen";

// components
import SidebarMenu from "../../Components/SidebarMenu/SidebarMenu";

// constant
import { backgroundImage } from "../../Constants/ConstantData";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{backgroundColor: '#f1f1f1'}}>
        <div
          style={{
            width: "30%",
            alignSelf: "center",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <SidebarMenu />
        </div>
      </div>
    );
  }
}

export default HomeScreen;

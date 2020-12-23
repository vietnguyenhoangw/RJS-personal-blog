import React from "react";

// styles
import "./Styles/HomeScreen.css";
// import Styles from "./Styles/HomeScreen";

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
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <h3>Home</h3>
      </div>
    );
  }
}

export default HomeScreen;

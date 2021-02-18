import React from "react";

// Components
import { HearderBarDashboard } from "../../Components"

// themes
import { Images } from "../../Themes"

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="container-fluid main-wrapper"
        style={{
          backgroundImage: "url(" + Images.ocean_backround.default + ")",
          display: "flex",
          justifyContent: "center",
          backgroundSize: "cover",
          backgroundRepeat: 'no-repeat',
          padding: 'unset'
        }}
      >
        <HearderBarDashboard />
      </div>
    );
  }
}

export default HomeScreen;

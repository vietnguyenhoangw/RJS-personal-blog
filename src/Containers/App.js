import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

// screen
import LoginScreen from "./LoginScreen/LoginScreen"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <LoginScreen />
        </header>
      </div>
    );
  }
}

export default App;

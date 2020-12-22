import React from "react";
import "bootstrap/dist/css/bootstrap.css";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// screen
import LoginScreen from "./LoginScreen/LoginScreen";
import HomeScreen from "./HomeScreen/HomeScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginScreen />
          </Route>
          <Route path="/login">
            <LoginScreen />
          </Route>
          <Route path="/home">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.css";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PrivateRoute from "../Components/Routers/PrivateRoute";
import PublicRoute from "../Components/Routers/PublicRoute";

// screen
import LoginScreen from "./LoginScreen/LoginScreen";
import HomeScreen from "./HomeScreen/HomeScreen";
import UserDashboardScreen from "./UserDashboardScreen/UserDashboardScreen";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute restricted={false} component={HomeScreen} path="/" exact />
          <PublicRoute
            restricted={true}
            component={LoginScreen}
            path="/login"
            exact
          />
          <PrivateRoute component={UserDashboardScreen} path="/user_dashboard" exact />
        </Switch>
      </Router>
    );
  }
}

export default App;

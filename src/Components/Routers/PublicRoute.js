import React, { Component } from "react";

// router
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";


class PublicRoute extends Component {
  render() {
    const isLogin = false
    const { component: Component, restricted, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin && restricted ? (
            <Redirect to="/user_dashboard"/>
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

export default PublicRoute;

import React, { Component }  from "react";

// router
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

class PrivateRoute extends Component {
    render() {
      const { component: Component, ...rest } = this.props;
      const isLogin = false

      return (
        <Route {...rest} render={props => (
            isLogin ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
      );
    }
  }
  
  export default PrivateRoute;
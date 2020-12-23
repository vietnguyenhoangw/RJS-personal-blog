import React, { PropTypes } from "react";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PublicRoute extends Component {
  render() {
    const { component: Component, restricted, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) =>
          isLogin() && restricted ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

export default PublicRoute;

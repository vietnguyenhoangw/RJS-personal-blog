import React, { PropTypes } from "react";

// router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class PrivateRoute extends Component {
    render() {
      const { component: Component, ...rest } = this.props;
  
      return (
        <Route {...rest} render={props => (
            isLogin() ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
      );
    }
  }
  
  export default PrivateRoute;
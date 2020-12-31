import { connect } from "react-redux";
import LoginScreen from "../../Containers/LoginScreen/LoginScreen";

// actions
import { ActionEvent } from "../actions/ActionTypes";
import * as actions from "../actions/AuthActions"

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  ...actions
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
export default LoginContainer;

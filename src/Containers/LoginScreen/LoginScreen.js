import React from "react";

// styles
import "./Styles/LoginScreen.css";
import Styles from "./Styles/LoginScreenStyle";

// constant
import { backgroundImage } from "../../Constants/ConstantData";

// redux
import { connect } from "react-redux";
import * as actions from "../../Redux/actions/AuthActions"

let inputTypes = {
  EMAIL: "email",
  PASSWORD: "passworld",
};
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
    console.log("Email >>>>>>", this.state.email);
    console.log("Password >>>>>>", this.state.password);
  }

  getInput(e, inputType) {
    switch (inputType) {
      case inputTypes.EMAIL:
        this.setState({ email: e.target.value });
        break;
      case inputTypes.PASSWORD:
        this.setState({ password: e.target.value });
        break;
      default:
        console.log("Input is not valid");
    }
  }

  render() {

    return (
      <div
        className="container-fluid main-wrapper"
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div className="row" style={Styles.contentContainer}>
          <div className="col-6" style={Styles.leftContent}>
            <div style={Styles.formContainer}>
              <form>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    onChange={(e) => this.getInput(e, inputTypes.EMAIL)}
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    onChange={(e) => this.getInput(e, inputTypes.PASSWORD)}
                  />
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <small className="form-check-label" htmlFor="exampleCheck1">
                    Remember me in the next login time
                  </small>
                </div>
              </form>
              <button
                type="submit"
                className="btn btn-primary"
                style={Styles.submitBtn}
                onClick={() => {
                  this.props.loginEmail({ email: "vietnguyenhoangw@gmail.com", password: "12345678" })
                }}
              >
                Login
              </button>
            </div>
          </div>
          <div className="col-6 " style={Styles.rightContainer}></div>
        </div>
      </div>
    );
  }
}

// export default LoginScreen;
const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = {
  ...actions
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
export default LoginContainer;

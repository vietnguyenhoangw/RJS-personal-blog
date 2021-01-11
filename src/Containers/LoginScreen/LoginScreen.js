import React from "react";

// styles
import "./Styles/LoginScreen.css";
import Styles from "./Styles/LoginScreenStyle";

// constant
import { backgroundImage } from "../../Constants/ConstantData";

// redux
import { connect } from "react-redux";
import * as actions from "../../Redux/Actions/AuthActions";

// utils
import { validateEmail } from "../../Utils/Validations"

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
      isShowAlert: false,
      alertMessage: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  validationCheck() {
    const isValidEmail = validateEmail(this.state.email)
    if (isValidEmail) {
      if (!!this.state.password && this.state.password.length > 8) {
        this.setState({ isShowAlert: false })
        return true
      } else {
        this.setState({ isShowAlert: true })
        this.setState({ alertMessage: "Password must be at least 9 character !" })
        return false
      }
    } else {
      this.setState({ isShowAlert: true })
      this.setState({ alertMessage: "Invalid email !" })
      return false
    }
  }

  onSubmit() {
    const isInvalid = this.validationCheck()
    if (isInvalid) {
      this.props.loginEmail({
        email: this.state.email,
        password: this.state.password,
      });
    } else {
      return
    }
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
        {this.state.isShowAlert && <div className="alert alert-danger" role="alert" style={{ position: "absolute", marginTop: 10 }}>
          {this.state.alertMessage}
        </div>}
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
                onClick={() => this.onSubmit()}
              >
                {this.props.state.authState.isLoading ? (
                  <div>
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                    &ensp;Loading...
                  </div>
                ) : (
                    "Login"
                  )}
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
  return {
    state: {
      authState: state.authReducers,
    },
  };
};

const mapDispatchToProps = {
  ...actions,
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
export default LoginContainer;

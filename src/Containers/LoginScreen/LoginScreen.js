import React from "react";

// styles
import "./LoginScreen.css";

const backgroundImage =
  "https://worldinbetween.files.wordpress.com/2014/03/moma-window.jpg";
class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        class="container-fluid main-wrapper"
        style={{
          backgroundImage: "url(" + backgroundImage + ")",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          class="row"
          style={{
            alignSelf: "center",
            width: "60%",
            height: "60%",
          }}
        >
          <div
            class="col-6"
            style={{
              alignSelf: "center",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "white",
              opacity: 1,
              height: "100%",
            }}
          >
            <form style={{ width: "50%", alignSelf: "center" }}>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" class="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                />
                <label class="form-check-label" for="exampleCheck1">
                  Check me out
                </label>
              </div>
              <button
                type="submit"
                class="btn btn-primary"
                style={{ width: "100%", marginTop: 20 }}
              >
                Submit
              </button>
            </form>
          </div>
          <div
            class="col-6 "
            style={{ backgroundColor: "white", opacity: 0.5, height: "100%" }}
          ></div>
        </div>
      </div>
    );
  }
}

export default LoginScreen;

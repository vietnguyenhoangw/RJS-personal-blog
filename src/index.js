import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Containers/App";
import reportWebVitals from "./reportWebVitals";

// redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./Redux/reducers/rootReducer";

// initialState
const initialState = {};

// Create store
const store = createStore(rootReducer, initialState);

// const appRoot = (
//   <Provider store={store}>
//       <div>
//       </div>
//   </Provider>
// )

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    ></link>
    <App />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

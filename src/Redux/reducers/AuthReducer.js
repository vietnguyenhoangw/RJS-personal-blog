import { ActionEvent } from "../actions/ActionTypes";

const authReducers = (state = {}, action) => {
  switch (action.type) {
    case ActionEvent.LOGIN_EMAIL: {
      console.log(
        "🚀 ~ file: LoginReducer.js ~ line 4 ~ loginEmail ~ action",
        action
      );
      return {};
    }
    default:
      return {};
  }
};

export default authReducers

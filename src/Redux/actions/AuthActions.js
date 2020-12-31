import { ActionEvent } from "./ActionTypes";

export function loginEmail(email, password) {
  return {
    type: ActionEvent.LOGIN_EMAIL,
    email: email,
    password: password
  };
}

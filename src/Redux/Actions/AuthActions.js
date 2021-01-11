import { ActionEvent } from "./ActionTypes";

export const loginEmail = payload => {
  return {
    type: ActionEvent.LOGIN_EMAIL,
    payload
  }
}

export const loginEmailSuccess = payload => ({
  type: ActionEvent.LOGIN_EMAIL_SUCCESS,
  payload
});

export const loginEmailFaild = payload => ({
  type: ActionEvent.LOGIN_EMAIL_FAILD,
  payload
});

export default {
  loginEmail,
  loginEmailSuccess,
  loginEmailFaild,
};

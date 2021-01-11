import { ActionEvent } from "../Actions/ActionTypes";

const initialState = {
  refreshToken: '',
  accessToken: '',
  isLoading: false,
  error: '',
};

const authReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionEvent.LOGIN_EMAIL:
      return {
        ...state,
        isLoading: true,
      };
    case ActionEvent.LOGIN_EMAIL_SUCCESS:
      return {
        ...state,
        refreshToken: payload.access_token,
        accessToken: payload.refresh_token,
        isLoading: false,
        error: '',
      };
    case ActionEvent.LOGIN_EMAIL_FAILD:
      return {
        ...state,
        isLoading: false,
        error: 'Login fail',
      };
    default:
      return state;
  }
};
export default authReducers;
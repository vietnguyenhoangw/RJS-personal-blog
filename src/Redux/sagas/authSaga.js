import { call, put } from 'redux-saga/effects';
// import { actionLogin } from '../actions/loginAction';
import login from '../api';


function* postLoginAction(email, password) {
  try {
    let response = yield call(login.login, email, password);// Gọi API Login ở đây.
    console.log("🚀 ~ file: authSaga.js ~ line 9 ~ function*postLoginAction ~ response", response)
    // yield put({ type: 'LOGIN_SUCCESS', payload: response }); // Gọi action LOGIN_SUCCESS
  } catch (err) {
    console.log('err');
    yield put({ type: 'LOGIN_FAILURE', err }); // Nếu lỗi gọi action LOGIN_FAILURE
  }
}

export default function*(action) {
  yield call(postLoginAction, action.payload.email, action.payload.password);
}
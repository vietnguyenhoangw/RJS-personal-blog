import { all, takeLatest } from 'redux-saga/effects';
import postLoginAction from './AuthSaga';
import { ActionEvent } from '../Actions/ActionTypes'

const sagas = function* () {
  yield all([takeLatest(ActionEvent.LOGIN_EMAIL, postLoginAction)]);
};

export default sagas;
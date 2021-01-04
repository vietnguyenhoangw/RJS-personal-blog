import { all, takeLatest } from 'redux-saga/effects';
import postLoginAction from './authSaga';
import { ActionEvent } from '../actions/ActionTypes'

const sagas = function*() {
  yield all([takeLatest(ActionEvent.LOGIN_EMAIL, postLoginAction)]);
};

export default sagas;
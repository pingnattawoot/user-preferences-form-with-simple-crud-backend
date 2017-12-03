import { takeEvery, call } from 'redux-saga/effects';
import { SIGNUP_REQUEST } from '../actions/types';
import { signUp } from '../api';

function* signUpWorker() {
  yield call(signUp, 'xxxxx');
}

export function* signUpWatcher() {
  yield takeEvery(SIGNUP_REQUEST, signUpWorker);
}

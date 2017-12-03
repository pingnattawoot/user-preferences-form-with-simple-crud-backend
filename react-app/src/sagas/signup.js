import { takeEvery, call, put } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { SIGNUP_REQUEST } from '../actions/types';
import { signUpSuccess, signUpFail } from '../actions/user';
import { signUp } from '../api';

function* signUpWorker(action) {
  const { username, password } = action.payload;
  yield call(delay, 2000); // because api is very fast
  try {
    yield call(signUp, { username, password });
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFail(error.message));
  }
}

export function* signUpWatcher() {
  yield takeEvery(SIGNUP_REQUEST, signUpWorker);
}

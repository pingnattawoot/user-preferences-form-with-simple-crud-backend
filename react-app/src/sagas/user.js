import { call, put, all, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { SIGNUP_REQUEST, SIGNIN_REQUEST, GET_USER_DATA_REQUEST } from '../actions/types';
import {
  signUpSuccess,
  signUpFail,
  signInSuccess,
  signInFail,
  getUserDataSuccess,
  getUserDataFail,
} from '../actions/user';
import {
  signUp,
  signIn,
  getUserData,
  getUserTokenFromStorage,
  setUserTokenInStorage,
} from '../api';

function* signUpWorker(action) {
  const { username, password } = action.payload;
  yield call(delay, 1500); // because api is very fast
  try {
    yield call(signUp, { username, password });
    yield put(signUpSuccess());
  } catch (error) {
    yield put(signUpFail(error.message));
  }
}

function* getUserWorker() {
  try {
    const token = getUserTokenFromStorage();
    console.log(token);
    const response = yield call(getUserData, token);
    yield put(getUserDataSuccess(response.data.data));
  } catch (error) {
    yield put(getUserDataFail(error.message));
  }
}

function* signInWorker(action) {
  const { username, password } = action.payload;
  yield call(delay, 1500); // because api is very fast
  try {
    const response = yield call(signIn, { username, password });
    yield call(setUserTokenInStorage, response.data.token);
    yield put(signInSuccess());
    yield* getUserWorker();
  } catch (error) {
    yield put(signInFail(error.message));
  }
}


export function* userWatcher() {
  yield all([
    takeLatest(SIGNUP_REQUEST, signUpWorker),
    takeLatest(SIGNIN_REQUEST, signInWorker),
    takeLatest(GET_USER_DATA_REQUEST, getUserWorker),
  ]);
}

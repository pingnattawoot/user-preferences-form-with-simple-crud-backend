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
  getStaticDataSuccess,
  getStaticDataFail,
} from '../actions/user';
import {
  signUp,
  signIn,
  getUserData,
  getStaticData,
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

const mapDropdown = ({ id, text }) => ({ id, text });

function* getStaticDataWorker() {
  try {
    const token = getUserTokenFromStorage();
    const languageResponse = yield call(getStaticData, { token, type: 'languages' });
    const timezoneResponse = yield call(getStaticData, { token, type: 'timezones' });
    const currencyResponse = yield call(getStaticData, { token, type: 'currency' });
    const languages = languageResponse.data.data.map(mapDropdown);
    const timezones = timezoneResponse.data.data.map(mapDropdown);
    const currency = currencyResponse.data.data.map(mapDropdown);
    yield put(getStaticDataSuccess({ languages, timezones, currency }));
  } catch (error) {
    yield put(getStaticDataFail(error.message));
  }
}

function* getUserWorker() {
  try {
    const token = getUserTokenFromStorage();
    const response = yield call(getUserData, token);
    yield put(getUserDataSuccess(response.data.data));
    yield* getStaticDataWorker();
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

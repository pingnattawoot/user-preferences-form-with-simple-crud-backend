import { all, fork } from 'redux-saga/effects';
import { routeWatcher } from './route';
import { signUpWatcher } from './signup';

export default function* rootSaga() {
  yield all([
    fork(routeWatcher),
    fork(signUpWatcher),
  ]);
}

import { all, fork } from 'redux-saga/effects';
import { routeWatcher } from './route';
import { userWatcher } from './user';

export default function* rootSaga() {
  yield all([
    fork(routeWatcher),
    fork(userWatcher),
  ]);
}

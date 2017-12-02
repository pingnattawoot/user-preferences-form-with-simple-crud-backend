import { all, fork } from 'redux-saga/effects';
import { routeWatcher } from './route';

export default function* rootSaga() {
  yield all([
    fork(routeWatcher),
  ]);
}

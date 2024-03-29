import { takeEvery, call } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

function* logChange() {
  yield call(console.log, 'Route change !');
}

export function* routeWatcher() {
  yield takeEvery(LOCATION_CHANGE, logChange);
}

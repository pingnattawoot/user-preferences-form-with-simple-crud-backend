import { combineReducers } from 'redux';
import { counterReducer } from '../reducers/couter';
import { routeReducer } from './route';

const rootReducer = combineReducers({
  counter: counterReducer,
  route: routeReducer,
});

export default rootReducer;

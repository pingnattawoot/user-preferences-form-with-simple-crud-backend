import { combineReducers } from 'redux';
import { counterReducer } from './couter';
import { userReducer } from './user';
import { routeReducer } from './route';


const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
  route: routeReducer,
});

export default rootReducer;

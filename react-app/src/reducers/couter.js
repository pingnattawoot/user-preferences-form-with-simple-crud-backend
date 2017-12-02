import { INCREMENT } from '../actions/types';

const initialState = 50;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
};

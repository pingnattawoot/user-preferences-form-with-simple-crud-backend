import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: false,
  signUpSuccess: false,
  isError: false,
  error: '',
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signUpSuccess: true,
        error: '',
      };
    case SIGNUP_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        signUpSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

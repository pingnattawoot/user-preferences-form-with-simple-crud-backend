import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAIL,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: false,
  signUpSuccess: false,
  signInSuccess: false,
  getUserDataSuccess: false,
  isError: false,
  error: '',
  data: {},
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
    case SIGNIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        signInSuccess: true,
        error: '',
      };
    case SIGNIN_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        signInSuccess: false,
        error: action.payload,
      };
    case GET_USER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        isError: false,
        getUserDataSuccess: true,
        error: '',
      };
    case GET_USER_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        getUserDataSuccess: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

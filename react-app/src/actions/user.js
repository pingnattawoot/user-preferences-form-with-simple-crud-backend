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
  GET_STATIC_DATA_SUCCESS,
  GET_STATIC_DATA_FAIL,
} from './types';

const signUpRequest = ({ username, password }) => ({
  type: SIGNUP_REQUEST,
  payload: { username, password },
});

const signUpSuccess = () => ({
  type: SIGNUP_SUCCESS,
});

const signUpFail = error => ({
  type: SIGNUP_FAIL,
  payload: error,
});

const signInRequest = ({ username, password }) => ({
  type: SIGNIN_REQUEST,
  payload: { username, password },
});

const signInSuccess = () => ({
  type: SIGNIN_SUCCESS,
});

const signInFail = error => ({
  type: SIGNIN_FAIL,
  payload: error,
});

const getUserDataRequest = () => ({
  type: GET_USER_DATA_REQUEST,
});

const getUserDataSuccess = data => ({
  type: GET_USER_DATA_SUCCESS,
  payload: data,
});

const getUserDataFail = error => ({
  type: GET_USER_DATA_FAIL,
  payload: error,
});

const getStaticDataSuccess = data => ({
  type: GET_STATIC_DATA_SUCCESS,
  payload: data,
});

const getStaticDataFail = error => ({
  type: GET_STATIC_DATA_FAIL,
  payload: error,
});

export {
  signUpRequest,
  signUpSuccess,
  signUpFail,
  signInRequest,
  signInSuccess,
  signInFail,
  getUserDataRequest,
  getUserDataSuccess,
  getUserDataFail,
  getStaticDataSuccess,
  getStaticDataFail,
};

import {
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
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

export {
  signUpRequest,
  signUpSuccess,
  signUpFail,
};

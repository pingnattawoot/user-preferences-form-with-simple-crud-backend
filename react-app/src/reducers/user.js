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
  UPDATE_LOCALIZAITON_LANGUAGE,
  UPDATE_LOCALIZAITON_TIMEZONE,
  UPDATE_LOCALIZAITON_CURRENCY,
  UPDATE_USER_DATA_REQUEST,
  UPDATE_USER_DATA_SUCCESS,
  UPDATE_USER_DATA_FAIL,
} from '../actions/types';

const initialState = {
  isLoading: false,
  signUpSuccess: false,
  signInSuccess: false,
  getUserDataSuccess: false,
  isError: false,
  error: '',
  data: {},
  static: {},
  isSaving: false,
  saveSuccess: false,
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
    case GET_STATIC_DATA_SUCCESS:
      return {
        ...state,
        static: action.payload,
      };
    case GET_STATIC_DATA_FAIL:
      return {
        ...state,
        isLoading: false,
        isError: true,
        error: action.payload,
      };
    case UPDATE_LOCALIZAITON_LANGUAGE:
      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            localization: {
              ...state.data.preferences.localization,
              language: action.payload,
            },
          },
        },
      };
    case UPDATE_LOCALIZAITON_TIMEZONE:
      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            localization: {
              ...state.data.preferences.localization,
              time_zone: action.payload,
            },
          },
        },
      };
    case UPDATE_LOCALIZAITON_CURRENCY:
      return {
        ...state,
        data: {
          ...state.data,
          preferences: {
            ...state.data.preferences,
            localization: {
              ...state.data.preferences.localization,
              currency: action.payload,
            },
          },
        },
      };
    case UPDATE_USER_DATA_REQUEST:
      return {
        ...state,
        isSaving: true,
      };
    case UPDATE_USER_DATA_SUCCESS:
      return {
        ...state,
        isSaving: false,
        saveSuccess: true,
      };
    case UPDATE_USER_DATA_FAIL:
      return {
        ...state,
        isSaving: false,
        saveSuccess: false,
      };
    default:
      return state;
  }
};

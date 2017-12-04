import axios from 'axios';

const signUp = ({ username, password }) => axios
  .post(`${process.env.REACT_APP_SERVICE_URL}/api/user`, {
    username,
    password,
  });

const signIn = ({ username, password }) => axios
  .post(`${process.env.REACT_APP_SERVICE_URL}/api/auth`, {
    username,
    password,
  });

const getUserData = token => axios
  .get(`${process.env.REACT_APP_SERVICE_URL}/api/me`, {
    params: {
      token,
    },
  });

const updateUserData = ({ token, preferences }) => axios
  .put(`${process.env.REACT_APP_SERVICE_URL}/api/user?token=${token}`, {
    preferences: { ...preferences },
  });

const getStaticData = ({ token, type }) => axios
  .get(`${process.env.REACT_APP_SERVICE_URL}/static/${type}`, {
    params: {
      token,
    },
  });

// token
const userTokenKey = 'user_token';
const getUserTokenFromStorage = () => localStorage.getItem(userTokenKey);
const setUserTokenInStorage = token => localStorage.setItem(userTokenKey, token);
const removeUserTokenFromStorage = () => localStorage.removeItem(userTokenKey);

export {
  signUp,
  signIn,
  getUserData,
  getStaticData,
  updateUserData,
  getUserTokenFromStorage,
  setUserTokenInStorage,
  removeUserTokenFromStorage,
};

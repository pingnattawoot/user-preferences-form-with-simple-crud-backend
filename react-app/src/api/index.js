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
  getUserTokenFromStorage,
  setUserTokenInStorage,
  removeUserTokenFromStorage,
};

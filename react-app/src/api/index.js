import axios from 'axios';

const signUp = ({ username, password }) => axios
  .post(`${process.env.REACT_APP_SERVICE_URL}/api/user`, {
    username,
    password,
  });

export {
  signUp,
};

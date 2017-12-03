import axios from 'axios';

const signUp = () => axios
  .post(`${process.env.REACT_APP_SERVICE_URL}/api/user`);

export {
  signUp,
};

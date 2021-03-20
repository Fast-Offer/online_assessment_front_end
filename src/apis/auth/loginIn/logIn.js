import axios from '../../../libs/axios';

const headers = {
  'Content-Type': 'application/json',
};

const logIn = (data) => axios
  .post('/login', data, headers)
  .catch((error) => { throw error.response; });

export default logIn;

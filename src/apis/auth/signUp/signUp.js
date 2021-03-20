import axios from '../../../libs/axios';

const headers = {
  'Content-Type': 'application/json',
};
const signUp = (data) => axios
  .post('/signup', data, headers)
  .catch((error) => { throw error.response; });

export default signUp;

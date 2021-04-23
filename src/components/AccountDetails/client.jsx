import openNotification from '../Notification/Notification';

const axios = require('axios');

const requestUrl = '/profile';

const updataProfile = (value) => {
  axios.post(requestUrl, value)
    .then((response) => {
      const successTitle = 'Congrats!';
      const successMessage = 'Your profile has been saved successfully...';
      if (response.status === 200) {
        openNotification('success', successTitle, successMessage);
      }
    })
    .catch((error) => {
      if (error.response) {
        const statusCode = error.response.data.status;
        const message = error.response.data.error;

        openNotification('error', statusCode, message);
      }
    });
};

export default updataProfile;

import openNotification from '../../components/Notification/Notification';

const axios = require('axios');

const requestUrl = '/signup';

const addNewUser = (newUser) => {
  axios.post(requestUrl, newUser)
    .then((response) => {
      if (response.data.errorCode) {
        openNotification('error', response.data.errorCode, response.data.message);
      } else {
        openNotification('success', 'Sign up Successfully', 'Page will jump to Login automatically...');
        setTimeout(() => {
          window.location.href = '/login';
        }, 2000);
      }
    })
    .catch((error) => {
      if (error.response) {
        // eslint-disable-next-line
        console.log(error.response);
        // ***********************************************************
        // NOTE:
        // (1) You may need modify the following 2 lines of code,
        // due to different format error.response from the server...
        // (2) After errorType & errorMessage != null or undefined,
        // the notification will behave normally again...
        // ***********************************************************
        const errorType = error.response.data.status;
        const errorMessage = error.response.data.error;
        // Invoke Notification
        openNotification('error', errorType, errorMessage);
      }
    });
};

export default addNewUser;

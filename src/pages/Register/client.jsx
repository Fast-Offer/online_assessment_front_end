import openNotification from '../../components/Notification/Notification';

const axios = require('axios');

// ***********************************************************
// NOTE: You need modify this requestUrl
// ***********************************************************
const requestUrl = 'this/is/NOT/a/valid/url';

const addNewUser = (newUser) => {
  axios.post(requestUrl, newUser)
    .then((response) => {
      // eslint-disable-next-line
      console.log(response);
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
        const errorType = error.response.data.httpStatus;
        const errorMessage = error.response.data.message;
        // Invoke Notification
        openNotification('error', errorType, errorMessage);
      }
    });
};

export default addNewUser;

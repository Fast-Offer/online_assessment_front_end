import { notification } from 'antd';

// NOTE:
// placement can be:
// (1) topleft
// (2) topright
// (3) bottomleft
// (4) bottomright
// also, the placement argument is optional...
// placement default is topright...

const openNotificationWithIcon = (type, message, description, placement) => {
  notification[type]({
    message,
    description,
    duration: 7,
    placement,
  });
};

export default openNotificationWithIcon;

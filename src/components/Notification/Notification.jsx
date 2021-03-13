import { notification } from 'antd';

const openNotificationWithIcon = (type, message, description, placement) => {
  notification[type]({
    message,
    description,
    duration: 7,
    placement,
  });
};

export default openNotificationWithIcon;

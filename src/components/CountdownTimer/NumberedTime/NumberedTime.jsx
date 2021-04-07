import React, { useEffect } from 'react';

const NumberedTime = ({
  hourProp, minProp, secProp, activeStatus,
}) => {
  const [hour, setHour] = React.useState(hourProp);
  const [minute, setMinute] = React.useState(minProp);
  const [second, setSecond] = React.useState(secProp);
  const func = (h, m, s) => {
    if (m >= 0 && m < 60 && s >= 0 && s < 60) {
      if (s > 0) {
      // 只要秒数大于0，就先往下减着
        setSecond(second - 1);
      } else if (s === 0 && m > 0) {
      // 如果秒数为0，那就只能把分钟数减一，但是要确认分钟数大于0
      // 如果以上条件成立，开始减去一分钟，并且重置秒数为最大值（59）
        setMinute(minute - 1);
        setSecond(59);
      } else if (m === 0 && h > 0) {
      // 如果秒数是0的前提下，分钟数也是0，那就只能把小时数减一（当然小时数也要大于0，有得可减）
      // 减去一小时后，重置分钟数（59）和秒数（59）
        setHour(hour - 1);
        setMinute(59);
        setSecond(59);
      }
    } else {
      setMinute(0);
      setHour(0);
    }
  };

  useEffect(
    () => {
      const timerId = setInterval(() => {
        if (activeStatus) {
          func(hour, minute, second);
        }
      }, 1000);
      return () => clearInterval(timerId);
    }, [hour, minute, second],
  );
  let displayedTime;
  if (hour >= 0 && hour < 10) {
    displayedTime = (
      <h1>
        time in number -- 0
        {hour}
        {' '}
        :
        {' '}
        {minute}
        {' '}
        :
        {' '}
        {second}
      </h1>
    );
    if (minute >= 0 && minute < 10) {
      displayedTime = (
        <h1>
          time in number -- 0
          {hour}
          {' '}
          : 0
          {minute}
          {' '}
          :
          {' '}
          {second}
        </h1>
      );
      if (second >= 0 && second < 10) {
        displayedTime = (
          <h1>
            time in number -- 0
            {hour}
            {' '}
            : 0
            {minute}
            {' '}
            : 0
            {second}
          </h1>
        );
      }
    }
  }

  return (
    <div>
      {displayedTime}
    </div>
  );
};

export default NumberedTime;

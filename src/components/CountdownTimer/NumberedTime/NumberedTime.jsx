import React, { useEffect } from 'react';

const NumberedTime = ({
  hourProp, minProp, secProp,
}) => {
  const [hour, setHour] = React.useState(hourProp);
  const [minute, setMinute] = React.useState(minProp);
  const [second, setSecond] = React.useState(secProp);
  const [paused] = React.useState(true);

  // 时间减少逻辑
  const func = (h, m, s) => {
    if (!paused) {
      return;
    }

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

  useEffect(() => {
    // if (activeStatus) {
    const timerId = setInterval(() => {
      func(hour, minute, second);
    }, 100);
    // } else if (!activeStatus) {
      // clearInterval(timerId);
    // }
    return () => clearInterval(timerId);
  }, [hour, minute, second]);

  // 经过整理的显示时间，加 0 美化
  let displayedTime;
  if (hour >= 0 && hour < 10) {
    displayedTime = (
      <h1>
        time in number -- 0
        {hour}
        :
        {minute}
        :
        {second}
      </h1>
    );
    // 如果分钟数是两位，分钟不加 0
    if (minute >= 10) {
      // 如果秒数是两位，秒数不加 0
      if (second >= 10) {
        displayedTime = (
          <h1>
            time in number -- 0
            {hour}
            :
            {minute}
            :
            {second}
          </h1>
        );
      } else {
        displayedTime = (
          <h1>
            time in number -- 0
            {hour}
            :
            {minute}
            :0
            {second}
          </h1>
        );
      }
    } else if (minute < 10) {
      // 如果秒数是两位，秒数不加 0
      if (second >= 10) {
        displayedTime = (
          <h1>
            time in number -- 0
            {hour}
            :0
            {minute}
            :
            {second}
          </h1>
        );
      } else {
        displayedTime = (
          <h1>
            time in number -- 0
            {hour}
            :0
            {minute}
            :0
            {second}
          </h1>
        );
      }
    }
  }

  // NumberedTimer组件渲染出 '经过整理的时间'
  return (
    <div>
      {displayedTime}
      {/* 以下内容只为测试使用 */}
      {/* <span>
        {'-NumberedTime-// The activeStatus prop is : '}
        {activeStatus ? 'active' : 'inactive'}
        {' ...'}
      </span>
      <div>
        <span>
          {'-NumberedTime-// The hour is : '}
          {hour}
          {'# The minute is : '}
          {minute}
          {'# The second is : '}
          {second}
          #
        </span>
      </div> */}
    </div>
  );
};

export default NumberedTime;

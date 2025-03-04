import { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  // 使用 useEffect 设置定时器，每秒更新时间
  useEffect(() => {
    // 设置定时器，每秒调用一次
    const timerId = setInterval(() => {
      setTime(new Date()); // 更新时间为当前时间
    }, 1000);

    // 组件卸载时清除定时器
    return () => clearInterval(timerId);
  }, []); // 空依赖数组，表示这个 effect 只在组件挂载时执行一次

  // 格式化时间为 HH:mm:ss
  const formatTime = (date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <p>当前时间: {formatTime(time)}</p>
    </div>
  );
};

export default Clock;

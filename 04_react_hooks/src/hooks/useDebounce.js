import { useState, useEffect } from "react";

// 自定义 Hook：useDebounce
// 该 Hook 用于实现防抖功能，即在指定延迟时间内，如果连续触发事件，则只有最后一次事件会被执行
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;

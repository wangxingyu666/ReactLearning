import { useState, useRef, useEffect } from "react";

// PreviousValue 组件，用于展示当前计数和前一个计数
const PreviousValue = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  return (
    <div>
      <p>当前计数: {count}</p>
      <p>前一计数: {prevCountRef.current}</p>
      <button onClick={() => setCount(count + 1)}>增加</button>
    </div>
  );
};

export default PreviousValue;

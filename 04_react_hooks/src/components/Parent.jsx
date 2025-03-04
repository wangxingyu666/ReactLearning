import { useState, useCallback } from "react";
import Child from "./Child";

// Parent 组件，用于展示计数器和包含一个子组件 Child
const Parent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <Child handleClick={handleClick} />
    </div>
  );
};

export default Parent;

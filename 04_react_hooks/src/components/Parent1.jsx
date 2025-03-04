import React, { useRef } from "react";
import Child1 from "./Child1";

// Parent1 组件，用于演示如何通过 ref 操控子组件 Child1 的 DOM 元素
const Parent1 = () => {
  const childRef = useRef();

  return (
    <div>
      <button onClick={() => childRef.current.focus()}>
        Focus Child Input
      </button>
      <Child1 ref={childRef} />
    </div>
  );
};

export default Parent1;

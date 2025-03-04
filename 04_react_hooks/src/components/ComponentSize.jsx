import { useState, useLayoutEffect, useRef } from "react";

// ComponentSize 组件，用于展示子组件的尺寸
const ComponentSize = () => {
  const [size, setSize] = useState(0);

  const divRef = useRef();

  useLayoutEffect(() => {
    setSize(divRef.current.offsetWidth);
  }, []);

  return (
    <div>
      <div
        ref={divRef}
        style={{
          width: "100px",
          height: "100px",
          backgroundColor: "lightblue",
        }}
      ></div>
      <p>Width of div: {size}</p>
    </div>
  );
};

export default ComponentSize;

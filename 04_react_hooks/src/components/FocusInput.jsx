import { useRef } from "react";

// FocusInput 组件，用于演示如何使用 ref 来控制输入框的焦点
const FocusInput = () => {
  const inputRef = useRef(null);

  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default FocusInput;

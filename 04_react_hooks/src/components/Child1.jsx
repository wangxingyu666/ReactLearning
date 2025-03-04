import { useImperativeHandle, forwardRef } from "react";

// Child1 组件，使用 forwardRef 和 useImperativeHandle 来暴露 DOM 操作给父组件
const Child1 = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    focus: () => {
      document.getElementById("child-input").focus();
    },
  }));

  return <input id="child-input" type="text" />;
});

export default Child1;

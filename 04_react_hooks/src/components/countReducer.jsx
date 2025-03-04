import { useReducer } from "react";

// 定义一个 reducer 函数，用于管理计数器的状态变化
const countReducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });

  return (
    <div>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>增加</button>
      <button onClick={() => dispatch({ type: "decrement" })}>减少</button>
    </div>
  );
};

export default Counter;

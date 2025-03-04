import { useMemo } from "react";

// ExpensiveCalculation 组件，用于执行一个计算密集型的操作，这个组件接收一个名为 number 的 prop，并返回该数字乘以 2 的结果
const ExpensiveCalculation = ({ number }) => {
  const result = useMemo(() => {
    console.log("Calculating...");
    return number * 2;
  }, [number]);

  return <div>{result}</div>;
};

export default ExpensiveCalculation;

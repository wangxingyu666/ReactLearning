import { useState } from "react";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    setTodo((prevTodos) => [
      ...prevTodos,
      { content: inputValue, isFinished: false }, // 添加新的待办事项，初始状态为未完成
    ]);
    setInputValue("");
  };

  const toggleFinish = (index) => {
    setTodo((prevTodos) =>
      prevTodos.map((todo, i) =>
        i === index ? { ...todo, isFinished: !todo.isFinished } : todo
      )
    ); // 切换指定待办事项的完成状态
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="请输入待办事项"
      />
      <button onClick={addTodo}>添加</button>
      <ul>
        {todo.map((todo, index) => (
          <li
            key={index}
            onClick={() => toggleFinish(index)}
            style={{
              textDecoration: todo.isFinished ? "line-through" : "none",
            }}
          >
            {todo.content}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

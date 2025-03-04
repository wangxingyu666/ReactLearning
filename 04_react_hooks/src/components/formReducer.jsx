import { useReducer } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "update":
      return { ...state, [action.name]: action.value };
    case "reset":
      return { username: "", email: "" };
    default:
      return state;
  }
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, {
    username: "",
    email: "",
  });
  const handleChange = (e) => {
    dispatch({ type: "update", name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`提交成功！\n用户名: ${state.username}\n邮箱: ${state.email}`);
    dispatch({ type: "reset" });
  };

  const handleReset = () => {
    dispatch({ type: "reset" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="username"
          value={state.username}
          onChange={handleChange}
          placeholder="Username"
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email"
        />
      </div>
      <div>
        <button type="submit">提交</button>
        <button type="button" onClick={handleReset}>
          重置
        </button>
      </div>
    </form>
  );
};

export default Form;

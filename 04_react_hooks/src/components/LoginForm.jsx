import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";

const LoginForm = () => {
  const { setUser } = useContext(LoginContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username.trim() !== "" && password.trim() !== "") {
      setUser({ name: username, password: password });
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="请输入用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="password"
          placeholder="请输入密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: "10px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "#007BFF",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        登录
      </button>
    </div>
  );
};

export default LoginForm;

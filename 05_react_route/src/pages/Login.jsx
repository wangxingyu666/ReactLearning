import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

const Login = () => {
  const navigate = useNavigate();
  const [users] = useState([
    {
      username: "wxy",
      password: "123456",
      age: 20,
      avatar:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
    },
    {
      username: "admin",
      password: "123456",
      age: 25,
      avatar:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
    },
  ]);

  const onFinish = (values) => {
    const { username, password } = values;
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      message.success("登录成功！");
      navigate("/", { state: { user } });
    } else {
      message.error("用户名或密码错误");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "50px auto",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 8,
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center" }}>登录</h2>
      <Form onFinish={onFinish} layout="vertical">
        <Form.Item
          name="username"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="用户名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="密码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" block htmlType="submit">
            登录
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;

import React from "react";
import { NavLink } from "react-router-dom";
import { Layout, Menu, Avatar } from "antd";
import "../App.css";

const { Header } = Layout;

const NavBar = ({ user }) => {
  const menuItems = [
    {
      key: "1",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "2",
      label: <NavLink to="/about">About</NavLink>,
    },
    {
      key: "3",
      label: <NavLink to="/dashboard">Dashboard</NavLink>,
    },
    {
      key: "4",
      label: <NavLink to="/login">Login</NavLink>,
    },
    {
      key: "5",
      label: <NavLink to="/book/456">Book</NavLink>,
    },
  ];

  if (user) {
    menuItems.push({
      key: "6",
      label: (
        <div style={{ display: "flex", alignItems: "center" }}>
          <Avatar src={user.avatar} style={{ marginRight: 10 }} />
          <span>{user.username}</span>
        </div>
      ),
      style: { float: "right" },
    });
  }

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" items={menuItems} />
    </Header>
  );
};

export default NavBar;

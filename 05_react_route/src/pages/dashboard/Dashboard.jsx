import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../../App.css";

const Dashboard = ({ user }) => {
  const location = useLocation();
  const { username } = location.state || {};
  if (!user) {
    return <div>请登录</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <h3>Welcome: {username}</h3>
      <nav>
        <NavLink
          to="profile"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          profile
        </NavLink>
        <NavLink
          to="setting"
          className={({ isActive }) => (isActive ? "active-link" : "link")}
        >
          setting
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Dashboard;

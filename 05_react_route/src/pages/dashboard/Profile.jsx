import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import "../../App.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h2>Profile page</h2>
      <div className="menu-and-content">
        <nav className="menu">
          <NavLink
            to="fans"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            fans
          </NavLink>
          <NavLink
            to="follow"
            className={({ isActive }) => (isActive ? "active-link" : "link")}
          >
            follow
          </NavLink>
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Profile;

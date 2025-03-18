import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const HomePageLayout = ({ user }) => {
  return (
    <div>
      <NavBar user={user} />
      <div style={{ padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default HomePageLayout;

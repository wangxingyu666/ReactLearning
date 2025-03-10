import React from "react";
import BlogList from "../components/BlogList";

const Home = ({ user }) => {
  if (!user) {
    return <div>请登录</div>;
  }

  return (
    <div>
      <BlogList />
    </div>
  );
};

export default Home;

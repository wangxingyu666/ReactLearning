import React from "react";
import { useLocation } from "react-router-dom";

const About = ({ user }) => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const name = params.get("name");
  const age = params.get("age");
  if (!user) {
    return <div>请登录</div>;
  }
  return (
    <div>
      <h2>About Page</h2>
      <h3>Name: {name}</h3>
      <h3>Age: {age}</h3>
    </div>
  );
};

export default About;

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const UserStatus = () => {
  const { user } = useContext(UserContext);

  return (
    <div>
      {user ? <p>当前用户：{user.username}</p> : <p>当前用户：未登录</p>}
    </div>
  );
};

export default UserStatus;

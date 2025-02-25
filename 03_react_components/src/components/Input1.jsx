const Input1 = ({ onInputChange1 }) => {
  return (
    <h2>
      请输入密码:
      <input
        type="text"
        //将输入的值传回给父组件
        onChange={(password) => onInputChange1(password.target.value)}
        placeholder="请输入密码"
      />
    </h2>
  );
};

export default Input1;

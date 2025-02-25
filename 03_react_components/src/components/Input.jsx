const Input = ({ onInputChange }) => {
  return (
    <h2>
      请输入邮箱:
      <input
        type="text"
        //将输入的值传回给父组件
        onChange={(email) => onInputChange(email.target.value)}
        placeholder="请输入邮箱"
      />
    </h2>
  );
};

export default Input;

import Input from "./Input";
import Input1 from "./Input1";
import { useState } from "react";

const InputParent = () => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputEChange = (newEVal) => {
    setInputEmail(newEVal);
  };

  const handleInputPChange = (newPVal) => {
    setInputPassword(newPVal);
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <>
      <Input onInputChange={handleInputEChange} />
      <Input1 onInputChange1={handleInputPChange} />
      <button onClick={handleSubmit}>提交</button>

      {submitted && (
        <>
          <h3>输入的邮箱是: {inputEmail}</h3>
          <h3>输入的密码是: {inputPassword}</h3>
        </>
      )}
    </>
  );
};

export default InputParent;

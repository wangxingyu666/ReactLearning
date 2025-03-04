import { useState } from "react";

const ThemeToggle = () => {
  //使用useState这个hook存储主体状态
  //true表示暗黑模式
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((mode) => !mode);
  };

  return (
    <div
      style={{
        height: "100vh",
        background: isDarkMode ? "black" : "white",
        color: isDarkMode ? "white" : "black",
      }}
    >
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi
        soluta magni adipisci suscipit provident deserunt. Itaque delectus ipsam
        maiores quisquam culpa rem animi, sint veritatis quam perferendis? In,
        magnam?
      </h2>
      <button onClick={toggleTheme}>
        切换到{isDarkMode ? "白天" : "暗黑"}模式
      </button>
    </div>
  );
};

export default ThemeToggle;

import React, { useState, useDebugValue, useEffect } from "react";
import ThemeToggle from "./components/ThemeToggle";
import TextInput from "./components/TextInput";
import TodoList from "./components/TodoList";
import FetchData from "./components/FetchData";
import PageTitle from "./components/PageTitle";
import Clock from "./components/Clock";
import Weather from "./components/Weather";
import ThemeProvider from "./components/ThemeProvider";
import ThemeButton from "./components/ThemeButton";
import UserPage from "./components/UserPage";
import LoginProvider from "./components/LoginProvider";
import LoginForm from "./components/LoginForm";
import LoginButton from "./components/LoginButton";
import Search from "./components/Search";
import ExpensiveCalculation from "./components/ExpensiveCalculation";
import ExpensiveCalculationParent from "./components/ExpensiveCalculationParent";
import Parent from "./components/Parent";
import ExpensiveComponentParent from "./components/ExpensiveComponentParent";
import ListFilterParent from "./components/ListFilterParent";
import FocusInput from "./components/FocusInput";
import PreviousValue from "./components/PreviousValue";
import Parent1 from "./components/Parent1";
import Parent2 from "./components/Parent2";
import ComponentSize from "./components/ComponentSize";
import AnimateBox from "./components/AnimateBox";
import Data from "./components/Data";

// function useCustomHook(value) {
//   useDebugValue(value ? "Active" : "Inactive");
//   return value;
// }

// function useApi(url) {
//   const [data, setData] = useState(null);
//   useDebugValue(data ? "Data Loaded" : "Loading");
//   useEffect(() => {
//     fetch(url)
//       .then((res) => res.json())
//       .then((json) => setData(json));
//   }, [url]);
//   return data;
// }

const App = () => {
  const handleSearch = (query) => {
    console.log("Searching for:", query);
  };

  // const [isActive, setIsActive] = useState(false);
  // useCustomHook(isActive);

  // const data = useApi("https://api.xygeng.cn/one");
  // if (!data) return <p>加载中...</p>;

  return (
    <>
      {/* <ThemeToggle /> 
      <TextInput />
      <TodoList />
      <FetchData />
      <PageTitle />
      <Clock />
      <Weather />
      <UserPage />
      <LoginProvider>
        <div style={{ textAlign: "center" }}>
          <h1>登陆系统</h1>
          <LoginForm />
          <LoginButton />
        </div>
      </LoginProvider>
      <countReducer />
      <formReducer />
      {/* <UserPage /> */}
      {/* <ExpensiveCalculationParent /> */}
      {/* <ListFilterParent /> */}
      {/* <ExpensiveCalculation /> */}
      {/* <ThemeProvider>
        <ThemeButton />
      </ThemeProvider> */}
      {/* <Parent /> */}
      {/* <ExpensiveComponentParent /> */}
      {/* <FocusInput /> */}
      {/* <PreviousValue /> */}
      {/* <Parent1 /> */}
      {/* <Parent2 /> */}
      {/* <ComponentSize /> */}
      {/* <AnimateBox /> */}
      {/* <button onClick={() => setIsActive(!isActive)}>
        {isActive ? "Deactivate" : "Activate"}
      </button> */}

      {/* <div>
        <h2>{data.content}</h2>
        <p>来源：{data.origin}</p>
        <p>作者：{data.name}</p>
        <p>标签：{data.tag}</p>
      </div> */}
      {/* <Data /> */}
      <h1>Search Example</h1>
      <Search onSearch={handleSearch} />
    </>
  );
};

export default App;

// import WelcomeClass from "./components/WelcomeClass";
// import WelcomeFunc from "./components/WelcomeFunc";
// import StudentFunc from "./components/StudentFunc";
// import RandomName from "./components/RandomName";
// import Header from "./components/Header";
// import Main from "./components/main";
// import Footer from "./components/Footer";
// import Button from "./components/Button";
// import UserPage from "./components/UserPage";
// import Button1 from "./components/Button1";
// import InputParent from "./components/InputParent";
// import MainMenu from "./components/MainMenu";
// import MainProductList from "./components/MainProductList";
// import Card from "./components/NavBar/Card";
import BookMain from "./components/book/BookMain";

const App = () => {
  // const handleClick = () => {
  //   alert("点击了按钮111");
  // };
  return (
    <>
      {/* <WelcomeClass name="world" />
      <WelcomeFunc name="React组件" /> 
      <StudentFunc
        name="小王"
        age="20"
        avatar="https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/images/1.jpg"
      />
    <RandomName />
      <Header />
      <Main />
      <Footer />
      <Button onClick={handleClick} />
      <UserPage />
      <Button1 onClick={handleClick} /> 
      <InputParent />
     <MainMenu /> 
      <MainProductList />
      <Card
        header={<h2>小王</h2>}
        body={<p>123456789</p>}
        footer={<button onClick={handleClick}>操作按钮</button>}
      />*/}
      <BookMain />
    </>
  );
};

export default App;

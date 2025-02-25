const StudentFunc = ({ name, age, avatar }) => {
  return (
    <>
      <h1>姓名:{name}</h1>
      <h1>年龄:{age}</h1>
      <h1>
        头像:{" "}
        <img
          src={avatar}
          alt="头像"
          style={{ width: "50px", height: "50px" }}
        />
      </h1>
    </>
  );
};

export default StudentFunc;

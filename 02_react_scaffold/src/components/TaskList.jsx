import React from "react";

class TaskList extends React.Component {
  render() {
    const students = [
      { id: 111, name: "张三", score: 99 },
      { id: 112, name: "张三丰", score: 98 },
      { id: 113, name: "张三峰", score: 91 },
      { id: 114, name: "张三风", score: 88 },
    ];

    return (
      <div className="item" style={{ textAlign: "center" }}>
        {students
          .filter((item) => item.score > 90)
          .map((item) => {
            return (
              <div className="item" key={item.id} style={{}}>
                <h2>学号:{item.id}</h2>
                <h3>姓名:{item.name}</h3>
                <h4>分数:{item.score}</h4>
              </div>
            );
          })}
      </div>
    );
  }
}

export default TaskList;

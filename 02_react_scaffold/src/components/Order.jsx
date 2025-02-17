import React from "react";

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        { id: 111, name: "张三", score: 99 },
        { id: 112, name: "张三丰", score: 88 },
        { id: 113, name: "张三峰", score: 61 },
        { id: 114, name: "张三风", score: 58 },
        { id: 115, name: "张三封", score: 30 },
        { id: 116, name: "张三疯", score: 18 },
      ],
      sortType: "default",
    };
  }

  sortByScore = () => {
    const sortedStudents = [...this.state.students].sort(
      (a, b) => a.score - b.score
    );
    this.setState({ students: sortedStudents, sortType: "score" });
  };

  sortByDefault = () => {
    const originalOrder = [
      { id: 111, name: "张三", score: 99 },
      { id: 112, name: "张三丰", score: 88 },
      { id: 113, name: "张三峰", score: 61 },
      { id: 114, name: "张三风", score: 58 },
      { id: 115, name: "张三封", score: 30 },
      { id: 116, name: "张三疯", score: 18 },
    ];
    this.setState({ students: originalOrder, sortType: "default" });
  };

  sortByFail = () => {
    const studentsWithFail = [...this.state.students].map((student) => ({
      ...student,
      isFail: student.score < 60,
    }));
    this.setState({ students: studentsWithFail, sortType: "fail" });
  };

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          border: "2px solid yellow",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div>
          <button onClick={this.sortByScore} style={{ margin: "10px" }}>
            按成绩排序
          </button>
          <button onClick={this.sortByDefault} style={{ margin: "10px" }}>
            默认排序
          </button>
          <button onClick={this.sortByFail} style={{ margin: "10px" }}>
            不及格排序
          </button>
        </div>

        <div>
          {this.state.students.map((student) => {
            return (
              <div
                key={student.id}
                style={{
                  margin: "10px",
                  padding: "10px",
                  border: "2px solid yellow",
                  borderRadius: "5px",
                }}
              >
                <h2>学号: {student.id}</h2>
                <h3
                  style={{
                    color: student.isFail ? "red" : "black",
                  }}
                >
                  姓名: {student.name}
                </h3>
                <h4>分数: {student.score}</h4>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TaskList;

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { get, del } from "../api/request";

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    get("/posts")
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleDelete = async (id) => {
    del(`/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post.id !== id));
      })
      .catch((err) => {
        alert("删除错误：" + err.message);
      });
  };

  if (loading) return <div>数据加载中...</div>;
  if (error) return <div>错误: {error}</div>;

  return (
    <div>
      <h2>文章列表</h2>
      <div style={{ padding: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h3>
              {/* <p>{post.body}</p> */}
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              style={{
                backgroundColor: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
              }}
            >
              删除
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;

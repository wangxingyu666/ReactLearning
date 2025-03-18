// 导入必要的React钩子和axios库
import { useState, useEffect } from "react";
import axios from "axios";

// 创建AxiosDataFetcher组件，使用axios获取和展示数据
const AxiosDataFetcher = () => {
  // 使用useState钩子管理帖子数据和加载状态
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用useEffect钩子在组件挂载时获取数据
  useEffect(() => {
    // 定义异步数据获取函数
    const fetchData = async () => {
      try {
        // 使用axios发起GET请求获取数据
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _limit: 5, // 限制获取5条数据
            },
          }
        );

        // axios自动将响应数据转换为JSON格式，可直接使用response.data
        setPosts(response.data);
        setLoading(false);
      } catch (err) {
        // 错误处理
        setError(err.message);
        setLoading(false);
      }
    };

    // 调用数据获取函数
    fetchData();
  }, []); // 空依赖数组表示仅在组件挂载时执行

  // 根据不同状态渲染不同内容
  if (loading) return <div>数据加载中...</div>;
  if (error) return <div>错误: {error}</div>;

  // 渲染获取的帖子数据
  return (
    <div>
      <h2>帖子列表 (Axios版本)</h2>
      <div style={{ padding: "20px" }}>
        {posts.map((post) => (
          <div
            key={post.id}
            style={{
              marginBottom: "20px",
              padding: "10px",
              border: "1px solid #ddd",
            }}
          >
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AxiosDataFetcher;

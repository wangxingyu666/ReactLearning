// 导入必要的React钩子
import { useState, useEffect } from "react";

// 创建DataFetcher组件，用于获取和展示数据
const DataFetcher = () => {
  // 使用useState钩子管理帖子数据和加载状态
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 使用useEffect钩子在组件挂载时获取数据
  useEffect(() => {
    // 定义异步数据获取函数
    const fetchData = async () => {
      try {
        // 发起GET请求获取数据
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5"
        );

        // 检查响应状态
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 将响应数据转换为JSON格式
        const data = await response.json();

        // 更新状态，存储获取的数据
        setPosts(data);
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
      <h2>帖子列表</h2>
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

export default DataFetcher;

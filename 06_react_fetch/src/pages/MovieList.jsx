import { useState, useEffect } from "react";
import axios from "axios";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const pageSize = 10;

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("https://apis.tianapi.com/film/index", {
        params: {
          key: "1f465b9bc32e8ef7598ddb66430e863c",
          num: 20,
          page: currentPage,
        },
      });
      if (response.data.code === 200) {
        const { newslist, allnum } = response.data.result;
        setMovies(newslist);
        setTotalPages(Math.ceil(allnum / pageSize));
      } else {
        setError(response.data.msg || "获取数据失败");
      }
    } catch (err) {
      setError(err.message || "网络请求失败");
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // 玻璃拟态风格的样式
  const glassStyle = {
    background: "rgba(255, 255, 255, 0.25)",
    backdropFilter: "blur(10px)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.18)",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    padding: "20px",
    margin: "20px 0",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
    background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
    minHeight: "100vh",
  };

  const movieGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    marginBottom: "20px",
  };

  if (loading) return <div style={containerStyle}>数据加载中...</div>;
  if (error) return <div style={containerStyle}>错误: {error}</div>;

  return (
    <div style={containerStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "30px" }}>影视资讯</h2>
      <div style={movieGridStyle}>
        {movies.map((movie, index) => (
          <div key={index} style={glassStyle}>
            <h3
              style={{
                marginBottom: "10px",
                fontSize: "1.1em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {movie.title}
            </h3>
            {movie.picUrl && (
              <img
                src={movie.picUrl}
                alt={movie.title}
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
              />
            )}
            <p
              style={{
                color: "#666",
                overflow: "hidden",
                textOverflow: "ellipsis",
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                lineHeight: "1.5em",
                height: "4.5em",
              }}
            >
              {movie.description}
            </p>
            <div
              style={{
                marginTop: "10px",
                color: "#888",
                fontSize: "0.9em",
              }}
            >
              <span>来源: {movie.source}</span>
              <span style={{ marginLeft: "15px" }}>时间: {movie.ctime}</span>
            </div>
          </div>
        ))}
      </div>

      {/* 分页控制器 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "15px",
          marginTop: "30px",
          padding: "15px",
          background: "rgba(255, 255, 255, 0.15)",
          backdropFilter: "blur(10px)",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(31, 38, 135, 0.1)",
        }}
      >
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          style={{
            padding: "8px 20px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            background:
              currentPage === 1
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.25)",
            color: currentPage === 1 ? "#999" : "#333",
            cursor: currentPage === 1 ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            fontSize: "14px",
            fontWeight: "500",
            ":hover": {
              background:
                currentPage === 1
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(255, 255, 255, 0.35)",
              transform: currentPage === 1 ? "none" : "translateY(-1px)",
            },
          }}
        >
          上一页
        </button>
        <div
          style={{
            padding: "8px 20px",
            borderRadius: "8px",
            background: "rgba(255, 255, 255, 0.3)",
            color: "#333",
            fontSize: "14px",
            fontWeight: "500",
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <span>第 {currentPage} 页</span>
          <span style={{ color: "#666" }}>/</span>
          <span>共 {totalPages} 页</span>
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          style={{
            padding: "8px 20px",
            borderRadius: "8px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            background:
              currentPage === totalPages
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(255, 255, 255, 0.25)",
            color: currentPage === totalPages ? "#999" : "#333",
            cursor: currentPage === totalPages ? "not-allowed" : "pointer",
            transition: "all 0.3s ease",
            fontSize: "14px",
            fontWeight: "500",
            ":hover": {
              background:
                currentPage === totalPages
                  ? "rgba(255, 255, 255, 0.1)"
                  : "rgba(255, 255, 255, 0.35)",
              transform:
                currentPage === totalPages ? "none" : "translateY(-1px)",
            },
          }}
        >
          下一页
        </button>
      </div>
    </div>
  );
};

export default MovieList;

import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { get, put } from "../api/request";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedBody, setEditedBody] = useState("");

  useEffect(() => {
    get(`/posts/${id}`)
      .then((data) => {
        setPost(data);
        setEditedTitle(data.title);
        setEditedBody(data.body);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const updatedPost = {
        ...post,
        title: editedTitle,
        body: editedBody,
      };

      const response = await put(`/posts/${id}`, updatedPost);
      setPost(response);
      setIsEditing(false);
    } catch (error) {
      setError(error);
    }
  };

  const handleCancel = () => {
    setEditedTitle(post.title);
    setEditedBody(post.body);
    setIsEditing(false);
  };

  if (loading) return <div>数据加载中...</div>;
  if (error) return <div>错误: {error}</div>;
  if (!post) return <div>未找到文章</div>;

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Link
        to="/"
        style={{
          display: "inline-block",
          marginBottom: "20px",
          color: "#1a73e8",
          textDecoration: "none",
        }}
      >
        ← 返回列表
      </Link>
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        {isEditing ? (
          <>
            <input
              type="text"
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
              style={{
                width: "100%",
                fontSize: "24px",
                marginBottom: "10px",
                padding: "5px",
              }}
            />
            <textarea
              value={editedBody}
              onChange={(e) => setEditedBody(e.target.value)}
              style={{
                width: "100%",
                minHeight: "200px",
                fontSize: "16px",
                padding: "5px",
              }}
            />
            <div style={{ marginTop: "10px" }}>
              <button
                onClick={handleSave}
                style={{
                  marginRight: "10px",
                  padding: "5px 15px",
                  backgroundColor: "#1a73e8",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                保存
              </button>
              <button
                onClick={handleCancel}
                style={{
                  padding: "5px 15px",
                  backgroundColor: "#f1f1f1",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                取消
              </button>
            </div>
          </>
        ) : (
          <>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1 style={{ marginTop: 0, color: "#333" }}>{post.title}</h1>
              <button
                onClick={handleEdit}
                style={{
                  padding: "5px 15px",
                  backgroundColor: "#1a73e8",
                  color: "white",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                编辑
              </button>
            </div>
            <p style={{ fontSize: "16px", lineHeight: "1.6", color: "#666" }}>
              {post.body}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default PostDetail;

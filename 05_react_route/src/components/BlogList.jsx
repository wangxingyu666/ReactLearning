import React from "react";
import blogs from "../data/blog";
import { Link } from "react-router-dom";
import { List, Card, Typography } from "antd";

const { Title } = Typography;

const BlogList = () => {
  return (
    <div style={{ padding: "20px" }}>
      <Title level={2}>Blog List</Title>
      <List
        grid={{ gutter: 16, column: 1 }}
        dataSource={blogs}
        renderItem={(blog, blogIndex) => (
          <List.Item>
            <Card hoverable style={{ width: "100%" }}>
              <Card.Meta
                title={
                  <Link to={`/blog/${blogIndex}`} style={{ fontSize: 18 }}>
                    {blog.title}
                  </Link>
                }
                description={
                  <>
                    <p>
                      <strong>作者：</strong>
                      {blog.author}
                    </p>
                    <p>
                      <strong>浏览量：</strong>
                      {blog.views}
                    </p>
                  </>
                }
              />
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogList;

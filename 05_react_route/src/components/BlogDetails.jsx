import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";
import { Card, Typography, Row, Col } from "antd";

const { Title, Paragraph } = Typography;

const BlogDetails = () => {
  const { blogIndex } = useParams();
  const blog = blogs[blogIndex];

  return (
    <div style={{ padding: "20px" }}>
      4<Title level={2}>博客详情</Title>
      <Card
        hoverable
        cover={
          <img
            alt={blog.title}
            src={blog.image}
            style={{ height: 300, objectFit: "cover" }}
          />
        }
        style={{ width: "100%" }}
      >
        <Title level={3}>{blog.title}</Title>
        <Paragraph>{blog.content}</Paragraph>
        <Row gutter={16}>
          <Col span={8}>
            <strong>作者：</strong>
            {blog.author}
          </Col>
          <Col span={8}>
            <strong>浏览量：</strong>
            {blog.views}
          </Col>
          <Col span={8}>
            <strong>订阅数：</strong>
            {blog.favorites}
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <strong>标签：</strong>
            {blog.tags.join(", ")}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default BlogDetails;

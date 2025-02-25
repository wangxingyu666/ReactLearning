import { Layout, Row, Col } from "antd";
import MyCard from "./MyCard/index";
import Header from "./Header";
import Footer from "./Footer";
import "./MyCard/style.css";
import MainBanner from "./mainbanner";

const { Content } = Layout;

const MainProductList = () => {
  const products = [
    {
      coverImage:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      avatar:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      title: "test1",
      content: "1111111111111111111111111111111",
    },
    {
      coverImage:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      avatar:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      title: "test2",
      content: "222222222222222222222222222222",
    },
    {
      coverImage:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      avatar:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      title: "test3",
      content: "3333333333333333333333333333",
    },
    {
      coverImage:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      avatar:
        "https://my-wxy-bucket.oss-cn-nanjing.aliyuncs.com/picture/liang.jpg",
      title: "test4",
      content: "44444444444444444444444",
    },
  ];

  return (
    <Layout>
      <Header />

      <Content style={{ padding: "50px" }}>
        <MainBanner />
        {/* 产品列表 */}
        <Row gutter={[16, 24]}>
          {products.map((product, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <MyCard
                coverImage={product.coverImage}
                avatar={product.avatar}
                title={product.title}
                content={product.content}
              />
            </Col>
          ))}
        </Row>
      </Content>

      <Footer />
    </Layout>
  );
};

export default MainProductList;

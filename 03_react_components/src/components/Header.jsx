import { Layout, Menu } from "antd";

const Header = () => {
  const items = [
    { label: "首页", key: "home" },
    { label: "邮件", key: "email" },
    { label: "个人中心", key: "setting" },
  ];

  return (
    <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["home"]}
        items={items}
      />
    </Layout.Header>
  );
};

export default Header;

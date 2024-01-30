import React from "react";
import { useState } from "react";
import {
  HomeOutlined,
  UserAddOutlined,
  TeamOutlined,
  UserOutlined,
  BookOutlined,
  SnippetsOutlined,
  DiffOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Home", "1", <HomeOutlined />),

  getItem("Student", "sub1", <UserOutlined />, [
    getItem("Students", "2", <TeamOutlined />),
    getItem("Add Student", "3", <UserAddOutlined />),
  ]),
  getItem("Course", "sub2", <BookOutlined />, [
    getItem("Courses", "4", <SnippetsOutlined />),
    getItem("Add Courses", "5", <DiffOutlined />),
  ]),
];
const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);
  /*const {
   token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();*/
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          /*style={{
            padding: 0,
            background: colorBgContainer,}
          }*/
        />
        <Content
          /*style={{
            margin: "0 16px",
          }}*/
        >
          <div
            /*style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}*/
          ></div>
        </Content>
        <Footer></Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;

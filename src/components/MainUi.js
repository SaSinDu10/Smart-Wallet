import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  getItem("Students", "sub1", <UserOutlined />, [
    getItem("View Students", "2", <TeamOutlined />),
    getItem("Add Student", "3", <UserAddOutlined />),
  ]),
  getItem("Courses", "sub2", <BookOutlined />, [
    getItem("View Courses", "4", <SnippetsOutlined />),
    getItem("Add Course", "5", <DiffOutlined />),
  ]),
];

const MainUi = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

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
          onClick={({ key }) => {
            // Handle the menu item click and navigate accordingly
            switch (key) {
              case "2":
                navigate("/Students");
                break;
              case "3":
                navigate("/AddStudent");
                break;
              case "4":
                navigate("/Courses");
                break;
              case "5":
                navigate("/AddCourse");
                break;
              default:
                // Handle other menu items if needed
                break;
            }
          }}
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

export default MainUi;

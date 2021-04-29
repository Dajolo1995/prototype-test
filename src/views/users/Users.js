import React, { useState } from "react";
import Main from '../../components/users/Main'

import { Layout, Menu, Breadcrumb, Button } from "antd";
import {
  PieChartOutlined,
  ContainerOutlined,
  PicRightOutlined,
  MenuOutlined,
  UserOutlined,
  createFromIconfontCN,
} from "@ant-design/icons";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const IconFont = createFromIconfontCN({
  scriptUrl: "//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js",
});

const Users = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapseParams) => {
    setCollapsed(collapseParams);
    console.log(collapseParams);
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          style={{ background: "#40A8ED" }}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            style={{ background: "#40A8ED" }}
          >
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              OLSoftware
            </Menu.Item>
            <SubMenu
              key="sub1"
              icon={<ContainerOutlined />}
              title="Programacion"
            >
              <Menu.Item key="3">Html</Menu.Item>
              <Menu.Item key="4">Css</Menu.Item>
              <Menu.Item key="5">Js</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<ContainerOutlined />} title="Perfiles">
              <Menu.Item key="6" icon={<PicRightOutlined />}>
                Roles
              </Menu.Item>
              <Menu.Item key="7" icon={<PicRightOutlined />}>
                Usuario
              </Menu.Item>
            </SubMenu>

            <SubMenu key="sub3" icon={<ContainerOutlined />} title="Reportes">
              <Menu.Item key="8">reporte 1</Menu.Item>
              <Menu.Item key="9">Reporte 2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>

        <Layout className="site-layout">
          <Header
            className="site-layout-background"
            style={{ padding: 0, background: "#fff" }}
          >
            <div className="nav">
              <div className="navbar navbar-menu">
                <Button
                  type="text"
                  icon={<MenuOutlined />}
                  style={{
                    margin_left: "10px",
                    padding: "20px",
                    color: "blue",
                  }}
                ></Button>
                <h2 className="name"> Prueba Front-end</h2>
              </div>
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>

            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Main/>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Users;

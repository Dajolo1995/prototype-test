import React, { useState } from "react";
import Main from "../../components/users/Main";

import { Layout, Menu, Button, Col } from "antd";
import {
  PieChartOutlined,
  ContainerOutlined,
  PicRightOutlined,
} from "@ant-design/icons";
import "./Users.css";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Users = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapseParams) => {
    setCollapsed(collapseParams);
    console.log(collapseParams);
  };

  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsed={collapsed} style={{ background: "#40A8ED" }}>
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
              <Col span={3}>
                <div className="navbar navbar-menu">
                  <Button
                    onClick={() => onCollapse(!collapsed)}
                    type="text"
                    style={{
                      margin_left: "10px",
                      padding: "20px",
                      color: "#1D43AD",
                      position: "relative",
                      top: "19px",
                    }}
                  >
                    <i class="bx bx-menu btn-menu"></i>
                  </Button>
                  <h2 className="name"> Prueba Front-end</h2>
                </div>
              </Col>

              <Col span={20}>
                <div className="usuario" style={{ textAlign: "right" }}>
                  <span>
                    <i class="bx bxs-user-circle icon-user"></i>
                  </span>
                  <span className="text-user">Andres Felipe Garcia Castro</span>

                  <Button
                    type="text"
                    style={{

                    }}
                  >
                    <i
                      class="bx bx-exit icon-exit"
                      style={{ color: "#1d43ad" }}
                    ></i>
                  </Button>
                </div>
              </Col>
            </div>
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <Main />
            </div>
          </Content>
          <Footer style={{ textAlign: "right", background: "#fff" }}>
            OLSoftware - 2018
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Users;

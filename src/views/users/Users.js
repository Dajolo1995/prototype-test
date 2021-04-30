import React, { useState } from "react";
import Main from "../../components/users/Main";
import styled from "@emotion/styled";
import { Layout, Menu, Button, Col } from "antd";
import {
  PieChartOutlined,
  ContainerOutlined,
  PicRightOutlined,
} from "@ant-design/icons";
import "./Users.css";
import { Link } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const ButtonExit = styled(Button)`
  font-size: 24px;
  position: relative;
  top: 7px;
`;

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Users = () => {
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapseParams) => {
    setCollapsed(collapseParams);
    console.log(collapseParams);
  };

  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

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
              <Col span={7}>
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
                  <h2 className="name">Pruebas Front-end</h2>
                </div>
              </Col>

              <Col span={17}>
                <div className="usuario" style={{ textAlign: "right" }}>
                  <span>
                    <i class="bx bxs-user-circle icon-user"></i>
                  </span>
                  <span className="text-user">Andres Felipe Garcia Castro</span>
                  <Link to={"/"}>
                    <ButtonExit type="text" style={{}}>
                      <i
                        class="bx bx-exit icon-exit"
                        style={{ color: "#1d43ad", fontSize: "24px" }}
                      ></i>
                    </ButtonExit>
                  </Link>
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

      <div className="sweet-loading">
        <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        />
        <PulseLoader color={color} loading={loading} css={override} size={150} />
      </div>
    </div>
  );
};

export default Users;

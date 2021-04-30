import React from "react";
import { Row, Col } from "antd";
import styled from "@emotion/styled";

import CardLogin from "../../components/login/CardLogin";

import "./Login.css";

const TextDiv = styled.div`
  position: absolute;
  top: 360px;
  left: 200px;
`;

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <Row>
          <Col span={12}>
            <TextDiv>
              <h2 className="text-login">Aplicación</h2>
              <h2 className="text-login">OLSoftware</h2>
              <p className="login-text">Prueba práctica Front-end senior</p>
            </TextDiv>
          </Col>
          <Col span={12}>
            <CardLogin />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;

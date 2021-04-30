import React from "react";
import { Row, Col } from "antd";

import CardLogin from "../../components/login/CardLogin";

import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <Row>
          <Col span={12}>
            <div>
              <h2>Aplicación</h2>
              <h2>OLSoftware</h2>

              <p>Prueba práctica Front-end senior</p>
            </div>
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

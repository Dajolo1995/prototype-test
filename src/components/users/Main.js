import React from "react";
import { Row, Col } from "antd";
import Tables from './Tables'
import FormSerach from './FormSearch'

const Main = () => {
  return (
    <div className="main">
      <Row>
        <Col span={19}><Tables/></Col>
        <Col span={5}><FormSerach/></Col>
      </Row>
    </div>
  );
};

export default Main;

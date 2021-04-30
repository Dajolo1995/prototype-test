import React from "react";
import { Row, Col, Button, Table } from "antd";
import { UserAddOutlined, TeamOutlined } from "@ant-design/icons";
import userJson from "../../db/users.json";

import "./users.css";

const columns = [
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "Apellidos",
    dataIndex: "apellidos",
    key: "apellidos",
  },
  {
    title: "Identidicacion",
    dataIndex: "identificacion",
    key: "identificacion",
  },
  {
    title: "Rol asociado",
    dataIndex: "rol",
    key: "rol",
  },
  {
    title: "Estado",
    dataIndex: "estado",
    key: "estado",
  },
  {
    title: "Teléfono",
    dataIndex: "telefono",
    key: "telefono",
  },
  {
    title: "correo electronico",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "edit",
    dataIndex: "edit",
    key: "edit",
    render:(value, row, index) =>{
      
      return(<span>Lo</span>)
    },
  },
];



const Tables = () => {
  return (
    <div className="table-user">
      <div className="user">
        <Row style={{ background: "#fff" }}>
          <Col span={20}>
            <span className="user-logo">
              <TeamOutlined
                styled={{
                  top: "5px",
                  position: "relative",
                  marginright: "20px",
                  left: "11px",
                }}
              />
              <p>Usuario existentes</p>
            </span>
          </Col>
          <Col span={3}>
            <Button
              type="primary"
              style={{ background: "#1D43AD", border: "#1D43AD" }}
            >
              Crear
            </Button>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={{ background: "#fff" }}>
          <Col span={23}>
            <Table columns={columns} dataSource={userJson.users} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Tables;

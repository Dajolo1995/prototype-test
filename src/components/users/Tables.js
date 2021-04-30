import React from "react";
import { Row, Col, Button, Table } from "antd";
import { TeamOutlined } from "@ant-design/icons";
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
    title: "Email ",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Acción",
    dataIndex: "edit",
    key: "edit",
    render: (value, row, index) => {
      return (
        <div className="button-table">
          <Button>
            <i class="bx bxs-pencil"></i>
          </Button>
          <Button>
            <i class="bx bxs-trash"></i>
          </Button>
        </div>
      );
    },
  },
];

const Tables = () => {
  return (
    <div className="table-user">
      <div className="user">
        <Row style={{ background: "#fff", display: "contents" }}>
          <Col span={21}>
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
            <div style={{ float: "right" }}>
              <Button
                type="primary"
                style={{
                  background: "#1D43AD",
                  border: "#1D43AD",
                  textAlign: "right",
                  position: "relative",
                  top: "11px",
                  right: "10px",
                }}
              >
                Crear
              </Button>
            </div>
          </Col>
        </Row>
      </div>
      <div>
        <Row style={{ background: "#fff" }}>
          <Col span={24}>
            <Table
              style={{ fontSize: "12px" }}
              columns={columns}
              dataSource={userJson.users}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Tables;

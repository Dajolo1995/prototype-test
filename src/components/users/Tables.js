import React, { useState } from "react";
import { Row, Col, Button, Table, Modal } from "antd";
import { TeamOutlined } from "@ant-design/icons";
import userJson from "../../db/users.json";
import CrearForm from "../../views/crear/CrearForm";

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
          <Button size="small" type="link">
            <i class="bx bxs-pencil"></i>
          </Button>
          <Button size="small" type="text">
            <i class="bx bxs-trash"></i>
          </Button>
        </div>
      );
    },
  },
];

const Tables = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="table-user">
      <div className="user">
        <Row style={{ background: "#fff", display: "contents" }}>
          <Col span={21}>
            <span className="user-logo">
              <TeamOutlined
                styled={{
                  marginleft: "15px",
                  marginright: "12px",
                  top: "7px",
                  position: "relative",
                }}
              />
              <p className="existing-user">Usuario existentes</p>
            </span>
          </Col>

          <Col span={3}>
            <div style={{ float: "right" }}>
              <Button
                type="primary"
                onClick={showModal}
                style={{
                  background: "#1D43AD",
                  border: "#1D43AD",
                  textAlign: "right",
                  position: "relative",
                  top: "11px",
                  right: "21px",
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

      <Modal
      footer={null}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <CrearForm />
      </Modal>
    </div>
  );
};

export default Tables;

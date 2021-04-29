import React from "react";
import { Row, Col, Button, Table, Modal } from "antd";
import { UserAddOutlined } from "@ant-design/icons";

const columns  = [
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
    title: "telefono",
    dataIndex: "telefono",
    key: "telefono",
  },
  {
    title: "correo electronico",
    dataIndex: "email",
    key: "email",
  },
  {
    title:"edit",
    dataIndex: "edit",
    key: "edit",
  }
];

const Tables = () => {
  return (
    <div>
      <div className="user">
        <Row>
          <Col span={21}>
            <span icon={<UserAddOutlined />}>
              <p>Hola</p>
            </span>
          </Col>
          <Col span={3}>
            <Button type="primary">Crear</Button>
          </Col>
        </Row>
      </div>
      <div>
        <Row>
        <Table columns={columns}/>
        </Row>
      </div>
    </div>
  );
};

export default Tables;

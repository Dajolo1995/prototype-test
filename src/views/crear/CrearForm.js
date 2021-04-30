import React from "react";
import "./CrearForm.css";
import { Row, Col, Input, Button } from "antd";



const CrearForm = () => {
  return (
    <div className="new-user">
      <div className="form-user">
        <h3>Agregar nuevo usuario</h3>
        <form>
          <Row>
            <Col span={12}>
              <div className="direction">
                <div className="input">
                  <label>Nombre</label>
                  <Input />
                </div>
                <div className="input">
                  <label>Identificación C.C</label>
                  <Input />
                </div>
                <div className="input">
                  <label>Estado</label>
                  <Input />
                </div>
                <div className="input">
                  <label>Telefono</label>
                  <Input />
                </div>
              </div>
            </Col>
            <Col span={12}>
              <div className="direction">
                <div className="input">
                  <label>Apellidos</label>
                  <Input />
                </div>
                <div className="input">
                  <label>Rol Asociado</label>
                  <Input />
                </div>
                <div className="input">
                  <label>Contraseña</label>
                  <Input />
                </div>
                <div className="input">
                  <label>Coorreo Electronico</label>
                  <Input />
                </div>
              </div>
            </Col>
          </Row>
          <div className="button-filter">
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
        </div>
        </form>
      </div>
    </div>
  );
};

export default CrearForm;

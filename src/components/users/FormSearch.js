import React from "react";
import { Input, Select, Cascader, Button } from "antd";

import './users.css'


const FormSearch = () => {
  return (
    <div>
      <div className="formSearch">
        <h4 className="filtro-text"><i class='bx bx-user-plus user-icon-search'></i>Filtrar búsqueda</h4>
        <div className="formInput">
          <label>Nombre</label>
          <Input />
        </div>

        <div className="formInput">
          <label>Apellido</label>
          <Input />
        </div>

        <div className="formInput">
          <label>identificacion</label>
          <Input />
        </div>
        <div className="formInput">
          <label>Rol Asociado</label>
          <Input.Group compact>
            <Cascader style={{ width: "100%" }} />
          </Input.Group>
        </div>
        <div className="formInput">
          <label>Estado</label>
          <Input.Group compact>
            <Cascader style={{ width: "100%" }} />
          </Input.Group>
        </div>
        <div className="formInput">
          <label>Contraseña</label>
          <Input />
        </div>
        <div className="formInput">
          <label>Telefono</label>
          <Input />
        </div>
        <div className="formInput">
          <label>Correo Electronico</label>
          <Input />
        </div>
        <div className="button-filter">
          <Button type="primary" danger>
            Primary
          </Button>
          <Button danger>Default</Button>
        </div>
      </div>
    </div>
  );
};

export default FormSearch;

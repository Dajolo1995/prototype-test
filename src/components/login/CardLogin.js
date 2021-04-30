import React, { useState } from "react";
import { Card, Input, Button } from "antd";
import styled from "@emotion/styled";
import { UserOutlined } from "@ant-design/icons";

const TitleLogin = styled.h2`
  text-align: center;
  color: #000;
`;

const LoginCard = styled(Card)`
  width: 274;
  display: flex;
  flex-direction: column;
  position: relative;
  top: 200px;
  border-radius: 25px 25px 25px 25px;
  height: 289px;
  width: 274px;
  box-shadow: 3px 3px 3px rgba(229, 229, 229, 0.4);
`;

const DivForm = styled.div`
  justify-content: center;
  margin-top: 38px;
  margin-bottom: 27px;
`;

const CardLogin = () => {

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handlerInput = e =>{
      let name= e.target.name;
      let value = e.target.value

      setForm({
          ...form,
          [name]:value
      })
  }

  return (
    <div>
      <LoginCard style={{}}>
        <div>
          <TitleLogin>Inicio de sesión</TitleLogin>
        </div>

        <DivForm>
          <form>
            <Input
            type="text"
              prefix={<UserOutlined />}
              styled={{
                box_shadow: "4px 1px 1px rgb(229 229 229 / 40%)",
              }}
              name="email"
              onChange={event => handlerInput(event)}
            />
            <Input.Password
              styled={{
                box_shadow: "4px 4px 1px rgb(229 229 229 / 40%)",
              }}
              name="password"
              onChange={event => handlerInput(event)}
            />
          </form>
        </DivForm>
        <Button type="primary" block>
          Iniciar sesión
        </Button>
      </LoginCard>
    </div>
  );
};

export default CardLogin;

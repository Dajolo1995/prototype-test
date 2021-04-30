import React, { useState, useEffect } from "react";
import { Card, Input, Button } from "antd";
import styled from "@emotion/styled";
import { UserOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

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

const ButtonLogin = styled(Button)`
  background: #1d43ad;
  color: #fff;
  :hover {
    background: #1d43ad;
    color: #ccc;
  }
`;

const CarLogin = styled.div`
  position: absolute;
  top: 150px;
  left: 260px;
`;  

const LoadingLogin = styled(PulseLoader)`
  position: absolute;
  right: 12px;
`

const CardLogin = () => {
  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const history = useHistory();

  useEffect(() => {
    let timeOut;
    if(loading){
      timeOut = setTimeout(()=> {
        setLoading(false)
        onSubmit()
      },3000)
    }

    return () =>{
      clearTimeout(timeOut)
    }
  }, [loading])


  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const { email, password } = form;

  const onChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    // e.preventDefault();
    history.push('/users')

    if (email.trim() === "" || password.trim() === "") {
      console.log("favor llenar todos los campos");
    }
  };

  return (
    <CarLogin>
      <LoginCard style={{}}>
        <div>
          <TitleLogin>Inicio de sesión</TitleLogin>
        </div>
        <form>
          <DivForm>
            <Input
              required
              type="text"
              prefix={<UserOutlined />}
              styled={{
                box_shadow: "4px 1px 1px rgb(229 229 229 / 40%)",
              }}
              name="email"
              value={email}
              onChange={onChange}
            />
            <Input
              styled={{
                box_shadow: "4px 4px 1px rgb(229 229 229 / 40%)",
              }}
              required
              name="password"
              type="password"
              onChange={onChange}
              value={password}
            />
          </DivForm>

          <ButtonLogin  onClick={() => setLoading(true)} block>
            <> 
              Iniciar sesión
            </>
          </ButtonLogin>
        </form>
      </LoginCard>
      <div className="sweet-loading">
        <button >Toggle Loader</button>
        <input
          value={color}
          onChange={(input) => setColor(input.target.value)}
          placeholder="Color of the loader"
        />
        {
          loading==true?(<LoadingLogin color='#000' loading={loading} css={override} size={120} />) :null
          }
        
      </div>
    </CarLogin>
  );
};

export default CardLogin;

import React from "react";
import "./login.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
const Login = () => {
  return (
    <div className="container_Login">
      <form className="form_login" action="">
        <h1 className="text-primary">Inicar Sesión</h1>
        <Input label="Correo Electronico" type="text" size="3" />
        <Input label="Contraseña" type="text" size="3" />
        <Button  text="Ingresar" style="dark" size="btn_1" />
        <p>¿Aún no tenes cuenta?</p>
        <a href="/register">Registrate</a>
      </form>
    </div>
  );
};
export default Login;

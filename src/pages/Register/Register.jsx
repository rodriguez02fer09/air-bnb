import React from "react";
import "./register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Register = () => {
  return (

      <div className="main_container">
        <h1 className="text-primary">Crear cuenta</h1>
        <form className="form_container">
          <div className="container_input">
          <Input label="Nombre" type="text" size="0" />
          <Input label="Apellido" type="text" size="0" />
          </div>
          <Input label="Correo Electronico" type="text" size="3" />
          <Input label="Contraseña" type="password" size="3" />
          <Input label="Confirmar Contraseña" type="password" size="3" />
          
          <div className="container_button">
          <Button text="Crear cuenta" style="dark" size="1" />
        <p>¿Aún no tenes cuenta?</p>
        <a href="/register">Registrate</a>
        </div>
        </form>
      </div>
    
  );
};
export default Register;

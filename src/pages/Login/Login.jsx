import React , {useState} from "react";
import "./login.css";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

const formLogin= {
  email:" ",
  password : " ",
  
}

const Login = () => {
 
  const [login , setLogin] = useState (formLogin)

  const  handlerOnChange = (event) => {
    console.log(event)
  
    setLogin((state) => {
      return {
        ...state,
        // const {name, value} = event.target;

        //  const name = event.target.name;
        //  const value1 = event.target.value;

        [event.target.name]: event.target.value
      }
    })
  
    console.log(login)
  }

  return (
    <div className="container_Login">
      <form className="form_login" action="">
        <h1 className="text-primary">Inicar Sesión</h1>
        <Input label="Correo Electronico" type="text" size="3"  value={login.name} handlerchange={handlerOnChange} name="email" />
        <Input label="Contraseña" type="text" size="3" value={login.name} handlerchange={handlerOnChange} name="password"  />
        <Button  text="Ingresar" style="dark" size="btn_1" />
        <p>¿Aún no tenes cuenta?</p>
        <a href="/register">Registrate</a>
      </form>
    </div>
  );
};
export default Login;

import React , {useState}from "react";
import "./register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const formRegister = {
  name:" ",
  lastName: " ",
  email: " ",
  password : " ",
  confirPasword: " ",
}


// const formRegister = {
//   name:"fernanda",
//   lastName: " ",
//   email: " ",
//   password : " ",
//   confirPasword: " ",
// }


const nombreaPropiedad= "name"
// formRegister.name  ="fernanda"
// formRegister['name']  ="fernanda"
// formRegister[nombreaPropiedad]  ="fernanda"



const Register = () => {
  
const [register, setRegister] = useState(formRegister)

const  handlerOnChange = (event) => {
  console.log(event)

  setRegister((state) => {
    return {
      ...state,
      [event.target.name]: event.target.value
    }
  })

  console.log(register)
}


  return (

      <div className="main_container">
        <h1 className="text-primary">Crear cuenta</h1>
        <form className="form_container">

          <div className="container_input">
          <Input label="Nombre" type="text" size="0" value={register.name} handlerchange={handlerOnChange} name="name" />
          <Input label="Apellido" type="text" size="0"  value={register.lastName} handlerchange={handlerOnChange} name="lastName"/>
          </div>

          <Input label="Correo Electronico" type="text" size="3" value={register.email} />
          <Input label="Contraseña" type="password" size="3"  value={register.password}/>
          <Input label="Confirmar Contraseña" type="password" size="3" value={register.confirPassword}/>
          
          <div className="container_button">
          <Button text="Crear cuenta" style="dark" size="1" />
        <p>¿Ya tienes  cuenta?</p>
        <a href="/login">Inciar sesíon</a>
        </div>
        </form>
      </div>
    
  );
};
export default Register;

import React , {useState}from "react";
import "./register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

// const validaciones  = {
	
// 	name:{
// 		mensaje: "Campo requerido o invalido",
// 		expresion:	/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	},
// 	lastname:{
// 		mensaje: "Campo requerido o invalido",
// 		expresion:	/^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// 	},
// 	email: {
// 		"mensaje": "Correo invalido",
// 		"expresion": /[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
// 	},
// 	password: {
// 		mensaje: " formato invalido debe tener mas de 6 caracteres",
// 		expresion: /^\w{6}/,
// 	},
// 	confirmPassword: {
// 		mensaje: "formato invalido debe tener mas de 6 caracteres",
// 		expresion: /^\w{6}/,
// 	},
// 	diferenPassword:{
// 		mensaje : "contraseña incorrecta",
		
// 	}
	
// }

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
// formRegister[nombreaPropiedad]  = fernanda"


const errors = {
  name: {
    error:""
  },

lastName: {
  error:""
},
email: {
  error:""
},
password:{
  error:" "
},
confirPassword:{
  error:" "
}
}

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
          <Input label="Nombre" type="text" size="0" value={register.name} handlerchange={handlerOnChange} name="name"   />
          <Input label="Apellido" type="text" size="0"  value={register.lastName} handlerchange={handlerOnChange} name="lastName" required="required"/>
          </div>

          <Input label="Correo Electronico" type="text" size="3" value={register.email} name="email" required="required"/>
          <Input label="Contraseña" type="password" size="3"  value={register.password} name="password"  required="required"/>
          <Input label="Confirmar Contraseña" type="password" size="3" value={register.confirPassword} name="confirPassword" error="error"  />
          
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


//cuando el boton de clcik enviar el formulario
//inicializar un estado de errores
//reemplazar el estado de errores en los inputs
//crear un estado de validaciones
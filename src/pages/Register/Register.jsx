import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./register.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";



// const formRegister = {
//   name:"fernanda",
//   lastName: " ",
//   email: " ",
//   password : " ",
//   confirPasword: " ",
// }
const nombreaPropiedad = "name";
// formRegister.name  ="fernanda"
// formRegister['name']  ="fernanda"
// formRegister[nombreaPropiedad]  = fernanda"

const errors = {
  name: {
    error: "",
  },

  lastName: {
    error: "",
  },
  email: {
    error: "",
  },
  password: {
    error: " ",
  },
  confirPassword: {
    error: " ",
  },
};
const formRegistro = {
  name: " ",
  lastName: " ",
  email: " ",
  password: " ",
  confirPasword: " ",
};

const Register = () => {
  const [registro, setRegistro] = useState(formRegistro);
  const [errores, setErrores] = useState({});



  const handlerOnChange = (event) => {
    console.log(event);

    setRegistro((state) => {
      return {
        ...state,
        [event.target.name]: event.target.value,
      };
    });

    console.log(registro);
  };

  const handleSubmit =(event)=>{
    event.preventDefault()

    const nuevosErrores = {};

    if (!registro.name.trim()) {
      nuevosErrores.name ='Elnombre es obligatorio';
    }
    if (!registro.lastName.trim()) {
      nuevosErrores.lastName = 'El Apellido es obligatorio';
    }
    if (!registro.email.trim()) {
      nuevosErrores.email = 'El email es obligatorio';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registro.email)) {
      nuevosErrores.email = 'El email no es válido';
    }
    if (!registro.password.trim()) {
      nuevosErrores.password = 'La contraseña es obligatoria';
    } else if (registro.password.length >= 8) {
      nuevosErrores.password = 'La contraseña debe tener al menos 8 caracteres';
    }
    if (!registro.confirPassword.trim()) {
      nuevosErrores.confirPassword = 'La contraseña es obligatoria';
    } else if (registro.confirPassword.length >= 8) {
      nuevosErrores.confirPassword = 'La contraseña debe tener al menos 8 caracteres';
    }

     // Actualizar estado de errores
    setErrores(() =>nuevosErrores);

    // Si no hay errores, enviar formulario
    if (Object.keys(nuevosErrores).length === 0) {
      // enviar formulario
    }
  }
  return (
    <div className="main_container">
      <h1 className="text-primary">Crear cuenta</h1>
      <form className="form_container" onSubmit= {handleSubmit}>
        <div className="container_input">
          <Input
            label="Nombre"
            type="text"
            size="0"
            value={registro.name}
            handlerchange={handlerOnChange}
            name="name"
           
            errors={errores}
            
          />
          <Input
            label="Apellido"
            type="text"
            size="0"
            value={registro.lastName}
            handlerchange={handlerOnChange}
            name="lastName"
            errors={errores}
          />
        </div>

        <Input
          label="Correo Electronico"
          type="text"
          size="3"
          value={registro.email}
          handlerchange={handlerOnChange}
          name="email"
          errors={errores}
        />
        <Input
          label="Contraseña"
          type="password"
          size="3"
          value={registro.password}
          handlerchange={handlerOnChange}
          name="password"
          errors={errores}
          
        />
        <Input
          label="Confirmar Contraseña"
          type="password"
          size="3"
          value={registro.confirPassword}
          handlerchange={handlerOnChange}
          name="confirPassword"
          error="error"
       
          errors={errores}

        />

        <div className="container_button">
          <Button type="submit" text="Crear cuenta" style="dark" size="1" />
          <p>¿Ya tienes cuenta?</p>
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

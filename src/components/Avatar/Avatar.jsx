import React,{useState} from "react";

import "./avatar.css";

import SloganAvatar from "../SloganAvatar/SloganAvatar";
import UserAvatar from "../UserAvatar/UserAvatar";
import { AiOutlineClose } from "react-icons/ai";
import Button from "../Button/Button"


const Avatar = () => {
  const [isLogger, setIsLogger] =useState (true)

  const closeSesion = () => {
    setIsLogger((currentState)=>{
      console.log(currentState)
      return false
    })
  }

  return (
    <div className="container_navbar_info">
     {
      isLogger 
      ?
        (<>
          <SloganAvatar name="Fernanda" lastName="Rodriguez" />
          <UserAvatar name="Fernanda" lastName="Rodriguez" />
          <AiOutlineClose  onClick={closeSesion}/>
        </>) 
      :
        (<>
          <Button  text="Ingresar" style="btn-light" size="btn_1" />
          <Button  text="Crear cuenta" style="btn-light" size="btn_1" />
        </>)
       
    }
      
    </div>
  );
};

export default Avatar;

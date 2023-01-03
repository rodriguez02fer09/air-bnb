import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg"

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo" />
      <p>Sentite como en tu hogar</p>
    </header>
  );
};

export default Header;

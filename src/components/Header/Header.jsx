import logo from "../../assets/logo.svg";
import "./header.css";
import Avatar from "../Avatar/Avatar"

const Header = () => {
  return (
    <header className="header">

      <div to="/" className="header__slogan">
        <img src={logo} alt="Logo" />
        <p>Sentite como en tu hogar</p>
      </div>
     <Avatar/> 
    </header>
  );
};

export default Header;

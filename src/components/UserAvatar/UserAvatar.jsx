import React from "react";
import "./useAvatar.css";

const UserAvatar = ({ name, lastName }) => {
  return (
    <div className="navBar_Name">
      <p>Hola, </p>
      <p>
        {name} {lastName}
      </p>
    </div>
  );
};
export default UserAvatar;

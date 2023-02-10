import React from "react";
import "./avatar.css";
import SloganAvatar from "../SloganAvatar/SloganAvatar";
import UserAvatar from "../UserAvatar/UserAvatar";
import { AiOutlineClose } from "react-icons/ai";

const Avatar = () => {
  return (
    <div className="container_navbar_info">
      <SloganAvatar />
      <UserAvatar />
      <AiOutlineClose />
    </div>
  );
};

export default Avatar;

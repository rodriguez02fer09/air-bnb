import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="mainFooter">
      <p> ©2022 Digital Booking</p>
      <div className="mainFooter_socialMedia">
        <FaInstagram/> 
        <FaTwitter/>
        <FaFacebook/> 
        <FaLinkedinIn/>
        </div>
    </footer >
  );
};

export default Footer;

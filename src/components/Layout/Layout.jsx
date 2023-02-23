import React from "react";
import "./layout.css"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

 const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
     {children}
      <Footer />
    </div>
  );
}

export default Layout

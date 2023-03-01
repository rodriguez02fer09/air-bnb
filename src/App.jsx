import React from "react"
import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components"
import { Login,Register,Home } from "./pages"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home/>} />
      </Routes> 
    </Layout>
  );
}

export default App;

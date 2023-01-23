import React from "react"
import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components"
import { Login,Register } from "./pages"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
       
      </Routes>
    </Layout>
  );
}

export default App;

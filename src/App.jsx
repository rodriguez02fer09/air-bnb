import React from "react"
import { Routes,Route } from "react-router-dom";
import "./App.css";
import { Layout } from "./components"
import { Login } from "./pages"


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  );
}

export default App;

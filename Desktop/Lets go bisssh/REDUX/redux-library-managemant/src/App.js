import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AdminSignup from "./pages/auth/AdminSignUp";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/admin-signup" element={<AdminSignup />}></Route>
        <Route path="/*" element={<Dashboard />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;

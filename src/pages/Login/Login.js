import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

import "./Login.css";
const Login = () => {
  return <div>
    <Header></Header>
    <Outlet></Outlet>
  </div>;
};

export default Login;

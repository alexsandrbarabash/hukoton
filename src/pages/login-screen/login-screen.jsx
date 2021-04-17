import React from "react";
import LoginForm from "../../components/login-form";
import "./login-screen-style.scss";


const LoginScreen = () => {
  return (
    <div className="page-wrapper main-wrapper">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginScreen;

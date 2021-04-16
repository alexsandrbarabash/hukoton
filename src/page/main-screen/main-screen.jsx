import React from "react";
import LoginForm from "../../component/login-form";
import "./main-screen-style.scss";


const MainScreen = () => {
  return (
    <div className="page-wrapper main-wrapper">
      <div className="container">
        <LoginForm />
      </div>
    </div>
  );
};

export default MainScreen;

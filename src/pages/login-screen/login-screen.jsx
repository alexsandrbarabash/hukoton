import React from "react";
import LoginForm from "../../components/login-form";
import "./login-screen-style.scss";
import {login} from "../../redux/actions";
import {useDispatch} from "react-redux";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e, username, password) => {
    e.preventDefault();
    dispatch(login(username, password));
  }

  return (
    <div className="page-wrapper main-wrapper">
      <div className="container">
        <LoginForm onSubmitHandler={onSubmitHandler}/>
      </div>
    </div>
  );
};

export default LoginScreen;

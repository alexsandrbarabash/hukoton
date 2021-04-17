import React from "react";
import LoginForm from "../../components/login-form";
import "./login-screen-style.scss";
import {login} from "../../redux/actions";
import {useDispatch, useSelector} from "react-redux";
import Spinner from "../../components/spinner";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e, username, password) => {
    e.preventDefault();
    dispatch(login(username, password));
  }

  const {loggingIn} = useSelector(state => state.userReducer);

  if (loggingIn) {
    return (<Spinner/>);
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

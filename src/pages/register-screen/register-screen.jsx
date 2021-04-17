import React from 'react';
import RegisterForm from "../../components/register-form";
import {useDispatch} from "react-redux";
import {signup} from "../../redux/actions";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e, form) => {
    e.preventDefault();
    dispatch(signup(form));
  }

  return (
    <div className="register-wrapper">
      <div className="container">
        <RegisterForm onSubmitHandler={onSubmitHandler}/>
      </div>
    </div>
  );
};

export default RegisterScreen;
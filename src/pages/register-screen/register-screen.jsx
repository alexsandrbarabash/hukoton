import React from 'react';
import RegisterForm from "../../components/register-form";
import {useDispatch, useSelector} from "react-redux";
import {signup} from "../../redux/actions";
import Spinner from "../../components/spinner";

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const onSubmitHandler = (e, form) => {
    e.preventDefault();
    dispatch(signup(form));
  }

  const {loggingIn} = useSelector(state => state.userReducer);

  if (loggingIn) {
    return (<Spinner/>);
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
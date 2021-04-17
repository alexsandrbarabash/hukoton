import React from 'react';
import RegisterForm from "../../components/register-form";
import './register-style.scss';
const RegisterScreen = () => {
    return (
        <div className="register-wrapper">
            <p className="top-text">Register</p>
            <div className="block-register-page">
                <div className="container">
                    <RegisterForm />
                </div>
               
            </div>
        </div>
    );
};

export default RegisterScreen;
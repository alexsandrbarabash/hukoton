import React from 'react';
import RegisterForm from "../../components/register-form";
import "./register-style.scss"

const RegisterScreen = () => {
    return (
            <div className="register-wrapper">
                <div className="container">
                    <RegisterForm />
                </div>
            </div>
    );
};

export default RegisterScreen;
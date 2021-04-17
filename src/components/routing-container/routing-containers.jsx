import React from "react";
import {Switch,Route} from "react-router-dom";
import LoginScreen from '../../pages/login-screen';
import RegisterScreen from '../../pages/register-screen';

const RoutingContainer = () => {
    return (
        <Switch>
            <Route exact path="/">
            <LoginScreen />
            </Route>
            <Route exact path="/register">
            <RegisterScreen />
            </Route>
        </Switch>
    );
};

export default RoutingContainer;
import React from "react";
import {Switch,Route} from "react-router-dom";
import MainScreen from '../../page/main-screen';
import RegisterScreen from '../../page/register-screen';

const RoutingContainer = () => {
    return (
        <Switch>
            <Route exact path="/">
            <MainScreen />
            </Route>
            <Route exact path="/register">
            <RegisterScreen />
            </Route>
        </Switch>
    );
};

export default RoutingContainer;
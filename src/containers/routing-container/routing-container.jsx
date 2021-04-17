import React from "react";
import { Switch, Route } from "react-router-dom";

import SelectionMenu from "../../pages/selection-menu";
import ScheduleCreator from "../../pages/schedule-creator";
import ScheduleStudent from "../../pages/schedule-student";
import ScheduleEducator from "../../pages/schedule-educator";
import LoginScreen from "../../pages/login-screen";
import RegisterScreen from "../../pages/register-screen";
import HomeScreen from "../../pages/home-screen";
import { useSelector } from "react-redux";

const RoutingContainer = () => {
  const roles = useSelector((state) => state.userReducer.roles);

  return (
    <Switch>
      <Route exact path="/create" component={SelectionMenu} />
      <Route exact path={`/schedule/${roles?.creator || 'creator'}`}>
        <ScheduleCreator />
      </Route>
      <Route exact path={`/schedule/${roles?.student || 'student'}`}>
        <ScheduleStudent />
      </Route>
      <Route exact path={`/schedule/${roles?.educator || 'educator'}`}>
        <ScheduleEducator />
      </Route>
      <Route exact path="/login">
        <LoginScreen />
      </Route>
      <Route exact path="/register">
        <RegisterScreen />
      </Route>
      <Route exact path="/">
        <HomeScreen />
      </Route>
    </Switch>
  );
};

export default RoutingContainer;

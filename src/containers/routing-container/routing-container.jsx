import React from "react";
import { Switch, Route } from "react-router-dom";

import SelectionMenu from "../../pages/selection-menu";
import ScheduleCreator from "../../pages/schedule-creator";
import ScheduleStudent from "../../pages/schedule-student";
import ScheduleEducator from "../../pages/schedule-educator";
import LoginScreen from "../../pages/login-screen";
import RegisterScreen from "../../pages/register-screen";
import HomeScreen from "../../pages/home-screen";

const RoutingContainer = () => {
  return (
    <Switch>
      <Route exact path="/create" component={SelectionMenu} />
      <Route exact path="/schedule/creator">
        <ScheduleCreator />
      </Route>
      <Route exact path="/schedule/student">
        <ScheduleStudent />
      </Route>
      <Route exact path="/schedule/educator">
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

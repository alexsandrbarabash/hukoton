import React from "react";

import { Switch, Route } from "react-router-dom";
import SelectionMenu from "../../pages/selection-menu";

import ScheduleCreator from "../../pages/schedule-creator";
import ScheduleStudent from "../../pages/schedule-student";
import ScheduleEducator from "../../pages/schedule-educator";
import MainScreen from "../../pages/main-screen";
import RegisterScreen from "../../pages/register-screen";

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

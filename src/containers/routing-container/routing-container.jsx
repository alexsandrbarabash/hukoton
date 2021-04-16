import React from "react";
import { Switch, Route } from "react-router-dom";
import ScheduleCreator from "../../page/schedule-creator";
import ScheduleStudent from "../../page/schedule-student";
import ScheduleEducator from "../../page/schedule-educator";

const RoutingContainer = () => {
  return (
    <Switch>
      <Route exact path="/schedule/creator">
        <ScheduleCreator />
      </Route>
      <Route exact path="/schedule/student">
        <ScheduleStudent />
      </Route>
      <Route exact path="/schedule/educator">
        <ScheduleEducator />
      </Route>
    </Switch>
  );
};

export default RoutingContainer;
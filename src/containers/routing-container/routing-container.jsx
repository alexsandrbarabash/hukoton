import React from "react";

import {Switch, Route} from "react-router-dom";
import SelectionMenu from '../../pages/selectionMenu';
  
import ScheduleCreator from "../../pages/schedule-creator";
import ScheduleStudent from "../../pages/schedule-student";
import ScheduleEducator from "../../pages/schedule-educator";

const RoutingContainer = () => {
    return (
        <Switch>
            <Route exact path='/create' component={SelectionMenu}/>
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
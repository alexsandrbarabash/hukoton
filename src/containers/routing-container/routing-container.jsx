import React from "react";
import {Switch, Route} from "react-router-dom";
import SelectionMenu from '../../pages/selectionMenu';

const RoutingContainer = () => {
    return (
        <Switch>
            <Route exact path='/create' component={SelectionMenu}/>
        </Switch>
    );
};

export default RoutingContainer;
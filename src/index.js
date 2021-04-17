import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';

import GroupServiceContext from './api/context/groupServiceContext';
import UserServiceContext from './api/context/userServiceContext';
import ScheduleServiceContext from './api/context/scheduleServiceContext';

import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <GroupServiceContext>
                <UserServiceContext>
                  <ScheduleServiceContext>
                    <App/>
                  </ScheduleServiceContext>
                </UserServiceContext>
            </GroupServiceContext>
        </Router>
    </Provider>,
    document.getElementById('root'),
);

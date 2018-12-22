import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ListPage from './containers/ListPage';
import ClockPage from './containers/ClockPage';

export default () => (
  <App>
    <Switch>
      <Route path={routes.CLOCK} component={ClockPage}/>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.LIST} component={ListPage} />
      <Route path={routes.HOME} component={HomePage} />
      
    </Switch>
  </App>
);

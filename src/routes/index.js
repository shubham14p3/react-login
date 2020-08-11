import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../components/login';
import Dashboard from '../components/dashboard';

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

export default Routes;

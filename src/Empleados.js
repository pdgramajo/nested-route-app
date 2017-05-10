import React, { Component } from 'react';
import EmpleadoDetail from './EmpleadoDetail';
import EmpleadosList from './EmpleadosList';
import { Route, Switch } from 'react-router-dom';

export default class Empleados extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/empleados' component={EmpleadosList} />
        <Route path='/empleados/:id' component={EmpleadoDetail} />
      </Switch>
    );
  }
}
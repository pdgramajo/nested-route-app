import React, { Component } from 'react';
import Lista from './Lista';
import Detalles from './Detalles';
import { Route, Switch } from 'react-router-dom';

export default class Usuarios extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/usuarios' component={Lista} />
        <Route path='/usuarios/:id' component={Detalles} />
      </Switch>
    );
  }
}
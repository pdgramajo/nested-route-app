import React, { Component } from 'react';
import PersonDetail from './PersonDetail';
import PeopleList from './PeopleList';
import { Route, Switch } from 'react-router-dom';

export default class People extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/people' component={PeopleList} />
        <Route path='/people/:id' component={PersonDetail} />
      </Switch>
    );
  }
}
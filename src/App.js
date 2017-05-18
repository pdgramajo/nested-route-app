import React, { Component } from 'react';
import Home from './Home';
import About from './About';
import NavBar from './NavBar';
import Empleados from './Empleados';
import Usuarios from './usuarios/Usuarios';
import People from './people/People';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {    
    return (
      <Router>
        <div className="container">  
          <NavBar />            
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/empleados' component={Empleados}/>
            <Route path='/people' component={People}/>
            <Route path='/usuarios' component={Usuarios} />
            <Route render={function () { return <p>not found</p> }} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

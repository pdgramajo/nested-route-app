import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <NavLink exact to='/' className="navbar-brand" > Nested Route App </NavLink>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li >
                                <NavLink exact to='/'  >
                                    Home
                                 </NavLink>
                            </li>
                            <li >
                                <NavLink to='/about' >
                                    About
                                 </NavLink>
                            </li>
                            <li >
                                <NavLink to='/empleados'>
                                    empleados
                                </NavLink>
                            </li>
                            <li >
                                <NavLink to='/usuarios'>
                                    Usuarios
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>






            /*<div classNameName="header clearfix">
                <nav>
                    <ul classNameName="nav nav-pills pull-right">
                        <li >
                            <NavLink exact activeclassNameName='active' to='/'  >
                                Home
                            </NavLink>
                        </li>
                        <li >
                            <NavLink activeclassNameName='active' to='/about' >
                                About
                            </NavLink>
                        </li>
                        <li >
                            <NavLink activeclassNameName='active' to='/empleados' >
                                empleados
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <h3 classNameName="text-muted">Nested Route App</h3>
            </div>*/
        );
    }
}
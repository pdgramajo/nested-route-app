import React, { Component } from 'react';
import goApi from './Api';
import { Link } from 'react-router-dom';

export default class EmpleadoDetail extends Component {
    constructor(props) {
        super(props);
        this.state = { empleado: null }
    }

    componentWillMount() {
        const url = 'People/' + this.props.match.params.id;
        new goApi().get(url).then((data) => {
            this.setState({ empleado: data.person })
        })
    }
    render() {
       if (this.state.empleado) {
            return (
            <div>                                    
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">Detalles del empleado</h3>
                    </div>
                    <div className="panel-body">
                        <h1> FullName: {this.state.empleado.FirstName} {this.state.empleado.LastName} </h1>
                        <h2> Username: {this.state.empleado.UserName} </h2>
                        <h2> Email: {this.state.empleado.Email} </h2>
                        <h2> Id: {this.state.empleado.Id} </h2>                     
                    </div>
                </div>
                <hr />
                 <Link to="/empleados" className="btn btn-primary" >  {/* {`${match.url}/:topicId`}   {"/EmpleadoDetails/" + this.props.Id} */}
                     Volver
                 </Link>                
            </div>
            );
        }
        else {
            return (<p> cargando</p>)
        }
    }
}
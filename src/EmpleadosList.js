import React, { Component } from 'react';
import goApi from './Api';
import EmpleadoRow from './EmpleadoRow';

export default class EmpleadosList extends Component {
    constructor(props) {
        super(props)
        this.state = { empleados: [] }
    }
    componentWillMount() {
        new goApi().get('People').then((data) => {
            this.setState({ empleados: data.peoplebd })
        })
    }
    render() {
        if (this.state.empleados.length > 0) {
            return (
                <div>
                    <ul className="list-group">
                        {
                            this.state.empleados.map(empleado => {
                                return (
                                    <EmpleadoRow key={empleado.Id}
                                        FirstName={empleado.FirstName}
                                        LastName={empleado.LastName}
                                        Id={empleado.Id}
                                        UserName={empleado.UserName}
                                        Email={empleado.Email}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
            );
        }
        else {
            return (<h3 className="text-center">Cargando ...</h3>);
        }
    }
}
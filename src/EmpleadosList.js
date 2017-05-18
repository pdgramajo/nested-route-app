import React, { Component } from 'react';
import goApi from './Api';
//import EmpleadoRow from './EmpleadoRow';
import { Link } from 'react-router-dom';
import ReactTable from 'react-table';
import { DatePicker } from 'antd';
import 'antd/dist/antd.css';

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
     columns = () =>{ return [{
                Header: 'Empleados List',
                columns: [{
                    Header: 'Id',
                    accessor: 'Id',
                    filterable:false,
                },                     
                {
                    Header: 'First Name',
                    accessor: 'FirstName',
                    filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
                }, {
                    Header: 'Last Name',
                    id: 'LastName',
                    accessor: d =>  d.LastName,
                    filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
                },
                {
                    Header: 'Email',
                    accessor: 'Email',
                    filterMethod: (filter, row) => (row[filter.id].includes(filter.value))
                }
                ]
            },
            {
                    Header: 'Accions',
                    accessor: 'Id',
                    filterable:false,
                    Cell: row => (     
                            <div>                         
                                <Link to={`/empleados/${row.value}`} className="btn btn-default"  >                          
                                    <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>                           
                                </Link>
                                &nbsp;
                                <button type="button" className="btn btn-default" aria-label="Left Align">
                                    <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                                </button>
                            </div>
                        )
                },
            ];
     }
    render() {
            return (
                <div>
                    <DatePicker />
                	<ReactTable
                        data={this.state.empleados}
                        columns={this.columns()}
                        defaultPageSize={10}
                        className='-striped -highlight'
                        filterable='true'
                        resizable='true'                  
                        getTdProps={(state, rowInfo, column, instance) => {
                                    return {
                                        onClick: e => console.log('Cell - onMouseEnter', {
                                        state,
                                        rowInfo,
                                        column,
                                        instance,
                                        event: e
                                        })
                                    }
                                    }}                        
                    />
                </div>
            );
    }
}
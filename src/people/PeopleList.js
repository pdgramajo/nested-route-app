import React, { Component } from 'react';
import goApi from '../Api';
//import EmpleadoRow from './EmpleadoRow';
import { Link } from 'react-router-dom';
import { DatePicker , Table } from 'antd';


export default class PeopleList extends Component {
    constructor(props) {
        super(props)
        this.state = { empleados: [] }
    }
    componentWillMount() {
        new goApi().get('People').then((data) => {
            this.setState({ empleados: data.peoplebd })
        })
    }

  dataSource = ()=>{return [{
                    key: '1',
                    name: 'Mike',
                    age: 32,
                    address: '10 Downing Street'
                    }, {
                    key: '2',
                    name: 'John',
                    age: 42,
                    address: '10 Downing Street'
                }];
            }

 columns = ()=> { return [{
                    title: 'FirstName',
                    dataIndex: 'FirstName',
                    key: 'FirstName',
                    filters: [{
                        text: 'doug',
                        value: 'doug',
                    }, {
                        text: 'kim',
                        value: 'kim',
                    }, {
                        text: 'Submenu',
                        value: 'Submenu',
                        children: [{
                        text: 'Green',
                        value: 'Green',
                        }, {
                        text: 'Black',
                        value: 'Black',
                        }],
                    }],  
                    // specify the condition of filtering result
                    // here is that finding the name started with `value`
                    onFilter: (value, record) => record.FirstName.indexOf(value) === 0,
                    sorter: (a, b) => a.FirstName.length - b.FirstName.length,                                      
                    }, {
                    title: 'LastName',
                    dataIndex: 'LastName',
                    key: 'LastName',
                    }, {
                    title: 'Email',
                    dataIndex: 'Email',
                    key: 'Email',
                },
                {
                    title:'Actions',
                    dataIndex:'Id',
                    key:'Id',
                    render: (text , record) => 
                                    <Link to={`/people/${record.Id}`} className="btn btn-default"  >                          
                                        <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>                           
                                    </Link>
                                
                }];}

    render() {
            return (
                <div>
                    <DatePicker />   <br />
                    <Table dataSource={this.state.empleados} columns={this.columns()} />             	
                </div>
            );
    }
}
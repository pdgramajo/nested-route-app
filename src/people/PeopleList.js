import React, { Component } from 'react';

//import EmpleadoRow from './EmpleadoRow';
import { Link } from 'react-router-dom';
import { DatePicker, Table } from 'antd';
import PropTypes from 'prop-types';
import * as peopleActions from './peopleActions'
import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

class PeopleList extends Component {

    componentWillMount() {

        this.props.actions.loadPeople();
    }


    columns = () => {
        return [{
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
            title: 'Actions',
            dataIndex: 'Id',
            key: 'Id',
            render: (text, record) =>
                <Link to={`/people/${record.Id}`} className="btn btn-default"  >
                    <span className="glyphicon glyphicon-eye-open" aria-hidden="true"></span>
                </Link>

        }];
    }

    render() {
        return (
            <div>
                <DatePicker />   <br />
                <Table dataSource={this.props.people} columns={this.columns()} />
            </div>
        );
    }
}

PeopleList.propTypes = {
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => { return { people: state.peopleReducer.people } }

const mapDispatchToProps = dispatch => { return { actions: bindActionCreators(peopleActions, dispatch) } }




export default connect(mapStateToProps, mapDispatchToProps)(PeopleList);
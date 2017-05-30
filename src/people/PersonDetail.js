import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as peopleActions from './peopleActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddUserForm from '../forms/addUserForm';
import { notification } from 'antd';

class PersonDetail extends Component {

    constructor(props) {
        super(props);
        this.state = { edit: false }
    }
    edit = () => { this.setState({ edit: true }) }
    cancel = () => { this.setState({ edit: false }) }
    componentWillMount() {
        const id = this.props.match.params.id;
        this.props.actions.getUserById(id);
    }
    submit = (values) => {
        const id = this.props.match.params.id;
        this.props.actions.editUser(id, values).then(() => {
            this.setState({ edit: false });
            notification['success']({
                message: 'Notification Title',
                description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            });
        });

    }

    render() {
        if (this.props.person) {
            if (this.state.edit) {
                return (
                    <div>
                        <button onClick={this.cancel.bind(this)}>cancel</button>
                        <AddUserForm onSubmit={this.submit} initialValues={this.props.person} />
                    </div>
                );
            } else {
                return (
                    <div>
                        <div className="panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Detalles del empleado</h3>
                            </div>
                            <div className="panel-body">
                                <h1> FullName: {this.props.person.FirstName} {this.props.person.LastName} </h1>
                                <h2> Username: {this.props.person.UserName} </h2>
                                <h2> Email: {this.props.person.Email} </h2>
                                <h2> Id: {this.props.person.Id} </h2>
                            </div>
                        </div>
                        <hr />
                        <Link to="/people" className="btn btn-primary" > 
                            Volver
                        </Link>
                        <button onClick={this.edit.bind(this)}>edit</button>
                    </div>
                );
            }
        }
        else {
            return (<p> cargando</p>)
        }
    }
}


PersonDetail.propTypes = {
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => { return { person: state.peopleReducer.person } }

const mapDispatchToProps = dispatch => { return { actions: bindActionCreators(peopleActions, dispatch) } }




export default connect(mapStateToProps, mapDispatchToProps)(PersonDetail);
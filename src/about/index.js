import React, { Component } from 'react';
import AddUserForm from '../forms/addUserForm';
import * as aboutActions from './aboutActions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Alert } from 'antd';

class About extends Component {
    
    submit = (values) => {
        this.props.actions.addUser(values);
    }

    baseHTML = () => {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Jumbotron heading</h1>
                    <AddUserForm onSubmit={this.submit} />

                </div>

                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                        <h4>Subheading</h4>
                        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                        <h4>Subheading</h4>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                        <h4>Subheading</h4>
                        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                        <h4>Subheading</h4>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                </div>
            </div>
        );
    }

    successHTML = () => {
        return (
            <div>
                <div className="jumbotron">
                    <h1>Jumbotron heading</h1>
                    <Alert
                        message="success tips"
                        description="Detailed description and advices about successful copywriting."
                        type="success"
                        showIcon
                        closable
                    />
                    <AddUserForm onSubmit={this.submit} />

                </div>

                <div className="row marketing">
                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                        <h4>Subheading</h4>
                        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                        <h4>Subheading</h4>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>

                    <div className="col-lg-6">
                        <h4>Subheading</h4>
                        <p>Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.</p>

                        <h4>Subheading</h4>
                        <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.</p>

                        <h4>Subheading</h4>
                        <p>Maecenas sed diam eget risus varius blandit sit amet non magna.</p>
                    </div>
                </div>
            </div>
        );
    }


    render() {
         return this.props.create_user.status === 200 ? this.successHTML() : this.baseHTML()
    }
}


About.propTypes = {
    actions: PropTypes.object.isRequired
}

const mapStateToProps = (state, ownProps) => { return state.aboutReducer }

const mapDispatchToProps = dispatch => { return { actions: bindActionCreators(aboutActions, dispatch) } }

export default connect(mapStateToProps, mapDispatchToProps)(About);

import React from 'react';
import { Field, reduxForm } from 'redux-form';

const AddUserForm = (props) => {
    const { handleSubmit, pristine, reset, submitting } = props
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>First Name</label>
                <div>
                    <Field name="FirstName" component="input" type="text" placeholder="First Name" />
                </div>
            </div>
            <div>
                <label>Last Name</label>
                <div>
                    <Field name="LastName" component="input" type="text" placeholder="Last Name" />
                </div>
            </div>
            <div>
                <label>Email</label>
                <div>
                    <Field name="Email" component="input" type="email" placeholder="Email" />
                </div>
            </div>
            <div>
                <label>UserName</label>
                <div>
                    <Field name="UserName" component="input" type="text" placeholder="UserName" />
                </div>
            </div>
            <div>
                <button type="submit" disabled={pristine || submitting}>Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>Clear Values</button>
            </div>
        </form>
    )
}


export default reduxForm({form: 'simpleExample'})(AddUserForm);
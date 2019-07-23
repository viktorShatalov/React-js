import React from 'react';
import LoginForm from '../form/loginPorm/LoginForm';
import { reduxForm } from 'redux-form'

const Login = (props) => {

    const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return <div>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}

export default Login;
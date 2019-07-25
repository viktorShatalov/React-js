import React from 'react';
import LoginForm from '../form/loginPorm/LoginForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {login} from '../../Redux/auth-reduser'
import { Redirect } from 'react-router-dom';

const Login = (props) => {

    const ReduxLoginForm = reduxForm({ form: 'login' })(LoginForm)

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password,formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to = {'/profile/'} />
    }

    return <div>
        <ReduxLoginForm onSubmit={onSubmit} />
    </div>
}

const mapStateToProps =(state) => ({
    isAuth:state.auth.isAuth
} )

export default connect(mapStateToProps,{login})(Login);
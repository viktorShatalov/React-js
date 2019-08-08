import React from 'react';
import style from '../../common/FormValidationControl/FormControl.module.css';
import { Field } from 'redux-form'
import { Input } from '../../common/FormValidationControl/FormControl';
import { required, maxLengthCreator } from '../../../utils/validators/validator';



const maxLength20 = maxLengthCreator(20);
const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength20]}
                    placeholder={"email"}
                    component={Input}
                    name={"email"} />
            </div>
            <div>
                <Field
                    validate={[required, maxLength20]}
                    placeholder={"password"}
                    component={Input}
                    type = "password"
                    name={"password"} />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    component={Input}
                    name={"rememberMe"} />remember me
            </div>
            {props.error && <div className = {style.form_summary_error}>
               {props.error}
            </div>}
            <button>login</button>
        </form>
    </div>

};

export default LoginForm;
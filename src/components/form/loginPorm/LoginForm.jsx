import React from 'react';
import { Field } from 'redux-form'
import { Input } from '../../common/FormValidationControl/FormControl';
import { required, maxLengthCreator } from '../../../utils/validators/validator';


const maxLength12 = maxLengthCreator(12);
const LoginForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    validate={[required, maxLength12]}
                    placeholder={"login"}
                    component={Input}
                    name={"login"} />
            </div>
            <div>
                <Field
                    validate={[required, maxLength12]}
                    placeholder={"password"}
                    component={Input}
                    name={"password"} />
            </div>
            <div>
                <Field
                    type={"checkbox"}
                    component={Input}
                    name={"remember me"} />remember me
            </div>
            <button>login</button>
        </form>
    </div>

};

export default LoginForm;
import React from 'react';
import { Field } from 'redux-form'

const LoginForm = (props) => {

    return <div>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder ={"login"} component ={"input"} name ={"login"}/>
            </div>
            <div>
                <Field placeholder ={"password"} component ={"input"} name ={"password"} />
            </div>
            <div>
                <Field type ={"checkbox"} component ={"input"} name ={"remember me"} />remember me
            </div>
            <button>login</button>
        </form>
    </div>

};

export default LoginForm;
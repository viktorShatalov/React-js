import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';


const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messegesElement = state.messeges.map(m => <Messege messege={m.messege} />);

  let AddNewMessage = (values) => {
    props.sendMessege(values.newMessegeBody);
  }

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' ' + s.active}>
          {dialogsElements}
        </div>
      </div>
      <div className={s.messeges}>
        <div>{messegesElement}</div>
      </div>
      <AddMessageFormRedux onSubmit={AddNewMessage} />
    </div>
  )
}

const AddMessageForm = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field component="textarea"
            name="newMessegeBody"
            placeholder="enter messege" />
        </div>
        <div>
          <button>Add messege</button>
        </div>
      </form>
    </div>
  )
}

const AddMessageFormRedux = reduxForm({ form: 'dialogAddMessageForm' })(AddMessageForm)

export default Dialogs;
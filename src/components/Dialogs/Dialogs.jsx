import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';



const Dialogs = (props) => {
  let state = props.dialogsPage;
  let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  let messegesElement = state.messeges.map(m => <Messege messege={m.messege} />)
  let newMessegeBody = state.newMessegeBody;

  let onSendMessegeClick = () => {
    props.sendMessege();
  }

  let onNewMessegeChange = (e) => {
    let body = e.target.value;
    props.UpdateNewMessegeBody(body);
    
  }
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' ' + s.active}>
          {dialogsElements}
        </div>
      </div>
      <div className={s.messeges}>
        <div>{messegesElement}</div>
        <div>
          <textarea placeholder="enter messege" value={newMessegeBody} onChange={onNewMessegeChange} />
        </div>
        <div>
          <button onClick={onSendMessegeClick}>Add messege</button>
        </div>
      </div>
    </div>
  )
}
export default Dialogs;
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Messege from './Messege/Messege';


class Dialogs extends React.Component {
  
  state = this.props.dialogsPage;
  dialogsElements = this.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} />);
  messegesElement = this.state.messeges.map(m => <Messege messege={m.messege} />)
  newMessegeBody = this.state.newMessegeBody;

  onSendMessegeClick = () => {
    this.props.sendMessege();
  }

  onNewMessegeChange = (e) => {
    this.body = e.target.value;
    this.props.UpdateNewMessegeBody(this.body);
  }

  render() {
    return <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <div className={s.dialog + ' ' + s.active}>
          {this.dialogsElements}
        </div>
      </div>
      <div className={s.messeges}>
        <div>{this.messegesElement}</div>
        <div>
          <textarea placeholder="enter messege" value={this.newMessegeBody} onChange={this.onNewMessegeChange} />
        </div>
        <div>
          <button onClick={this.onSendMessegeClick}>Add messege</button>
        </div>
      </div>
    </div>
  }
} 
export default Dialogs;
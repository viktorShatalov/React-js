import React from 'react';
import s from './../Dialogs.module.css';

class Messege extends React.Component {
  render() {
    return <div className={s.messege}>
     {this.props.messege}
    </div>
  }
}

export default Messege;
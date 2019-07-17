import React from 'react';
import { sendMessege, UpdateNewMessegeCreator } from "../../Redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    sendMessege: () => {
      dispatch(sendMessege());
      
    },
    UpdateNewMessegeBody: (body) => {
      dispatch(UpdateNewMessegeCreator(body));
    }
  }
}

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
export default DialogsConteiner;
import React from 'react';
import { sendMessege, UpdateNewMessegeCreator } from "../../Redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';



const mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
    isAuth: state.auth.isAuth
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

let AuthRenderComponent = withAuthRedirect(Dialogs);

const DialogsConteiner = connect(mapStateToProps, mapDispatchToProps)(AuthRenderComponent);
export default DialogsConteiner;
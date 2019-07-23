import React from 'react';
import { sendMessege, UpdateNewMessegeCreator } from "../../Redux/dialogs-reducer";
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
  )(Dialogs);
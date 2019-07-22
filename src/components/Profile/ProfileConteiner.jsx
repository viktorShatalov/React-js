import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUsersProfile } from '../../Redux/profile-reducer';
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) { userId = 1299 }
    this.props.getUsersProfile(userId);
  }

  render() {
   
    return <Profile {...this.props} profile={this.props.profile} />
  }
}

let AuthRenderComponent = withAuthRedirect(ProfileContainer);


let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth
});

let WithUrlDataConteinerComponent = withRouter(AuthRenderComponent);

export default connect(mapStateToProps, { getUsersProfile })(WithUrlDataConteinerComponent);
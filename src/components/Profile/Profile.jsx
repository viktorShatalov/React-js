import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsConteiner from './MyPosts/MyPostsConteiner';

const Profile = (props) => {
  return <div>
    <ProfileInfo
      profile={props.profile}
      status={props.status}
      updateStatus={props.updateStatus}
    />
    <MyPostsConteiner />
  </div>
}
export default Profile;
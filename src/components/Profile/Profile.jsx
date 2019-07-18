import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsConteiner from './MyPosts/MyPostsConteiner';


class Profile extends React.Component {
  render() {
    return <div className={s.content}>
      <ProfileInfo />
      <MyPostsConteiner />

    </div>
  }
}
export default Profile;
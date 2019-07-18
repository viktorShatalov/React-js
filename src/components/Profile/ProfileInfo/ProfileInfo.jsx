import React from 'react';
import s from './ProfileInfo.module.css';


class ProfileInfo extends React.Component {
  render() {
    return <div className={s.content}>
      <div>
        <div className={s.descriptionBlock}>
          avatar
        </div>
      </div>
    </div>
  }
}


export default ProfileInfo;
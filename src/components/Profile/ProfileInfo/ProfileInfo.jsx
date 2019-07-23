import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';
import ProfileStatus from '../status/ProfileStatus';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div className={s.content}>
    <div>
      <div>
        <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>

    </div>
  </div>
}


export default ProfileInfo;
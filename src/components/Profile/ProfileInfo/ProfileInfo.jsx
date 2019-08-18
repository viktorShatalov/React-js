import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHooks from '../status/ProfileStatusWithHooks';


const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }
  return <div className={s.content}>
    <div>
      <div>
        <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
      </div>

    </div>
  </div>
}


export default ProfileInfo;
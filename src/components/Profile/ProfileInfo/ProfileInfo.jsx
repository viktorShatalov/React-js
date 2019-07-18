import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/Preloader';


const ProfileInfo =(props) => {
 if(!props.profile) {
   return <Preloader />
 }
    return <div className={s.content}>
      <div>
        <div className={s.descriptionBlock}>
         <img src={props.profile.photos.large} />
        </div>
      </div>
    </div>
}


export default ProfileInfo;
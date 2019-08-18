import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/ANTI-JOBS_black.png';

const Header = (props) => {

  return <header className={s.header}>
    <div className={s.header__logo}>
      <img src={logo} />
    </div>
    <div className={s.loginBlock}>
      <p>{props.isAuth
        ? <div>{props.login} - <button onClick={props.logout}>logout</button></div>
        : <NavLink to={'/login/'}>Login</NavLink>}</p>
    </div>
  </header>;
}

export default Header;
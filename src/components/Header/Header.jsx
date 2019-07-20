import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom';

const Header =(props) => {
  
    return <header className={s.header}>
      <div className={s.header__logo}>
        <img src='https://www.freelogodesign.org/Content/img/logo-ex-7.png' />
      </div>
      <div className={s.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={'/login/'}>Login</NavLink> }
        
      </div>
    </header>;
  }
const  Header = () =>{
    return  <header className = {s.header}>
    <div className={s.header__logo}>
    <img src = 'https://www.freelogodesign.org/Content/img/logo-ex-7.png'/>
    </div>
    <div>
      <div className={s.header__search}>
        
      </div>
    </div>
  </header>;
}
export default Header;
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import {  Route } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersConteiner';
import ProfileContainer from './components/Profile/ProfileConteiner';


const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsConteiner  />} />
          <Route path='/profile'
            render={() => <ProfileContainer />} />
          <Route path='/users'
            render={() => <UsersContainer />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />

        </div>
      </div>
  );
}

export default App;
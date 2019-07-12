import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Nav';
import Profile from './components/Profile/Profile';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import {  Route } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


const App = (props) => {

  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={() => <DialogsConteiner  />} />
          <Route path='/profile'
            render={() => <Profile />} />
          <Route path='/settings' render={() => <Settings />} />
          <Route path='/music' render={() => <Music />} />
          <Route path='/news' render={() => <News />} />

        </div>
      </div>
  );
}

export default App;
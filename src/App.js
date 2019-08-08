import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Nav';
import DialogsConteiner from './components/Dialogs/DialogsConteiner';
import { Route } from "react-router-dom";
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersConteiner';
import ProfileContainer from './components/Profile/ProfileConteiner';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/login/Login';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { initializeApp } from './Redux/app-reduser'
import Preloader from './components/common/preloader/Preloader';


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return <div className='app-wrapper' >
            < HeaderContainer />
            <Navbar />
            <div className='app-wrapper-content'     >

                <Route path='/dialogs'
                    render={
                        () => < DialogsConteiner />} />

                <Route path='/profile/:userId?'
                    render={
                        () => < ProfileContainer />} />

                <Route path='/users'
                    render={() => < UsersContainer />} />

                <Route path='/login'
                    render={() => < Login />} />

                <Route path='/settings'
                    render={() => < Settings />} />

                <Route path='/music'
                    render={() => < Music />} />

                < Route path='/news'
                    render={() => < News />} />

            </div>
        </div >
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, { initializeApp }))(App);
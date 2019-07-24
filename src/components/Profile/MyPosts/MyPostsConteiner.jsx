import React from 'react';
import { AddPostAC } from "../../../Redux/profile-reducer";
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    AddPostAC: (newPostElement) => {
      dispatch(AddPostAC(newPostElement));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);


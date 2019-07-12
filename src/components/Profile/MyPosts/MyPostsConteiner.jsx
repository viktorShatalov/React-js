import React from 'react';
import { AddPostActionCreator, UpdateNewPostText } from "../../../Redux/profile-reducer";
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
    UpdateNewPostText: (text) => {
      let action = UpdateNewPostText(text);
      dispatch(action);
    },
    AddPostActionCreator: () => {
      dispatch(AddPostActionCreator());
    }
  }
}

const MyPostsConteiner = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsConteiner;
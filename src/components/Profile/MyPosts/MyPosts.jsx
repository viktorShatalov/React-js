import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';
import { Field, reduxForm } from 'redux-form';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Posts key={p.id} message={p.messege} likesCount={p.likesCount} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.AddPostActionCreator();
  }
  
  let addNewPost = (values) => {
    props.AddPostAC(values.newPostElement);
  }

  return (
    <div className={s.item}>
      <h3>My Post</h3>
      <div>
        <AddPostFormRedux onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}

const AddPostForm = (props) => {
  return <div>
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component='textarea' name='newPostElement' placeholder='Создайте пост' />
      </div>
      <div>
        <button>Add Post</button>
      </div>
    </form>
  </div>
}

const AddPostFormRedux = reduxForm({ form: 'progileAddPostForm' })(AddPostForm)

export default MyPosts;
import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

const MyPosts = (props) => {
  let postsElements =
    props.posts.map(p => <Posts message={p.messege} likesCount={p.likesCount} />);
  let newPostElement = React.createRef();
  let addPost = () => {
    props.AddPostActionCreator();
  }
  let onPostChenge = () => {
    let text = newPostElement.current.value;
    props.UpdateNewPostText(text);
  }
  return (
    <div className={s.item}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea onChange={onPostChenge} ref={newPostElement} value={props.newPostText} />
        </div>
        <div>
          <button onClick={addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  )
}
export default MyPosts;
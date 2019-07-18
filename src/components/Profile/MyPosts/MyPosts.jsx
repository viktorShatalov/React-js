import React from 'react';
import s from './MyPosts.module.css';
import Posts from './Post/Posts';

class MyPosts extends React.Component {

  postsElements =
    this.props.posts.map(p => <Posts message={p.messege} likesCount={p.likesCount} />);
  newPostElement = React.createRef();

  addPost = () => {
    this.props.AddPostActionCreator();
  }

  onPostChenge = () => {
    this.text = this.newPostElement.current.value;
    this.props.UpdateNewPostText(this.text);
  }

  render() {
    return <div className={s.item}>
      <h3>My Post</h3>
      <div>
        <div>
          <textarea onChange={this.onPostChenge} ref={this.newPostElement} value={this.props.newPostText} />
        </div>
        <div>
          <button onClick={this.addPost}>Add Post</button>
        </div>
      </div>
      <div className={s.posts}>
        {this.postsElements}
      </div>
    </div>
  }
}
export default MyPosts;
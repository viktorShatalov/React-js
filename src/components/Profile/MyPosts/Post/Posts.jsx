import React from 'react';
import s from './Posts.module.css';


class Posts extends React.Component {
  render() {
    return <div className={s.item}>
      <img src='http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg' />
      {this.props.message}
      <div>
        <span>Like</span>
        {this.props.likesCount}
      </div>
    </div>
  }
}

export default Posts;
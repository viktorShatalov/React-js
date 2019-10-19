import React from 'react';
import s from './News.module.css';

const NewsItem = (props) => {
  return <div className={s.card}>
    <div className={s.card__head}><h1>{props.headId}</h1></div>
    <div className={s.card__text}>{props.text}</div>
  </div>
}
let newsArticle = [
  { id: "заголовок1", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: "заголовок2", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: "заголовок3", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: "заголовок4", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: "заголовок5", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: "заголовок6", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: "заголовок7", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' },
  { id: "заголовок8", text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.' }
]
let newsElements = newsArticle.map(n => <NewsItem headId={n.id} text={n.text} /> )


class News extends React.Component {
  render() {
    return <div className={s.content}>
      <div className={s.content__cards}>
        <div>
          {newsElements}
        </div>
        <div>
          {newsElements}
        </div>
      </div>
    </div>
  }
}
export default News;
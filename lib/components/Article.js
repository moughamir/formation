import React from 'react';

const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  title: { fontWeight: 'bold' },
  date: {
    fontSize: '0.85em',
    color: '#888',
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: { paddingLeft: 20, }
};

const dateDisplay = (dateString) => new Date(dateString).toDateString();

const Article = (props) => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId)

  return (
    <article style={styles.article}>
    <h1 style={styles.title}>{article.title}</h1>
    <span style={styles.date}>
    {dateDisplay(article.date)}
    </span>
    <div style={styles.author}><a href={author.website}>{author.firstName} {author.lastName}</a></div>
    <p style={styles.abody}>{article.body}</p>
    </article>
  );
};

export default Article;

function Article(props) {
  return (
    <div>
      <h2>{props.article.title}</h2>
      <small>{props.article.date}</small>
      <p>{props.article.preview}</p>
    </div>
  );
}

export default Article;
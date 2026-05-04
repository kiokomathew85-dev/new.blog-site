import Article from "./Article";

function ArticleList(props) {
  return (
    <div>
      {props.articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
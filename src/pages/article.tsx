import type { GetServerSideProps, NextPage } from 'next';
import { apiClient } from 'src/shared/lib/apiClient';
import { Article } from 'src/shared/types';
import Link from 'next/link';

type ArticleProps = {
  articles: Article[];
};

export const getServerSideProps: GetServerSideProps<
  ArticleProps
> = async () => {
  const response = await apiClient.get<Article[]>('/api/articles');
  return { props: { articles: response.data } };
};

const Article: NextPage<ArticleProps> = (props) => {
  const { articles } = props;

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            {article.id}: {article.title}
          </li>
        ))}
      </ul>
      <Link href="/">
        <a>ホームへ</a>
      </Link>
    </div>
  );
};

export default Article;
